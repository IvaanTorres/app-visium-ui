import clsx from "clsx";
import { MySectionProps } from "./shared/types/types";
import { mySectionStyle } from "./styles/styles";

const MySection = (props: MySectionProps) => (
  <section className={clsx(props.className, mySectionStyle)}>
    <div className="title"> 
      <h3>{props.title}</h3>
    </div>

    <div className="content">
      {props.children}
    </div>
  </section>
)

export default MySection;