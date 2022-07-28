import { h, ComponentChildren } from "preact";

// Components
import { FacebookIcon } from "../components/icons/facebook";

type LineProps = {
  children: ComponentChildren;
};

const Line = ({ children }: LineProps) => (
  <li class="py-1 hover:text-gray-900">{children}</li>
);

type ColumnProps = {
  id?: string;
  title: string;
  children: ComponentChildren;
};

const Links = ({ id, title, children }: ColumnProps) => (
  <div id={id} class="flex-shrink max-w-full w-full sm:w-1/2 mb-6 lg:mb-0">
    <h4 class="text-base leading-normal mb-3 uppercase text-gray-800 font-semibold">
      {title}
    </h4>
    <ul>{children}</ul>
  </div>
);

export const Footer = () => (
  <footer class="bg-gray-50 text-gray-700">
    <div class="relative pt-16 pb-6 xl:pb-12 text-center lg:text-left">
      <div class="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
        <div class="flex flex-wrap flex-row lg:justify-between -mx-3">
          <div class="flex-shrink max-w-full w-full lg:w-1/2 px-3 lg:pr-16">
            <div class="mb-2">
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
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-shrink max-w-full w-full lg:w-1/2 px-3">
            <div class="flex flex-wrap flex-row">
              <Links title="Links">
                <Line>
                  <a href="#our-work">Our Work</a>
                </Line>
                <Line>
                  <a href="#our-team">Our Team</a>
                </Line>
              </Links>

              <Links id="contact" title="Contact">
                <Line>
                  <a href="mailto:contact+gaming@apyos.com">
                    contact@apyos.com
                  </a>
                </Line>
                <Line>
                  Pfarrer-Henreco Straße 8<br />
                  4700 Eupen
                  <br />
                  Belgium
                </Line>
              </Links>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-dark">
      <div class="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
        <div class="row">
          <div class="col-12 col-md text-center">
            <p class="d-block my-3">Copyright © Apyos | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
