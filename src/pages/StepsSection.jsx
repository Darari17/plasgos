import { useState } from "react";

export const StepsSection = () => {
  const [activeTab, setActiveTab] = useState("ai");

  const ArrowIcon = ({ className = "" }) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className={className}
      height="80"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );

  const SmallArrowIcon = ({ className = "" }) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className={className}
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );

  const aiSteps = [
    {
      icon: "scan-code-DVt8dR-o.png",
      title: "Scan Nomor Whatapps Anda",
      description:
        "Sambungkan nomor WhatsApp  Anda ke dashboard hanya dengan scan QR - cepat dan aman",
      bgColor: "bg-sky-100",
    },
    {
      icon: "knowledge-rDd3p6tC.png",
      title: "Tambahkan Info Produk & Bisnis Anda",
      description:
        "Masukkan daftar pertanyaan umum, info produk, layanan, dan jawaban penting. Semakin lengkap, semakin pintar AI Anda menjawab.",
      bgColor: "bg-sky-100",
    },
    {
      icon: "ai-technology-BFqn_qkV.png",
      title: "Aktifkan AI Chat Bot",
      description:
        "Hanya dengan satu klik, AI langsung aktif dan mulai menjawab pesan dari pelanggan secara otomatis — 24 jam nonstop.",
      bgColor: "bg-sky-100",
    },
  ];

  const broadcastSteps = [
    {
      icon: "scan-code-DVt8dR-o.png",
      title: "Scan Nomor Whatapps Anda",
      description:
        "Sambungkan nomor WhatsApp  Anda ke dashboard hanya dengan scan QR - cepat dan aman",
      bgColor: "bg-orange-100",
    },
    {
      icon: "download-file-BkRoDfxR.png",
      title: "Import Daftar Kontak",
      description:
        "Upload data pelanggan dari file Excel atau tambahkan secara manual. Semua langsung tersimpan rapi di dashboard.",
      bgColor: "bg-orange-100",
    },
    {
      icon: "broadcast-UaNJ78QV.png",
      title: "Buat & Kirim Broadcast",
      description:
        "Tulis pesan promosi, personalisasi nama pelanggan, lalu kirim ke ribuan kontak hanya dengan satu klik.",
      bgColor: "bg-orange-100",
    },
  ];

  const steps = activeTab === "ai" ? aiSteps : broadcastSteps;
  const bgGradient =
    activeTab === "ai"
      ? "bg-gradient-to-b from-white via-sky-100 to-white"
      : "bg-gradient-to-b from-white via-orange-100 to-white";

  return (
    <div className={`w-full rounded-xl ${bgGradient}`}>
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="flex flex-col justify-center md:justify-start gap-y-10 items-center">
          <h1
            className="text-center font-semibold text-2xl md:text-4xl font-raleway"
            style={{ opacity: 1, transform: "none" }}
          >
            Hanya 3 Langkah, Bisnismu Siap Jalan Otomatis
          </h1>

          <div dir="ltr" data-orientation="horizontal" className="w-full">
            {/* Tabs */}
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="w-full items-center gap-0 border-border p-0 text-slate-500 rounded-t-xl flex justify-center border-0"
              tabIndex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "ai"}
                aria-controls="radix-content-ai"
                data-state={activeTab === "ai" ? "active" : "inactive"}
                id="radix-trigger-ai"
                onClick={() => setActiveTab("ai")}
                className={`-mb-[2px] inline-flex items-center justify-start whitespace-nowrap border-b-2 py-2 text-base font-medium transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-slate-500 data-[state=active]:border-orange-500 data-[state=inactive]:border-transparent data-[state=active]:font-semibold data-[state=active]:text-black data-[state=active]:bg-white data-[state=active]:rounded-t-xl px-10 !bg-transparent ${
                  activeTab === "ai"
                    ? "border-orange-500 font-semibold text-black bg-white rounded-t-xl"
                    : "border-transparent"
                }`}
                tabIndex={activeTab === "ai" ? 0 : -1}
                data-orientation="horizontal"
              >
                AI Agent
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "broadcast"}
                aria-controls="radix-content-broadcast"
                data-state={activeTab === "broadcast" ? "active" : "inactive"}
                id="radix-trigger-broadcast"
                onClick={() => setActiveTab("broadcast")}
                className={`-mb-[2px] inline-flex items-center justify-start whitespace-nowrap border-b-2 py-2 text-base font-medium transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-slate-500 data-[state=active]:border-orange-500 data-[state=inactive]:border-transparent data-[state=active]:font-semibold data-[state=active]:text-black data-[state=active]:bg-white data-[state=active]:rounded-t-xl px-10 !bg-transparent ${
                  activeTab === "broadcast"
                    ? "border-orange-500 font-semibold text-black bg-white rounded-t-xl"
                    : "border-transparent"
                }`}
                tabIndex={activeTab === "broadcast" ? 0 : -1}
                data-orientation="horizontal"
              >
                Broadcast
              </button>
            </div>

            {/* Tab Content */}
            <div
              data-state={activeTab === "ai" ? "active" : "inactive"}
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-trigger-ai"
              id="radix-content-ai"
              tabIndex="0"
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-10"
              style={activeTab !== "ai" ? { display: "none" } : {}}
            >
              {/* Mobile View */}
              <div className="block md:hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                  {steps.map((step, index) => (
                    <div key={index}>
                      <div
                        className={`flex items-center gap-x-5 border p-3 shadow-md rounded-xl ${
                          index === 1 ? "flex-row-reverse" : ""
                        }`}
                        style={{ opacity: 0, transform: "translateY(30px)" }}
                      >
                        <div
                          className={`flex justify-center items-center rounded-full p-2 shrink-0 ${step.bgColor}`}
                        >
                          <img
                            src={step.icon}
                            alt="bot"
                            className="w-14 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold font-raleway text-lg">
                            {step.title}
                          </p>
                          <p className="text-slate-500 text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={
                            index === 1 ? "mr-auto ml-5" : "ml-auto mr-5"
                          }
                          style={{ opacity: 0, transform: "translateY(30px)" }}
                        >
                          <SmallArrowIcon className="rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-10">
                      <div
                        className="flex flex-col items-center gap-y-5"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div>
                          <div
                            className={`flex flex-col justify-center items-center w-[140px] h-[140px] rounded-full ${step.bgColor}`}
                          >
                            <img
                              src={step.icon}
                              alt="scan"
                              className="object-contain w-[100px]"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-raleway font-semibold text-lg md:text-center">
                            {step.title}
                          </p>
                          <p className="font-raleway text-slate-500 md:text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div style={{ opacity: 1, transform: "none" }}>
                          <ArrowIcon className="hidden md:block md:mb-32" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Broadcast Tab Panel */}
            <div
              data-state={activeTab === "broadcast" ? "active" : "inactive"}
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-trigger-broadcast"
              id="radix-content-broadcast"
              tabIndex="0"
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-10"
              style={activeTab !== "broadcast" ? { display: "none" } : {}}
            >
              {/* Mobile View */}
              <div className="block md:hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                  {steps.map((step, index) => (
                    <div key={index}>
                      <div
                        className={`flex items-center gap-x-5 border p-3 shadow-md rounded-xl ${
                          index === 1 ? "flex-row-reverse" : ""
                        }`}
                        style={{ opacity: 0, transform: "translateY(30px)" }}
                      >
                        <div
                          className={`flex justify-center items-center rounded-full p-2 shrink-0 ${step.bgColor}`}
                        >
                          <img
                            src={step.icon}
                            alt="bot"
                            className="w-14 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold font-raleway text-lg">
                            {step.title}
                          </p>
                          <p className="text-slate-500 text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={
                            index === 1 ? "mr-auto ml-5" : "ml-auto mr-5"
                          }
                          style={{ opacity: 0, transform: "translateY(30px)" }}
                        >
                          <SmallArrowIcon className="rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-10">
                      <div
                        className="flex flex-col items-center gap-y-5"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div>
                          <div
                            className={`flex flex-col justify-center items-center w-[140px] h-[140px] rounded-full ${step.bgColor}`}
                          >
                            <img
                              src={step.icon}
                              alt="scan"
                              className="object-contain w-[100px]"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-raleway font-semibold text-lg md:text-center">
                            {step.title}
                          </p>
                          <p className="font-raleway text-slate-500 md:text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div style={{ opacity: 1, transform: "none" }}>
                          <ArrowIcon className="hidden md:block md:mb-32" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
