import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/Layout/AuthentificationPages/LoginPage/LoginPage.tsx";
import {useUserStore} from "./store/userStore.tsx";
import {isNil} from 'lodash'
import MainPage from "./assets/components/MainPage/MainPage.tsx";
import PageNotFound from "./assets/Layout/PageNotFound/PageNotFound.tsx";

function App() {

    const {user} = useUserStore()
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
                                element={<PageNotFound />}
                            />
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
                                element={<PageNotFound />}
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
