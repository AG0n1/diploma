import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/Layout/AuthentificationPages/LoginPage/LoginPage.tsx";

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
