import React from "react";
import "antd/dist/antd.css";

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import HorizontalCard from "../../components/Card/HorizontalCard";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import {
  blogData,
  counterData,
  SectionData,
  testimonialsData,
} from "../../mockData/homeData";

import {
  FeaturedSectionStyle,
  HomeStyle,
  BlogsStyle,
  OurStatisticsSytle,
  TestimonailsStyle,
  SubscribeStyle,
} from "./Home.style";

const Subscribe = () => {
  return (
    <SubscribeStyle>
      <SectionWrapper
        title="Subscribe"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. "
        background="./images/section-backgrounds/subscribe-bg.jpg"
      >
        <article className="form-wrapper">
          <form action="post">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Your Email"
                className="subscribe-text-box"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </form>
        </article>
      </SectionWrapper>
    </SubscribeStyle>
  );
};

const Testimonials = () => {
  return (
    <TestimonailsStyle autoplay dots={false}>
      {testimonialsData.map((carousalItem) => {
        const { name, descritpion } = carousalItem;
        return (
          <>
            <article className="slider-details">
              <p className="description">{descritpion}</p>
              <h2 className="name">{name}</h2>
            </article>
          </>
        );
      })}
    </TestimonailsStyle>
  );
};

const OurStatistics = () => {
  return (
    <OurStatisticsSytle>
      <SectionWrapper
        title="Our Statistics"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. "
      >
        <article className="counter-container">
          {counterData.map((count) => {
            const { counter, heading } = count;
            return (
              <article>
                <h1 className="counter">{counter}</h1>
                <h2 className="heading">{heading}</h2>
              </article>
            );
          })}
        </article>
      </SectionWrapper>
    </OurStatisticsSytle>
  );
};

const Blogs = () => {
  return (
    <BlogsStyle>
      {blogData.map((blog) => (
        <HorizontalCard {...blog} />
      ))}
    </BlogsStyle>
  );
};

const FeaturedSection = () => {
  return (
    <FeaturedSectionStyle>
      {SectionData.map((section) => {
        const {
          title,
          description,
          sectionBackgroundImage,
          cardData,
        } = section;
        return (
          <SectionWrapper
            title={title}
            description={description}
            background={sectionBackgroundImage}
          >
            <section className="cards-container">
              {cardData.map((card) => {
                return <Card {...card} />;
              })}
            </section>
          </SectionWrapper>
        );
      })}
    </FeaturedSectionStyle>
  );
};

function Home() {
  return (
    <HomeStyle>
      <Banner />
      <FeaturedSection />
      <Blogs />
      <OurStatistics />
      <Testimonials />
      <Subscribe />
    </HomeStyle>
  );
}

export default Home;
