import {FC} from "react";
import LeftAside from "../LeftAside/LeftAside.tsx";
import s from './styles.module.scss'

const MainPage: FC = () => {

    return (
        <div
            className={s.mainPage}
        >
            <LeftAside />
        </div>
    )
}

export default MainPage