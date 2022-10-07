import styled from "styled-components";

export const Line = styled.li`
    text-decoration:${props=>props.linethrough ? 'line-through': 'none'};
    font-weight:${props=>props.linethrough ? 'none': 'bold'};
    color:${props=>props.linethrough ? 'red': 'none'};
`