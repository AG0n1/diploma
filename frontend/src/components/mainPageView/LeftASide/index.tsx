import {FC} from 'react';

import s from './styles.module.scss'
import UniversalCascader from "../../Cascader/UniversalCascader.tsx";

const LeftASide: FC = () => {
    return (
        <div className={s.leftAside}>
            <UniversalCascader config={{}} options={[{label: '123'}]}></UniversalCascader>
        </div>
    );
};

export default LeftASide
