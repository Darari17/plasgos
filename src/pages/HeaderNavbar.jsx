import React, { useState, useEffect } from "react";

export const HeaderNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsSidebarOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height of navbar + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          data-state="open"
          className="fixed inset-0 z-[60] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          style={{ pointerEvents: "auto" }}
          data-aria-hidden="true"
          aria-hidden="true"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          role="dialog"
          id="radix-:rpc:"
          aria-describedby="radix-:rpe:"
          aria-labelledby="radix-:rpd:"
          data-state="open"
          className="fixed z-[70] gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm bg-white"
          tabIndex="-1"
          style={{ pointerEvents: "auto" }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            onClick={() => setIsSidebarOpen(false)}
          >
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
              className="lucide lucide-x h-4 w-4"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h2
              id="radix-:rpd:"
              className="text-lg font-semibold text-foreground invisible"
            >
              X
            </h2>
            <p
              id="radix-:rpe:"
              className="text-sm text-muted-foreground hidden"
            >
              X
            </p>
          </div>
          <div className="flex flex-col gap-y-5 mb-5">
            <div>
              <button
                onClick={() => scrollToSection("hero")}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              >
                Home
              </button>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("solutions")}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              >
                Solusi
              </button>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("features")}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              >
                Fitur
              </button>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("pricing")}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              >
                Harga
              </button>
            </div>
            <div>
              <a
                href="https://plasgos.co.id/crm/doc-api.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                  API Doc
                </button>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 ">
            <a href="https://www.plasgos.co.id/login?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input border-gray-100 bg-white shadow-sm hover:bg-gray-100 h-9 px-4 py-2 w-full">
                Login
              </button>
            </a>
            <a href="https://www.plasgos.co.id/register?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#FA6532] text-white shadow hover:bg-[#e55a2d] h-9 px-4 py-2 w-full">
                Register
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`w-full h-[70px] sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full mx-auto h-full max-w-screen-xl p-3 flex justify-between items-center">
          <div
            className="w-[120px] cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="plg-logo-D6Raik_a.png"
              className="object-contain w-full"
              alt="Plasgos Logo"
            />
          </div>
          <div className="hidden gap-x-12 md:flex">
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center !flex flex-col"
            >
              <div style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-center space-x-1"
                  dir="ltr"
                >
                  <div className="flex gap-x-5">
                    <li>
                      <p
                        onClick={() => scrollToSection("hero")}
                        className="lg:mx-5 font-semibold font-raleway transition-all duration-200 ease-in-out hover:text-primary cursor-pointer"
                        data-radix-collection-item=""
                      >
                        Home
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => scrollToSection("solutions")}
                        className="lg:mx-5 font-semibold font-raleway transition-all duration-200 ease-in-out hover:text-primary cursor-pointer"
                        data-radix-collection-item=""
                      >
                        Solusi
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => scrollToSection("features")}
                        className="lg:mx-5 font-semibold font-raleway transition-all duration-200 ease-in-out hover:text-primary cursor-pointer"
                        data-radix-collection-item=""
                      >
                        Fitur
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => scrollToSection("pricing")}
                        className="lg:mx-5 font-semibold font-raleway transition-all duration-200 ease-in-out hover:text-primary cursor-pointer text-primary"
                        data-radix-collection-item=""
                      >
                        Harga
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://plasgos.co.id/crm/doc-api.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p
                          className="lg:mx-5 font-semibold font-raleway transition-all duration-200 ease-in-out hover:text-primary cursor-pointer"
                          data-radix-collection-item=""
                        >
                          API Doc
                        </p>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center"></div>
            </nav>
          </div>
          <div className="hidden gap-x-3 md:flex">
            <a href="https://www.plasgos.co.id/login?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-100 border-input bg-white shadow-sm hover:bg-gray-100 h-9 px-4 py-2">
                Login
              </button>
            </a>
            <a href="https://www.plasgos.co.id/register?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#FA6532] text-white shadow hover:bg-[#e55a2d] h-9 px-4 py-2">
                Register
              </button>
            </a>
          </div>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isSidebarOpen}
            aria-controls="radix-:rpc:"
            data-state={isSidebarOpen ? "open" : "closed"}
            className="md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 17 17"
              className="hover:scale-110 transition-all duration-200 ease-in-out "
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g></g>
              <path d="M16 2v2h-11v-2h11zM5 9h11v-2h-11v2zM5 14h11v-2h-11v2zM2 2c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 7c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 12c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
