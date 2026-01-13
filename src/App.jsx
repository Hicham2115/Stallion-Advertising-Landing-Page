import React from "react";
import { CheckCircle, Crown } from "lucide-react";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0f1215]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1215] via-[#1a1d23] to-[#0f1215]"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#65891c]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-[#bafc0c]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#bafc0c 1px, transparent 1px), linear-gradient(90deg, #bafc0c 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}

function App() {
  const offers = [
    {
      name: "Essential",
      subtitle: "Perfect for SMEs & first-time exhibitors",
      price: "2400",
      period: "One-time · Limited event offer",
      features: [
        "1 professional videographer at your stand",
        "30–45 min filming session",
        "Stand & brand visuals",
        "Team shots",
        "Client interactions",
        "Product shots",
      ],
      deliverables: [
        '1 "Best Of" vertical video',
        "(LinkedIn · Instagram · Ads-ready)",
        "10 edited professional photos",
      ],
      deliverablesTitle: "Deliverables (48h)",
      bestFor: [
        "First event presence",
        "Social media visibility",
        "Quick, affordable content",
      ],
      badge: null,
      buttonStyle: "outline",
    },
    {
      name: "Visibility Boost",
      subtitle: "Maximum visibility during the event",
      price: "4200",
      period: "One-time · Limited slots",
      features: [
        "Dedicated filming session (1–1.5h)",
        "On-stand interview video",
        "(Founder / Sales / Manager)",
        "Advanced B-roll:",
        "Products",
        "Visitors",
        "Brand details",
      ],
      deliverables: [
        "2 vertical videos (Reels / LinkedIn / TikTok)",
        '1 horizontal "Best Of" video',
        "(Website · YouTube · Ads)",
        "20 edited professional photos",
      ],
      deliverablesTitle: "Deliverables (72h)",
      bonus: [
        "Free captions & posting copy",
        "Content optimized for reach & ads",
      ],
      bestFor: [
        "Brands that want strong visibility",
        "LinkedIn & Instagram growth",
        "Post-event marketing assets",
      ],
      badge: "MOST POPULAR",
      buttonStyle: "solid",
      inheritFrom: "Everything in Essential, plus:",
    },
    {
      name: "Dominate The Event",
      subtitle: "For serious brands & international exhibitors",
      price: "6000",
      period: "Limited availability · Priority access",
      features: [
        "Priority filming slots",
        "2 filming sessions",
        "(different moments of the day)",
        "Visitor testimonials",
        "Brand-focused storytelling",
      ],
      deliverables: [
        "4 short-form videos",
        "1 premium brand recap video",
        "(60–90 sec)",
        "30 edited professional photos",
      ],
      deliverablesTitle: "Deliverables (5–7 days)",
      bonus: [
        "1 ad-ready video",
        "(structured for paid ads)",
      ],
      bestFor: [
        "Market leaders",
        "International exposure",
        "High-end brand positioning",
      ],
      badge: "PREMIUM",
      buttonStyle: "outline",
      inheritFrom: "Everything in Visibility Boost, plus:",
    },
  ];

  return (
    <>
      <Background />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Event Videography{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#65891c] to-[#bafc0c]">
                Packages
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional content capture for your exhibition stand
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`relative bg-[#1a1d23] rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  offer.badge === "MOST POPULAR"
                    ? "border-[#7c3aed] shadow-[0_0_40px_rgba(124,58,237,0.3)]"
                    : "border-gray-800 hover:border-[#65891c]"
                }`}
              >
                {/* Badge */}
                {offer.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold text-white ${
                        offer.badge === "MOST POPULAR"
                          ? "bg-[#7c3aed]"
                          : "bg-[#65891c]"
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-400">{offer.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">
                      {offer.price}
                    </span>
                    <span className="text-lg text-gray-400">MAD TTC</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{offer.period}</p>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold mb-6 transition-all duration-300 ${
                    offer.buttonStyle === "solid"
                      ? "bg-black text-white hover:bg-gray-900"
                      : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
                  }`}
                >
                  Choose plan
                </button>

                {/* Inherit From */}
                {offer.inheritFrom && (
                  <p className="text-sm font-bold text-gray-400 mb-4">
                    {offer.inheritFrom}
                  </p>
                )}

                {/* Features */}
                {offer.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-white mb-3">
                      Includes
                    </h4>
                    <div className="space-y-2">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#65891c] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                {offer.deliverables.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-gray-800">
                    <h4 className="text-sm font-bold text-white mb-3">
                      {offer.deliverablesTitle}
                    </h4>
                    <div className="space-y-2">
                      {offer.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#65891c] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bonus */}
                {offer.bonus && (
                  <div className="mb-6 pb-6 border-b border-gray-800">
                    <h4 className="text-sm font-bold text-white mb-3">
                      Bonus
                    </h4>
                    <div className="space-y-2">
                      {offer.bonus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#bafc0c] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Best For */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">
                    Best for
                  </h4>
                  <div className="space-y-2">
                    {offer.bestFor.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#65891c] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">
              Not sure which package is right for you?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#65891c] to-[#bafc0c] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(186,252,12,0.4)] transition-all duration-300">
              Contact Us for Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;