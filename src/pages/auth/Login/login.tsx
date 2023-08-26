import { useEffect, useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { AuthWrapper, authCardStyle, authFormStyle } from "../styles/styles"
import { langSelectConfig } from "../shared/constants/constants"
import { useNavigate } from "react-router-dom"
import { ROUTE_REGISTER } from "../../../shared/constants/router/routes"
import loginFormFields from "./config/loginForm.config"

const Login = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  const [form, setForm] = useState<MyFormState['get']>({
    values: {
      usernameEmail: '',
      password: ''
    },
    errors: [],
  })

  useEffect(() => {
    console.log(form)
  }, [form])

  const handleLogin = () => {
    console.log('login')
  }

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
          config={{
            fields: loginFormFields,
            actions: {
              primary: {
                children: 'Let\'s go !',
                onClick: handleLogin,
                type: 'info',
                importance: 'primary',
                isSubmit: true,
              },
              secondary: {
                children: 'Go to register',
                onClick: () => navigate(ROUTE_REGISTER),
                type: 'info',
                importance: 'secondary',
              },
            }
          }}
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