import styled from 'styled-components'

//LoadPage styles 

export const ContFirst = styled.div`
    height:100vh;
    background-color:#0030b7;
    background-position: center;
`
export const LogoStyle = styled.img`
    width: 160px;
    margin: 20% 45%   
`

//Home styles

export const ContHomeRoad = styled.div`
    height:100%;
    background-color:#0030b7;
    background-position: center;
    text-align: center;
    padding: 2% 10%
`

//RoadsHome style

export const ContHome = styled.div`
    height:100vh;
    background-color:#0030b7;
    background-position: center;
    padding: 10%;
    text-align: center
`

//styles login

export const DivAuth = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #0030b7 
`

export const Logo = styled.img`
    width: 50%;
`


export const Label = styled.label`
    width: 100%;
    max-width: 480px;
`


export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 8px 0px;
    border-radius: 4px; 
    border: 10px;
`

export const ALink = styled.a`
    color: var(--color-green);
`

export const DivForm = styled.div`
    margin: 12px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`
export const InputSubmit = styled.input`
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    border: none;
    margin: 10px 0;

    max-width: 256px;

    background-color: var(--color-green);
    color: var(--color-white);
    font-weight: 800;

    &:hover {
    cursor: pointer;
    }
`

export const Header = styled.header`
    text-align: center;

    padding-top: 10px;

    &>h1{
        margin: 10px 0px;
    }
`

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivFile = styled.div`
    display: flex;
    width: 100%;

    margin: 10px 0px;

    max-width: 480px;
`

export const InputFile = styled.input`
    padding: 10px;
    width: 30%;
    border-radius: 6px;
    border: none;

    background-color: var(--color-green);
    color: var(--color-white);

    min-width: 120px;

    &:hover {
    cursor: pointer;
    }
`
export const TextFile = styled.input`
    width: 70%;
`

export const Separator = styled.hr`
    width: 100%;
    max-width: 480px;

    margin: 16px;
`

export const ButtonGoogle = styled.button`
    padding: 10px;
    width: 100%;
    max-width: 480px;
    border-radius: 6px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-red);
    color: var(--color-white);

    font-size: 14px;
    font-weight: bold;
    
    &:hover {
        cursor: pointer;
    }

    & > *{
        margin: 0px 10px;
    }
`

//Detalle Ruta

export const DetailContainer = styled.div`
  color: white;
  display: inline-block
`