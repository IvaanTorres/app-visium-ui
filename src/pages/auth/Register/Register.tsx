import MyModal from "../../../components/organisms/MyModal/MyModal"
import { AuthWrapper } from "./styles/styles"

const Register = () => {

  return (
    <AuthWrapper>
      <MyModal
        isOpen={true}
        title="Register Modal"
        actions={{
          primary: {
            type: "info",
            action: () => console.log("Primary button clicked"),
            text: "Primary",
          },
        }}
      >
        <div>Register</div>
      </MyModal>
    </AuthWrapper>
  )
}

export default Register