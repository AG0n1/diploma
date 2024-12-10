import logo from '../../img/logo.png'
import {Button, Image} from "antd";
import s from './styles.module.scss'
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../common/routes.ts";

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div
            className={s.pageNotFoundMain}
        >
            <div
                className={s.layout}
            >
                <Image
                    src={logo}
                    width={250}
                    preview={false}
                />
                <p>
                    Кажется, этой страницы не существует!
                </p>
                <Button
                    className={s.button}
                    onClick={() => navigate({
                        pathname: ROUTES.mainPage
                    })}
                >
                    На главную
                </Button>
            </div>
        </div>
    )
}

export default PageNotFound