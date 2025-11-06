import React from "react";

// Chat messages data
const chatMessages = [
  {
    type: "user",
    text: "Halo, saya mau tanya soal produk skincare kalian.",
    time: "09.21",
  },
  {
    type: "bot",
    text: "Hai! 👋 Makasih udah chat ya. Kamu lagi cari produk skincare untuk kebutuhan apa nih? 😊",
    time: "09.21",
  },
  {
    type: "user",
    text: "Saya lagi cari skincare buat mencerahkan wajah.",
    time: "09.21",
  },
  {
    type: "bot",
    html: '<p>Oke noted! ✨ Kalau buat mencerahkan, kita ada dua produk best seller:</p><ul class="list-disc list-inside mt-2 space-y-1"><li>🌸 <strong>Bright Glow Serum</strong> – bantu mencerahkan dan samarkan noda hitam.</li><li>💧 <strong>Radiant Day Cream</strong> – bikin kulit lembap, halus, dan glowing alami.</li></ul><p class="mt-2">Kamu lebih suka yang simple (pakai 1 produk) atau mau sekalian paket biar hasilnya lebih cepat kelihatan?</p>',
    time: "09.21",
  },
  { type: "user", text: "Saya lebih suka yang paket aja deh.", time: "09.21" },
  {
    type: "bot",
    html: '<p>Good choice! 🥰 Paket <strong>Bright Glow Series</strong> isinya serum + day cream + night cream.</p><p class="mt-2">Harga normalnya <s>Rp 325.000</s>, tapi lagi ada promo jadi cuma <strong>Rp 279.000</strong> aja.</p><p class="mt-2">Mau aku bantu cek ongkir ke kota kamu?</p>',
    time: "09.21",
  },
  { type: "user", text: "Boleh, saya di Bandung.", time: "09.21" },
  {
    type: "bot",
    html: '<p>Oke, bentar ya aku cekin... 🔍</p><p class="mt-2">Untuk pengiriman ke <strong>Bandung</strong>, ongkirnya sekitar <strong>Rp 15.000</strong> via J&T atau SiCepat, estimasi sampai <strong>1–2 hari kerja</strong>.</p><p class="mt-2">Jadi totalnya sekitar <strong>Rp 294.000</strong> udah termasuk ongkir. Gimana, mau lanjut checkout sekarang?</p>',
    time: "09.21",
  },
  { type: "user", text: "Iya, lanjut aja.", time: "09.21" },
  {
    type: "bot",
    html: '<p>Oke siap! 🙌 Pembayarannya bisa via:</p><ul class="list-disc list-inside mt-2 space-y-1"><li>🏦 Transfer bank</li><li>💰 E-wallet (Gopay, Dana, OVO)</li><li>📦 COD (bayar di tempat)</li></ul><p class="mt-2">Kamu mau pilih metode yang mana?</p>',
    time: "09.21",
  },
  { type: "user", text: "COD aja deh biar gampang.", time: "09.21" },
  {
    type: "bot",
    html: '<p>Siap! Jadi kamu pesan <strong>Bright Glow Series</strong> seharga <strong>Rp 279.000 + Rp 15.000 ongkir (Bandung)</strong>, total <strong>Rp 294.000</strong>, dan pilih metode <strong>COD</strong> ya.</p><p class="mt-2">Pesanan kamu bakal dikirim hari ini dan estimasi sampai dalam 1–2 hari kerja.</p><p class="mt-2">Nanti kurir tinggal antar dan kamu bisa bayar langsung di tempat 👍</p>',
    time: "09.21",
  },
  {
    type: "user",
    text: "Oke, makasih ya infonya. Simple banget prosesnya.",
    time: "09.21",
  },
  {
    type: "bot",
    html: '<p>Sama-sama yaa! 🥰 Makasih juga udah order.</p><p class="mt-2">Semoga cocok dan kulit kamu makin cerah serta glowing tiap hari ✨🌿</p>',
    time: "09.21",
  },
];

