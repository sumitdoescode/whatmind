import React from "react";
import { Section, Container, Navbar, Content, BtnPrimary, SocialBtn } from "../ui";
import * as motion from "motion/react-client";
import { TypeAnimation } from "react-type-animation";
// since all the images are in publicFolder there is no need to import them

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="hero pt-20 pb-9 lg:pt-32 lg:pb-16 text-center max-w-3xl">
            <h1 className="text-white text-5xl font-semibold sm:text-6xl lg:text-7xl lg:font-bold">
              From <span className="text-primary">chaos</span> to <span className="text-primary">clarity.</span>
            </h1>

            <Content className="mt-1 relative">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Confused about choices?",
                  1500, // wait 1.5s before replacing "Cofused about choices?" with "Need someone to talk to?"
                  "Need someone to talk to?",
                  1500, // wait 1.5s before replacing "Need someone to talk to?" with "Need clarity?"
                  "Need clarity?",
                  1500, // wait 1.5s before replacing "Need clarity?" with "Need a listener?"
                  "Need a listener?",
                  1500, // wait 1.5s before replacing "Need a listener?" with "Going through some hardship?"
                  "Going through some hardship ?",
                  1500,
                  "Want to regain the focus?",
                  1500,
                  "Want to get heard?",
                  1500,
                  "Feeling lost/stuck/overwhelmed?",
                  1500,
                ]}
                wrapper="span"
                speed={10}
                // style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </Content>

            <a href="#contact" className="border-0 outline-none text-xl text-dark bg-primary font-medium inline-block no-underline py-2 px-4 rounded-md mt-6">
              Ask here
            </a>
            {/* <BtnPrimary className="mt-4">Ask here</BtnPrimary> */}
            <div className="flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row sm:gap-10 ">
              <SocialBtn iconSrc="/icons/facebook.svg" iconAlt="facebook" text="/whatmind" url="https://www.facebook.com" />
              <SocialBtn iconSrc="/icons/instagram.svg" iconAlt="instagram" text="/whatmind" url="https://www.instagram.com" />
              <SocialBtn iconSrc="/icons/whatsapp.svg" iconAlt="whatsapp" text="/whatmind" url="https://www.whatsapp.com" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Home;
