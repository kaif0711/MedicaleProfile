import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const fetchDocInfo = () => {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc);
      console.log(foundDoc);
    };
    if (doctors.length) fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      document.title = `${docInfo.name} | Appointment Details`;
    } else {
      document.title = "Appointment | MedCare";
    }
  }, [docInfo]);

  return docInfo ? (
    <div
      className="px-4 py-6 md:px-10 lg:px-20"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Doctor Details */}
      <div
        className="flex flex-col sm:flex-row gap-4"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div>
          <img
            className="bg-green-200 w-full sm:max-w-72 rounded-lg object-cover"
            src={docInfo.image || assets.default_doctor_image}
            alt={docInfo.name}
          />
        </div>

        <div
          className="flex-1 border border-gray-400 rounded-lg p-6 md:p-8 bg-white mx-2 sm:mx-0 mt-[-60px] sm:mt-0 shadow-md"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>Email: {docInfo.mail}</p>
          </div>

          {/* About Section */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px]">
              {docInfo.about}
            </p>

            <h4 className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
              Work Experience:
            </h4>
            <div className="text-sm text-gray-500 max-w-[700px]">
              {docInfo.workExperience.map((exp, index) => (
                <p key={index} className="mb-1">
                  ({index + 1}) {exp}
                </p>
              ))}
            </div>

            <h4 className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
              Professional Qualification:
            </h4>
            <div className="text-sm text-gray-500 max-w-[700px]">
              {docInfo.professionalQualification.map((qual, index) => (
                <p key={index} className="mb-1">
                  ({index + 1}) {qual}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-medium text-gray-600" data-aos="fade-in">
        Loading appointment details...
      </p>
    </div>
  );
};

export default Appointment;
