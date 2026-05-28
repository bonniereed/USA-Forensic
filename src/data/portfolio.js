import { BRYAN_CV, MATT_CV } from "../constants/company";

const bryanimg = `${import.meta.env.BASE_URL}assets/Bryan.png`;
const mattimg  = `${import.meta.env.BASE_URL}assets/Matt.png`;

const portfolioData = {
  bryan: {
    name: "Bryan Neumeister",
    label: "Forensic Video & Audio Analyst",
    credentials: [
      "39-time Emmy Award Winner",
      "70+ National & International Awards",
      "Gold — Cannes Film Festival (Audio)",
      "Gold — Calgary Film Festival (Audio)",
      "Beta Tester for Forensic Software since the mid-1990s",
      "Published Author & Lecturer — ABA & Audio Engineering Society",
      "Daubert Standard Established in Federal & State Courts",
    ],
    bio: [
      "Bryan Neumeister has been working with video and audio professionally for over 37 years. A 39-time Emmy Award winner with more than 70 national and international awards, Bryan brings unmatched credibility to every forensic engagement.",
      "In forensic video, Bryan specializes in surveillance authentication — determining whether footage has been altered, spliced, or re-encoded — and in DVR extraction using forensically sound procedures that preserve metadata and ensure court admissibility.",
      "In forensic audio, Bryan has analyzed more than 20,000 voice tracks, performing voice identification, audio clarification, and authenticity analysis using Daubert-established methodology accepted in federal and state courts.",
      "Bryan is a published author and lecturer for the American Bar Association and the Audio Engineering Society, and has testified as an expert witness in proceedings across 23 countries.",
    ],
    images: [bryanimg],
    url: "https://www.neatvideo.com/user-stories/bryan-neumeister",
    cv: BRYAN_CV,
  },
  matt: {
    name: "Matt Erickson",
    label: "Computer & IT Forensic Analyst",
    credentials: [
      "15+ Years Programming & IT Experience",
      "Fluent: PowerShell, C++, SQL, Java, PERL, VBA & More",
      "Large Corporate Arrays to Embedded Systems",
      "Expert Witness — Computer Forensics",
      "EnCase v8 & FTK Certified",
    ],
    bio: [
      "Computer forensic inspections are frequently performed using push-button programs that miss critical artifacts. Matt Erickson goes deeper — performing code-level analysis across file systems, registry hives, log files, and deleted partitions.",
      "Matt Erickson brings 15+ years of hands-on programming and IT experience to every engagement. He is fluent in PowerShell, C++, SQL, Java, PERL, VBA, and more — giving him the ability to reverse-engineer custom software, analyze malware artifacts, and reconstruct timelines from fragmented data.",
      "He is fluid across all forms of IT infrastructure — from large corporate arrays and enterprise environments down to embedded systems and consumer devices. EnCase v8 and FTK certified.",
    ],
    images: [mattimg],
    url: null,
    cv: MATT_CV,
  },
};

export default portfolioData;
