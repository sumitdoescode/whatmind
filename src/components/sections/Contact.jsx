import React from "react";
import { Section, SmallContainer, SectionHeading, Content, ContactForm } from "../ui/index";

const Contact = () => {
    return (
        <Section id="contact" paddingLevel="low">
            <SmallContainer>
                <SectionHeading className="text-left">.contact</SectionHeading>

                <div className="mt-10">
                    <Content>feel free to reach out to me. Together, we can explore your struggles and work toward meaningful solutions.</Content>
                    <ContactForm className="mt-4" />
                </div>
            </SmallContainer>
        </Section>
    );
};

export default Contact;
