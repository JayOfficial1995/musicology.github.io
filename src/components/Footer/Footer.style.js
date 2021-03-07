import styled from "styled-components";

import {
  CommonGridStyle,
  CustomContainerStyle,
  FlexBoxStyle,
} from "../../style/common.style";

export const FooterStyle = styled.footer`
  background: ${(p) => p.theme.color.grayColor};
  color: ${(p) => p.theme.color.whiteColor};

  .footer-container {
    ${CustomContainerStyle};
    ${CommonGridStyle};

    grid-template-columns: 1fr 1fr;
    padding: 5rem 1.5rem;

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const FooterLeftStyle = styled.article`
  .heading {
    color: ${(p) => p.theme.color.whiteColor};
    padding-bottom: 0.5rem;
  }

  .description {
    font-weight: ${(p) => p.theme.fontWeight.regular};
    font-family: ${(p) => p.theme.fontFamily.Montserrat};
    padding: 1rem 0;
  }

  .social-icons-wrapper {
    ${FlexBoxStyle};

    justify-content: flex-start;

    .social-icon {
      ${FlexBoxStyle};

      background: ${(p) => p.theme.color.whiteColor};
      padding: 1rem;
      border-radius: 50%;
      margin-right: 1rem;

      > svg {
        width: 2rem;
        height: 2rem;
        fill: ${(p) => p.theme.color.grayColor};
      }
    }
  }
`;

export const FooterRightStyle = styled.article`
  ${CommonGridStyle};

  @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }

  .footer-menu-wrapper {
    .menu-wrapper {
      list-style: none;

      .menu-heading {
        text-transform: uppercase;
        color: ${(p) => p.theme.color.whiteColor};
        margin-bottom: 0.5rem;
      }

      .menu-item {
        padding: 0.2rem 0;

        .menu-item-link {
          text-decoration: none;
          color: ${(p) => p.theme.color.whiteColor};
          font-weight: ${(p) => p.theme.fontWeight.regular};
          font-family: ${(p) => p.theme.fontFamily.Montserrat};
          transition: 0.3s all linear;

          &:hover {
            color: ${(p) => p.theme.color.orangeColor};
          }
        }
      }
    }
  }
`;
