import clsx from "clsx";
import { AppLayoutProps } from "./shared/types/types";
import { appLayoutStyle } from "./styles/styles";
import MySidebar from "../../components/organisms/MySidebar/MySidebar";
import MySelect from "../../components/molecules/form/MySelect/MySelect";
import { langSelectConfig } from "../../pages/auth/shared/constants/constants";
import { useState } from "react";
import { MySelectOption } from "../../components/molecules/form/MySelect/shared/types/types";
import { useTranslation } from "react-i18next";
import { LOCALE } from "../../shared/constants/localstorage";

const AppLayout = (props: AppLayoutProps) => {
  const {i18n} = useTranslation()
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
            config={langSelectConfig(i18n.language)}
            state={{
              get: locale,
              set: (option) => {
                setLocale(option)
                i18n?.changeLanguage?.(option?.id)
                localStorage.setItem(LOCALE, option?.id || 'en')
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