import React from "react";
import hireMe from "../assets/images/proj.png";
const Hireme = () => {

  const contactMeClick = () => {
    // Scroll to the contacts section
    const contactsSection = document.getElementById("contact");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          I am a versatile and skilled professional specializing in Backend and Frontend Development, as well as Graphic Design. With a keen eye for detail and a passion for creating seamless user interfaces, I bring a unique blend of technical expertise and creative flair to every project. From crafting robust backend solutions to designing visually stunning frontend experiences, I am dedicated to delivering high-quality, user-centric results. Explore my portfolio to witness the fusion of technology and design that defines my approach. I am ready to contribute my skills and passion to your team—let's build something amazing together!
          </p>
          <button className="btn-primary mt-10" onClick={contactMeClick}>Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover" 
        />
      </div>
    </section>
  );
};

export default Hireme;
