import React from 'react';
import { FiMapPin, FiClock, FiBell, FiMap, FiAlertCircle } from 'react-icons/fi'; // Import icons

function Features() {
  const features = [
    {
      icon: <FiMapPin className="text-orange-600 w-12 h-12 mb-4" />,
      title: "Location Sharing",
      description: "Seamlessly share your real-time location with friends, making it easy to coordinate meet-ups and stay connected..",
      backgroundColor: "#f5d5bc"
    },
    {
      icon: <FiClock className="text-orange-600 w-12 h-12 mb-4" />,
      title: "Trip Planner / ETA",
      description: "Keep your circle updated on your arrival time. Share your ETA for a more coordinated and stress-free gathering.",
      backgroundColor: "#eee4f2 "
    },
    {
      icon: <FiBell className="text-orange-600 w-12 h-12 mb-4" />,
      title: "Proximity Alerts",
      description: "Our Proximity Alerts feature sends you an instant alert whenever someone in your circle is within a predefined distance.",
      backgroundColor: "#d1e8ca"
    },
    {
      icon: <FiMap className="text-orange-600 w-12 h-12 mb-4" />,
      title: "Traffic Updates",
      description: "Our Traffic Updates feature provides insights into road conditions, congestion levels, and estimated travel times, helping you avoid delays and plan the best routes.",
      backgroundColor: "#cae2e8"
    },
    {
      icon: <FiAlertCircle className="text-orange-600 w-12 h-12 mb-4" />,
      title: "Emergency Panic Button",
      description: "The Emergency Panic Button allows you to send an immediate alert to your selected contacts with your real-time location in case of an emergency. With one quick tap, notify friends, family and colleagues, ensuring they’re aware of your situation and can assist or take action.",
      backgroundColor: "#dbd9b4"
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
              style={{ backgroundColor: feature.backgroundColor }}
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>


              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
