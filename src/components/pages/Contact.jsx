import React from "react";
import { Section, SmallContainer, SectionHeading, Input, Content, BtnPrimary } from "../ui";

const Contact = () => {
  return (
    <Section id="contact">
      <SmallContainer>
        <SectionHeading className="text-left">.contact</SectionHeading>
        <div className="mt-20">
          <Content>feel free to reach out to me. Together, we can explore your struggles and work toward meaningful solutions.</Content>

          <form action={import.meta.env.VITE_FORM_URL} method={import.meta.env.VITE_FORM_URL_METHOD} className="flex flex-col gap-5 mt-8">
            <div className="flex flex-col gap-4 md:flex-row">
              <Input type="text" placeholder="Your Name" name="Name" />
              <Input type="email" placeholder="Your Email" name="Email" />
            </div>
            <textarea
              name="Message"
              id=""
              placeholder="Your Message"
              className="border-0 outline-none py-2 px-4 text-xl text-white h-40 bg-[#1f1f1f] rounded-md inline-block placeholder:text-white"
            ></textarea>
            <BtnPrimary type="submit" className="self-start">
              Send
            </BtnPrimary>
          </form>
        </div>
      </SmallContainer>
    </Section>
  );
};

export default Contact;
