import { useEffect, useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { loginForm } from "./shared/constants/constants"
import { AuthWrapper, authCardStyle, authFormStyle } from "../styles/styles"
import { langSelectConfig } from "../shared/constants/constants"

const Login = () => {
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  const [form, setForm] = useState<MyFormState['get']>(loginForm.initialState)

  useEffect(() => {
    console.log(form)
  }, [form])

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
      <MyBox className={authCardStyle}>
        <h1 className="title">Login</h1>
        <MyForm
          config={loginForm.config}
          state={{
            get: form,
            set(newFormState) {
              setForm(newFormState)
            },
          }}
          custom={{
            classList: authFormStyle
          }}
        />
      </MyBox>
    </AuthWrapper>
  )
}

export default Login