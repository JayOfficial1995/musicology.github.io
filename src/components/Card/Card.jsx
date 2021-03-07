import React from "react";
import { CustomButtonStyle } from "../../style/common.style";
import { CardStyle } from "./Card.style";

function Card(props) {
  const {
    imageSrc,
    imageAlt,
    title,
    description,
    buttonText,
    detailsbgColor,
    backgroundColor,
  } = props;
  return (
    <CardStyle
      cardDetailsBgColor={detailsbgColor}
      cardBackground={backgroundColor}
    >
      <picture className="thumbnail-wrapper">
        <img src={imageSrc} alt={imageAlt} className="thumbhnail" />
      </picture>

      <figcaption className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="descritpion">{description}</p>

        {buttonText && (
          <CustomButtonStyle primary className="price-btn">
            {buttonText}
          </CustomButtonStyle>
        )}
      </figcaption>
    </CardStyle>
  );
}

export default Card;