const ChatMessage = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`flex items-end gap-2 max-w-[75%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`relative p-2 rounded-2xl shadow-sm ${
            isUser
              ? "bg-[#D9FDD3] rounded-br-none"
              : "bg-white text-gray-800 rounded-bl-none"
          }`}
        >
          <div className="w-full flex flex-col gap-y-1">
            <div className="relative">
              <div className="py-2 px-3 leading-normal">
                {message.html ? (
                  <div dangerouslySetInnerHTML={{ __html: message.html }} />
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-x-1">
              <span className="text-[10px] mt-1 block text-gray-500">
                {message.time}
              </span>
              {isUser && (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                  height="12"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 6 7 17l-5-5"></path>
                  <path d="m22 10-7.5 7.5L13 16"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-tl from-orange-300 to-orange-500 rounded-lg flex items-center justify-center text-white">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-0.5">{description}</p>
    </div>
  </div>
);

const StatCard = ({ value, label, showBorder = false }) => (
  <div
    className={`text-center ${showBorder ? "border-r border-orange-300" : ""}`}
  >
    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
      {value}
    </div>
    <p className="text-sm lg:text-base font-semibold text-gray-500">{label}</p>
  </div>
);

export const AIAgentLanding = () => {
  return (
    <div className="relative">
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="space-y-10">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight font-bold">
                Respon Cepat, Penjualan Meningkat, Biaya Hemat
                <br />
                <span className="bg-gradient-to-tr from-orange-400 to-purple-600 bg-clip-text text-transparent">
                  AI Agent Kami Solusinya
                </span>
              </h1>
              <p className="text-base text-gray-600 max-w-xl mt-2 leading-relaxed">
                AI Agent kami bantu bisnis kamu tetap aktif 24 jam tanpa tim
                tambahan - hemat biaya, tingkatkan konversi, dan tingkatkan
                kepuasan pelanggan.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 max-w-3xl">
              <FeatureCard
                icon={
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
                    className="w-5 h-5"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                }
                title="Cek Ongkir Otomatis"
                description="Hitung biaya pengiriman ke seluruh Indonesia secara instan"
              />
              <FeatureCard
                icon={
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
                    className="w-5 h-5"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                    <path d="m7.5 4.27 9 5.15"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" x2="12" y1="22" y2="12"></line>
                    <circle cx="18.5" cy="15.5" r="2.5"></circle>
                    <path d="M20.27 17.27 22 19"></path>
                  </svg>
                }
                title="Lacak Pesanan Real-time"
                description="Pantau status pengiriman pelanggan kapan saja"
              />
              <FeatureCard
                icon={
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
                    className="w-5 h-5"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                }
                title="Katalog Produk Lengkap"
                description="Tampilkan semua produk dengan detail harga dan stok"
              />
              <FeatureCard
                icon={
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
                    className="w-5 h-5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                }
                title="Follow-up Otomatis"
                description="Ingatkan pelanggan tentang keranjang atau promo terbaru"
              />
              <FeatureCard
                icon={
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
                    className="w-5 h-5"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                }
                title="Rekomendasi Produk Pintar"
                description="Sarankan produk yang tepat sesuai preferensi pelanggan"
              />
              <FeatureCard
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path>
                    <circle cx="9" cy="13" r="1"></circle>
                    <circle cx="15" cy="13" r="1"></circle>
                    <path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path>
                  </svg>
                }
                title="Switch to Human"
                description="chat bisa di alihkan ke Human / CS saat perlu sentuhan chat personal."
              />
            </div>

            {/* Stats - Desktop/Mobile */}
            <div className="grid grid-cols-2 md:hidden lg:grid lg:grid-cols-4 gap-5 max-w-3xl">
              <StatCard value="24/7" label="Layanan Aktif" showBorder={true} />
              <StatCard value="80%" label="Hemat Biaya CS" showBorder={false} />
              <div className="text-center border-r border-orange-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                  <div className="flex items-center justify-center gap-x-2">
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
                      className="text-purple-600 w-8 h-8"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    <p>
                      3{" "}
                      <span className="text-base lg:text-lg -ml-3">Detik</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm lg:text-base font-semibold mt-1 text-gray-500">
                  Response chat
                </p>
              </div>
              <StatCard
                value="3x"
                label="Konversi Lebih Cepat"
                showBorder={false}
              />
            </div>
          </div>

          {/* Right Section - Phone Mockup */}
          <div className="w-full max-w-sm">
            <div className="w-full">
              <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-800">
                {/* Status Bar */}
                <div className="bg-white shadow border-b px-6 py-2 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span>9:41</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
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
                    >
                      <path d="M12 20h.01"></path>
                      <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                      <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                      <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="16"
                        height="10"
                        x="2"
                        y="7"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="22" x2="22" y1="11" y2="13"></line>
                      <line x1="6" x2="6" y1="11" y2="13"></line>
                      <line x1="10" x2="10" y1="11" y2="13"></line>
                      <line x1="14" x2="14" y1="11" y2="13"></line>
                    </svg>
                  </div>
                </div>

                {/* Chat Header */}
                <div className="bg-white px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 bg-gradient-to-br from-orange-500 to-purple-500 text-white">
                    🤖
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Your Bussiness</h3>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
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
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </div>

                {/* Chat Messages */}
                <div
                  className="h-[500px] overflow-y-auto bg-[#f2ece1] p-4"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='280' height='280' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.05'%3E%3Cpath d='M0 0h280v280H0z'/%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundPosition: "center center",
                    backgroundSize: "280px",
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "local",
                  }}
                >
                  {chatMessages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                  ))}
                </div>

                {/* Input Bar */}
                <div className="bg-white px-4 py-3 flex items-center gap-2 border-t border-gray-200">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <p className="text-sm text-gray-400">Type a message...</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path>
                      <path d="M6 12h16"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Tablet only */}
            <div className="hidden md:grid grid-cols-2 lg:hidden gap-5 max-w-3xl mt-10">
              <StatCard value="24/7" label="Layanan Aktif" showBorder={true} />
              <StatCard value="80%" label="Hemat Biaya CS" showBorder={false} />
              <div className="text-center border-r border-orange-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                  <div className="flex items-center justify-center gap-x-2">
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
                      className="text-purple-600 w-8 h-8"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    <p>
                      3{" "}
                      <span className="text-base lg:text-lg -ml-3">Detik</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm lg:text-base font-semibold mt-1 text-gray-500">
                  Response chat
                </p>
              </div>
              <StatCard
                value="3x"
                label="Konversi Lebih Cepat"
                showBorder={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1.5px)] [background-size:16px_16px]"></div>
    </div>
  );
};

export default AIAgentLanding;
