import { MyFormConfig, MyFormProps, MyFormState } from "../../../../components/organisms/MyForm/shared/types/types"

type SettingsSections = 'general' | 'profile'

export type SettingsSectionForm = {
  title: string,
  stateName: SettingsSections,
  content: {
    form: React.ElementType<MyFormProps>,
    config: MyFormConfig
  }
}

export type FormsState = {
  [key in SettingsSections]: MyFormState['get']
}[]

export type MappedSettingsDatas = {
  [key in SettingsSections]: {
    [key: string]: string
  }
}