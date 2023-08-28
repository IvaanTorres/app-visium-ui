import { useState } from "react"
import MyBox from "../../../components/atoms/MyBox/MyBox"
import MySelect from "../../../components/molecules/form/MySelect/MySelect"
import { MySelectOption } from "../../../components/molecules/form/MySelect/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { MyFormState } from "../../../components/organisms/MyForm/shared/types/types"
import { AuthWrapper, authCardStyle, authFormStyle } from "../styles/styles"
import { langSelectConfig } from "../shared/constants/constants"
import { useNavigate } from "react-router-dom"
import { ROUTE_HOMEPAGE, ROUTE_LOGIN } from "../../../shared/constants/router/routes"
import registerFormFields from "./config/registerForm.config"
import { modalErrorStyle } from "./styles/styles"
import { useTranslation } from "react-i18next"
import { register } from "../../../shared/services/auth/auth"
import { getProfile } from "../../../shared/services/user/settings"
import { LOCALE, USER } from "../../../shared/constants/localstorage"
import loginLocale from "../../../shared/helpers/login"
import MyModal from "../../../components/organisms/MyModal/MyModal"

const Register = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState<MySelectOption>(null as unknown as MySelectOption)
  const [modal, setModal] = useState({
    isModalOpen: false,
    error: '',
  })
  const [form, setForm] = useState<MyFormState['get']>({
    values: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    errors: [],
  })

  const toggleModal = () => {
    setModal({
      ...modal,
      isModalOpen: !modal.isModalOpen,
    })
  }

  const handleRegister = async () => {
    if(form.values.password !== form.values.repeatPassword) {
      setModal({
        isModalOpen: true,
        error: t('auth.general.passwordsDontMatch'),
      })
      return
    } else if(locale?.id) {
      const loginData = await register({
        username: form.values.username,
        email: form.values.email,
        password: form.values.password,
      }, locale.id)
        
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
            i18n.changeLanguage(option.id)
            localStorage.setItem(LOCALE, option?.id || 'en')
          },
        }}
      />

      {/* Card */}
      <MyBox className={authCardStyle}>
        <h1 className="title">{t('auth.register.title')}</h1>
        <MyForm
          config={{
            fields: registerFormFields(t),
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
                children: t('auth.register.goToLogin'),
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

export default Register