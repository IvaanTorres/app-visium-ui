import { useEffect, useState } from "react"
import MyButton from "../../components/atoms/MyButton/MyButton"
import MySection from "../../components/molecules/MySection/MySection"
import MyModal from "../../components/organisms/MyModal/MyModal"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { useToggle } from "../../shared/hooks/useToggle"
import { MyFieldError } from "../../shared/types/texts/forms/forms"
import { sections } from "./config/settingsForms.config"
import { dangerModalStyle, dangerSectionStyle, settingsPageStyle } from "./styles/styles"
import { FormsState } from "./shared/types/types"
import { MyFormState } from "../../components/organisms/MyForm/shared/types/types"

const SettingsGeneral = () => {
  const [isOpenModal, toggleIsOpenModal] = useToggle(false)
  const [formsState, setFormsState] = useState<FormsState | null>(null)

  useEffect(() => {
    setFormsState(setInitialFormsState())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteAccount = () => {
    console.log('delete account');
  }

  // TODO: Create handlers
  const formActions = {
    general: () => {
      console.log('general')
    },
    profile: () => {
      console.log('profile')
    },
  }

  const settingsSections = sections(formActions)

  const setInitialFormsState = () => {
    let values = {} as FormsState

    settingsSections.forEach((section) => {
      const sectionName = section.title.toLowerCase()
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
        <h1 className="title">General settings</h1>
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
                      [section.title.toLowerCase()]: formState,
                    } as FormsState))
                  },
                }}
              />
            </MySection>
          )
          )}

          <MySection
            title="Danger zone"
            className={dangerSectionStyle}
          >
            <MyButton 
              onClick={toggleIsOpenModal}
              importance="primary"
              type="danger"
              className={'button'}
            >Delete Account</MyButton>
          </MySection>
        </div>
        <MyModal
          isOpen={isOpenModal}
          title="Delete account"
          onClose={toggleIsOpenModal}
          className={dangerModalStyle}
        >
          <div className="description">
            <p className="title">Are you sure to delete the account ?</p>
            <p>This action is irreversible</p>
          </div>
          <MyButton
            importance="primary"
            type="danger"
            onClick={handleDeleteAccount}
            className="button"
          >
            Delete Account
          </MyButton>
        </MyModal>
      </div>
    </AppLayout>
  )
}

export default SettingsGeneral