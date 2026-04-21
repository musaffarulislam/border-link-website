"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import { ChevronDown, Send } from "lucide-react";

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
    .max(16, "Phone number is too long")
    .refine((value) => value && value.startsWith("+971"), {
      message: "Enter a valid UAE phone number (+971...)",
    }),
  message: z.string().min(5, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors disabled:opacity-50";

const labelClass = "block text-xs font-semibold text-muted/80 uppercase tracking-wide mb-1.5";

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

      if (!res.ok) throw new Error(result.error || "Something went wrong");

      setStatus({ type: "success", message: "Message sent successfully!" });
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
    <div id="contact-form">
      <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-1">
        Send Us a Message
      </h2>
      <p className="text-muted text-sm mb-6">
        Fill in the form and we&apos;ll get back to you within a few hours.
      </p>

      {status.message && (
        <div
          className={`p-4 mb-5 rounded-xl text-center text-sm font-medium ${
            status.type === "success"
              ? "bg-green-500/15 text-green-400 border border-green-500/30"
              : "bg-red-500/15 text-red-400 border border-red-500/30"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name + Email row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your full name"
              className={inputClass}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              className={inputClass}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone + Subject row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="AE"
                  international
                  countryCallingCodeEditable={false}
                  className={`${inputClass} [&>input]:bg-transparent [&>input]:border-none [&>input]:outline-none [&>input]:text-foreground [&>input]:pl-2`}
                  disabled={isSubmitting}
                  onChange={(value) => field.onChange(value ?? "")}
                  countrySelectProps={{
                    arrowComponent: () => (
                      <ChevronDown className="w-3.5 h-3.5 text-muted ml-1" />
                    ),
                  }}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Subject</label>
            <input
              {...register("subject")}
              type="text"
              placeholder="How can we help?"
              className={inputClass}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Describe your shipment or inquiry..."
            className={`${inputClass} resize-none`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-black font-bold text-sm hover:bg-secondary transition-colors shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
