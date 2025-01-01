import React from "react";
import { Section, Container, Navbar, Content, BtnPrimary, SocialBtn } from "../ui";
// since all the images are in publicFolder there is no need to import them

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="hero pt-40 pb-28 text-center max-w-3xl">
            <h1 className="text-white text-7xl">From chaos to clarity.</h1>
            <Content className="mt-1">Got a psychological query ?</Content>
            <BtnPrimary className="mt-4">Ask here</BtnPrimary>
            <div className="flex items-center justify-center gap-5 mt-5">
              <SocialBtn iconSrc="/icons/facebook.svg" iconAlt="facebook" url="/whatmind" />
              <SocialBtn iconSrc="/icons/instagram.svg" iconAlt="instagram" url="/whatmind" />
              <SocialBtn iconSrc="/icons/whatsapp.svg" iconAlt="whatsapp" url="/whatmind" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Home;
