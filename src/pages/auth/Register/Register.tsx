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
    helper: "email",
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
            getter: 'test',
            setter: (value: string | number) => {
              console.log('REGISTER', value);
            }
          }}
        />
      </MySection>
    </AuthWrapper>
  )
}

export default Register