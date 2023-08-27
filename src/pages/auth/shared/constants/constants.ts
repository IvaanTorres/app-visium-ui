import { MySelectConfig } from "../../../../components/molecules/form/MySelect/shared/types/types";
import FRANCE_FLAG from "../../../../assets/flags/fr_FR.png"
import GERMANY_FLAG from "../../../../assets/flags/de_DE.png"
import ENGLAND_FLAG from "../../../../assets/flags/en_EN.png"
import { localeSelectStyle } from "../../styles/styles";
import { DE, EN, FR } from "../../../../shared/constants/locales";

export const langSelectConfig: MySelectConfig = {
  type: "select",
  stateName: "locale",
  options: [
    {
      label: FRANCE_FLAG,
      id: FR,
      isDefault: false,
    },
    {
      label: GERMANY_FLAG,
      id: DE,
      isDefault: false,
    },
    {
      label: ENGLAND_FLAG,
      id: EN,
      isDefault: true,
    },
  ],
  custom: {
    classList: localeSelectStyle,
  }
}