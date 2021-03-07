import styled, { css } from "styled-components";

export const CommonGridStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
`;

export const FlexBoxStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomContainerStyle = css`
  max-width: 124.4rem;
  margin: 0 auto;
`;

export const CenteredLayoutStyle = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CustomButtonStyle = styled.button`
  background: ${(p) => p.theme.color.orangeColor};
  color: ${(p) => p.theme.color.whiteColor};
  font-family: ${(p) => p.theme.fontFamily.Oswald};

  padding: 1rem 8rem;
  border-radius: 0.3rem;
  border: none;
  transition: 0.3s all linear;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: ${(p) => p.theme.color.grayColor};
  }

  ${({ primary }) =>
    primary &&
    css`
      border: 0.2rem solid ${(p) => p.theme.color.grayColor};
      background: ${(p) => p.theme.color.grayColor};

      &:hover {
        background: ${(p) => p.theme.color.orangeColor};
      }
    `}
`;
