import React from 'react';
import { Wrench, Zap, HardHat, Lightbulb, PenTool, ClipboardCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      id: "wiring",
      title: "Commercial Wiring",
      description: "Complete electrical infrastructure for offices, retail spaces, and warehouses. Certified ISI standard installations.",
      icon: <Zap className="text-secondary" size={32} />
    },
    {
      id: "smart-home",
      title: "Smart Home Setup",
      description: "End-to-end automation including smart lighting, climate control, and security systems integrated with mobile apps.",
      icon: <Lightbulb className="text-accent" size={32} />
    },
    {
      id: "industrial",
      title: "Industrial Maintenance",
      description: "Scheduled maintenance and emergency repairs for heavy-duty industrial machinery and power systems.",
      icon: <Wrench className="text-gray-600" size={32} />
    },
    {
      id: "safety",
      title: "Safety Audits",
      description: "Professional electrical safety inspections to identify risks and ensure compliance with Indian safety standards.",
      icon: <ClipboardCheck className="text-green-600" size={32} />
    },
    {
      id: "lighting-design",
      title: "Custom Lighting Design",
      description: "Expert consultation and design for architectural lighting, landscape illumination, and energy-efficient solutions.",
      icon: <PenTool className="text-purple-600" size={32} />
    },
    {
      id: "consulting",
      title: "On-Site Consulting",
      description: "Technical site visits by qualified engineers to provide estimates and technical blueprints for complex projects.",
      icon: <HardHat className="text-amber-600" size={32} />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">Our Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Beyond products, we provide expertise. From household repairs to large-scale industrial projects, ElectroMart is your trusted technical partner.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div 
              key={service.id} 
              id={service.id} 
              className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group scroll-mt-24"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-xl w-fit group-hover:bg-white group-hover:shadow-md transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
              <button className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Need a custom technical quote?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Our engineers are available for site inspections and technical consultations across all major Indian metros.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Book Consultation
            </button>
            <button className="border border-white/20 hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Zap className="absolute top-10 left-10 text-white" size={200} />
           <Zap className="absolute bottom-10 right-10 text-white" size={150} />
        </div>
      </section>
    </div>
  );
};