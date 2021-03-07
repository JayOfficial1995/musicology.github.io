import styled from "styled-components";

import {
  CustomContainerStyle,
  CenteredLayoutStyle,
} from "../../style/common.style";

export const SectionWrapperStyled = styled.section`
  background: url(${(p) => p.background}) no-repeat;
  background-size: cover;
  padding: 8rem 0;

  .section-wrapper {
    ${CustomContainerStyle};
    ${CenteredLayoutStyle}

    text-align: center;

    .title {
      text-transform: uppercase;
      color: ${(p) => p.theme.color.whiteColor};
      font-weight: ${(p) => p.theme.fontWeight.bold};

      @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
        font-size: ${(p) => p.theme.fontSize.h1};
      }
    }

    .description {
      width: 65rem;
      margin: 1rem auto;
      color: ${(p) => p.theme.color.whiteColor};

      font-family: ${(p) => p.theme.fontFamily.Montserrat};
      font-size: ${(p) => p.theme.fontSize.h3};

      @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
        width: auto;
      }
    }
  }
`;
