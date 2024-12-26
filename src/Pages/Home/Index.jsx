import { useRef } from "react"
import {useNavigate} from "react-router-dom"
import api from "../../Services/api.js"
import { Title, Conteiner, ContainerImput, InputLabel, Form, Input } from "./styles.js"


import Button  from "../../Components/Button"
import TopBackground from "../../Components/TopBackGround"


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()


  async function registerNewUser() {
    const data = await api.post( "/usuarios", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
    })
   
    navigate("/lista-de-usuarios")
   
  }
  
  return (

    <Conteiner>
     
     <TopBackground />
     
      <Form>
        
        <Title>Cadastro Usuários</Title>
        
        <ContainerImput>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="idade do Usuário" ref={inputAge} />
          </div>

        </ContainerImput>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="e-mail" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastra Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Lista de Usuário</Button>

    </Conteiner>

  )
}

export default Home
