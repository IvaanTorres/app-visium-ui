import { useEffect, useState } from "react"
import MyButton from "../../components/atoms/MyButton/MyButton"
import MySection from "../../components/molecules/MySection/MySection"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { MyFieldError } from "../../shared/types/texts/forms/forms"
import { sections } from "./config/settingsForms.config"
import { dangerSectionStyle, settingsPageStyle } from "./styles/styles"
import { FormsState, MappedSettingsDatas } from "./shared/types/types"
import { MyFormState } from "../../components/organisms/MyForm/shared/types/types"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { ROUTE_LOGIN, ROUTE_REGISTER } from "../../shared/constants/router/routes"
import { USER } from "../../shared/constants/localstorage"
import { getProfile, updateProfile } from "../../shared/services/user/settings"
import { getGeneralPreferences, updateGeneralPreferences } from "../../shared/services/preferences/general"
import { isTokenAboutToExpired } from "../../shared/helpers/isTokenAboutToExpired"
import { deleteAccount, refreshToken } from "../../shared/services/auth/auth"
import loginLocale from "../../shared/helpers/login"
import logoutLocale from "../../shared/helpers/logout"
import MyModal from "../../components/organisms/MyModal/MyModal"

const SettingsGeneral = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [modal, setModal] = useState({
    isOpen: false,
    type: 'info' as 'info' | 'danger' | 'success' | 'warning',
    content: {
      title: '',
      content: '',
    }, 
    action: {
      text: '',
      action: () => {},
    }
  })
  const [formsState, setFormsState] = useState<FormsState | null>(null)

  useEffect(() => {
    initFormsState()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDatas = async () => {
    const profilePromise = getProfile()
    const generalPromise = getGeneralPreferences()

    return await Promise.all([profilePromise, generalPromise])
  }

  const initFormsState = async () => {
    if(isTokenAboutToExpired()) {
      // Request new token and retry with recursive function
      const refreshTokenData = await refreshToken()

      if('data' in refreshTokenData) {
        loginLocale(refreshTokenData.data.refresh_token.token, refreshTokenData.data.refresh_token.expires_in)
        initFormsState()
      } else {
        console.error('Failed to refresh token');
        logoutLocale()
        navigate(ROUTE_LOGIN)
      }
    } else {
      const [profile, general] = await getDatas()

      if('data' in profile && 'data' in general){
        const mappedDatas = {
          general: {
            welcomingMessageSize: general.data.welcomingMessageSize,
          },
          profile: {
            username: profile.data.username,
          },
        }

        setFormsState(setInitialFormsState(mappedDatas))
      } else {
        console.error('Failed to get all datas');
        setModal({
          isOpen: true,
          type: 'danger',
          content: {
            title: t('settings.getDatasError'),
            content: t('settings.getDatasErrorContent'),
          },
          action: {
            text: t('general.actions.close'),
            action: () => {
              setModal(prev => ({
                ...prev,
                isOpen: false,
              }))
            },
          }
        })
      }
    }
    
  }

  const handleDeleteAccount = async () => {
    if(isTokenAboutToExpired()) {
      // Request new token and retry with recursive function
      const refreshTokenData = await refreshToken()

      if('data' in refreshTokenData) {
        loginLocale(refreshTokenData.data.refresh_token.token, refreshTokenData.data.refresh_token.expires_in)
        handleDeleteAccount()
      } else {
        console.error('Failed to refresh token');
        logoutLocale()
        navigate(ROUTE_LOGIN)
      }
    } else {
      await deleteAccount()
      navigate(ROUTE_REGISTER)
    }
  }

  const formActions = {
    general: async () => {
      const newWelcomingSize = formsState && formsState['general'].values.welcomingMessageSize as string

      if(!newWelcomingSize) return
      const newGeneralPreferences = await updateGeneralPreferences(+newWelcomingSize)

      if('data' in newGeneralPreferences){
        console.log('General preferences updated');
        setModal({
          isOpen: true,
          type: 'success',
          content: {
            title: t('settings.updateGeneralPreferencesSuccess'),
            content: t('settings.updateGeneralPreferencesSuccessContent'),
          },
          action: {
            text: t('general.actions.close'),
            action: () => {
              setModal(prev => ({
                ...prev,
                isOpen: false,
              }))
            },
          }
        })
      } else {
        console.error('Failed to update general preferences');
        setModal({
          isOpen: true,
          type: 'danger',
          content: {
            title: t('settings.updateGeneralPreferencesError'),
            content: t('settings.updateGeneralPreferencesErrorContent'),
          },
          action: {
            text: t('general.actions.close'),
            action: () => {
              setModal(prev => ({
                ...prev,
                isOpen: false,
              }))
            },
          }
        })
      }
    },
    profile: async () => {
      const newUsername = formsState && formsState['profile'].values.username as string

      if(!newUsername) return
      const updatedProfile = await updateProfile(newUsername)

      if('data' in updatedProfile){
        localStorage.setItem(USER, JSON.stringify({
          ...JSON.parse(localStorage.getItem(USER) as string),
          username: newUsername,
        }))

        console.log('Profile updated');
        setModal({
          isOpen: true,
          type: 'success',
          content: {
            title: t('settings.updateProfileSuccess'),
            content: t('settings.updateProfileSuccessContent'),
          },
          action: {
            text: t('general.actions.close'),
            action: () => {
              setModal(prev => ({
                ...prev,
                isOpen: false,
              }))
            },
          }
        })
      } else {
        console.error('Failed to update profile');
        setModal({
          isOpen: true,
          type: 'danger',
          content: {
            title: t('settings.updateProfileError'),
            content: t('settings.updateProfileErrorContent'),
          },
          action: {
            text: t('general.actions.close'),
            action: () => {
              setModal(prev => ({
                ...prev,
                isOpen: false,
              }))
            },
          }
        })
      }
    },
  }

  const settingsSections = sections(t, formActions)

  const setInitialFormsState = (datas: MappedSettingsDatas) => {
    let values = {} as FormsState

    settingsSections.forEach((section) => {
      const sectionName = section.stateName
      const sectionFormFields = section.content.config.fields
      
      const stateNames = sectionFormFields.map((field) => field.stateName)

      const builtObject = {
        [sectionName]: {
          values: {
            ...stateNames.reduce((acc, stateName) => ({
              ...acc,
              [stateName]: datas[sectionName][stateName],
            }), {}),
          },
          errors: [] as MyFieldError[],
        }
      }

      values = { 
        ...values,
        ...builtObject,
      }
    })

    return values
  }

  const handleToggleModal = () => {
    setModal(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }))
  }

  const handleConfirmDeleteAccount = async () => {
    setModal({
      isOpen: true,
      type: 'danger',
      content: {
        title: t('settings.deleteAccountQuestion'),
        content: t('settings.deleteAccountSuccess'),
      },
      action: {
        text: t('general.actions.deleteAccount'),
        action: handleDeleteAccount,
      }
    })
  }

  return (
    <AppLayout>
      <div className={settingsPageStyle}>
        <h1 className="title">{t('settings.title')}</h1>
        <div className="content">
          {formsState && settingsSections.map((section, index) => (
            <MySection
              key={index}
              title={section.title}
            >
              <section.content.form
                config={section.content.config}
                state={{
                  get: formsState[section.stateName] as MyFormState['get'],
                  set: (formState: MyFormState['get']) => {
                    setFormsState((prev) => ({
                      ...prev,
                      [section.stateName]: formState,
                    } as FormsState))
                  },
                }}
              />
            </MySection>
          )
          )}

          <MySection
            title={t('settings.dangerZone')}
            className={dangerSectionStyle}
          >
            <MyButton 
              onClick={handleConfirmDeleteAccount}
              importance="primary"
              type="danger"
              className={'button'}
            >{t('general.actions.deleteAccount')}</MyButton>
          </MySection>
        </div>
        <MyModal
          type={modal.type}
          isOpen={modal.isOpen}
          title="Delete account"
          onClose={handleToggleModal}
        >
          <div className="description">
            <p className="title">{modal.content.title}</p>
            <p>{modal.content.content}</p>
          </div>
          <MyButton
            importance="primary"
            type={modal.type}
            onClick={modal.action.action}
            className="button"
          >
            {modal.action.text}
          </MyButton>
        </MyModal>
      </div>
    </AppLayout>
  )
}

export default SettingsGeneral