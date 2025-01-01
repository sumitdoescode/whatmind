import React from "react";
import { Section, SmallContainer, SectionHeading, ContentHeading, Content } from "../ui";

const About = () => {
  return (
    <Section id="about">
      <SmallContainer>
        <SectionHeading className="text-right">.about</SectionHeading>
        <div className="mt-20">
          <ContentHeading>Who I Am</ContentHeading>
          <Content className="mt-4">I’m just a normal guy, deeply curious about human behavior and the world around us.</Content>

          <ContentHeading className="mt-16">My Journey</ContentHeading>
          <Content className="mt-4">
            Since childhood, I’ve been fascinated by why people act the way they do and how everything in life works. But before I could explore these interests, life took its course. I became an
            engineer and faced all kinds of challenges—from financial struggles to the pain of losing loved ones, to navigating life’s many uncertainties.
          </Content>

          <Content className="mt-4">
            "These experiences pushed me to question, reflect, and understand not just the world but also myself and the people around me. Along the way, my childhood curiosity was reignited, and I
            began exploring human behavior and the nature of our struggles more deeply.
          </Content>
        </div>
      </SmallContainer>
    </Section>
  );
};

export default About;
