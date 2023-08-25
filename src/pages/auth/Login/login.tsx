import { useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { langSelectConfig, loginForm } from "./shared/constants/constants"
import { AuthWrapper } from "../styles/styles"
import { loginCardStyle, loginFormStyle } from "./styles/styles"

const Login = () => {
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  const [formState, setFormState] = useState<MyFormState['get']>(loginForm.initialState)

  return (
    <AuthWrapper>
      {/* Lang select */}
      <MySelect 
        config={langSelectConfig}
        state={{
          get: locale,
          set: (option) => {
            setLocale(option)
          },
        }}
      />

      {/* Card */}
      <MyBox className={loginCardStyle}>
        <h1 className="title">Login</h1>
        <MyForm
          config={loginForm.config}
          state={{
            get: formState,
            set(newFormState) {
              setFormState(newFormState)
            },
          }}
          custom={{
            classList: loginFormStyle
          }}
        />
      </MyBox>
    </AuthWrapper>
  )
}

export default Login