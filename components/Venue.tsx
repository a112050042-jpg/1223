
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Venue: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.70889988235!2d121.55836267606708!3d25.043954637887756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb83796d195%3A0xe545c36417730e23!2z5p2-5bGx5paH5Ym15ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1703000000000!5m2!1szh-TW!2stw";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=松山文創園區";

  return (
    <div className="py-24 md:py-48 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xs font-black tracking-widest mb-12 uppercase">VENUE & TRAFFIC</h3>
            <h4 className="text-5xl font-black tracking-tighter mb-8 leading-none">
              Songshan Cultural <br /> and Creative Park
            </h4>
            <div className="space-y-6 text-lg mb-12">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1" size={20} />
                <p>臺北松山文創園區 (No. 133, Guangfu S Rd, Xinyi District, Taipei City)</p>
              </div>
              <p className="text-gray-500">Taipei Fashion Week primary events will be hosted across Warehouse 1-4 and the Multi-purpose Hall.</p>
            </div>
            
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-black text-white px-10 py-5 font-black text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="relative h-[400px] md:h-[500px] grayscale contrast-125 border border-black shadow-2xl">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
