import React from "react";
import { CustomButtonStyle } from "../../style/common.style";

import { BannerStyle } from "./Banner.style";

function Banner() {
  return (
    <BannerStyle>
      <article className="banner-container">
        <h1 className="title">Musicology</h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eligendi aliquam aliquid libero harum possimus.
        </p>
        <CustomButtonStyle>Register Now</CustomButtonStyle>
      </article>
    </BannerStyle>
  );
}

export default Banner;
