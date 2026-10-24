"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  return (
    <form
      className="contact-form"
      aria-labelledby="contact-form-title"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const values = new FormData(form);
        const name = String(values.get("name") || "").trim();
        const email = String(values.get("email") || "").trim();
        const subject = String(values.get("subject") || "").trim();
        const message = String(values.get("message") || "").trim();
        if (
          !name ||
          !email ||
          !subject ||
          !message ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
          setStatus(
            "Please enter your name, a valid email address, a subject, and your message.",
          );
          const invalid = Array.from(
            form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
              "input, textarea",
            ),
          ).find(
            (field) =>
              !field.value.trim() ||
              (field.type === "email" && !field.validity.valid),
          );
          invalid?.focus();
          return;
        }
        const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus(
          "Your email app will open with your note. Press Send there to deliver it to Lori.",
        );
      }}
    >
      <h2 id="contact-form-title">A note for Lori.</h2>
      <p className="form-direct-email">
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <div className="form-row">
        <label htmlFor="contact-name">
          Your name
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </label>
        <label htmlFor="contact-email">
          Your email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
      </div>
      <label htmlFor="contact-subject">
        Subject
        <input id="contact-subject" name="subject" maxLength={160} required />
      </label>
      <label htmlFor="contact-message">
        Your message
        <textarea
          className="resize-none"
          id="contact-message"
          name="message"
          rows={6}
          maxLength={4000}
          required
        />
      </label>
      <button type="submit" className="button button-primary">
        Open email to Lori
      </button>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
