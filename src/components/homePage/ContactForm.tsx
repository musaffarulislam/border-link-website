"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import { Phone, MessageCircle, Mail, ChevronDown } from "lucide-react";

// ✅ Updated Zod schema with email & subject validation
const schema = z.object({
  name: z.string().min(2, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject is required")
    .max(150, "Subject too long"),
  phone: z
    .string()
    .refine(
      (value) => value && value.startsWith("+971") && value.length >= 10,
      { message: "Enter a valid UAE phone number" }
    ),
  message: z.string().min(5, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted ✅", data);
  };

  return (
    <div className="max-w-lg mx-auto" id="contact-form">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Get in Touch With Us
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-background border border-border rounded-xl p-6 shadow-md space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block font-medium mb-2">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-2">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-2">Phone</label>
          <PhoneInput
            defaultCountry="AE"
            international
            countryCallingCodeEditable={false}
            onChange={(value) => setValue("phone", value ?? "")}
            className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground [&>input]:pl-4"
            countrySelectProps={{
              arrowComponent: () => (
                <ChevronDown className="w-4 h-4 text-foreground ml-2" />
              ),
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium mb-2">Subject</label>
          <input
            {...register("subject")}
            type="text"
            placeholder="Enter subject"
            className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-2">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Write your concern here..."
            className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-10 grid gap-6">
        {/* Phones */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="tel:+971566771884"
            className="flex-1 bg-primary text-white rounded-xl p-4 shadow hover:shadow-lg transition flex items-center gap-3"
          >
            <Phone className="w-6 h-6 text-white" />
            <span className="text-lg font-medium">+971 56 677 1884</span>
          </a>
          <a
            href="tel:+971526232117"
            className="flex-1 bg-primary text-white rounded-xl p-4 shadow hover:shadow-lg transition flex items-center gap-3"
          >
            <Phone className="w-6 h-6 text-white" />
            <span className="text-lg font-medium">+971 52 623 2117</span>
          </a>
        </div>

        {/* WhatsApp + Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://wa.me/971566771884"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white rounded-xl p-4 shadow hover:shadow-lg transition flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="text-lg font-medium">WhatsApp Us</span>
          </a>
          <a
            href="mailto:service@borderlink.info"
            className="flex-1 bg-secondary text-white rounded-xl p-4 shadow hover:shadow-lg transition flex items-center gap-3"
          >
            <Mail className="w-6 h-6 text-white" />
            <span className="text-lg font-medium">service@borderlink.info</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
