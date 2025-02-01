import React from "react";
import { SectionHeading, ContentHeading, Content } from "../ui/index";

const TestimonialCard = ({ id, message, name }) => {
    return (
        <div className="bg-lightDark p-5 rounded-md">
            <Content>{message}</Content>
            <h3 className="text-primary text-xl font-medium text-right">-{name}</h3>
        </div>
    );
};

export default TestimonialCard;
