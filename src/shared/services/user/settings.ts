import { GET_USER, SET_PROFILE } from "../../constants/resources"
import { APIResponse } from "../../types/api/responses"
import { User } from "../../types/auth/user"
import Axios from "../Axios"

export const updateProfile = async (username: string) => {
  const {data} = await Axios.put<APIResponse<Omit<User, 'password' | 'id'>>>(SET_PROFILE, {
    username: username,
  })

  return data
}

export const getProfile = async () => {
  const response = await Axios.get<APIResponse<Omit<User, 'password' | 'id'>>>(GET_USER)
  return response.data
}