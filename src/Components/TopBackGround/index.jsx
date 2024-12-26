import { TopBackground } from "./styles"
import UserImage from "../../assets/users.png"

function DefaultTopBackGround(){

    return(
        <div>
        <TopBackground>
        <img src={UserImage} alt="imagem-usuários" />
        </TopBackground>
        </div>
    )
}

export default DefaultTopBackGround