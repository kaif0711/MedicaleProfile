import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import dr1 from "./dr1.jpeg"
import dr2 from "./dr2.jpeg"
import dr3 from "./dr3.jpeg"
import dr4 from "./dr4.jpeg"
import dr5 from "./dr5.jpeg"
import dr6 from "./dr6.jpeg"
import dr7 from "./dr7.jpeg"
import dr8 from "./dr8.jpeg"
import dr9 from "./dr9.jpeg"
import dr10 from "./dr10.jpeg"
import dr11 from "./dr11.jpeg"
import dr12 from "./dr12.jpeg"
import dr13 from "./dr13.jpeg"
import dr14 from "./dr14.jpeg"
import dr15 from "./dr15.jpeg"
import dr16 from "./dr16.jpeg"
import dr17 from "./dr17.jpeg"
import dr18 from "./dr18.jpeg"
import dr19 from "./dr19.jpeg"
import dr20 from "./dr20.jpeg"
import dr21 from "./dr21.jpeg"
import dr22 from "./dr22.jpeg"
import dr23 from "./dr23.jpeg"
// import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import loc_icon from "./location-svg.svg"
import linkdin_icon from "./linkedin-icon.svg"
import mail_icon from "./mail-icon.png"
import phone_icon from "./call-icon.png"
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import logo2 from "./logo2.png";
// import Dermatologist from "./Dermatologist.svg";
// import Gastroenterologist from "./Gastroenterologist.svg";
// import General_physician from "./General_physician.svg";
// import Gynecologist from "./Gynecologist.svg";
// import Neurologist from "./Neurologist.svg";
// import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  // logo,
  chats_icon,
  verified_icon,
  info_icon,
  loc_icon,
  linkdin_icon,
  mail_icon,
  phone_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
  dr1,
  dr2,
  dr3,
  dr4,
  dr5,
  dr6,
  dr7,
  dr8,
  dr9,
  dr10,
  dr11,
  dr12,
  dr13,
  dr14,
  dr15,
  dr16,
  dr17,
  dr18,
  dr19,
  dr20,
  dr21,
  dr22,
  dr23,
  logo2,
};

// export const specialityData = [
//   {
//     speciality: "General physician",
//     image: General_physician,
//   },
//   {
//     speciality: "Gynecologist",
//     image: Gynecologist,
//   },
//   {
//     speciality: "Dermatologist",
//     image: Dermatologist,
//   },
//   {
//     speciality: "Pediatricians",
//     image: Pediatricians,
//   },
//   {
//     speciality: "Neurologist",
//     image: Neurologist,
//   },
//   {
//     speciality: "Gastroenterologist",
//     image: Gastroenterologist,
//   },
// ];

export const doctors = [
  {
    _id: "doc1",
    name: "DR. MOHAMMED AIYUB F. MANSURI",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS , CIH",
    experience: "18+ Years",
    mail: "abu4183@gmail.com",
    about:
    "Dr. MOHAMMED AIYUB is committed to providing excellent medical care, focusing on patient health, early diagnosis, and effective treatment. He believes in preventive medicine and personalized care to ensure every patient gets the attention they need. With his medical knowledge and caring approach, Dr. MOHAMMED AIYUB creates a comfortable and trusting environment where patients feel supported in their health journey.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    workExperience: 
    [
      "1 year work as a CAUSALITY MEDICAL OFFICER at Lokhanwala General Hospital, Dariyapur, Ahmedabad.",
      "1 year experience as a Senior resident in Paediatrics at ESIC (Employees State Insurance Corporation) MODEL HOSPITAL, BAPUNAGAR, Ahmedabad.",
      "9 years experience as a FIRST AID TRAINER WITH St John Ambulance in various Industries.",
      "One month experience with International SOS in Reliance Jamnagar.",
      "4+ years of experience as PART TIME FACTORY MEDICAL OFFICER.",
      "6+ years of experience of INDUSTRIAL HEALTH CHECK-UP."
    ],
    professionalQualification: 
    [
      "M.B.B.S. (Bachelor in Medicine & Bachelor in Surgery). Passed in year 2006. From Government Medical College, Surat (Veer Narmad South Gujarat University) Gujarat – India. Registration No: G – 39676.",
      "C.I.H. (Certificate in Industrial Health) Year 2012. M.S. University, Baroda.",
      "BLS and ACLS from American Heart Association, Year 2012."
    ]
  },
  {
    _id: "doc2",
    name: "Dr. HARIS MANSURI",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS , CIH , ACLS , ITLS",
    experience: "18+ Years",
    mail: "mansuriharis@gmail.com",
    about:
    "Dr. Haris Mansuri is committed to providing excellent medical care, focusing on patient health, early diagnosis, and effective treatment. He believes in preventive medicine and personalized care to ensure every patient gets the attention they need. With his medical knowledge and caring approach, Dr. Haris Mansuri creates a comfortable and trusting environment where patients feel supported in their health journey.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    workExperience: 
    [
      "Government Medical College Surat(Internship) (Nov 2004- Nov 2005)",
      "Medlink Multispecialty Hospital Ahmedabad (Dec 2005- Nov 2006)",
      "Sal Hospital Ahmedabad (Dec 2006- Dec 2008)",
      "Medlink Multispecialty Hospital Ahmedabad (Jan 2009- Apr 2012)",
      "International SOS ECL Aditya, Cairn Energy (May 2012- Oct 2013)",
      "International SOS Foster Wheeler (Nov 2013- Jul 2014)",
      "International SOS Afcons Yekepa, Liberia (Aug 2014- Nov 2014)",
      "International SOS RIL, Rio Tinto (Dec 2014- Dec 2016)",
      "I am giving first aid training in industries through St. John Ambulance India and doing health checkups for Industries, MO in CHC Ahmedabad Sarkhej Ahmedabad (Dec 2016 Till Date)"
    ],
    professionalQualification: 
    [
      "M.B.B.S. (Bachelor in Medicine & Bachelor in Surgery) - Year 2006. From Government Medical College, Surat (Veer Narmad South Gujarat University) Gujarat – India. Registration No: G – 39676.",
      "C.I.H. (Certificate in Industrial Health) - Year 2012. M.S. University, Baroda.",
      "Approved and conducted by AHA (American Heart Association)",
      "BLS (Basic Life Support) - Year 2015. LIHS Mumbai (from American Heart Association)",
      "ACLS (Advanced Cardiovascular Life Support) - Year 2015. LIHS Mumbai (from American Heart Association)",
      "ITLS (International Trauma Life Support) - Year 2015. From LIHS, Mumbai",
      "Advanced Airway Management and Remote Doctor Training. International SOS Training Academy, Jakarta, Indonesia",
      "International Trauma Care and Life Support. International SOS Training Academy, Jakarta, Indonesia",
      "Basic Life Support Certification. International SOS Training Academy, Jakarta, Indonesia",
      "Essentials of Security and Alarm Centre Orientation. International SOS Training Academy, Jakarta, Indonesia"
    ]
  },
];
