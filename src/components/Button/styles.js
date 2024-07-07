import styled from "styled-components";


export const ContainerButton = styled.button`
width: 100%;
height: 52px;
border: 0;
border-radius: 5px;
background-color: #9758A6;

 
font-family: "Road Rage", sans-serif;
font-weight: 400;
font-style: normal;
font-size: ${props => props.normal ? '30px' : '20px'};
color: ${props => props.red ? '#c33' : '#fff'};
align-items: center;

  
  &:hover{
    /* opacity: 0.8; */
    background-color:  #6F357C;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23FFFEFEFF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

`