import React, {useState} from "react";

import {BugOutlined, BuildOutlined, InfoCircleOutlined, UserOutlined,} from '@ant-design/icons';

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
        getItem('Пользователь', 'user', <UserOutlined/>, [
            getItem('Расписание', 'userTimetable'),
            getItem('Оценки', 'userMarks'),
        ]),
        getItem('Задания', 'task', <BuildOutlined/>, [
            getItem('Лабиринты', 'taskLabirint'),
            getItem('Быстрый счёт', 'taskCount'),
            getItem('Абакусы', 'tasksAbakus'),
        ]),
        getItem('О компании', 'about', <InfoCircleOutlined/>,),
        getItem('Служба поддержки', 'support', <BugOutlined/>)
    ];

    const siderStyle: React.CSSProperties = {
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider style={siderStyle} collapsible collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                <Menu theme={"dark"} defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout style={{
                background: '#002140'
            }}>
                <Header/>
                <Outlet/>
                <div style={{height: '200vh'}} className="main">

                </div>
            </Layout>
        </Layout>
    )
}

export default MainPage