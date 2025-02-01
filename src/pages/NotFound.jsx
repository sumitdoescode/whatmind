import React from "react";
import { Section, SmallContainer, SectionHeading, ContentHeading, Content, BtnPrimary } from "../components/ui/index";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Section className="h-dvh">
            <SmallContainer className="flex items-center justify-center h-full">
                <div className="text-center max-w-3xl">
                    <SectionHeading className="font-bold">404</SectionHeading>
                    <SectionHeading className="font-semibold">Page Not Found</SectionHeading>
                    <Content className="mt-4">The page you're looking for may have been removed, had its name changed, or is temporarily unavailable.</Content>
                    <BtnPrimary
                        className="mt-4"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go Back Home
                    </BtnPrimary>
                </div>
            </SmallContainer>
        </Section>
    );
};

export default NotFound;
