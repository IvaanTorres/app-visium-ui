import { Fragment, useState } from "react";
import { AllFields, MyFormProps, MyFormState } from "./shared/types/types";
import { MyTextInputConfig } from "../../molecules/form/MyInput/shared/types/types";
import { FIELD_TYPES_GROUPS } from "./shared/constants/constants";
import { MySelectConfig } from "../../molecules/form/MySelect/shared/types/types";
import MyInput from "../../molecules/form/MyInput/MyInput";
import MySelect from "../../molecules/form/MySelect/MySelect";
import { MyFieldError } from "../../../shared/types/texts/forms/forms";
import MyButton from "../../atoms/MyButton/MyButton";
import clsx from "clsx";
import { myButtonStyle, myFormStyle } from "./styles/styles";

const MyForm = (props: MyFormProps) => {
  const [state, setState] = useState<MyFormState['get']>(props.state.get);

  // Run on every input change (Another option is to run just when the form is submitted)
  function stateSetter<T>(stateName: string, stack: {
    value: T,
    error?: MyFieldError,
  }) {
    const copyOfState = structuredClone(state)
    copyOfState.values[stateName] = stack.value

    const foundErrorId = copyOfState.errors.findIndex(error => error?.stateName === stateName)
    const hadError = foundErrorId !== -1
    
    if(stack.error){
      if(hadError){
        copyOfState.errors.splice(foundErrorId, 1, stack.error)
      } else {
        copyOfState.errors.push(stack.error)
      }
    } else {
      if(hadError){
        copyOfState.errors.splice(foundErrorId, 1)
      }
    }

    setState(copyOfState);
    props.state.set(copyOfState);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  function isField<T extends AllFields>(field: AllFields, allowedTypes: string[]): field is T {
    return allowedTypes.includes(field.type);
  }

  // It could be good to make this into a object instead of a "if-else" or "switch"
  // Like this, it doesn't have to pass through all the conditions
  const resolveField = (fieldConfig: AllFields) => {
    if(isField<MyTextInputConfig>(fieldConfig, FIELD_TYPES_GROUPS.INPUT)) return (
      <MyInput config={fieldConfig} state={{
        get: state.values[fieldConfig.stateName],
        set: (value, error) => {
          stateSetter<typeof value>(fieldConfig.stateName, {value, error});
        }
      }} />
    )
    if(isField<MySelectConfig>(fieldConfig, FIELD_TYPES_GROUPS.SELECT)) return (
      <MySelect config={fieldConfig} state={{
        get: state.values[fieldConfig.stateName],
        set: (option) => {
          stateSetter<typeof option>(fieldConfig.stateName, {value: option});
        }
      }} />
    )
  }

  return (
    <form onSubmit={handleSubmit} className={clsx(props.custom?.classList, myFormStyle)}>
      <div className="fields">
        {props.config.fields.map((fieldConfig, index) => (
          <Fragment key={`field-${fieldConfig.stateName}-${index}`}>
            {resolveField(fieldConfig)}
          </Fragment>
        ))}
      </div>

      <div className="buttons">
        {Object.entries(props.config.actions)
          .map(([id, action], index) => (
            <Fragment key={`action-${id}-${index}`}>
              <MyButton
                type={action.type}
                importance={action.importance}
                onClick={action.onClick}
                isSubmit={action.isSubmit}
                className={clsx(myButtonStyle, action.className)}
                disabled={action.disabled}
              >
                {action.children}
              </MyButton>
            </Fragment>
        ))}
      </div>
    </form>
  );
};

export default MyForm;