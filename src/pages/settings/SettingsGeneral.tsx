import MyButton from "../../components/atoms/MyButton/MyButton"
import MySection from "../../components/molecules/MySection/MySection"
import MyForm from "../../components/organisms/MyForm/MyForm"
import MyModal from "../../components/organisms/MyModal/MyModal"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { useToggle } from "../../shared/hooks/useToggle"
import { dangerModalStyle, dangerSectionStyle, settingsPageStyle } from "./styles/styles"

// Good improvement if a change is done in the settings part of the DB structure
// Separate the settings in groups with a kind of options structure linked to each of them
// The options structure will be used to generate the form with the correct fields (polymorphic relationships / inheritance)
// Load fields from the DB, specifying their type, etc.
const test = [
  {
    title: 'General',
    content: {
      form: MyForm,
      config: [],
    },
  },
  {
    title: 'Profile',
    content: {
      form: MyForm,
      config: [],
    },
  },
]

const SettingsGeneral = () => {
  const [isOpenModal, toggleIsOpenModal] = useToggle(false)

  const handleDeleteAccount = () => {
    console.log('delete account');
  }

  return (
    <AppLayout>
      <div className={settingsPageStyle}>
        <h1 className="title">General settings</h1>
        <div className="content">
          {test.map((section, index) => (
            <MySection
              key={index}
              title={section.title}
            >
              {/* <section.content.form
                config={section.content.config}
                state={{
                  get: {
                    errors: [],
                    values: {},
                  },
                  set: () => {},
                }}
              /> */}
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