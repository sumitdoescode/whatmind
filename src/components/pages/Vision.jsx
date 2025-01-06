import React from "react";
import { Section, SmallContainer, SectionHeading, ContentHeading, Content } from "../ui";

const Vision = () => {
  return (
    <Section id="vision">
      <SmallContainer>
        <SectionHeading className="text-right">.vision</SectionHeading>
        <div>
          <Content>My vision is to nurture a culture of skepticism in the human mind, enabling individuals to question the status quo and seek deeper understanding</Content>

          <Content className="mt-8">
            I aim to integrate skepticism into daily life, empowering people to challenge assumptions, think critically, and arrive at their own conclusions without excessive reliance on external
            influences.
          </Content>

          <Content className="mt-8">
            By fostering a mindset of curiosity and self-reliance, I hope to contribute to a world where individuals can navigate complexities with clarity, make informed decisions, and build a more
            thoughtful and aware society
          </Content>
        </div>
      </SmallContainer>
    </Section>
  );
};

export default Vision;
