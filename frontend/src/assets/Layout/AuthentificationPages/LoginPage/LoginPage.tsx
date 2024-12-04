import {FC, useState} from "react";
import {Button, Form, Image, Input} from "antd";
import logo from '../../../img/logo.png';
import cn from 'classnames'

import s from './styles.module.scss'
import {useUserStore} from "../../../../store/userStore.tsx";
import {text} from "../../../common/text.tsx";

interface IUserDataOut {
    email: string,
    password: string,
}

interface IUserResponse {
    name: string;
    id: string
}

const LoginPage: FC = () => {
    const [form] = Form.useForm()
    const [loadingSubmitButton, setLoadingSubmitButton] = useState<boolean>(false)
    const {setUser} = useUserStore()

    const onSubmit = async (values: IUserDataOut) => {
        setLoadingSubmitButton(true)
        setTimeout(() => {
            fetch('http://localhost:3000/user')
                .then((response) => response.json())
                .then((response: IUserResponse) => setUser(response.id))
                .then(() => setLoadingSubmitButton(false))
        }, 1000)
        form?.resetFields()
    }

    return (
        <div
            className={cn(s.absoluteCenter, s.loginPage)}
        >
            <Form
                form={form}
                className={s.absoluteCenter}
                onFinish={(values) => onSubmit(values)}
            >
                <Image
                    width={200}
                    src={logo}
                    preview={false}
                />
                <div
                    className={s.centerFormItems}
                >
                    <Form.Item
                        label="Логин:"
                        name={'email'}
                        rules={[{ required: true, message: 'Это поле обязательно!' }]}
                    >
                        <Input
                            title={'Логин'}
                            placeholder={'Ваш e-mail'}
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Пароль:"
                        name={'password'}
                        rules={[{ required: true, message: 'Это поле обязательно!' }]}
                    >
                        <Input
                            title={'Пароль'}
                            placeholder={'Ваш пароль'}
                            type={'password'}
                            required={true}
                        />
                    </Form.Item>
                    <Button
                        loading={loadingSubmitButton}
                        htmlType={'submit'}
                    >
                        {text.buttons.enter}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage