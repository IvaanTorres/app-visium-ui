import { useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { AuthWrapper, authCardStyle, authFormStyle } from "../styles/styles"
import { langSelectConfig } from "../shared/constants/constants"
import { useNavigate } from "react-router-dom"
import { ROUTE_HOMEPAGE, ROUTE_REGISTER } from "../../../shared/constants/router/routes"
import loginFormFields from "./config/loginForm.config"
import login from "../../../shared/helpers/login"
import Axios from "../../../shared/services/Axios"
import { LOGIN } from "../../../shared/constants/resources"
import { DangerModalCustom } from "../../../shared/styles/modal"
import { modalErrorStyle } from "./styles/styles"
import { REGEX } from "../../../shared/constants/texts/regex"

const Login = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  const [modal, setModal] = useState({
    isModalOpen: false,
    error: '',
  })
  const [form, setForm] = useState<MyFormState['get']>({
    values: {
      usernameEmail: '',
      password: ''
    },
    errors: [],
  })

  const toggleModal = () => {
    setModal({
      ...modal,
      isModalOpen: !modal.isModalOpen,
    })
  }

  const handleLogin = async () => {
    const response = await Axios.post(LOGIN, {
      password: form.values.password,
      ...(REGEX.EMAIL.test(form.values.usernameEmail) && { email: form.values.usernameEmail }),
      ...(REGEX.USERNAME.test(form.values.usernameEmail) && { username: form.values.usernameEmail }),
    })
    
    if(response.data.error) {
      setModal({
        isModalOpen: true,
        error: response.data.error.detail,
      })
      return
    }

    login(response.data.refresh_token.token, response.data.refresh_token.expires_in)
    navigate(ROUTE_HOMEPAGE)
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

      <DangerModalCustom
        isOpen={modal.isModalOpen}
        title="Error"
        onClose={toggleModal}
      >
        <div>
          <h2>Oh no !</h2>

          <p className={modalErrorStyle}>{modal.error}</p>
        </div>
      </DangerModalCustom>
    </AuthWrapper>
  )
}

export default Login