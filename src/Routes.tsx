import { useRoutes } from "react-router-dom";

import { Main } from "./pages/Main";
import { Docs } from "./pages/Docs";
import { About } from "./pages/About";
import { SupportUs } from "./pages/SupportUs";

export const Routes = () => {
    return useRoutes([
        { path: '/', element: <Main /> },
        { path: '/documentation', element: <Docs /> },
        { path: '/about', element: <About /> },
        { path: '/support-us', element: <SupportUs /> }
    ]);
}