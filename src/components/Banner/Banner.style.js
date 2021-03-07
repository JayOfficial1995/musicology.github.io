import styled from "styled-components";

import { CustomContainerStyle, FlexBoxStyle } from "../../style/common.style";

export const BannerStyle = styled.section`
  ${FlexBoxStyle};

  justify-content: flex-start;
  align-items: flex-end;

  height: 52rem;
  background: url("./images/banner-image/banner-one.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    background-position: -53rem 4rem;
  }

  .banner-container {
    width: 50rem;
    margin-left: 5rem;
    margin-bottom: 8.2rem;

    color: ${(p) => p.theme.color.whiteColor};

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      margin-left: 2rem;
    }

    .title {
      font-weight: ${(p) => p.theme.fontWeight.medium};
      color: ${(p) => p.theme.color.whiteColor};
    }

    .description {
      padding: 1rem 0;

      font-family: ${(p) => p.theme.fontFamily.Montserrat};
      font-size: ${(p) => p.theme.fontSize.h3};
    }
  }
`;
