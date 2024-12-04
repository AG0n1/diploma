import {Button, Image} from "antd";
import logo from '../../img/logo.png'
import s from './styles.module.scss'

const LeftAside = () => {
    return (
        <aside
            className={s.leftAside}
        >
            <Image
                src={logo}
                preview={false}
                width={250}
                className={s.leftAsideLogo}
            />
            <Button>

            </Button>
        </aside>
    )
}

export default LeftAside