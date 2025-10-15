import React, { createContext, useContext, useEffect, useState } from 'react';


export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        //Charge saved preference or use system default
        const saved = localStorage.getItem('darkMode');
        if(saved !== null ) return JSON.parse(saved);
        return window.matchMedia('(prefers-color-scheme: dark)').matches; 
    });

    useEffect(() => {
        // Save in localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        // Apply class into body
        if(darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            { children }
        </ThemeContext.Provider>
    );
};