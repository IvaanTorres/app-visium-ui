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
import { DangerModalCustom } from "../../../shared/styles/modal"
import { modalErrorStyle } from "./styles/styles"
import Axios from "../../../shared/services/Axios"
import { REGISTER } from "../../../shared/constants/resources"
import login from "../../../shared/helpers/login"

const Register = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<MySelectOption | null>(null)
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
        error: 'Passwords do not match.',
      })
      return
    } else {
      const response = await Axios.post(REGISTER, {
        username: form.values.username,
        email: form.values.email,
        password: form.values.password,
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

export default Register