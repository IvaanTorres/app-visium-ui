import MyButton from "../../../components/atoms/MyButton/MyButton"
import { AuthWrapper, langSelectStyle } from "./styles/styles"

const Register = () => {

  return (
    <AuthWrapper>
      {/* Select Lang */}
      <MyButton
        type="info"
        importance="secondary"
        onClick={() => console.log("clicked")}
        className={langSelectStyle}
      >
        <p>EN</p>
      </MyButton>

      {/* Card */}
      <div>
        <p>Title</p>

        {/* Form */}
      </div>
    </AuthWrapper>
  )
}

export default Register