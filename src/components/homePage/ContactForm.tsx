"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
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
    .min(1, "Phone number is required")
    .min(10, "Phone number is too short")
    .max(16, "Phone number is too long") // Adjusted for international formats
    .refine((value) => value && value.startsWith("+971"), {
      message: "Enter a valid UAE phone number (+971...)",
    }),
  message: z.string().min(5, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      // Reset form
      setValue("name", "");
      setValue("email", "");
      setValue("subject", "");
      setValue("phone", "");
      setValue("message", "");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto" id="contact-form">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Get in Touch With Us
      </h2>

      {status.message && (
        <div
          className={`p-4 mb-6 rounded-lg text-center ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-2">Phone</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="AE"
                international
                countryCallingCodeEditable={false}
                className="w-full px-5 py-3 border border-border rounded-lg bg-card text-foreground [&>input]:pl-4"
                disabled={isSubmitting}
                onChange={(value) => field.onChange(value ?? "")} // Ensure undefined maps to empty string for safety
                countrySelectProps={{
                  arrowComponent: () => (
                    <ChevronDown className="w-4 h-4 text-foreground ml-2" />
                  ),
                }}
              />
            )}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
          disabled={isSubmitting}
          className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
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
