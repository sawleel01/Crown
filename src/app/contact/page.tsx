"use client";

import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-rose-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-rose-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-rose-700/80">
              We would love to hear from you. Reach out with any questions or
              reservations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-rose-900">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-rose-900" />
                      <h3 className="text-lg font-semibold text-rose-900">
                        Address
                      </h3>
                    </div>
                    <p className="text-rose-700/80 ml-11">
                      45 Baptist End Rd, Netherton, Dudley DY2 9DJ, United
                      Kingdom
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-6 h-6 text-rose-900" />
                      <h3 className="text-lg font-semibold text-rose-900">
                        Phone
                      </h3>
                    </div>
                    <a
                      href="tel:+44 7403 068174"
                      className="text-rose-700/80 ml-11"
                    >
                      +44 7403 068174
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-6 h-6 text-rose-900" />
                      <h3 className="text-lg font-semibold text-rose-900">
                        Mail
                      </h3>
                    </div>

                    <a
                      href="mailto:info@crownbarandgrill.co.uk.com"
                      className="text-rose-700/80 ml-11"
                    >
                      info@crownbarandgrill.co.uk.com
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-6 h-6 text-rose-900" />
                      <h3 className="text-lg font-semibold text-rose-900">
                        Hours
                      </h3>
                    </div>
                    <div className="text-rose-700/80 ml-11 ">
                      <span className="italic font-semibold">Opening:</span> 12
                      - 11PM Daily
                      <br />
                      <span className="italic font-semibold">
                        Takeout & Dinner:
                      </span>{" "}
                      4:30 - 10PM Daily
                      <br />
                      <div>
                        <span className="italic font-semibold">Delivery:</span>
                        <ul className="list-disc list-inside text-rose-700">
                          <li>Mon: 5 PM - 12 PM</li>
                          <li>Tue: 12 AM - 10 PM</li>
                          <li>Wed - Sun: 5 PM - 10 PM</li>
                        </ul>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.0773371756773!2d-2.085509923058509!3d52.49583963801762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870974b3a051dc7%3A0xd273eed5a47ac074!2sSwan%20bar%20and%20grill!5e0!3m2!1sen!2snp!4v1765458495782!5m2!1sen!2snp"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
