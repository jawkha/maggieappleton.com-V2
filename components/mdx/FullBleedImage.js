import styled from "styled-components";

const FullBleedImage = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1400px"};
    margin: 0 auto;
`;

export default FullBleedImage;
