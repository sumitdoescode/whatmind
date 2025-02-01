import React from "react";
import { Section, Container, TestimonialCard } from "../ui/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
    {
        id: 1,
        message:
            "Reaching out for help was the best decision I made. I was overwhelmed by negativity and doubts, unsure if anyone could help. But not only did he listen, he guided me step by step, showing me my worth and how to break free from suffering. His support reshaped my mindset, helping me embrace positivity and rebuild my energy. I’m grateful for this guidance—it truly changed my life.",
        name: "Soniya",
    },
    {
        id: 2,
        message:
            "Taking career advice from you is the best decision I have made. Because of you, I have learned how to develop strategies for moving forward and cope with all the difficulties I faced during my studies. I got motivated and confident, which was lacking in me for a long time, only through your amazing counseling sessions. You also offered me what is best for me and taught me how to deal with negativity, helping me shape my career path.",
        name: "Shakshi",
    },
    {
        id: 3,
        message:
            "I'm so grateful for Ankit's support when I was overwhelmed. He listened without judgment, provided clarity, and offered thoughtful advice that helped me gain confidence. His patience and wisdom made a real difference—I highly recommend reaching out to him if you need guidance.",
        name: "Shanthi Priya",
    },
    {
        id: 4,
        message:
            "I had tried different approaches to tackle my personal struggles, but nothing seemed to work. Then I found this support, and it changed everything. The guidance was not just theoretical but practical, giving me tangible tools to work with. I’m more grounded and focused than I’ve been in years. This experience has completely shifted my perspective on life and myself.",
        name: "Raj",
    },
    {
        id: 5,
        message:
            "I cannot thank you enough for the support you’ve given me. After years of feeling lost and unsure of myself, I now feel empowered and capable of handling whatever life throws my way. Your approach is compassionate yet firm, and it helped me see things from a new, healthier perspective. I’m so glad I took the step to reach out—it’s truly been life-changing.",
        name: "Neha",
    },
    {
        id: 6,
        message:
            "When I first reached out, I was overwhelmed with emotions and unsure if things would ever get better. But the support I received was nothing short of incredible. Not only did I learn how to manage my emotions, but I also discovered new ways to reframe my thoughts and overcome my challenges. I feel stronger, more resilient, and ready to face the future with confidence. This has been a life-altering experience.",
        name: "Ravi",
    },
];

const Testimonials = () => {
    return (
        <Section>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1536: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 0, // No delay between slides
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                speed={10000} // Adjust this value for the speed of the transition (in ms)
                loop={true}
                modules={[Autoplay]}
                style={{ transitionTimingFunction: "linear" }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialCard {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};

export default Testimonials;
