import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFFFFF;
        font-family: "Roboto", Helvetica, arial, sans-serif;
        text-decoration: none;
        list-style: none;
    }
    body{
        background: #22272E;
        height: 100vh;
    }
`