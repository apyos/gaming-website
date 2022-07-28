// Pages
import { Hero } from "./pages/hero";
import { OurTeam } from "./pages/our-team";
import { OurWork } from "./pages/our-work";
import { Footer } from "./pages/footer";

// Assets
import logo from "./assets/logo.png";

export const App = () => {
  return (
    <div class="text-gray-700">
      <header class="bg-gray-50 py-8">
        <img src={logo} class="m-auto" />
      </header>

      <main id="content">
        <Hero />
        <OurWork />
        <OurTeam />
      </main>

      <Footer />
    </div>
  );
};
