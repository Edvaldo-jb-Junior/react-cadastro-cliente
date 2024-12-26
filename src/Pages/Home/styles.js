import styled from "styled-components"

export const Conteiner = styled.div`
    background-color: #181f36;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
    flex-direction: column;
`

export const Title = styled.h1`
    color: White;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const ContainerImput = styled.div`
    display: flex;
    gap: 20px;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500

    span{
        color:#ef4f45;
        font-weight: bold;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    padding: 12px 12px;
    outline: none;
    width: 100%

`



