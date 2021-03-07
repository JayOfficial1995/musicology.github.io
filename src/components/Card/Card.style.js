import styled, { css } from "styled-components";

import { CommonGridStyle, FlexBoxStyle } from "../../style/common.style";

export const CardStyle = styled.figure`
  background: ${(p) =>
    p.cardBackground
      ? css`
          ${(p) => p.theme.color.orangeColor}
        `
      : "none"};

  border-radius: ${(p) => (p.cardBackground ? "0.8rem" : "0")};

  @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    max-width: 37.5rem;
    margin: 0 auto;
  }

  .thumbnail-wrapper {
    display: block;
    margin-top: 4rem;

    .thumbhnail {
      max-width: 100%;
    }
  }

  .card-details {
    background: ${(p) =>
      p.cardDetailsBgColor
        ? css`
            ${(p) => p.theme.color.grayColor}
          `
        : "none"};

    padding: 3rem 2.9rem;
    margin-top: -0.4rem;

    text-align: center;

    .card-title {
      font-weight: ${(p) => p.theme.fontWeight.semiBold};
      text-transform: uppercase;
      color: ${(p) => p.theme.color.whiteColor};
    }

    .descritpion {
      font-family: ${(p) => p.theme.fontFamily.Montserrat};
      font-weight: ${(p) => p.theme.fontWeight.light};
      color: ${(p) => p.theme.color.whiteColor};
    }

    .price-btn {
      height: 5rem;
      width: 100%;

      margin-top: 2rem;
    }
  }
`;

export const HorizontalCardStyle = styled.figure`
  ${CommonGridStyle};

  grid-template-columns: 1fr 1fr;
  grid-gap: 0;

  @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }

  .thumbnail-wrapper {
    order: ${(p) => (p.sectionDirection ? "2" : "1")};

    .thumbnail {
      @media (max-width: ${(p) => p.theme.breakPoints.extraLargDevices}) {
        width: 100%;
        margin-bottom: -0.5rem;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    order: ${(p) => (p.sectionDirection ? "1" : "2")};

    background: url("./images/card-images/banner-card-image/orange-background.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;

    padding: 1rem 8rem;
    color: ${(p) => p.theme.color.whiteColor};

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      padding: 3rem 1rem;
      text-align: center;
      align-items: center;
      order: 2;
    }

    .title {
      text-transform: uppercase;
      color: ${(p) => p.theme.color.whiteColor};
      font-weight: ${(p) => p.theme.fontWeight.bold};

      @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
        font-size: ${(p) => p.theme.fontSize.h1};
      }
    }

    .description {
      font-family: ${(p) => p.theme.fontFamily.Montserrat};

      padding: 1rem 0;
    }
  }
`;
