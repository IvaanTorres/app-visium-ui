import { useEffect, useState } from "react"
import MyButton from "../../components/atoms/MyButton/MyButton"
import MySection from "../../components/molecules/MySection/MySection"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { useToggle } from "../../shared/hooks/useToggle"
import { MyFieldError } from "../../shared/types/texts/forms/forms"
import { sections } from "./config/settingsForms.config"
import { dangerSectionStyle, settingsPageStyle } from "./styles/styles"
import { FormsState, MappedSettingsDatas } from "./shared/types/types"
import { MyFormState } from "../../components/organisms/MyForm/shared/types/types"
import { DangerModalCustom } from "../../shared/styles/modal"
import { useTranslation } from "react-i18next"
import Axios from "../../shared/services/Axios"
import { DELETE_ACCOUNT } from "../../shared/constants/resources"
import { useNavigate } from "react-router-dom"
import { ROUTE_REGISTER } from "../../shared/constants/router/routes"
import { USER } from "../../shared/constants/localstorage"
import { getProfile, updateProfile } from "../../shared/services/user/settings"
import { getGeneralPreferences, updateGeneralPreferences } from "../../shared/services/preferences/general"
import { isTokenAboutToExpired } from "../../shared/helpers/isTokenAboutToExpired"

const SettingsGeneral = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isOpenModal, toggleIsOpenModal] = useToggle(false)
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

      initFormsState()
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
      }
    }
    
  }

  const handleDeleteAccount = async () => {
    // TODO: Add service to delete account
    await Axios.post(DELETE_ACCOUNT)
    toggleIsOpenModal()
    navigate(ROUTE_REGISTER)
  }

  const formActions = {
    general: async () => {
      const newWelcomingSize = formsState && formsState['general'].values.welcomingMessageSize as string

      if(!newWelcomingSize) return
      const newGeneralPreferences = await updateGeneralPreferences(+newWelcomingSize)

      if('data' in newGeneralPreferences){
        console.log('General preferences updated');
      } else {
        console.error('Failed to update general preferences');
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
      } else {
        console.error('Failed to update profile');
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
              onClick={toggleIsOpenModal}
              importance="primary"
              type="danger"
              className={'button'}
            >{t('general.actions.deleteAccount')}</MyButton>
          </MySection>
        </div>
        <DangerModalCustom
          isOpen={isOpenModal}
          title="Delete account"
          onClose={toggleIsOpenModal}
        >
          <div className="description">
            <p className="title">{t('settings.deleteAccountQuestion')}</p>
            <p>{t('general.irreversible')}</p>
          </div>
          <MyButton
            importance="primary"
            type="danger"
            onClick={handleDeleteAccount}
            className="button"
          >
            {t('general.actions.deleteAccount')}
          </MyButton>
        </DangerModalCustom>
      </div>
    </AppLayout>
  )
}

export default SettingsGeneral