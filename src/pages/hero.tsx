// Components
import { OurWork } from "../components/icons/our-work";
import { ContactUs } from "../components/icons/contact-us";
import { Button } from "../components/button";

// Assets
import hero from "../assets/hero.svg";

export const Hero = () => (
  <div id="hero" class="section relative z-0 py-16 md:pb-20 bg-gray-50">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
          <img src={hero} class="w-full max-w-full h-auto" />
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
            <div class="flex gap-2 sm:gap-4 flex-col sm:flex-row justify-center lg:justify-start">
              <Button variant="light" href="#our-work">
                <OurWork /> Our Work
              </Button>
              <Button variant="dark" href="#contact">
                <ContactUs /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
