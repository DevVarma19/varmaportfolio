import React, { useState } from 'react';
import { events } from '../mock';
import { Calendar, MapPin, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const EventsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="events" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Highlights
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Conferences, Workshops, and Professional Gatherings I've Attended
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-lg transition-all duration-300 border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden glow-on-hover cursor-pointer group"
              onClick={() => openModal(event)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <div className="space-y-1.5">
                  {event.date && (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-3 w-3 text-cyan-400" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-3 w-3 text-cyan-400" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              {selectedImage.date && (
                <p className="text-slate-400 text-sm">{selectedImage.date}</p>
              )}
              {selectedImage.location && (
                <p className="text-slate-400 text-sm">{selectedImage.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;

