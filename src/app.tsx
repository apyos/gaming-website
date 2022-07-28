// Pages
import { Hero } from "./pages/hero";
import { WhatWeDo } from "./pages/what-we-do";
import { OurTeam } from "./pages/our-team";
import { OurWork } from "./pages/our-work";

// Assets
import logo from "./assets/logo.png";

export const App = () => {
  return (
    <div class="text-gray-700">
      <header class="bg-gray-50">
        <nav class="py-8">
          <img src={logo} class="m-auto" />
        </nav>
      </header>

      <main id="content">
        <Hero />
        <OurWork />
        <OurTeam />
      </main>

      <footer class="bg-gray-50 text-gray-700">
        <div id="footer-content" class="relative pt-16 pb-6 xl:pb-12">
          <div class="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
            <div class="flex flex-wrap flex-row lg:justify-between -mx-3">
              <div class="flex-shrink max-w-full w-full lg:w-1/2 px-3 lg:pr-16">
                <div class="flex items-center mb-2">
                  <span class="text-3xl leading-normal mb-2 font-bold text-gray-800 mt-2">
                    Apyos Gaming
                  </span>
                </div>
                <p>
                  Apyos Gaming is a game development company. We develop casual,
                  truly social games that can be played across many platforms.
                </p>
                <ul class="space-x-3 mt-6 mb-6 Lg:mb-0">
                  <li class="inline-block">
                    <a
                      target="_blank"
                      class="hover:text-gray-800"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/apyos.gaming"
                      title="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex-shrink max-w-full w-full lg:w-1/2 px-3">
                <div class="flex flex-wrap flex-row">
                  <div class="flex-shrink max-w-full w-1/2 md:w-1/2 mb-6 lg:mb-0">
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-800 font-semibold">
                      Links
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-gray-900">
                        <a href="#our-work">Our Work</a>
                      </li>
                      <li class="py-1 hover:text-gray-900">
                        <a href="#our-team">Our Team</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="contact"
                    class="flex-shrink max-w-full w-1/2 md:w-1/2 mb-6 lg:mb-0"
                  >
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-800 font-semibold">
                      Contact
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-gray-900">
                        <a href="mailto:contact+gaming@apyos.com">
                          contact@apyos.com
                        </a>
                      </li>
                      <li class="py-1 hover:text-gray-900">
                        Pfarrer-Henreco Straße 8<br />
                        4700 Eupen
                        <br />
                        Belgium
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-dark">
          <div class="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
            <div class="row">
              <div class="col-12 col-md text-center">
                <p class="d-block my-3">
                  Copyright © Apyos | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
