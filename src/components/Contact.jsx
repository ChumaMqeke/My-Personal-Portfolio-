import React, { useState } from "react";

const Contact = () => {
  const [isMessageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contact_info = [
    { logo: "mail", text: "mqekec3@gmail.com" },
    { logo: "logo-whatsapp", text: "+27 781 554 750" },
    {
      logo: "location",
      text: "Cape Town",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Your form submission logic here (e.g., using Formspree)

    // Assuming the form submission is successful, display the popup
    setMessageSent(true);

    // You can reset the form or perform any other necessary actions here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          
          <form className="flex flex-col flex-1 gap-5" action="https://formspree.io/f/xjvnkzjp" method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
             <button type="submit" className="btn-primary w-fit">Send Message</button>
</form>

          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {isMessageSent && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-md">
              <p className="text-2xl text-cyan-600 font-semibold">Message Sent!</p>
              <button
                onClick={() => setMessageSent(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
