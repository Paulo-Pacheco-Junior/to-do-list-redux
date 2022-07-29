import styled from 'styled-components';

export const Container = styled.div`
    padding:20px;
    max-width:1000px;
    width:100%;
    margin:auto;
    background-color:#6EB8D8;
    text-align:center;
    min-height:50vh;

    button {
        margin:10px 15px;
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
`;