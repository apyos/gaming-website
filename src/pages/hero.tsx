// Components
import { OurWork } from "../components/icons/our-work";
import { ContactUs } from "../components/icons/contact-us";

// Assets
import hero from "../assets/hero.svg";

export const Hero = () => (
  <div id="hero" class="section relative z-0 py-16 md:pb-20 bg-gray-50">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
          <img
            src={hero}
            class="w-full max-w-full h-auto"
            alt="creative agency"
          />
        </div>

        <div class="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
          <div class="text-center lg:text-left mt-6 lg:mt-0">
            <div class="mb-12">
              <h1 class="text-4xl leading-normal text-black font-bold mb-4">
                Apyos Gaming
              </h1>
              <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                Developing games is our passion.
                <br />
                We're hiring, please don't hesitate to contact us!
              </p>
            </div>
            <div class="flex gap-2 sm:gap-4 flex-col sm:flex-row text-center leading-normal justify-center lg:justify-start">
              <a
                class="py-2.5 px-10 text-gray-900 bg-white border-b border-gray-100 hover:text-black hover:ring-0 focus:outline-none focus:ring-0"
                href="#our-work"
              >
                <OurWork /> Our Work
              </a>

              <a
                class="py-2.5 px-10 text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                href="#contact"
              >
                <ContactUs /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
