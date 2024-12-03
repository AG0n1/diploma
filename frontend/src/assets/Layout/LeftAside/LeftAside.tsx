import {useStore} from "../../../store/userStore.tsx";
import {Button} from "antd";


const LeftAside = () => {
    const getUserInfo = useStore()
    const increare = () => {
        getUserInfo.increasePopulation()
    console.log(getUserInfo)
    }
    return (
        <aside>
            <Button
                onClick={increare}
            >

            </Button>
        </aside>
    )
}

export default LeftAside