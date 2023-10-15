import styled from "styled-components";



export const StyledHeader = styled.header`
background-color: #4354b0;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const StyledInput = styled.input`
width: 550px;
height: 36px;
outline: none;
border-radius:3px;
border: none;
font-size: 18px;
`

export const StyledButton = styled.button`
cursor: pointer;
margin-right: 10px;
width: 90px;
height: 28px;
outline: none;
border-radius:3px;
border: none;
font-size: 16px;
transition: all 300ms;
&:hover{
    background-color: #afaeae;
}
`