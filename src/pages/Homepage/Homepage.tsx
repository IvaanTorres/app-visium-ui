import { useTranslation } from "react-i18next"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { homepagePageStyle } from "./style/style"

const Homepage = () => {
  const { t } = useTranslation()

  return (
    <AppLayout>
      <div className={homepagePageStyle}>
        <h1 className="title">{t('homepage.welcome')} itoga21.it@gmail.com</h1>
      </div>
    </AppLayout>
  )
}

export default Homepage