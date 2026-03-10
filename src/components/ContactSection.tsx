"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/lucytsowa3@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            _subject: `New Inquiry from ${formData.name}`,
            _template: "table",
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* We use a standard iframe for the map to ensure it's free and reliable */}

      <section
        className="py-24 bg-stone-50 dark:bg-stone-950 relative"
        id="contact"
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                Global Reach
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-foreground leading-[0.9] tracking-tighter">
              Connect With <br />
              <span className="text-outlined">Eriatswa Soko.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 bg-white dark:bg-stone-900 border border-border p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold uppercase mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-500"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all resize-none dark:text-white"
                    placeholder="How can we assist you today?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent!"
                      : "Submit Inquiry"}
                  {(status === "idle" || status === "error") && (
                    <Send size={14} />
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Failed to send. Please try again.
                  </p>
                )}
              </form>

              <div className="mt-12 pt-8 border-t border-border space-y-6">
                <div className="flex items-start gap-4 text-sm">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                      Direct Mail (Free)
                    </p>
                    <a
                      href="mailto:lucytsowa3@gmail.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      lucytsowa3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-primary shrink-0 font-bold text-[10px]">
                    LOC
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                      Our Branches
                    </p>
                    <p className="font-medium">Tsaragi • Ilorin • Lagos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-primary shrink-0 font-bold text-[10px]">
                    HRS
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                      Opening Hours
                    </p>
                    <p className="font-medium">
                      Physical: 8am - 6pm <br />
                      Online: 24 Hours Open
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map Web Component */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 h-[600px] lg:h-full min-h-[600px] w-full rounded-3xl overflow-hidden border border-border shadow-2xl relative bg-stone-100 dark:bg-stone-900"
            >
              {/* Global styles injected specific for the GM component per user requirements */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    gmpx-store-locator {
                        width: 100%;
                        height: 100%;
                        --gmpx-color-surface: #fff;
                        --gmpx-color-on-surface: #212121;
                        --gmpx-color-on-surface-variant: #757575;
                        --gmpx-color-primary: #1967d2;
                        --gmpx-color-outline: #e0e0e0;
                        --gmpx-font-family-base: "Inter", sans-serif;
                        --gmpx-font-family-headings: "Inter", sans-serif;
                        --gmpx-font-size-base: 0.875rem;
                    }
                    /* Simple dark mode overrides for map container if needed */
                    @media (prefers-color-scheme: dark) {
                        gmpx-store-locator {
                            --gmpx-color-surface: #1c1917;
                            --gmpx-color-on-surface: #fff;
                            --gmpx-color-on-surface-variant: #a8a29e;
                            --gmpx-color-outline: #292524;
                        }
                    }
                `,
                }}
              />

              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.385412458421!2d4.981457175960002!3d8.830214891223455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104bc12078b1c9b7%3A0xb231d00988b172dd!2sEriatswa%20Soko%20Global!5e0!3m2!1sen!2sng!4v1710078000000!5m2!1sen!2sng"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
