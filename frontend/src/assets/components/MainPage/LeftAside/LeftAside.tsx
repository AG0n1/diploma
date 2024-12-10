import {Button, Image, Modal} from "antd";
import logo from '../../../img/logo.png'
import s from './styles.module.scss'
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../common/routes.ts";

interface ILeftSideProps {
    ref: string | undefined
}

const LeftAside: FC<ILeftSideProps> = ({ref}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('token')
        navigate({
            pathname: ROUTES.loginPage
        })
    }

    const onClose = () => setIsModalOpen(false)

    return (
        <aside
            className={s.leftAside}
        >
            <Image
                src={logo}
                preview={false}
                width={'70%'}
                className={s.leftAsideLogo}
            />
            <div
                className={s.buttonSection}
            >

            <Button
                onClick={() => setIsModalOpen(true)}
            >
                Выйти
            </Button>
            </div>
            <Modal
                open={isModalOpen}
                title={'Вы действительно хотите выйти?'}
                onOk={onLogout}
                onCancel={onClose}
                okButtonProps={{
                    title: 'Да'
                }}
                cancelButtonProps={{
                    title: 'Нет'
                }}
            />
        </aside>
    )
}

export default LeftAside