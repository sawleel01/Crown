import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-rose-100 text-rose-900 pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Crown Bar & Grill</h3>
            <p className="text-sm text-rose-800/70">
              Experience culinary excellence and warm hospitality in our
              intimate dining space.
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-rose-900" />
              <h3 className="text-lg font-semibold text-rose-900">Hours</h3>
            </div>
            <p className="text-rose-700/80 ml-11 ">
              <span className="italic font-semibold">Opening:</span> 12 - 11PM
              Daily
              <br />
              <span className="italic font-semibold">Takeout:</span> 4:30 - 10PM
              Daily
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
              <span className="itali font-semibold">Dinner:</span> 4:30 - 10 PM
              Daily
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="text-sm space-y-2 text-rose-800/70">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +44 7403 068174
              </p>

              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 45 Baptist End Rd, Netherton,
                Dudley DY2 9DJ, United Kingdom
              </p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-white my-2"></div>

        <div className="mt-2 border-t border-white/10 py-6">
          <p className="text-center text-sm text-rose-900">
            © {new Date().getFullYear()} Crown Bar & Grill. All rights reserved
            by{" "}
            <a
              href="https://codexveda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CodeXveda
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
