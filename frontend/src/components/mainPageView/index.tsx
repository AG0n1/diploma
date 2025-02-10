import React, {useState} from "react";

import {Layout, Menu, MenuProps} from "antd";
import {Outlet} from "react-router-dom";
import Header from "../Header";

const {Sider} = Layout
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    };
}

const MainPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items: MenuItem[] = [
        getItem('Пользователь', 'user', <></>, [
            getItem('Расписание', 'userTimetable'),
            getItem('Оценки', 'userMarks'),
        ]),
        getItem('Задания', 'task', <></>, [
            getItem('Лабиринты', 'taskLabirint'),
            getItem('Быстрый счёт', 'taskCount'),
            getItem('Абакусы', 'tasksAbakus'),
        ]),
        getItem('О компании', 'about'),
        getItem('Служба поддержки', 'support')
    ];


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider style={{wordBreak: 'break-all'}} collapsible collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                <Menu theme={"dark"} defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <Header/>
                <Outlet/>
            </Layout>

            {/*<LeftASide>*/}

            {/*</LeftASide>*/}
            {/*<Outlet/>*/}
        </Layout>
    )
}

export default MainPage