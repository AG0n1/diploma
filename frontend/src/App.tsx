import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import MainPage from "./components/mainPageView";
import Timetable from "./components/mainPageView/MainView/Timetable";
import Grade from "./components/mainPageView/MainView/Grade";

function App() {
    const token = localStorage.getItem('token');
    return (
        <BrowserRouter>
            <Routes>
                {token !== null ? (
                    <>
                        <Route
                            path={'/mainPage'}
                            element={<MainPage/>}
                        >
                            <Route
                                path={'/mainPage/timetable'}
                                element={<Timetable/>}
                            />
                            <Route
                                path={'/mainPage/grade'}
                                element={<Grade/>}
                            />
                        </Route>
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
