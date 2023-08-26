import AppLayout from "../../layouts/AppLayout/AppLayout"
import { homepagePageStyle } from "./style/style"

const Homepage = () => {

  return (
    <AppLayout>
      <div className={homepagePageStyle}>
        <h1 className="title">Welcome itoga21.it@gmail.com</h1>
      </div>
    </AppLayout>
  )
}

export default Homepage