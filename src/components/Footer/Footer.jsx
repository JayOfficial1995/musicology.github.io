import React from "react";

import { footerMenuData, socialNetworks } from "../../mockData/footerData";

import { FooterLeftStyle, FooterStyle, FooterRightStyle } from "./Footer.style";

const FooterRight = () => {
  return (
    <FooterRightStyle>
      {footerMenuData.map((menuItem) => {
        const { heading, menuItems } = menuItem;
        return (
          <article className="footer-menu-wrapper">
            <ul className="menu-wrapper">
              <h2 className="menu-heading">{heading}</h2>
              {menuItems.map((menus) => {
                return (
                  <li className="menu-item">
                    <a href="" className="menu-item-link">
                      {menus.linkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </FooterRightStyle>
  );
};

const FooterLeft = () => {
  return (
    <FooterLeftStyle>
      <h2 className="heading">Musicology</h2>
      <p className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eaque
        maiores ad eius, voluptates nihil libero debitis et architecto hic omnis
        facere, tempore totam suscipit fuga nostrum placeat? Alias, provident.
      </p>
      <article className="social-icons-wrapper">
        {socialNetworks.map((profile) => {
          const { icon, url } = profile;
          return (
            <a href={url} target="_blank" className="social-icon">
              {icon}
            </a>
          );
        })}
      </article>
    </FooterLeftStyle>
  );
};

function Footer() {
  return (
    <FooterStyle>
      <section className="footer-container">
        <FooterLeft />
        <FooterRight />
      </section>
    </FooterStyle>
  );
}

export default Footer;
