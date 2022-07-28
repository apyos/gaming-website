// Components
import { Separator } from "../components/separator";

// Assets
import gtw from "../assets/games/gtw.png";
import dyf from "../assets/games/dyf.png";
import fj from "../assets/games/fj.png";

type ItemProps = {
  name: string;
  image: string;
  description: string;
};

const Item = ({ name, image, description }: ItemProps) => (
  <div class="px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
    <div class="py-6 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
      <div class="inline-block text-gray-900 mb-4">
        <img src={image} class="rounded-md grayscale-75" />
      </div>
      <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
        {name}
      </h3>
      <p class="text-gray-500">{description}</p>
    </div>
  </div>
);

export const OurWork = () => (
  <div
    id="our-work"
    class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
  >
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
          <span class="font-light">Our</span> Work
        </h2>
        <Separator />
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          Find a few of our creations down below.
        </p>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 text-center">
        <Item
          name="Guess The Word"
          image={gtw}
          description="Guess The Words and unlock new levels! With over 700 levels, this game is sure to provide you with many hours of fun."
        />

        <Item
          name="Deal Your Friends"
          image={dyf}
          description="Have you always dreamt of being rich? Buy your friends to generate money by keeping them for a long as possible, but take care that no one steals them from you!"
        />

        <Item
          name="Foot Juggle"
          image={fj}
          description="Who can get the most juggles? Tap the ball to keep it in the air as long as possible. Challenge your friends for more fun!"
        />
      </div>
    </div>
  </div>
);
