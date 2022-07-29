import styled from 'styled-components';

export const Container = styled.div`
    display:${props=>props.line.id  === 'X' ? 'none':'flex'};
    justify-content:flex-start;
    align-items:center;
    text-decoration:${props => props.line.status === true ? 'line-through' : 'none'};
    font-size:17px;
    color:#1E5771;
    padding:8px;
    border-bottom:1px solid #3394C1;
    background-color:#FEFEEB;
    max-width:900px;

    input {
        min-width:25px;
        min-height:25px;
        margin-right:10px;
    }

    @media(max-width:915px) {
        margin-left:-40px;
    }

    @media(min-width:916px) and (max-width:960px) {
        margin-left:-15px;
    }
`;
