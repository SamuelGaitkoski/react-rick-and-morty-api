import { useState } from 'react';
import { Routes } from '../Routes';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Default = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = (theme: "light" | "dark") => {
        setTheme(theme);
    }

    return (
        <div>
            <Header onChangeTheme={toggleTheme} />

            <Routes theme={theme} />

            <Footer />
        </div>
    );
}