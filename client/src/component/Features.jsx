import React from "react";

// icons – you can use Heroicons, Lucide, or images from `assets` Folder.
import { ShieldCheck, Truck, CreditCard, Wrench, Sparkles } from "lucide-react"; // optional: install lucide-react 

const features = [
  { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, label: "Govt. Compliant Vehicles" },
  { icon: <Truck className="w-6 h-6 text-blue-600" />, label: "Doorstep Delivery of Vehicles" },
  { icon: <CreditCard className="w-6 h-6 text-blue-600" />, label: "Instant & Secure Payments" },
  { icon: <Wrench className="w-6 h-6 text-blue-600" />, label: "Service & Maintenance" },
  { icon: <Sparkles className="w-6 h-6 text-blue-600" />, label: "Sanitized Vehicles" },
];

const Features = () => {
    return (
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 bg-gray-50 rounded-lg shadow-md p-4"
            >
              {feature.icon}
              <p className="text-sm text-gray-600">{feature.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
