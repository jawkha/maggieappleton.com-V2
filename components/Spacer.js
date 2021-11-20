import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

const handleSize = (size) => {
  switch (size) {
    case "small":
      return "var(--space-m)";
    case "large":
      return "var(--space-3xl)";
    default:
      return "var(--space-2xl)";
  }
};

export const Spacer = styled.div`
  height: ${(props) => handleSize(props.size)};
  @media ${breakpoints.mediaSM} {
    height: calc(${(size) => handleSize(size)} / 2);
  }
`;
