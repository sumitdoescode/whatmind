import React from "react";
import { Section, SmallContainer, SectionHeading, ContentHeading, Content } from "../ui";

const Why = () => {
  return (
    <Section id="why">
      <SmallContainer>
        <SectionHeading className="text-left">.why?</SectionHeading>
        <div className="mt-20">
          <ContentHeading>Why I created this platform ?</ContentHeading>
          <Content className="mt-4">
            Through this journey of self-discovery, I found that understanding brought peace to my own struggles. It helped me overcome sorrow and confusion. Now, I want to extend that support to
            others.
          </Content>

          <Content className="mt-8">
            This platform is a safe space where you can share your story, express your confusion, and seek clarity. Whether you’re feeling stuck, overwhelmed, or simply need someone to listen, I’m
            here to help you navigate life’s challenges.
          </Content>
        </div>
      </SmallContainer>
    </Section>
  );
};

export default Why;
