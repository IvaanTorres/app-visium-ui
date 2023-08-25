import { useState } from "react"
import MySection from "../../../components/molecules/MySection/MySection"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { AuthWrapper } from "./styles/styles"
import { registerForm } from "./shared/constants/constants"

const Register = () => {
  const [formState, setFormState] = useState<MyFormState['get']>(registerForm.initialState)

  return (
    <AuthWrapper>
      <MySection
        title="Register"
      >
        <MyForm 
          config={registerForm.config}
          state={{
            get: formState,
            set(newFormState) {
              setFormState(newFormState)
            },
          }}
        />
      </MySection>
    </AuthWrapper>
  )
}

export default Register