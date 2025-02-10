import {FC} from "react";

import user from './svgIcons/user.svg'
import about from './svgIcons/about.svg'
import task from './svgIcons/brain.svg'

const iconArray = ['user', 'administrator', 'task', 'about'] as const
type IIconType = (typeof iconArray)[number];

interface IGetIcon {
    [key: string]: JSX.Element
}

const Icon: FC = (type: IIconType): JSX.Element => {

    const getIcon: IGetIcon = {
        user,
        about,
        task
    }

    return (
        <div
            style={{
                width: '50px',
                height: '50px'
            }}
        >
            {getIcon[type]}
        </div>
    )
}