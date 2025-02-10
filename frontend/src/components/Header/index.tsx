import {FC} from 'react';

import s from './styles.module.scss'

const Header: FC = () => {
    return (
        <header className={s.header}>
            <section className={s.headerInfo}>
                <div className={s.userPhoto}>

                </div>
                <div className={s.userInfo}>

                </div>
            </section>
        </header>
    );
};

export default Header;
