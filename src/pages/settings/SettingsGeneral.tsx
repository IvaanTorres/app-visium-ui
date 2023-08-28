import { useEffect, useState } from "react"
import MyButton from "../../components/atoms/MyButton/MyButton"
import MySection from "../../components/molecules/MySection/MySection"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { useToggle } from "../../shared/hooks/useToggle"
import { MyFieldError } from "../../shared/types/texts/forms/forms"
import { sections } from "./config/settingsForms.config"
import { dangerSectionStyle, settingsPageStyle } from "./styles/styles"
import { FormsState } from "./shared/types/types"
import { MyFormState } from "../../components/organisms/MyForm/shared/types/types"
import { DangerModalCustom } from "../../shared/styles/modal"
import { useTranslation } from "react-i18next"
import Axios from "../../shared/services/Axios"
import { DELETE_ACCOUNT } from "../../shared/constants/resources"
import { useNavigate } from "react-router-dom"
import { ROUTE_REGISTER } from "../../shared/constants/router/routes"
import { USER } from "../../shared/constants/localstorage"
import { updateProfile } from "../../shared/services/user/settings"
import { updateGeneralPreferences } from "../../shared/services/preferences/general"

const SettingsGeneral = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isOpenModal, toggleIsOpenModal] = useToggle(false)
  const [formsState, setFormsState] = useState<FormsState | null>(null)

  useEffect(() => {
    setFormsState(setInitialFormsState())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteAccount = async () => {
    await Axios.post(DELETE_ACCOUNT)
    toggleIsOpenModal()
    navigate(ROUTE_REGISTER)
  }

  const formActions = {
    general: async () => {
      const newWelcomingSize = formsState && formsState['general'].values.welcomingMessageSize
      updateGeneralPreferences(+newWelcomingSize)
    },
    profile: async () => {
      const newUsername = formsState && formsState['profile'].values.username
      updateProfile(newUsername)

      localStorage.setItem(USER, JSON.stringify({
        ...JSON.parse(localStorage.getItem(USER) as string),
        username: newUsername,
      }))
    },
  }

  const settingsSections = sections(t, formActions)

  const setInitialFormsState = () => {
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
              [stateName]: null,
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