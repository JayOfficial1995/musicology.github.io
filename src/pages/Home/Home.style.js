import { Carousel } from "antd";

import styled from "styled-components";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import { CommonGridStyle, FlexBoxStyle } from "../../style/common.style";

export const HomeStyle = styled.main``;

export const FeaturedSectionStyle = styled.section`
  .cards-container {
    ${CommonGridStyle};

    margin-top: 8rem;

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const BlogsStyle = styled.section``;
export const OurStatisticsSytle = styled.section`
  background: ${(p) => p.theme.color.grayColor};

  .counter-container {
    ${CommonGridStyle};

    margin: 9rem 0;

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
    }

    .counter {
      color: ${(p) => p.theme.color.whiteColor};
      font-weight: ${(p) => p.theme.fontWeight.semiBold};
    }

    .heading {
      font-weight: ${(p) => p.theme.fontWeight.light};
      color: ${(p) => p.theme.color.whiteColor};
    }
  }
`;

export const TestimonailsStyle = styled(Carousel)`
  background: url("./images/banner-image/testimonials-background.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60rem;

  .carousal-dots {
    display: none;
  }

  .slider-details {
    ${FlexBoxStyle};

    flex-direction: column;
    justify-content: center;

    text-align: center;

    max-width: 80rem;
    height: 60rem;
    margin: auto;
    padding: 0 1.5rem;

    .description {
      color: ${(p) => p.theme.color.whiteColor};
      font-weight: ${(p) => p.theme.fontWeight.regular};
      font-family: ${(p) => p.theme.fontFamily.Montserrat};
      font-size: ${(p) => p.theme.fontSize.h3};
    }

    .name {
      color: ${(p) => p.theme.color.whiteColor};
      font-weight: ${(p) => p.theme.fontWeight.semiBold};
      text-transform: uppercase;
    }
  }
`;

export const SubscribeStyle = styled.section`
  .form-wrapper {
    margin-top: 5rem;

    .input-wrapper {
      ${FlexBoxStyle};

      justify-content: center;

      .subscribe-text-box {
        border: none;
        padding: 1rem;
        width: 50rem;
        outline: none;
      }

      .subscribe-btn {
        padding: 1rem;
        background: ${(p) => p.theme.color.grayColor};
        border: none;
        color: ${(p) => p.theme.color.whiteColor};
        cursor: pointer;
      }
    }
  }
`;
