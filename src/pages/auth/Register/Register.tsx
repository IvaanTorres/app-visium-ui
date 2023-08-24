import MySection from "../../../components/molecules/MySection/MySection"
// import MyInput from "../../../components/molecules/form/MyInput/MyInput"
import { AuthWrapper } from "./styles/styles"

const Register = () => {

  return (
    <AuthWrapper>
      <MySection
        title="Register"
      >
        {/* <MyInput /> */}
      </MySection>
    </AuthWrapper>
  )
}

export default Register