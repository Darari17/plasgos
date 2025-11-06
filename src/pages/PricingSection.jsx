import { useState } from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-600"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

const pricingPlans = [
  {
    name: "Trial Free",
    subtitle: "Broadcast Whatsapp Trial Plan",
    price: "Free",
    period: "3 Days",
    originalPrice: "",
    discount: "",
    whatsappNumbers: "1 WhatsApp Number Broadcast (Included)",
    warmUp: "WhatsApp Number Warm Up (Included)",
    aiResponse: "Free 100 AI Response",
    contacts: "5.000 Contacts (Include)",
    groupGrabber: false,
    support: [false, false],
    isPopular: false,
  },
  {
    name: "Enterprise",
    subtitle: "Broadcast Whatsapp with AI Enterprise Plan",
    price: "199.000",
    period: "/ Bulan",
    originalPrice: "Rp.350.000",
    discount: "Discount 43%",
    whatsappNumbers: "6 WhatsApp Number Broadcast (Included)",
    warmUp: "3 WhatsApp Number Warm Up (Included)",
    aiResponse: "Free 500 AI Response",
    contacts: "50.000 Contacts (Include)",
    groupGrabber: true,
    support: [true, true],
    isPopular: false,
  },
  {
    name: "Enterprise Plus",
    subtitle: "Broadcast Whatsapp with AI Enterprise Plus",
    price: "399.000",
    period: "/ 3 Bulan",
    originalPrice: "Rp.1.850.000",
    discount: "Discount 78%",
    whatsappNumbers: "8 WhatsApp Number Broadcast (Included)",
    warmUp: "4 WhatsApp Number Warm Up (Included)",
    aiResponse: "Free 1500 AI Response",
    contacts: "100.000 Contacts (Include)",
    groupGrabber: true,
    support: [true, true],
    isPopular: false,
  },
  {
    name: "Enterprise Pro",
    subtitle: "Broadcast Whatsapp with AI Enterprise Pro",
    price: "890.000",
    period: "/ Tahun",
    originalPrice: "Rp.4.800.000",
    discount: "Discount 81%",
    whatsappNumbers: "10 WhatsApp Number Broadcast (Included)",
    warmUp: "5 WhatsApp Number Warm Up (Included)",
    aiResponse: "Free 5000 AI Response",
    contacts: "300.000 Contacts (Include)",
    groupGrabber: true,
    support: [true, true],
    isPopular: true,
  },
];

const commonFeatures = [
  "Send Unlimited Messages",
  "Create Unlimited Content",
  "Multi Sender Suffle",
  "Basic delivery reports",
  "Image Upload Support",
  "Broadcast Scheduling",
  "Smart Spintax Replace",
  "Video Upload Support",
  "Perfect Timing Broadcast",
  "Document Upload Support",
  "Spintax Text",
  "Allow Unsubscribe",
  "Automation Reply with AI Support",
];

