import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Poppins"
    }
    html,#root,body,.App{
        background: #e5e8ec;
        color:#0303;
       
        width:100%;
        height:100vh;
    }


`;
