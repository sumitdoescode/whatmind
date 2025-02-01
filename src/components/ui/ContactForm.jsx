import React from "react";
import { useForm } from "@formspree/react";
import { Input, ContentHeading, BtnPrimary } from "./index";

const ContactForm = ({ className = "" }) => {
    const [state, handleSubmit, reset] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
    if (state.succeeded) {
        return <ContentHeading className="mt-10">Thank you for reaching out to me!</ContentHeading>;
    }
    return (
        <form className={`flex flex-col gap-5 mt-8 ${className}`} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 md:flex-row">
                <Input type="text" placeholder="Your Name" name="Name" required={true} />
                <Input type="email" placeholder="Your Email" name="Email" required={true} />
            </div>

            <textarea
                name="Message"
                id="message"
                placeholder="Your Message"
                className="border-0 outline-none py-2 px-4 text-lg sm:text-xl lg:text-2xl text-white h-40 bg-[#1f1f1f] rounded-md inline-block placeholder:text-white"
                required={true}
            ></textarea>

            <BtnPrimary type="submit" className="self-start" disabled={state.submitting}>
                Send
            </BtnPrimary>
        </form>
    );
};

export default ContactForm;
