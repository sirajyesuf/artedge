"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactUSForm() {
  const t = useTranslations("ContactUS");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const data = formData;

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // toast({
      //   title: "Success!",
      //   description: "Your message has been sent successfully.",
      // });
      // form.reset();
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to send message. Please try again later.",
      //   variant: "destructive",
      // });
      console.log("Error sending message:", error);
    } finally {
      setSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[800px] rounded-b-lg overflow-hidden">
        <Image
          src="/contactus.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
        <div className="absolute inset-0 flex place-items-end md:items-center bg-gradient-to-r from-blue-600 to-transparent">
          <div className="md:items-center p-4 text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {t("message.title")}
          </h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message. We&apos;ll get back to you soon!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                {t("message.fullname")}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("message.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                {t("message.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("message.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t("message.send_message")}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t("contactusdetail.title")}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t("contactusdetail.phone")}
                  </h3>
                  <p className="mt-1">
                    <a
                      href="tel:+251911389703"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +251 911 389 703
                    </a>
                    <br />
                    <a
                      href="tel:+251911389259"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +251 911 389 259
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t("contactusdetail.email")}
                  </h3>
                  <div className="flex flex-col">
                    <a
                      href="mailto:artedgetradingplc@gmail.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      artedgetradingplc@gmail.com
                    </a>

                    <a
                      href="mailto:artedgetradingplc@gmail.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      tagelmin@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t("contactusdetail.address_title")}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {t("contactusdetail.address")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t("contactusdetail.findus")}
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5784293198455!2d38.7963!3d9.0235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjQuNiJOIDM4wrA0Nyc0Ni43IkU!5e0!3m2!1sen!2set!4v1635000000000!5m2!1sen!2set"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+251911389703"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white rounded-md text-base font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t("cta.button")}
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
