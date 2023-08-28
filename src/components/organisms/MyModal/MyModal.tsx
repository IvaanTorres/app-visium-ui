import clsx from "clsx";
import { AllowedButtonImportances, MyModalProps } from "./shared/types/types";
import { myModalStyle } from "./styles/styles";
import MyIcon from "../../atoms/MyIcon/MyIcon";
import { ICON_CANCEL } from "../../../shared/constants/icons/icons";
import MyButton from "../../atoms/MyButton/MyButton";
import { useEffect, useState } from "react";
import modals from "./config/types";

const MyModal = (props: MyModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalStyle = modals[props.type]
  console.log(modalStyle);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
    if(isOpen){
      props.onClose();
    }
  }

  return (
    isOpen && (
      <div className={clsx(props.className, myModalStyle({
        hasPadding: props.hasPadding,
      }), modalStyle)}>
        {/* Top bar */}
        <div className="top-bar">
          <div className="title">{props.title}</div>
          <div className="close" onClick={toggle}>
            <MyIcon icon={ICON_CANCEL} size={30} />
          </div>
        </div>

        {/* Content */}
        <div className="content">{props.children}</div>

        {/* Bottom bar */}
        {props.actions && (
          <div className="bottom-bar">
            {Object.entries(props.actions).map(([key, value]) => (
              <MyButton
                key={key}
                type={value.type}
                importance={key as AllowedButtonImportances}
                onClick={value.action}
              >
                {value.text}
              </MyButton>
            ))}
          </div>
        )}
      </div>
    )
  )
}

export default MyModal;