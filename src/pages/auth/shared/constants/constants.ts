import { MySelectConfig } from "../../../../components/molecules/form/MySelect/shared/types/types";
import FRANCE_FLAG from "../../../../assets/flags/fr_FR.png"
import GERMANY_FLAG from "../../../../assets/flags/de_DE.png"
import ENGLAND_FLAG from "../../../../assets/flags/en_EN.png"
import { localeSelectStyle } from "../../styles/styles";

export const langSelectConfig: MySelectConfig = {
  type: "select",
  stateName: "locale",
  options: [
    {
      label: FRANCE_FLAG,
      id: "fr_FR",
      isDefault: true,
    },
    {
      label: GERMANY_FLAG,
      id: "de_DE",
    },
    {
      label: ENGLAND_FLAG,
      id: "en_DE",
    },
  ],
  custom: {
    classList: localeSelectStyle,
  }
}