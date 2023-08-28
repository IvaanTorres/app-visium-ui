import { GET_LOCALE } from "../../constants/resources";
import { APIResponse } from "../../types/api/responses";
import { LanguageType } from "../../types/languages/languages";
import Axios from "../Axios";

export const getLocale = async () => {
  const {data} = await Axios.get<APIResponse<LanguageType>>(GET_LOCALE);
  return data;
}