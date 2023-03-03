import { useRoutes } from "react-router-dom";

import { Main } from "./pages/Main";
import { Docs } from "./pages/Docs";
import { About } from "./pages/About";
import { SupportUs } from "./pages/SupportUs";

type Props = {
    theme: "light" | "dark";
}

export const Routes = ({ theme }: Props) => {
    return useRoutes([
        { path: '/', element: <Main /> },
        { path: '/documentation', element: <Docs theme={theme} /> },
        { path: '/about', element: <About /> },
        { path: '/support-us', element: <SupportUs /> }
    ]);
}