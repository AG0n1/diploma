import {Button, Image} from "antd";
import logo from '../../img/logo.png'
import s from './styles.module.scss'
import {useUserStore} from "../../../store/userStore.tsx";

const LeftAside = () => {
    const user = useUserStore(state => state.user)
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
            <Button
                onClick={() => console.log(user)}
            >

            </Button>
        </aside>
    )
}

export default LeftAside