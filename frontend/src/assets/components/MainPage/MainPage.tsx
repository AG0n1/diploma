import { FC, useRef } from "react";
import LeftAside from "./LeftAside/LeftAside.tsx";
import s from './styles.module.scss';
import { Outlet } from "react-router-dom";
import Layout from "./pages/Layout.tsx";

const MainPage: FC = () => {
    const modeRef = useRef<string>();

    return (
        <div className={s.mainPage}>
            <LeftAside ref={modeRef.current} />
            <div
                className={s.layout}
            >
                <Layout />
                <Outlet />
            </div>
        </div>
    );
};

export default MainPage;
