import styled from "styled-components";
import BackgroundLogin from '../../assets/background-gray-login.svg'
import BackgroundHamburgues from '../../assets/background-login-hamburgers.svg'

export const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;

`

export const LeftContainer = styled.div`


background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;


display: flex;
align-items: center;
justify-content: center;

img{
    width: 60%;

}

`

export const RightContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

background: url('${BackgroundHamburgues}');
background-size: cover;
background-position: center;
background-color: #252525;


a{
    color: white;
    font-weight: 600;
    text-decoration: underline;

}
p{
    font-weight: 600;
    color: yellow;
}

`


export const Title = styled.h2`

  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 40px;
  color: white;

  span{
    color: #884F95;
    font-family: "Road Rage", sans-serif;
  }


`


export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;


`


export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
}

label{
    font-size: 18px;
    font-weight: 600;
    color: white;
}



`

