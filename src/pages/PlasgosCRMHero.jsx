export const PlasgosCRMHero = () => {
  return (
    <div className="w-full">
      <div className="mx-auto px-5 py-5 w-full max-w-screen-xl flex flex-col gap-y-10">
        <div className="relative p-3 md:p-10 flex flex-col gap-y-5">
          {/* Floating Avatar 1 */}
          <div className="absolute animate-bounce left-5">
            <div className="flex items-center relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-orange-400 w-8 h-8 md:w-12 md:h-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="avatar1-S6oftetX.jpg"
                  alt="Avatar 1"
                />
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="rotate-45 absolute top-[50px] -right-5 text-slate-500"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </div>

          {/* Floating Avatar 2 */}
          <div className="absolute animate-bounce right-0">
            <div className="flex items-center relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-orange-400 w-8 h-8 md:w-14 md:h-14">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="avatar2-CQiINIAr.jpg"
                  alt="Avatar 2"
                />
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="rotate-[130deg] absolute top-[55px] -left-6 text-slate-500"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </div>

          {/* Floating Avatar 3 */}
          <div className="absolute animate-bounce bottom-0 md:bottom-5">
            <div className="flex items-center relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-orange-400 w-8 h-8 md:w-14 md:h-14">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="avatar5-aEgVf0h2.jpg"
                  alt="Avatar 5"
                />
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="-rotate-[30deg] absolute -top-[20px] -right-12 text-slate-500"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </div>

          {/* Floating Avatar 4 */}
          <div className="absolute animate-bounce bottom-0 md:bottom-5 right-0">
            <div className="flex items-center relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-orange-400 w-8 h-8 md:w-14 md:h-14">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="avatar6-CS3Ftjhi.jpg"
                  alt="Avatar 6"
                />
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="-rotate-[140deg] absolute -top-[40px] -left-[50px] text-slate-500"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="my-[80px] md:my-[80px] flex flex-col justify-center md:items-center gap-y-6">
            {/* Powered By AI Badge */}
            <div className="flex gap-x-2 items-center justify-center p-2 rounded-lg border border-slate-300 w-max">
              <p className="text-xs">Powered By AI </p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path>
              </svg>
            </div>

            {/* Main Heading */}
            <p className="blur-text font-raleway font-bold text-5xl md:text-6xl flex flex-wrap items-center md:justify-center">
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Tingkatkan&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Efisiensi&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                &amp;&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Penjualan&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Bisnis&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Anda&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                Bersama&nbsp;
              </span>
              <span
                className="inline-block will-change-[transform,filter,opacity]"
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                <span className="bg-gradient-to-b from-orange-400 to-pink-500 bg-clip-text text-transparent font-black">
                  Plasgos CRM
                </span>
              </span>
            </p>

            {/* Subtitle */}
            <p className="md:text-center font-raleway text-slate-500">
              All-in-one CRM + WhatsApp Broadcast + AI Chatbot. <br />
              Otomatiskan bisnis Anda dan respon pelanggan 24/7 — bahkan saat
              Anda tidur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 items-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:text-accent-foreground h-10 px-8 rounded-full bg-green-400 hover:bg-green-500 ring-2 ring-green-500 ring-offset-2 max-sm:w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="scale-105"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
                Konsultasi Dengan Kami
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#006BB3] border-2 border-[#99C4E1] text-white font-medium shadow-lg hover:shadow-xl transition-all max-sm:w-full">
                Aktifkan Sekarang
                <svg
                  className="w-4 h-4"
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
  );
};
