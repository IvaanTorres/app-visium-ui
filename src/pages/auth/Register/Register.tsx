import MyAvatar from "../../../components/atoms/MyAvatar/MyAvatar"
import MyButton from "../../../components/atoms/MyButton/MyButton"
import { AuthWrapper, langSelectStyle } from "./styles/styles"
import getFirstLetters from "../../../shared/helpers/getFirstLetters"

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
        <MyAvatar value={getFirstLetters('Ivan Torres Garcia')} />
        {/* Form */}
      </div>
    </AuthWrapper>
  )
}

export default Register