import { TFunction } from "i18next"
import { TextInputTypes } from "../../../components/molecules/form/MyInput/shared/types/types"
import MyForm from "../../../components/organisms/MyForm/MyForm"
import { AllFields } from "../../../components/organisms/MyForm/shared/types/types"
import { FIELD_TYPES } from "../../../shared/constants/texts/forms"
import { REGEX } from "../../../shared/constants/texts/regex"
import { SettingsSectionForm } from "../shared/types/types"

const generalFormFields = (t: TFunction<"translation", undefined>): AllFields[] => [
  {
    type: FIELD_TYPES.NUMBER as TextInputTypes,
    label: t('settings.welcomingMessageSize.label'),
    helper: t('settings.welcomingMessageSize.helper'),
    stateName: "welcomingMessageSize",
    custom: {
      isRequired: true,
      pattern: [REGEX.NUMBER],
    }
  }
]

const profileFormFields = (t: TFunction<"translation", undefined>): AllFields[] => [
  {
    type: FIELD_TYPES.TEXT as TextInputTypes,
    label: t('auth.general.labels.username'),
    helper: t('auth.general.helpers.username'),
    stateName: "username",
    custom: {
      isRequired: true,
      pattern: [REGEX.USERNAME],
    }
  }
]

// Good improvement if a change is done in the settings section of the DB structure
// Separate the settings in groups with a kind of options structure linked to each of them
// The options structure will be used to generate the form with the correct structure & fields (polymorphic relationships / inheritance)
// Load fields from the DB, specifying their type, etc.
export const sections = (t: TFunction<"translation", undefined>, {
  general,
  profile,
}: {
  general: () => void
  profile: () => void
}) => {
  const sections: SettingsSectionForm[] = [
    {
      title: t('general.title'),
      stateName: 'general',
      content: {
        form: MyForm,
        config: {
          fields: generalFormFields(t),
          actions: {
            save: {
              children: t('general.actions.save'),
              onClick: general,
              type: 'info',
              importance: 'primary',
              isSubmit: true,
            },
          }
        },
      },
    },
    {
      title: t('settings.profile'),
      stateName: 'profile',
      content: {
        form: MyForm,
        config: {
          fields: profileFormFields(t),
          actions: {
            save: {
              children: t('general.actions.save'),
              onClick: profile,
              type: 'info',
              importance: 'primary',
              isSubmit: true,
            },
          }
        },
      },
    },
  ]

  return sections
}