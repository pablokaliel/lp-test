import { createGlobalStyle } from "styled-components";
import Background from '../assets/background.png'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Poppins";
        text-decoration:none;
        list-style:none;
    }
    html,#root,body,.App{
        background: #fafcff;
        
        color:#0303;
       
        width:100%;
        height:100vh;
    }
`;
