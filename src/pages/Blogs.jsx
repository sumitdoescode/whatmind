import React from "react";
import { Section, Container, SmallContainer, SectionHeading, Content } from "../components/ui/index";

const Blogs = () => {
    return (
        <Section className="pt-32">
            <SmallContainer>
                <SectionHeading className="">.blogs</SectionHeading>
                <div className="mt-10 flex flex-col gap-8">
                    <img src="/images/1.jpg" alt="" />
                    <img src="/images/2.jpg" alt="" />
                    <img src="/images/3.jpg" alt="" />
                    <img src="/images/4.jpg" alt="" />
                    <img src="/images/5.jpg" alt="" />
                </div>
            </SmallContainer>
        </Section>
    );
};

export default Blogs;
