import { useState } from "react";

const useLang = () => {
    const [language, setLanguage] = useState("en");
    const changeLanguage = () => {
        setLanguage((language) => language === "en" ? "ta" : "en");
    }
    return {
        language, setLanguage, changeLanguage
    }
}

export default useLang;