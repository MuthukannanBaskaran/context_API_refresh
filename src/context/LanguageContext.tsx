import { createContext, useState, type ReactNode } from "react";
import type { LanguageContextType } from "../types/types";

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("en");
    const changeLanguage = () => {
        setLanguage((data) => data === "en" ? "ta" : "en");
    }
    return <LanguageContext.Provider value={{ language, setLanguage, changeLanguage }}>
        {children}
    </LanguageContext.Provider>
}

export default LanguageContext;