import React, { useState } from "react";
import { assets } from "../assets/assets";
import Modal from "react-modal";

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    assets.dr1,
    assets.dr2,
    assets.dr3,
    assets.dr4,
    assets.dr5,
    assets.dr8,
    assets.dr11,
    assets.dr13,
    assets.dr16,
    assets.dr17,
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="text-gray-900 my-16 md:mx-10">
      {/* About Us Section */}
      <h1 className="text-4xl text-green-700 font-medium text-center mb-10 my-10">Services</h1>

      {/* Section 1: Image Left, Text Right */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-4 max-w-6xl mx-auto mb-16">
        <div className="lg:w-1/2">
          <img
            src={assets.dr14}
            alt="Dr. Aiyub Mansuri"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2 text-lg leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">
            Expert Medical Team
          </h2>
          <p>
            Our team, led by <strong>Dr. Aiyub Mansuri</strong> and{" "}
            <strong>Dr. Haris Mansuri</strong>, brings a combined 30+ years of
            medical experience in occupational health.
          </p>
          <p>
            With strong credentials in CIH (AFIH), Family Medicine, and
            corporate medical consulting, we ensure best-in-class care and
            training.
          </p>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-4 max-w-6xl mx-auto mb-16">
        <div className="lg:w-1/2 text-lg leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">
            First Aid + CPR Training
          </h2>
          <p>
            We conduct certified, hands-on{" "}
            <strong>DISH-approved First Aid & CPR Training</strong> for
            corporate teams and industrial workers — empowering them to act fast
            in emergencies.
          </p>
          <p>
            Our on-site sessions include live demos, interactive tools, and
            post-training assessments.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={assets.dr4}
            alt="First Aid Training Session"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Section 3: Image Left, Text Right */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-4 max-w-6xl mx-auto mb-16">
        <div className="lg:w-1/2">
          <img
            src={assets.dr16}
            alt="Industrial Health Setup"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2 text-lg leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">
            Industrial Health Solutions
          </h2>
          <p>
            From periodic health checkups (Form 32/33) to{" "}
            <strong>PFT, ECG, Audiometry, and Vaccinations</strong> — we provide
            turnkey medical services tailored for factory and construction
            sites.
          </p>
          <p>
            We also assist in{" "}
            <strong>
              setting up Ambulance Units, Occupational Health Centers
            </strong>
            , and supplying medical kits & safety gear.
          </p>
        </div>
      </section>
      <h1 className="text-4xl font-medium text-green-700 text-center mb-12">
        About
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition"
            onClick={() => openModal(index)}
          >
            <img
              className="w-full h-[250px] object-cover transition-all duration-300 group-hover:scale-105"
              src={image}
              alt={`Training ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        ariaHideApp={false}
      >
        <div className="relative w-full h-full flex items-center justify-center px-6">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-500"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-green-400"
          >
            &#10094;
          </button>
          <img
            src={images[currentIndex]}
            alt="Full View"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-green-400"
          >
            &#10095;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default About;