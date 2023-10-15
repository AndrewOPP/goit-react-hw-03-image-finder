import styled from "styled-components";

export const StyledUl = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
list-style: none;
padding-left: 30px;
padding-top: 15px;
`

export const StyledLi = styled.li`
height: 423px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


export const StyledButton = styled.button`
padding: 7px, 9px;
width: 200px;
height: 50px;
background-color: #4354b0;
color: white;
border-radius: 8px;
border: none;
cursor: pointer;
margin-bottom: 40px;
margin-top: 40px;
margin-left: 840px;
transition: all 300ms;
font-size: 20px;
&:hover {
    background-color: lightblue;
}
`