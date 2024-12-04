import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/Layout/AuthentificationPages/LoginPage/LoginPage.tsx";
import {useUserStore} from "./store/userStore.tsx";
import {isNil} from 'lodash'
import MainPage from "./assets/components/MainPage/MainPage.tsx";
import {ROUTES} from "./assets/common/routes.ts";

function App() {

    const {user} = useUserStore()
    console.log(user)
    return (
        <>
            <BrowserRouter>
                {!isNil(user) ?
                    (
                        <Routes>
                            <Route
                                path={'mainPage'}
                                element={<MainPage />}
                            />
                            <Route
                                path={'*'}
                                element={
                                    <Navigate
                                        to={`http://localhost:5173/${ROUTES.mainPage}`}
                                        replace
                                    />
                                }
                            ></Route>
                        </Routes>
                    )
                    :
                    (
                        <Routes>
                            <Route
                                path={'loginPage'}
                                element={<LoginPage />}
                            />
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
                                        replace
                                    />
                                }
                            />
                        </Routes>
                    )
                }

            </BrowserRouter>
        {/*    user ? <>*/}
        {/*    <LeftAside />*/}
        {/*    <aside>*/}

        {/*    </aside>*/}
        {/*</> : <PageNotFound />*/}
        </>

  )
}

export default App
