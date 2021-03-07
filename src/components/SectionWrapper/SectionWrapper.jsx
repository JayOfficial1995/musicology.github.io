import Title from "antd/lib/typography/Title";
import React from "react";

import { SectionWrapperStyled } from "./SectionWrapper.style";

function SectionWrapper(props) {
  const { title, description, children, background } = props;
  return (
    <SectionWrapperStyled background={background}>
      <article className="section-wrapper">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        {children}
      </article>
    </SectionWrapperStyled>
  );
}

export default SectionWrapper;
