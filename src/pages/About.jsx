import { useRef } from "react";
import { BsTelephone, BsEnvelopeAt, BsClock, BsGeoAlt, BsFolder2Open } from "react-icons/bs";
import PageBanner from "../components/PageBanner";
import { useReveal } from "../hooks/useReveal";
import {
  PHONE_HREF, PHONE_DISPLAY,
  EMAIL_HREF, EMAIL_DISPLAY,
  ATTORNEYS_NOTE,
} from "../constants/company";

const INFO = [
  { icon: BsTelephone,   label: "Phone",             content: PHONE_DISPLAY,       href: PHONE_HREF },
  { icon: BsEnvelopeAt,  label: "Email",             content: EMAIL_DISPLAY,       href: EMAIL_HREF },
  { icon: BsClock,       label: "Availability",      content: "7 Days a Week · Nationwide" },
  { icon: BsGeoAlt,      label: "Labs",              content: "Phoenix, AZ · Detroit, MI" },
  { icon: BsFolder2Open, label: "Documents & Forms", content: "View Resources →",  href: "/resources" },
];

export default function About() {
  const contentRef = useReveal();
  const formRef    = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data    = new FormData(formRef.current);
    const name    = data.get("name")    || "";
    const email   = data.get("email")   || "";
    const phone   = data.get("phone")   || "";
    const subject = data.get("subject") || "USAForensic Inquiry";
    const message = data.get("message") || "";
    const body    = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    window.location.href = `mailto:Lab@USAForensic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Available 7 days a week — Phoenix, AZ & Detroit, MI"
      />

      <div ref={contentRef} className="contact-wrap reveal">
        <div className="contact-card">

          {/* ── Left: info ── */}
          <div className="contact-card__info">
            <p className="contact-card__eyebrow">Get in touch</p>
            <ul className="contact-info-list">
              {INFO.map(({ icon: Icon, label, content, href }) => (
                <li key={label} className="contact-info-list__item">
                  <span className="contact-info-list__icon"><Icon /></span>
                  <div className="contact-info-list__text">
                    <span className="contact-info-list__label">{label}</span>
                    {href ? (
                      <a href={href} className="contact-info-list__value link-accent">{content}</a>
                    ) : (
                      <span className="contact-info-list__value">{content}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Divider ── */}
          <div className="contact-card__divider" />

          {/* ── Right: form ── */}
          <div className="contact-card__form">
            <p className="contact-card__eyebrow">Send a message</p>
            <p className="contact-card__note">{ATTORNEYS_NOTE}</p>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" />
                </div>
                <div className="cf-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@lawfirm.com" />
                </div>
              </div>
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                </div>
                <div className="cf-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Case type or inquiry" />
                </div>
              </div>
              <div className="cf-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Brief description of your matter..." />
              </div>
              <button type="submit" className="btn btn--primary">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
