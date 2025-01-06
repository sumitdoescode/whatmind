import React from "react";
import { Section, SmallContainer, SectionHeading, Input, Content, BtnPrimary } from "../ui";

const Contact = () => {
  return (
    <Section id="contact" isLast="true">
      <SmallContainer>
        <SectionHeading className="text-left">.contact</SectionHeading>

        <Content>feel free to reach out to me. Together, we can explore your struggles and work toward meaningful solutions.</Content>

        <form action={import.meta.env.VITE_FORM_URL} method={import.meta.env.VITE_FORM_URL_METHOD} className="flex flex-col gap-5 mt-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input type="text" placeholder="Your Name" name="Name" required={true} />
            <Input type="email" placeholder="Your Email" name="Email" required={true} />
          </div>

          <textarea
            name="Message"
            id=""
            placeholder="Your Message"
            className="border-0 outline-none py-2 px-4 text-lg sm:text-xl lg:text-2xl text-white h-40 bg-[#1f1f1f] rounded-md inline-block placeholder:text-white"
            required={true}
          ></textarea>

          <BtnPrimary type="submit" className="self-start">
            Send
          </BtnPrimary>
        </form>
      </SmallContainer>
    </Section>
  );
};

export default Contact;
