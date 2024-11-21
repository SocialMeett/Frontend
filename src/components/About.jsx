import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../assets/images/pic 17.jpg";
import pics from "../assets/images/pic 9.jpg";
import picss from "../assets/images/pic 14.jpg";
import picsss from "../assets/images/pic 15.jpg";

// Testimonials Data
const testimonials = [
    {
        id: 1,
        text: "TrackMeet has completely changed how I meet up with my friends. No more getting lost or waiting for hours because we couldn’t figure out where to meet. The real-time location sharing and ETA updates make everything so much easier and less stressful. I always know exactly when they’ll arrive!",
        name: "Emma, TrackMeet User",
        image: pic,
    },
    {
        id: 2,
        text: "As a logistics officer, TrackMeet has revolutionized the way we manage our deliveries. The ability to track drivers in real time, get accurate ETAs, and send proximity alerts has improved our efficiency and reduced delays. It's a game-changer for streamlining operations and improving customer satisfaction.",
        name: "David, Logistics Officer",
        image: pics,
    },
    {
        id: 3,
        text: "Planning events used to be a logistical nightmare, especially with coordinating attendees and ensuring their safety. TrackMeet has made this so much easier. With real-time location tracking and proximity alerts, I can manage event logistics without worry. And the panic button feature gives me peace of mind knowing that help is always a tap away.",
        name: "Marteykor, Event Planner",
        image: picss,
    },
    {
        id: 4,
        text: "As a busy family, keeping track of everyone’s whereabouts used to be a challenge. TrackMeet makes it so easy. Whether my kids are at school or my husband’s on a business trip, I know exactly where they are, and we can coordinate better. The safety features are especially important—having that emergency panic button in place gives me peace of mind.",
        name: "Gloria, Mother of Three",
        image: picsss,
    },
];

function AboutAndTestimonials() {
    // Slick Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000, // Change slides every 4 seconds
        arrows: true, // Retain arrows for manual navigation
    };

    return (
        <section className="py-16 bg-white" id="about">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* About Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600 mb-6">
                        At TrackMeet, we simplify connections with real-time location sharing, ETA updates, and emergency alerts. Whether you're meeting friends, coordinating teams, or managing logistics, we make every interaction smarter and safer.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Our mission is to bring convenience, efficiency, and peace of mind to both individuals and businesses, helping you stay connected and in control wherever you are.
                    </p>
                    <p className="text-gray-600 mb-6">
                        From keeping families safe to optimizing field services and logistics, TrackMeet is transforming how we navigate both our personal and professional lives. Join us as we redefine coordination, bringing convenience and peace of mind to every moment.
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Testimonials Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        What Our Clients Say
                    </h2>
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="text-center bg-[#DBD9B4] p-12 rounded-lg shadow-md">
                                {/* Circular Image */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-orange-500"
                                />
                                {/* Testimonial Text */}
                                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                                {/* Client Name */}
                                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default AboutAndTestimonials;
