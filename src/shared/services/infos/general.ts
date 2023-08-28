import { GET_LOGIN_NUMBER } from "../../constants/resources"
import { APIResponse } from "../../types/api/responses"
import { ConnectionInfos } from "../../types/infos/infos"
import Axios from "../Axios"

export const getConnectionInfos = async () => {
  const {data} = await Axios.get<APIResponse<ConnectionInfos>>(GET_LOGIN_NUMBER)

  return data
}