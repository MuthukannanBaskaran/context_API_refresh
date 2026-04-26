import { createContext, type ReactNode } from "react";
import type { LanguageContextType } from "../types/types";
import useLang from "../hooks/useLanguage";

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
    const { language, setLanguage, changeLanguage } = useLang()

    return <LanguageContext.Provider value={{ language, setLanguage, changeLanguage }}>
        {children}
    </LanguageContext.Provider>
}

export default LanguageContext;