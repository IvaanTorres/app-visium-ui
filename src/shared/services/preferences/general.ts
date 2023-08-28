import { GET_WELCOME_MESSAGE, SET_WELCOME_MESSAGE } from "../../constants/resources"
import { APIResponse } from "../../types/api/responses"
import { GeneralSettings } from "../../types/settings/general"
import Axios from "../Axios"

export const updateGeneralPreferences = async (welcomeSize: number) => {
  const {data} = await Axios.put<APIResponse<GeneralSettings>>(SET_WELCOME_MESSAGE, {
    welcomingMessageSize: welcomeSize,
  })

  return data
}

export const getGeneralPreferences = async () => {
  const response = await Axios.get<APIResponse<GeneralSettings>>(GET_WELCOME_MESSAGE)
  return response.data
}