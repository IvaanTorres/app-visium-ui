import { useTranslation } from "react-i18next"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { homepagePageStyle } from "./style/style"
import { USER } from "../../shared/constants/localstorage"
import { useState, useEffect } from "react"
import { getGeneralPreferences } from "../../shared/services/preferences/general"

const Homepage = () => {
  const { t } = useTranslation()
  const [welcomeMessageSize, setWelcomeMessageSize] = useState(0)

  useEffect(() => {
    handleGetMessageSize()
  }, [])

  const handleGetMessageSize = async () => {
    const generalPromise = await getGeneralPreferences()

    if('data' in generalPromise){
      setWelcomeMessageSize(+generalPromise.data.welcomingMessageSize)
    } else {
      console.error('Failed to get general preferences');
    }
  }

  const userEmail = localStorage.getItem(USER) 
    ? JSON.parse(localStorage.getItem(USER) as string).email 
    : ''

  return (
    <AppLayout>
      <div className={homepagePageStyle(welcomeMessageSize)}>
        <h1 className="title">{t('homepage.welcome')} {userEmail}</h1>
      </div>
    </AppLayout>
  )
}

export default Homepage