const contactFeatures = [
  "Manual Input Contacts",
  "Import from TXT File",
  "Import from CSV File",
  "Import from EXCEL File",
];

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`rounded-xl border border-gray-100 text-card-foreground shadow w-full flex flex-col justify-between relative bg-white ${
        plan.isPopular ? "ring-1 ring-[#FB7649]" : ""
      }`}
    >
      {plan.isPopular && (
        <div style={{ position: "absolute", left: 0, right: 0 }}>
          <div className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow text-base rounded-xl bg-white ring-1 ring-[#FB7649] px-3 py-2 text-black -mt-10 hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-yellow-500"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            Most Popular
          </div>
        </div>
      )}

      <div className="py-5">
        <div>
          <div
            className="flex flex-col space-y-1.5 p-6"
            style={{ minHeight: "185px" }}
          >
            <div className="font-semibold tracking-tight text-2xl">
              {plan.name}
            </div>
            <div className="text-gray-500 text-sm">{plan.subtitle}</div>
            <div className="flex items-center justify-center gap-x-3">
              {plan.originalPrice && (
                <p className="text-gray-500 line-through">
                  {plan.originalPrice}
                </p>
              )}
              {plan.discount && (
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white shadow hover:bg-[#FB7649]]/80 bg-[#FB7649]">
                  {plan.discount}
                </div>
              )}
            </div>
            <div>
              <p>
                {plan.price === "Free" ? (
                  <span className="text-4xl font-bold">Free</span>
                ) : (
                  <>
                    Rp. <span className="text-4xl font-bold">{plan.price}</span>{" "}
                    <span className="text-xs">{plan.period}</span>
                  </>
                )}
              </p>
              {plan.price === "Free" && <p>{plan.period}</p>}
            </div>
          </div>

          <div className="p-6 pt-0 mb-3">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#FA541C] text-white shadow hover:bg-[#FA541C]/90 h-10 rounded-md px-8 w-full">
              Pilih Paket
            </button>

            <div className="flex justify-center items-center gap-x-5 my-4">
              <hr className="text-black w-full" />
              <p className="font-semibold">Features</p>
              <hr className="text-black w-full" />
            </div>

            <div className="flex flex-col gap-y-3">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3">
                    <CheckIcon />
                  </div>
                  <div className="text-left text-sm">{feature}</div>
                </div>
              ))}
              <div className="flex items-center">
                <div className="mr-3">
                  <CheckIcon />
                </div>
                <div className="text-left text-sm">{plan.whatsappNumbers}</div>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <CheckIcon />
                </div>
                <div className="text-left text-sm">{plan.warmUp}</div>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <CheckIcon />
                </div>
                <div className="text-left text-sm">{plan.aiResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-6 pt-0">
          <div className="flex justify-center items-center gap-x-5 my-4">
            <hr className="text-black w-full" />
            <p className="font-semibold">Contacts</p>
            <hr className="text-black w-full" />
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center">
              <div className="mr-5">
                <CheckIcon />
              </div>
              <div className="text-left text-sm">{plan.contacts}</div>
            </div>
            {contactFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-5">
                  <CheckIcon />
                </div>
                <div className="text-left text-sm">{feature}</div>
              </div>
            ))}
            <div className="flex items-center">
              <div className="mr-5">
                {plan.groupGrabber ? <CheckIcon /> : <XIcon />}
              </div>
              <div className="text-left text-sm">Group Contacts Grabber</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-6 pt-0">
          <div className="flex justify-center items-center gap-x-5 my-4">
            <hr className="text-black w-full" />
            <p className="font-semibold">Support</p>
            <hr className="text-black w-full" />
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center">
              <div className="mr-5">
                {plan.support[0] ? <CheckIcon /> : <XIcon />}
              </div>
              <div className="text-left text-sm">Email &amp; Chat Support</div>
            </div>
            <div className="flex items-center">
              <div className="mr-5">
                {plan.support[1] ? <CheckIcon /> : <XIcon />}
              </div>
              <div className="text-left text-sm">
                Prioritized Technical Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-6 pt-0">
        <div className="w-full">
          <hr className="w-full my-5" />
        </div>
      </div>
    </div>
  );
};

export const PricingSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      id="pricing"
      className="w-full flex flex-col justify-center items-center gap-y-5"
    >
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="h-full relative w-full flex justify-center">
          <div className="flex justify-center w-11/12">
            <div className="text-center">
              <div>
                <h1 className="text-4xl font-bold capitalize">
                  Pilih Paket dan Tingkatkan Bisnis dengan Mudah
                </h1>
              </div>
              <p className="text-gray-500 my-2">
                Jangkau lebih banyak pelanggan, tingkatkan penjualan, dan
                kembangkan bisnis Anda dengan paltform kami yang praktis dan
                efektif.
              </p>

              <div className="mt-14 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>

              <div className="flex items-center justify-center mt-3">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2782BF] text-white font-semibold rounded-4xl border-2 border-[#99C4E1] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Lihat paket lainnya
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
