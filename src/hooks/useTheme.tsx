import { useState } from "react";

const defaultTheme = localStorage.getItem("theme") || "yellow";

const useTheme = () => {
    const [theme, setTheme] = useState(defaultTheme);
    const changeTheme = () => {
        setTheme((theme => (theme == "antiquewhite" ? "darkblue" : "antiquewhite")))
    }

    return {
        theme, setTheme, changeTheme
    }
}

export default useTheme;