import styled from 'styled-components';

export const Container = styled.div`

display:flex;
justify-content:space-between;
align-items:center;
max-width:1000px;
width:100%;
margin:auto;
background-color:#6EB8D8;
padding:20px;
border-bottom:1px solid #777;

    .logo {
        width:130px;
        height:75px;
        text-decoration:none;
            
        .logo-1,
        .logo-2 {
            font-weight:bold;
        }
        .logo-1 {
            font-size:30px;
            color:#EFF7FB;
            border:1px solid #000;
            background-color:#266e93;
            padding:10px;
            border-radius:35px;
            border-top-left-radius:5px;
            border-bottom-right-radius:0px;
        }
        .logo-2 {
            font-size:50px;
            color:#F02719;
            margin-left:-12px;
        }
    }

    nav {
        flex:1;
        margin-right:20px;
        
    }

    .nav-toggle{
        display:none;
        flex-direction:column;
        align-items:flex-end;
        justify-content:center;
        cursor:pointer;

        .line-toggle {
        background-color:#F02719;
        color:yellow;
        width:35px;
        height:4px;
        margin-bottom:5px;
        margin-right:70px;
        border-radius:2px;
        }
    }

    .nav-laptop {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        
    }

    .nav-laptop li {
        list-style:none;
    }

    .nav-laptop a {
        padding:10px 15px;
        color:#000;
        text-decoration:none;
    
        &:hover {
            color:#555;
        }
    }

    button {
        margin:0 15px;
        padding:10px 20px;
        background-color:#266e93;
        font-size:18px;
        font-weight:bold;
        color:#eff7fb;
        border:1px solid #000;
        border-radius:15px;
        cursor:pointer;

        &:hover {
            background-color:#1E5875;
        }
    }
            
    @media(max-width:768px) {
        .nav-laptop {
            display:none;
        }

        .nav-toggle{
            display:flex;
        }
    }

    @media(max-width:425px) {
        .nav-toggle .line-toggle {
            margin-right:20px;
        }

    }
`;

export const MenuToggle = styled.div`

display:none;
text-align:center;
justify-content:center;
align-items:center;
max-width:1000px;
width:100%;
margin:auto;
background-color:#8EC8E1;
padding:20px;
border-bottom:1px solid #777;

    .nav-tablet li {
        list-style:none;
        margin:10px;
        margin-left:-30px;
    }

    .nav-tablet a {
        color:#000;
        text-decoration:none;
        font-size:20px;

        &:hover {
            color:#555;
        }
        
    }

    button {
        margin:8px 0px;
        padding:10px 20px;
        background-color:#266e93;
        font-size:18px;
        font-weight:bold;
        color:#eff7fb;
        border:1px solid #000;
        border-radius:15px;
        cursor:pointer;
        &:hover {
            background-color:#1E5875;
        }
    }

    @media(max-width:768px) {
        display:${props=>props.visible === true ? 'flex':'none'};

    }
`;