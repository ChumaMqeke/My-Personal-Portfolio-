import React from "react";
import hero from "../assets/images/mc.png";

const Hero = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/your_instagram_username/",
    facebook: "https://www.facebook.com/your_facebook_username/",
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://github.com/ChumaMqeke",
  };

  const contactClick = () => {
    // Scroll to the contacts section
    const contactsSection = document.getElementById("contact");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-2/3 h-full object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Chuma Mqeke</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Junior Software Developer
          </h4>
          <button className="btn-primary mt-8" onClick={contactClick}>Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.entries(socialMediaLinks).map(([platform, link]) => (
              <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={`logo-${platform}`}></ion-icon>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
