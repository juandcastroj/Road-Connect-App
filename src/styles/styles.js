import styled from "styled-components";

//LoadPage styles

export const ContFirst = styled.div`
  height: 100vh;
  background-color: #0045ad;
  background-position: center;
`;
export const LogoStyle = styled.img`
  width: 130px;
  margin: 20% 45%;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px;
  -webkit-box-shadow: 0px 0px 15px 15px white;
  padding: 1rem;
`;

//Home styles

export const ContHomeRoad = styled.div`
  height: 100%;
  background-color: #0045ad;
  background-position: center;
  text-align: center;
  padding: 2% 10%;
`;

//RoadsHome style

export const ContHome = styled.div`
  height: 100vh;
  background-color: #0030b7;
  background-position: center;
  padding: 10%;
  text-align: center;
`;

//styles login

export const DivAuth = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0030b7;
`;

export const Logo = styled.img`
  width: 30%;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px;
  -webkit-box-shadow: 0px 0px 8px 8px white;
  padding: 1rem;
  margin: 2% 0 5% 0;
`;

export const Icon = styled.img`
  width: 27px;
  padding: 2px;
  margin-right: 6px;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 480px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0px;
  border-radius: 4px;
  border: 10px;
  &:hover {
    color: white;
    border-color: transparent;
    box-shadow: 0px 5px 11px -5px;
  }
`;

export const ALink = styled.a`
  color: var(--color-green);
`;

export const DivForm = styled.div`
  margin: 12px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
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
`;

export const Header = styled.header`
  text-align: center;
  padding-top: 10px;
  & > h1 {
    margin: 10px 0px;
  }
`;

export const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    &:hover {
      font-weight: bold;
    }
  }
`;

export const DivFile = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  max-width: 480px;
`;

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
`;
export const TextFile = styled.input`
  width: 70%;
`;

export const Separator = styled.hr`
  width: 100%;
  max-width: 480px;
  margin: 16px;
`;

export const ButtonGoogle = styled.button`
  padding: 10px;
  width: 100%;
  max-width: 480px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-red);
  color: var(--color-white);
  font-size: 14px;
  font-weight: bold;
  &:hover {
    width: 75px;
    height: 75px;
    cursor: pointer;
    font-weight: bold;
  }
  & > * {
    margin: 0px 10px;
  }
`;

export const Logos = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px;
  -webkit-box-shadow: 0px 0px 10px 10px #0030b7;
  padding: 1rem;
  background-color: #0030b7;
  width: 130px;
  margin: 20% 45%;
`;
//Detalle Ruta

export const DetailContainer = styled.div`
  color: white;
  display: inline-block;
`;

///Footer///
export const FooterSocial = styled.div`
  align-self: center;
  margin: 35px 0;
  color: white;
`;
// export const Icon= styled.img`
// border: 1px solid white;
// border-radius: 50%;
// padding: 2px;
// border: solid 1px white;

//                 &:hover{
//                     color: #2038d4;;

//                 }
// `
export const Footer = styled.footer`
  width: 100%;
  height:50%;
  padding: 1rem 1rem;
  background-color: #f4d03f;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  font-family: "Raleway", sans-serif;
  font-size: 17px;
  position: relative;

  > img {
    width: 80px;
    position: absolute;
    left: 7%;
    margin-top: 5%;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 0px 10px 10px #0030b7;
    padding: 1rem;
    background-color: #0030b7;
  }
  > div {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    div,
    a {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 15px;
      margin-left: 30px;
      &:hover {
        color: #2038d4;
      }
    }
    p,
    > a {
      color: white;
      text-decoration: none;
      max-width: 300px;
      margin-left: 15px;
      &:hover {
        color: #2038d4;
      }
    }
    > a:hover {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 800px) {
    padding-top: 170px;
    flex-direction: column;
    img {
      position: relative;
    }
    > div {
      margin: 15px 5%;
      &:last-child {
        width: 100%;
        margin: 15px 0;
        div {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
`;
