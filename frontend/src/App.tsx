import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import MainPage from "./components/mainPageView";

function App() {
    const token = localStorage.getItem('token');
    console.log(token !== null);
    return (
        <BrowserRouter>
            <Routes>
                {token !== null ? (
                    <>
                        <Route
                            path={'/mainPage'}
                            element={<MainPage/>}
                        />
                        <Route
                            path={'*'}
                            element={
                                <Navigate
                                    to={'/mainPage'}
                                    replace={true}
                                />
                            }
                        />
                    </>
                ) : (
                    <>
                        <Route
                            path={'/login'}
                            element={<Login/>}
                        />
                        <Route
                            path={'/createAccount'}
                            element={<CreateAccount/>}
                        />
                        <Route
                            path={'*'}
                            element={
                                <Navigate
                                    to={'/login'}
                                    replace={true}
                                />
                            }
                        />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
