import './App.css'
// import { useQuery } from '@tanstack/react-query'
// import moment from 'moment'
import { useTranslation } from 'react-i18next'

function App() {
  // const {data, isLoading, error} = useQuery({
  //   queryKey: ['todos'], 
  //   queryFn: () => {

  //   }
  // })
  const { t } = useTranslation();
  // const test = moment().format('YYYY-MM-DD HH:mm:ss')

  // console.log(data, isLoading, error, test);

  return (
    <div>
      {t('headerTitle', { appName: "App for Translations" })}
    </div>
  )
}

export default App
