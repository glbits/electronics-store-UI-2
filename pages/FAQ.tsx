import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "General",
    questions: [
      {
        q: "Are the products sold on ElectroMart genuine?",
        a: "Yes, 100%. We only source products directly from authorized manufacturers or their official distributors. Every electronic item carries the official brand warranty."
      },
      {
        q: "Do you provide installation services?",
        a: "While we don't provide direct installation, we have a network of certified partner electricians in major cities. Contact our support team for a recommendation near you."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard delivery takes 3-5 business days across India. For metropolitan areas (Bengaluru, Mumbai, Delhi), we offer express delivery within 24-48 hours."
      },
      {
        q: "Is there a delivery charge?",
        a: "We offer free shipping on all orders above ₹1,999. For orders below this amount, a flat shipping fee of ₹99 is applicable."
      }
    ]
  },
  {
    category: "Returns & Warranty",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 7-day 'No Questions Asked' return policy for unopened items in their original packaging. For damaged or defective products, please report within 48 hours of delivery."
      },
      {
        q: "How do I claim a warranty?",
        a: "You can reach out to the brand's authorized service center with the invoice provided by ElectroMart. Alternatively, contact us, and we'll help facilitate the process."
      }
    ]
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Have a question? We're here to help.</p>
        </div>

        <div className="space-y-12">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">{cat.category}</h2>
              <div className="space-y-4">
                {cat.questions.map((item, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                      <button 
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        {isOpen ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 text-center text-white shadow-xl">
          <MessageCircle size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-300 mb-6">Our expert team is available 24/7 to assist with your technical or order queries.</p>
          <button className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};