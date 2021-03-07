import styled from "styled-components";
import {
  FlexBoxStyle,
  CustomContainerStyle,
  CenteredLayoutStyle,
} from "../../style/common.style";

export const NavbarStyle = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(p) => p.theme.color.grayColor};
  height: 10.2rem;
  padding: 1.5rem 0;
  z-index: 3;

  box-shadow: 0px 2px 9px -5px rgba(118, 116, 116, 0.75);
  -webkit-box-shadow: 0px 2px 9px -5px rgba(118, 116, 116, 0.75);
  -moz-box-shadow: 0px 2px 9px -5px rgba(118, 116, 116, 0.75);

  .navbar-container {
    ${CustomContainerStyle};
    ${CenteredLayoutStyle};
    ${FlexBoxStyle};

    .site-logo-wrapper {
      .site-logo {
        width: 12.8rem;
      }
    }

    .icons-wrapper {
      ${FlexBoxStyle};

      .menu-icon {
        margin-right: 1rem;
        cursor: pointer;
        display: none;

        @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
          display: block;
        }

        &.toggle-icon {
          .bar {
            &:first-child {
              display: none;
            }

            &:nth-child(2) {
              transform: rotate(50deg);
            }

            &:last-child {
              transform: translateY(-6.97px) rotate(-50deg);
            }
          }
        }

        .bar {
          width: 3rem;
          height: 0.3rem;
          background: ${(p) => p.theme.color.whiteColor};
          margin-bottom: 0.5rem;
          transition: 0.3s all linear;
        }
      }

      .search-icon {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;

        > svg {
          width: 2rem;
          height: 2rem;
          fill: ${(p) => p.theme.color.whiteColor};
          transition: 0.3s all linear;

          &:hover {
            fill: ${(p) => p.theme.color.orangeColor};
          }
        }
      }
    }

    .search-bar {
      position: fixed;
      top: 10rem;
      left: 0;
      width: 100%;
      height: 6rem;
      padding: 1rem 5rem;
      display: ${(p) => (p.toggleSearchBar ? "none" : "block")};
      border: 1px solid ${(p) => p.theme.color.orangeColor};
      background: ${(p) => p.theme.color.orangeColor};
      outline: none;
      border-radius: 0;
      color: ${(p) => p.theme.color.whiteColor};
      z-index: 2;
      transition: 0.3s all linear;
      overflow: hidden;

      &::placeholder {
        color: ${(p) => p.theme.color.whiteColor};
      }
    }
  }
`;

export const MenubarStyle = styled.ul`
  ${FlexBoxStyle};

  list-style: none;
  transition: 0.3s all linear;

  @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    position: fixed;
    top: 10rem;
    left: ${(p) => (p.menuActive ? "0" : "-100%")};
    background: ${(p) => p.theme.color.grayColor};
    border-top: 1px solid ${(p) => p.theme.color.orangeColor};
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    align-items: flex-start;
  }

  .menu-item {
    &:last-child {
      .menu-item-link {
        margin: 0;

        @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
          margin-left: 3rem;
        }
      }
    }

    .menu-item-link {
      text-decoration: none;
      color: ${(p) => p.theme.color.whiteColor};
      font-size: ${(p) => p.theme.fontSize.h3};
      text-transform: uppercase;
      margin-right: 5rem;
      transition: 0.3s all linear;

      @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
        margin-right: 0;
        margin-left: 3rem;
        padding: 1rem 0;
        display: block;
      }

      &:hover {
        color: ${(p) => p.theme.color.orangeColor};
      }
    }
  }
`;
