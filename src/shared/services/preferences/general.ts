import { SET_WELCOME_MESSAGE } from "../../constants/resources"
import Axios from "../Axios"

export const updateGeneralPreferences = async (welcomeSize: number) => {
  await Axios.put(SET_WELCOME_MESSAGE, {
    welcomingMessageSize: welcomeSize,
  })
}