import styled from "styled-components"

export const Conteiner = styled.div`
    background-color: #181f36;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-height: 100vh;
    flex-direction: column;
`
export const Title = styled.h1`
    color: White;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 20px;
`
export const ContainertUser = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 30px 0;

    @media(max-width: 750px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20 px;
    max-width: 380px;

    h3{
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity:0.6;
    }
`

export const AvatarUsers = styled.img`
    height: 80px;
`
