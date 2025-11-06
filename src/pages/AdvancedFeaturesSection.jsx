import { useState } from "react";

const allFeatures = [
  {
    icon: "technical-support--KB_zeLE.png",
    title: "Balas Chat Otomatis 24 Jam",
    description: "AI aktif nonstop bantu layani semua pesan masuk",
    bgColor: "bg-sky-100",
  },
  {
    icon: "followers-C7Eo-hKY.png",
    title: "Follow-Up Tanpa Perlu Diingat",
    description: "Chat lanjutan otomatis terkirim sesuai alur",
    bgColor: "bg-emerald-100",
  },
  {
    icon: "online-community-DiqfE6zL.png",
    title: "Kelola Banyak Nomor WhatsApp",
    description: "Pantau semua akun dalam satu dashboard",
    bgColor: "bg-amber-100",
  },
  {
    icon: "shipping-cost-DVzuV1ZT.png",
    title: "Cek Ongkir Langsung dari Chat",
    description:
      "Pelanggan tinggal ketik alamat, harga onkos kirim langsung keluar",
    bgColor: "bg-violet-100",
  },
  {
    icon: "missed-call-BOuubmGd.png",
    title: "Bot Otomatis Alihkan ke CS",
    description: "Chat dialihkan ke tim sesuai antrian & waktu aktif",
    bgColor: "bg-rose-100",
  },
  {
    icon: "ai-DvJ1TlT1.png",
    title: "AI Paham Pesan yang Tidak Jelas",
    description: "Chat ambigu tetap dijawab dengan pintar & natural",
    bgColor: "bg-lime-100",
  },
  {
    icon: "digital-key-DTbXNHtW.png",
    title: "Bot Tanggapi Kata Kunci Otomatis",
    description: "Chat masuk berisi trigger langsung direspon",
    bgColor: "bg-orange-50",
  },
  {
    icon: "user-engagement-DcZO-BqR.png",
    title: "Leads Baru Masuk Setiap Hari",
    description: "Sistem aktif kumpulkan prospek dari berbagai sumber",
    bgColor: "bg-teal-100",
  },
  {
    icon: "broadcast-UaNJ78QV.png",
    title: "Kirim Broadcast Tanpa Batas",
    description: "Bebas kirim ribuan pesan tanpa limit harian",
    bgColor: "bg-indigo-100",
  },
  {
    icon: "content-creator-CSvjrOQE.png",
    title: "Pesan Bisa Dikustom Sepenuhnya",
    description: "Sesuaikan isi pesan dengan nama, produk, dll.",
    bgColor: "bg-pink-100",
  },
  // Additional features (shown when expanded)
  {
    icon: "uploading-PyZYs6cO.png",
    title: "Kirim Gambar Lewat Broadcast",
    description: "Tambahkan media visual agar pesan makin menarik",
    bgColor: "bg-sky-100",
  },
  {
    icon: "clock-tIPi06Mx.png",
    title: "Kirim di Waktu Paling Tepat",
    description: "Pesan dikirim saat audiens sedang aktif",
    bgColor: "bg-emerald-100",
  },
  {
    icon: "calendar-DefjSFmI.png",
    title: "Jadwalkan Pesan Otomatis",
    description: "Tulis sekarang, kirim otomatis kapan pun kamu mau",
    bgColor: "bg-amber-100",
  },
  {
    icon: "text-box-Hbk7iEJB.png",
    title: "Spintax: Variasi Kata Otomatis",
    description: "Gunakan variasi kata agar pesan tidak monoton",
    bgColor: "bg-violet-100",
  },
  {
    icon: "group1-UKS4tfz8.png",
    title: "Ambil Kontak dari Grup WA",
    description: "Scrape semua nomor dari grup hanya dengan 1 klik",
    bgColor: "bg-rose-100",
  },
  {
    icon: "statistical-iRkMKfAI.png",
    title: "Lihat Status Broadcast",
    description: "Pantau pesan yang terkirim, dibaca, atau gagal",
    bgColor: "bg-lime-100",
  },
  {
    icon: "ab-testing-JA0hSVc6.png",
    title: "Uji A/B Isi Pesan",
    description: "Bandingkan dua versi pesan untuk lihat performa terbaik",
    bgColor: "bg-orange-50",
  },
  {
    icon: "cloud-storage-CNIUAzlf.png",
    title: "Import & Export Kontak",
    description: "Upload atau unduh data kontak dari file CSV atau Excel",
    bgColor: "bg-teal-100",
  },
];

const FeatureCard = ({ icon, title, description, bgColor }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative rounded-3xl border border-neutral-200 !bg-white overflow-hidden p-6 w-full shadow-md"
      tabIndex="0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 229, 255, 0.2), transparent 80%)`,
        }}
      />
      <div className="flex items-center gap-x-5">
        <div
          className={`flex justify-center items-center rounded-xl p-2 ${bgColor}`}
        >
          <img src={icon} alt="feature icon" className="w-12 object-contain" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold font-raleway text-lg">{title}</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const AdvancedFeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? allFeatures : allFeatures.slice(0, 10);

  return (
    <div className="w-full bg-gradient-to-b from-white via-sky-100 to-white">
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-10 items-center my-10">
          <div>
            <h1 className="text-center font-semibold text-2xl md:text-4xl font-raleway">
              Fitur-Fitur Canggih untuk Jalankan Bisnis Tanpa Ribet
            </h1>
            <p className="font-raleway text-gray-500 mt-5 text-center">
              Semua fitur dirancang untuk bantu kamu jangkau lebih banyak
              pelanggan, bekerja lebih efisien, dan tetap terhubung 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {displayedFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            ))}
          </div>

          <div></div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#FA6532] text-white shadow hover:bg-[#FA6532]/40 h-10 rounded-md px-8 mx-auto"
          >
            {showAll
              ? "Lihat Sedikit Fitur"
              : "Lihat lebih banyak fitur lainnya"}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: showAll ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeaturesSection;
