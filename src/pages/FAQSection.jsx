import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Apa itu Plasgos CRM?",
      answer: (
        <div className="pb-4 pt-0 flex flex-col gap-4 text-balance text-muted-foreground">
          <p>
            Plasgos CRM adalah platform Platform Otomatisasi Chat & Penjualan
            via WhatsApp yang membantu kamu berkomunikasi, menjual, dan
            mengelola pelanggan secara otomatis.
          </p>
          <p>Dengan Plasgos, kamu bisa:</p>
          <ul className="flex flex-col gap-y-2">
            <li>🤖 Balas chat otomatis 24/7 pakai AI</li>
            <li>📣 Kirim pesan broadcast massal tanpa batas</li>
            <li>📊 Kelola leads & pelanggan lewat dashboard CRM</li>
            <li>🔁 Follow-up otomatis ke calon pelanggan</li>
            <li>🔗 Kelola Banyak Nomor WhatsApp</li>
          </ul>
          <p>Cocok banget untuk kamu yang ingin:</p>
          <ul className="flex flex-col gap-y-2">
            <li>✅ Hemat waktu</li>
            <li>✅ Naikkan penjualan</li>
            <li>✅ Tetap fast response meski CS sedang offline</li>
          </ul>
        </div>
      ),
      bgClass: "bg-neutral-50",
    },
    {
      question: "Apakah Plasgos CRM Cocok untuk Saya?",
      answer: (
        <div className="pb-4 pt-0 flex flex-col gap-4 text-balance text-slate-500">
          <p>
            Kalau kamu ingin jualan lebih cepat, otomatis, dan efisien —
            jawabannya: cocok banget! Plasgos ideal untuk pemilik bisnis online,
            UMKM, agensi, hingga tim CS yang kewalahan handle chat manual. Satu
            dashboard, semua beres: dari broadcast, chat, CRM, sampai follow-up.
          </p>
        </div>
      ),
      bgClass: "bg-neutral-50",
    },
    {
      question: "Apa Bedanya Plasgos dengan Tool WhatsApp Lainnya?",
      answer: (
        <div className="pb-4 pt-0 flex flex-col gap-4 text-balance text-slate-500">
          <p>
            Plasgos bukan hanya tool kirim pesan — tapi sistem cerdas dengan AI
            chatbot, CRM pelanggan, integrasi eksternal, dan insight performa.
            Jadi bukan sekadar "blast", tapi solusi end-to-end.
          </p>
        </div>
      ),
      bgClass: "bg-neutral-50",
    },
    {
      question: "Apakah Saya Perlu Menginstal Aplikasi di Komputer?",
      answer: (
        <div className="pb-4 pt-0 flex flex-col gap-4 text-balance text-slate-500">
          <p>
            Plasgos CRM berbasis web, jadi kamu bisa langsung akses dari browser
            — tanpa instalasi, tanpa ribet. Cukup buka laptop atau HP, login ke
            dashboard, dan semua fitur siap digunakan.
          </p>
        </div>
      ),
      bgClass: "bg-neutral-50",
    },
    {
      question: "Saya Gaptek, Apa Ada Panduannya?",
      answer: (
        <div className="pb-4 pt-0 flex flex-col gap-4 text-balance text-slate-500">
          <p>
            Tenang, kami siap bantu dari A–Z, Plasgos dirancang untuk orang awam
            sekalipun. panduan langkah demi langkah, dan tim support kami juga
            siap dampingi kamu lewat chat. Gak perlu ngerti teknis, yang penting
            siap jualan 😎
          </p>
        </div>
      ),
      bgClass: "bg-neutral-50",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-10 items-center my-10">
          <p className="text-center font-semibold text-2xl md:text-3xl font-raleway">
            F A Q
          </p>
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-10">
            <div>
              <p className="font-semibold text-2xl md:text-3xl font-raleway mb-3">
                Pertanyaan yang Sering Ditanyakan
              </p>
              <p className="font-raleway text-muted-foreground">
                Biar kamu gak bingung, ini penjelasan dari pertanyaan umum yang
                sering muncul.
              </p>
              <div className="flex justify-center md:justify-start">
                <img
                  src="questions-amico-CzmF04nc.svg"
                  alt="growth"
                  className="object-contain w-[300px] md:w-[350px] md:mt-10"
                />
              </div>
            </div>
            <div className="w-full" data-orientation="vertical">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  data-state={openIndex === index ? "open" : "closed"}
                  data-orientation="vertical"
                  className={`p-3 border border-gray-200 rounded-lg my-3 ${
                    openIndex === index
                      ? "bg-gradient-to-b from-sky-50 to-orange-100"
                      : faq.bgClass
                  }`}
                >
                  <h3
                    data-orientation="vertical"
                    data-state={openIndex === index ? "open" : "closed"}
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls={`radix-:rp${index}:`}
                      aria-expanded={openIndex === index}
                      data-state={openIndex === index ? "open" : "closed"}
                      data-orientation="vertical"
                      id={`radix-:rp${index}:`}
                      className={`flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180 !no-underline font-bold ${
                        openIndex === index ? "" : "border-b-0"
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="flex w-full items-center justify-between cursor-pointer">
                        {faq.question}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  {openIndex === index && faq.answer && (
                    <div
                      data-state="open"
                      id={`radix-:rp${index}:`}
                      role="region"
                      aria-labelledby={`radix-:rp${index}:`}
                      data-orientation="vertical"
                      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    >
                      {faq.answer}
                    </div>
                  )}
                  {openIndex !== index && (
                    <div
                      data-state="closed"
                      id={`radix-:rp${index}:`}
                      role="region"
                      aria-labelledby={`radix-:rp${index}:`}
                      data-orientation="vertical"
                      hidden
                      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                      style={{
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
