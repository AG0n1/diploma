import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/Layout/AuthentificationPages/LoginPage/LoginPage.tsx";
import MainPage from "./assets/components/MainPage/MainPage.tsx";
import {ROUTES} from "./assets/common/routes.ts";
import MentalMath from "./assets/components/MainPage/pages/mentalMath/MentalMath.tsx";
import Labirints from "./assets/components/MainPage/pages/labirints/Labirints.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'loginPage'}
                    element={<LoginPage />}
                />
                <Route path="mainPage" element={<MainPage />}>
                    <Route path="mentalMath" element={<MentalMath />} />
                    <Route path="labirints" element={<Labirints />} />
                </Route>
                <Route
                    path={'resetPassword'}
                />
                <Route
                    path={'createAccount'}
                />
                <Route
                    path={'*'}
                    element={
                        <Navigate
                            to={ROUTES.loginPage}
                            replace={true}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
};

export default App
