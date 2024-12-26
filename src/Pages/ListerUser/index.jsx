
import { useNavigate } from "react-router-dom"
import Button  from "../../Components/Button"
import TopBackground from "../../Components/TopBackGround"
import {Conteiner, Title, TrashIcon, CardUsers, AvatarUsers, ContainertUser } from "./styles.js"
import api from "../../Services/api"
import { useEffect, useState} from "react"
import Trash from "../../../src/assets/trash.svg"

function ListerUser() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {

        async function getUsers(){
            const { data } = await api.get("/usuarios")
            
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const upadatedUsers = users.filter(user => user.id !== id)

        setUsers(upadatedUsers)
    }

    return(
        <Conteiner>
        <div>
            <TopBackground />

            <Title>Lista de Usuários</Title>
            <ContainertUser>
            {users.map((user) => (
                <CardUsers key={user.id}>
                    <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
                <TrashIcon onClick={() => deleteUsers(user.id)} src={Trash} alt="icone-lixo"/>
                </CardUsers>
            ))}
            </ContainertUser>
            
            <Button onClick={() => navigate("/")} theme="primary">Volta</Button>
        </div>
        </Conteiner>
    )
    
}

export default ListerUser