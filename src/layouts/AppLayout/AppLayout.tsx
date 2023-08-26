import clsx from "clsx";
import { AppLayoutProps } from "./shared/types/types";
import { appLayoutStyle } from "./styles/styles";
import MySidebar from "../../components/organisms/MySidebar/MySidebar";
import MySelect from "../../components/molecules/form/MySelect/MySelect";
import { langSelectConfig } from "../../pages/auth/shared/constants/constants";
import { useState } from "react";
import { MySelectOption } from "../../components/molecules/form/MySelect/shared/types/types";

const AppLayout = (props: AppLayoutProps) => {
  const [locale, setLocale] = useState<MySelectOption | null>(null)
  
  return (
    <div className={clsx(props.className, appLayoutStyle)}>
      <aside>
        <MySidebar />
      </aside>
      <main>
        {/* Locales */}
        <div className="locales">
          <MySelect
            config={langSelectConfig}
            state={{
              get: locale,
              set: (option) => {
                setLocale(option)
              },
            }}
          />
        </div>
        {props.children}
      </main>
    </div>
  )
}

export default AppLayout;