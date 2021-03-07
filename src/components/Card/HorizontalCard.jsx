import React from "react";

import { CustomButtonStyle } from "../../style/common.style";

import { HorizontalCardStyle } from "./Card.style";

function HorizontalCard(props) {
  const { sectionPostion, imageSrc, imageAlt, title, descritpion } = props;

  return (
    <HorizontalCardStyle sectionDirection={sectionPostion}>
      <picture className="thumbnail-wrapper">
        <img src={imageSrc} alt={imageAlt} className="thumbnail" />
      </picture>
      <figcaption className="details">
        <h1 className="title">{title}</h1>
        <p className="description">{descritpion}</p>
        <CustomButtonStyle primary>Read More</CustomButtonStyle>
      </figcaption>
    </HorizontalCardStyle>
  );
}

export default HorizontalCard;
