import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [lang, setLang] = useState("es");
    const [darkMode, setDarkMode] = useState(false);
    const [colorblind, setColorblind] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        document.documentElement.classList.toggle("colorblind-mode", colorblind);
    }, [colorblind]);

    return (
        <AppContext.Provider value={{ lang, setLang, darkMode, setDarkMode, colorblind, setColorblind }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
