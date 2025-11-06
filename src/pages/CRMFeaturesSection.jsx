const features = [
  {
    image: "bc2-BBr_EG1_.png",
    title: "Broadcast",
    description:
      "Kirim pesan massal ke ratusan kontak sekaligus dengan personalisasi otomatis. Jadwalkan campaign dan tracking delivery rate secara real-time.",
    colSpan: "lg:col-span-2",
  },
  {
    image: "serial-messages2-D3xjtKsB.png",
    title: "Serial Messages",
    description:
      "Otomasi follow-up dengan sequence message yang terstruktur. Buat drip campaign untuk nurturing leads hingga closing dengan timing sempurna.",
    colSpan: "",
  },
  {
    image: "groups2-Ccp76XSm.png",
    title: "Group & Contact Management",
    description:
      "Kelola database kontak dengan segmentasi pintar. Organisir leads dalam grup custom dan filter berdasarkan behavior untuk targeting presisi.",
    colSpan: "",
  },
  {
    image: "dashboard2-DR7AOrbC.png",
    title: "Dashboard Analytics",
    description:
      "Visualisasi data lengkap dengan metrics penting. Monitor conversion rate, response time, dan ROI campaign dalam satu dashboard interaktif.",
    colSpan: "",
  },
  {
    image: "link-rotator2-CbhFkOEb.png",
    title: "Link Rotator & Multi Agent",
    description:
      "Distribusi lead otomatis ke multiple agent dengan link rotation. Balance workload tim dan maksimalkan response time untuk kepuasan customer.",
    colSpan: "",
  },
  {
    image: "flow2-S4U7mYMx.png",
    title: "Flow Interactive Message",
    description:
      "Bangun conversational flow dengan daftar opsi interaktif untuk menciptakan percakapan yang dinamis dan logika bercabang yang merespons secara otomatis.",
    colSpan: "lg:col-span-3",
  },
];

const FeatureCard = ({ image, title, description, colSpan }) => (
  <div
    className={`group relative shadow ring-1 ring-gray-200 rounded-2xl p-3 border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-orange-500/10 ${colSpan}`}
  >
    <img
      src={image}
      alt={title}
      className="rounded-xl w-full object-contain max-h-[300px] mb-5"
    />
    <h3 className="text-2xl font-bold mb-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300 px-2">
      {title}
    </h3>
    <p className="leading-relaxed transition-colors duration-300 text-sm text-gray-500 px-2">
      {description}
    </p>
  </div>
);

export const CRMFeaturesSection = () => {
  return (
    <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-300 font-semibold text-sm tracking-wide">
              FITUR LENGKAP CRM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Semua yang Anda Butuhkan
            <span className="block bg-gradient-to-tr from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Dalam Satu Platform
            </span>
          </h2>
          <p className="md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Tingkatkan produktivitas tim sales dengan tools automation yang
            powerful dan analytics mendalam untuk keputusan bisnis yang tepat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              colSpan={feature.colSpan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMFeaturesSection;
