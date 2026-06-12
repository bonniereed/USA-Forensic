
import { BsCameraVideo, BsPhone, BsLaptop, BsMicFill, BsBroadcastPin } from "react-icons/bs";

const services = [
  {
    id: "forensic-video",
    icon: BsCameraVideo,
    title: "Forensic Video & Photo",
    shortDesc: "Clarification, authentication, DVR extraction & codec analysis",
    relatedDocs: "Original Format & Codec Request Forms — Video / DVR",
    description: [
      "Bryan Neumeister brings over 37 years of professional video and photo experience to every forensic engagement. A 39-time Emmy Award winner, Bryan has testified as an expert witness in US Federal, US District, State, Civil, Military, and Aviation proceedings across 23 countries. Forensic surveillance authentication is a specialty — Bryan can determine whether footage has been altered, spliced, or re-encoded, and can clarify low-resolution images using scientifically validated methods that meet Daubert standards. Raw data is extracted directly from DVRs and NVRs using forensically sound chain-of-custody procedures, preserving metadata and ensuring court admissibility. Neumeister has worked across 23 countries and is a published author and lecturer for the American Bar Association and the Audio Engineering Society.",
    ],
  },
  {
    id: "cell-phone",
    icon: BsPhone,
    title: "Cell Phone Forensics",
    shortDesc: "Triple-pass extractions — deleted data, app data, location & more",
    description: [
      "USAForensic performs triple-pass extractions on mobile devices — recovering deleted texts, call logs, app data, photos, videos, location history, and more that standard single-pass tools miss entirely.",
      "\"Push button\" forensic programs used by many labs leave significant evidence on the table. Our analysts go beyond the GUI to perform logical, file system, and physical extractions, depending on the device and case requirements.",
      "Proper retrieval, chain of custody documentation, and court-ready reporting are standard on every engagement. Available for iOS, Android, and legacy device platforms.",
    ],
  },
  {
    id: "computer",
    icon: BsLaptop,
    title: "Computer Forensics",
    shortDesc: "Code-level analysis — far beyond push-button forensic programs",
    description: [
      "Computer forensic inspections are frequently performed using push-button programs that miss critical artifacts. USAForensic goes deeper — performing code-level analysis across file systems, registry hives, log files, and deleted partitions.",
      "Many of today's so-called experts rely entirely on automated tools without understanding the underlying data structures. Matt Erickson reads raw disk images and interprets artifacts that automated tools categorize incorrectly or overlook.",
      "Matt Erickson is fluent in PowerShell, C++, SQL, Java, PERL, VBA, and more — giving him the ability to reverse-engineer custom software, analyze malware artifacts, and reconstruct timelines from fragmented data.",
    ],
  },
  {
    id: "forensic-audio",
    icon: BsMicFill,
    title: "Forensic Audio",
    shortDesc: "Voice analysis, clarification & Daubert-established methodology",
    relatedDocs: "Original Format & Codec Request Forms — Audio",
    description: [
      "Bryan Neumeister has worked across more than 20,000 voice tracks over his career — clarifying recordings, authenticating audio, and performing voice identification using methodology established under Daubert standards in federal and state courts.",
      "Bryan is a trusted resource for attorneys, law enforcement agencies, and private investigators who need audio evidence that will hold up in court. His work spans criminal defense, civil litigation, and government matters.",
      "He has won gold at the Cannes Film Festival and the Calgary Film Festival for audio work, and has been a beta tester for professional forensic audio software since the mid-1990s.",
    ],
  },
  {
    id: "cell-tower",
    icon: BsBroadcastPin,
    title: "Cell Tower & CDR Analysis",
    shortDesc: "Call Detail Records — device location mapping & expert challenge",
    relatedDocs: "Cellular Data Records (CDR) request forms",
    description: [
      "Call Detail Record (CDR) analysis maps a device's location history by correlating call, text, and data events with cell tower coverage areas. USAForensic produces court-ready reports that place a device — and by inference its user — at or away from a location at a given time.",
      "USAForensic has successfully challenged prosecution CDR analyses in numerous cases, identifying errors in tower mapping, sector assignments, and range assumptions that materially changed the evidentiary picture.",
      "CDR analysis is available for all major carriers including AT&T, Verizon, T-Mobile, Sprint, and US Cellular. Subpoena forms for each carrier are available in the Resources section.",
    ],
  }
];

export default services;
