import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CalandarContainer = styled.div`
    width: 700px;
    height: 100%;
    border-width: 0px 2px 2px 0px;
    border: solid black;
    display: flex;
    justify-content: center;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`
export const CalandarHeader = styled.div`
    position: absolute;
    margin-top: 20px;
    display:flex;
    justify-content:center;
    align-items: center;
    gap: 40px;
`

export const CalandarYear = styled.span`
    color:black;
    font-size: 40px;
    margin-top:10px;
`
export const backyear = styled.span`
    color: black;
    font-size: 44px;
    cursor: pointer;
`
export const nextyear = styled.span`
    color: black;
    font-size: 44px;
    cursor: pointer;

`