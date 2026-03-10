"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
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
            _subject: `New Booking Request: ${formData.serviceType} from ${formData.name}`,
            _template: "table",
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send booking request");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        date: "",
        time: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-background relative flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-24 relative overflow-hidden flex items-center">
        {/* Background Styling */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/10 -skew-x-12 translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3 pt-8 md:pt-16">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                  Reservations
                </p>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black uppercase text-foreground leading-[0.9] tracking-tighter mb-8">
                Book A <br />
                <span className="text-outlined">Consultation.</span>
              </h1>
              <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose font-medium mb-12">
                Schedule a private session at our atelier to discuss your
                bespoke luxury leather needs, academy enrollment, or bulk
                commissions.
              </p>

              <div className="space-y-6 hidden md:block border-t border-border pt-8">
                <div className="flex items-start gap-4 text-sm font-bold uppercase tracking-widest">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-[10px] block mb-1">
                      Locations
                    </span>
                    Tsaragi • Ilorin • Lagos
                  </div>
                </div>
                <div className="flex items-start gap-4 text-sm font-bold uppercase tracking-widest">
                  <Clock size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-stone-500 text-[10px] block mb-1">
                      Hours
                    </span>
                    Physical: 8:00 AM - 6:00 PM
                    <br />
                    Online: 24 Hours Open
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-2/3 bg-white dark:bg-stone-900 border border-border p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                      placeholder="+234 700 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Service Interest
                    </label>
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white appearance-none"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option value="Bespoke Design">Bespoke Design</option>
                      <option value="Academy Enrollment">
                        Academy Enrollment
                      </option>
                      <option value="Bulk Souvenirs">
                        Corporate/Bulk Souvenirs
                      </option>
                      <option value="General Consultation">
                        General Consultation
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl pl-10 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white appearance-none"
                      />
                      <Calendar
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl pl-10 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white appearance-none"
                      />
                      <Clock
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-100 dark:bg-stone-950 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all resize-none dark:text-white"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 mt-4"
                >
                  {status === "loading"
                    ? "Processing..."
                    : status === "success"
                      ? "Request Received!"
                      : "Confirm Booking"}
                  {(status === "idle" || status === "error") && (
                    <Send size={14} />
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest">
                    Failed to send request. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
