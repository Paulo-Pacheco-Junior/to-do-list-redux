import styled from 'styled-components';

export const Container = styled.div`
    padding:20px;
    max-width:1000px;
    width:100%;
    margin:auto;
    background-color:#6EB8D8;
    min-height:50vh;

    h1 {
        text-align:center;
    }

    .listknowledge {
        width:85%;
        margin:auto;
    }    

    p {
        line-height:21px;
        width:80%;
        margin:30px auto 10px auto;
    }
    span {
        color:#F02719;
        font-weight:bold;
    }

    @media(max-width:425px) {
       
       .listknowledge {
           width:90%;
       }    
   
       p {
           width:90%;
       }
    }

    @media(min-width:915px) {
        .listknowledge {
            margin-left:58px;
        }
    }
`;