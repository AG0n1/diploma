import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/Layout/AuthentificationPages/LoginPage/LoginPage.tsx";
import PageNotFound from "./assets/Layout/PageNotFound/PageNotFound.tsx";

function App() {

    // const {user} = useStore()
    // console.log(user)
    return (
        <>
            <BrowserRouter>
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
