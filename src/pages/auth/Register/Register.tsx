// import MyIcon from "../../../components/atoms/MyIcon/MyIcon"
import MySection from "../../../components/molecules/MySection/MySection"
import MyInput from "../../../components/molecules/form/MyInput/MyInput"
import { MyTextInputConfig } from "../../../components/molecules/form/MyInput/shared/types/types"
// import { ICON_TRANSLATE } from "../../../shared/constants/icons/icons"
import { AuthWrapper } from "./styles/styles"

const Register = () => {

  const config: MyTextInputConfig = {
    type: "hidden",
    label: "Email",
    helper: "Use your email to register (john@example.com)",
    placeholder: "Email",
    stateName: "email",
    custom: {
      isDisabled: false,
      classList: '',
      pattern: /\S+@\S+\.\S+/,
      // suffix: <MyIcon icon={ICON_TRANSLATE} size={30} />,
    }
  }

  return (
    <AuthWrapper>
      <MySection
        title="Register"
      >
        <MyInput 
          config={config} 
          state={{
            get: 'test',
            set: (value: string | number, error) => {
              console.log('REGISTER', value, error);
            }
          }}
        />
      </MySection>
    </AuthWrapper>
  )
}

export default Register