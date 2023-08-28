import { SET_PROFILE } from "../../constants/resources"
import Axios from "../Axios"

export const updateProfile = async (username: string) => {
  await Axios.put(SET_PROFILE, {
    username: username,
  })
}