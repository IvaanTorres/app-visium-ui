import { useEffect, useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { AuthWrapper, authCardStyle, authFormStyle } from "../styles/styles"
import { langSelectConfig } from "../shared/constants/constants"
import { useNavigate } from "react-router-dom"
import { ROUTE_LOGIN } from "../../../shared/constants/router/routes"
import registerFormFields from "./config/registerForm.config"

const Register = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  const [form, setForm] = useState<MyFormState['get']>({
    values: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    errors: [],
  })

  useEffect(() => {
    console.log(form)
  }, [form])

  const handleRegister = () => {
    console.log('register')
    // Check the password and the password confirmation are the same
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
        <h1 className="title">Register</h1>
        <MyForm
          config={{
            fields: registerFormFields,
            actions: {
              register: {
                children: 'Let\'s go !',
                onClick: handleRegister,
                type: 'info',
                importance: 'primary',
                isSubmit: true,
                disabled: false,
              },
              goToLogin: {
                children: 'Go to login',
                onClick: () => navigate(ROUTE_LOGIN),
                type: 'info',
                importance: 'secondary',
                disabled: false,
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

export default Register