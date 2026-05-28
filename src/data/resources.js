import { INTAKE_URL, CDN, BRYAN_CV, MATT_CV } from "../constants/company";

const sections = [
  {
    title: "New Case Intake Form",
    desc: "Start a new case directly online. Complete the intake form to provide initial case details and contact information — our team will follow up promptly.",
    docs: [
      { name: "New Intake Form (Online)", file: INTAKE_URL, external: true },
    ],
  },
  {
    title: "Cellular Data Records (CDR)",
    desc: "Court-ready subpoena forms for all major US carriers. Use these to formally request Call Detail Records in the correct format for each carrier.",
    docs: [
      { name: "AT&T CDR",       file: `${import.meta.env.BASE_URL}docs/ATT CDR.pdf` },
      { name: "Sprint CDR",     file: `${import.meta.env.BASE_URL}docs/Sprint CDR.pdf` },
      { name: "T-Mobile CDR",   file: `${import.meta.env.BASE_URL}docs/T-Mobile.pdf` },
      { name: "US Cellular CDR",file: `${import.meta.env.BASE_URL}docs/US Cellular CDR.pdf` },
      { name: "Verizon CDR",    file: `${import.meta.env.BASE_URL}docs/Verizon CDR.pdf` },
      { name: "Tower Dump",     file: `${import.meta.env.BASE_URL}docs/Tower Dump.pdf` },
    ],
  },
  {
    title: "Forensic Image Procurement & Handling",
    desc: "Chain-of-custody protocol and DVR extraction procedures compliant with the Federal Rules of Evidence.",
    docs: [
      { name: "DVR Extraction Protocol (Federal Rules Compliant)", file: `${import.meta.env.BASE_URL}docs/DVR Extraction Protocol (Federal Rules Compliant).pdf` },
      { name: "Forensic Image Procurement",                        file: `${import.meta.env.BASE_URL}docs/Forensic Image Procurement.pdf` },
    ],
  },
  {
    title: "Original Format & Codec Request Forms",
    desc: "Use these to formally request original files from opposing counsel or law enforcement in the correct format for forensic analysis.",
    docs: [
      { name: "Audio — Original Format Request",   file: `${import.meta.env.BASE_URL}docs/Audio — Original Format Request.pdf` },
      { name: "Video / DVR — Original Format Request", file: `${import.meta.env.BASE_URL}docs/Video : DVR — Original Format Request.pdf` },
      { name: "Original Photos Request",           file: `${import.meta.env.BASE_URL}docs/Original Photos Request.pdf` },
      { name: "Video Acquisition Procedure",       file: `${import.meta.env.BASE_URL}docs/Video Acquisition Procedure.pdf` },
    ],
  },
  {
    title: "Professional CVs",
    desc: "Curriculum vitae for our court-certified experts — suitable for submission in Daubert hearings, evidentiary proceedings, and expert disclosure filings.",
    docs: [
      { name: "Bryan Neumeister — Forensic Video & Audio Analyst", file: BRYAN_CV },
      { name: "Matthew Erickson — Computer & IT Forensic Analyst", file: MATT_CV },
    ],
  },
];

export default sections;
