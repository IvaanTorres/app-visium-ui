import MyAvatar from "../../../components/atoms/MyAvatar/MyAvatar"
import MyButton from "../../../components/atoms/MyButton/MyButton"
import { AuthWrapper, langSelectStyle } from "./styles/styles"
import getFirstLetters from "../../../shared/helpers/getFirstLetters"
import MyLink from "../../../components/atoms/MyLink/MyLink"

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
        <MyLink to="/auth/login">Login</MyLink>
        <MyAvatar value={getFirstLetters('Ivan Torres Garcia')} />
        {/* Form */}
      </div>
    </AuthWrapper>
  )
}

export default Register