import { Routes } from '../Routes';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Default = () => {
    return (
        <div>
            <Header />

            <Routes />

            <Footer />
        </div>
    );
}