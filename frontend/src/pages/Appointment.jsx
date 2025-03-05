import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* {------ Doctor details -------} */}
        {/* <div className='felx flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20 '> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-green-200 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* {--- DOc info : name ,degree , experience} */}
            <p className="flex items-center gap-2 text-2x1 font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p> {docInfo.degree}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>Email : {docInfo.mail}</p>
            </div>

            {/* {------Doc about------} */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px]">
                {docInfo.about}
              </p>
              <h4 className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                Work Experience:
              </h4>
              <div className="text-sm text-gray-500 max-w-[700px]">
                {docInfo.workExperience.map((exp, index) => (
                  <p key={index} className="mb-1">
                    ({index + 1}) {exp}
                  </p>
                ))}
              </div>
              <h4 className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                professional Qualification:
              </h4>
              <div className="text-sm text-gray-500 max-w-[700px]">
                {docInfo.professionalQualification.map((exp, index) => (
                  <p key={index} className="mb-1">
                    ({index + 1}) {exp}
                  </p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
