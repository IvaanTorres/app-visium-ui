// import MyIcon from "../../../components/atoms/MyIcon/MyIcon"
import MySection from "../../../components/molecules/MySection/MySection"
// import MyInput from "../../../components/molecules/form/MyInput/MyInput"
// import { MyTextInputConfig } from "../../../components/molecules/form/MyInput/shared/types/types"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectConfig } from "../../../components/molecules/form/MySelect/shared/types/types"
// import { ICON_TRANSLATE } from "../../../shared/constants/icons/icons"
import { AuthWrapper } from "./styles/styles"

const Register = () => {

  // const config: MyTextInputConfig = {
  //   type: "hidden",
  //   label: "Email",
  //   helper: "Use your email to register (john@example.com)",
  //   placeholder: "Email",
  //   stateName: "email",
  //   custom: {
  //     isDisabled: false,
  //     classList: '',
  //     pattern: /\S+@\S+\.\S+/,
  //     // suffix: <MyIcon icon={ICON_TRANSLATE} size={30} />,
  //   }
  // }
  const config: MySelectConfig = {
    type: "select",
    label: "Locale",
    helper: "Helper select text",
    stateName: "locale",
    options: [
      {
        label: "English",
        id: "en",
      },
      {
        label: "Spanish",
        id: "es",
      },
      {
        label: "French",
        id: "fr",
      },
    ],
    custom: {
      classList: '',
      isDisabled: false,
      isRequired: true,
      hasDropdownIcon: true,
    }
  }

  return (
    <AuthWrapper>
      <MySection
        title="Register"
      >
        <MySelect 
          config={config} 
          state={{
            get: null,
            set: (option, error) => {
              console.log('SELECT', option, error);
            }
          }}
        />
      </MySection>
    </AuthWrapper>
  )
}

export default Register