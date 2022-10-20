import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Poppins"
    }
    html,#root,body,.App{
        background: #19181F;
        color:#dae4f3;
       
        width:100%;
        height:100vh;
    }


`;
