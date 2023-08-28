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
import loginLocale from "../../../shared/helpers/login"
import { modalErrorStyle } from "./styles/styles"
import { REGEX } from "../../../shared/constants/texts/regex"
import { useTranslation } from "react-i18next"
import { LOCALE, USER } from "../../../shared/constants/localstorage"
import { getProfile } from "../../../shared/services/user/settings"
import { login } from "../../../shared/services/auth/auth"
import MyModal from "../../../components/organisms/MyModal/MyModal"

const Login = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState<MySelectOption>(null as unknown as MySelectOption)
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
    const formData = {
      password: form.values.password,
      ...(REGEX.EMAIL.test(form.values.usernameEmail) && { email: form.values.usernameEmail }),
      ...(REGEX.USERNAME.test(form.values.usernameEmail) && { username: form.values.usernameEmail }),
    }

    if(locale?.id) {
      const loginData = await login(formData, locale.id)
      
      if('error' in loginData) {
        setModal({
          isModalOpen: true,
          error: loginData.error.message,
        })
        return
      } else {
        loginLocale(loginData.data.refresh_token.token, loginData.data.refresh_token.expires_in)

        const user = await getProfile()
        
        if('data' in user){
          localStorage.setItem(USER, JSON.stringify(user.data))
    
          navigate(ROUTE_HOMEPAGE)
        }
      }
    }
  }

  return (
    <AuthWrapper>
      {/* Lang select */}
      <MySelect 
        config={langSelectConfig(i18n.language)}
        state={{
          get: locale,
          set: (option) => {
            setLocale(option)
            i18n.changeLanguage(option?.id)
            localStorage.setItem(LOCALE, option?.id || 'en')
          },
        }}
      />

      {/* Card */}
      <MyBox className={authCardStyle}>
        <h1 className="title">{t('auth.login.title')}</h1>
        <MyForm
          config={{
            fields: loginFormFields(t),
            actions: {
              primary: {
                children: 'Let\'s go !',
                onClick: handleLogin,
                type: 'info',
                importance: 'primary',
                isSubmit: true,
              },
              secondary: {
                children: t('auth.login.goToRegister'),
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

      <MyModal
        type="danger"
        isOpen={modal.isModalOpen}
        title="Error"
        onClose={toggleModal}
      >
        <div>
          <h2>{t('general.ohNo')}</h2>

          <p className={modalErrorStyle}>{modal.error}</p>
        </div>
      </MyModal>
    </AuthWrapper>
  )
}

export default Login