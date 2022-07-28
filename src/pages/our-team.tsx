// Components
import { Separator } from "../components/separator";
import { Team, TeamMember } from "../components/team";

// Assets
import philippe from "../assets/team/philippe.svg";
import gregory from "../assets/team/gregory.svg";
import bastien from "../assets/team/bastien.svg";

export const OurTeam = () => (
  <div
    id="our-team"
    class="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800"
  >
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
          <span class="font-light">Our</span> Team
        </h2>

        <Separator />
      </header>

      <Team>
        <TeamMember
          name="Philippe"
          title="Founder CEO"
          avatar={philippe}
          links={{
            facebook: "https://www.facebook.com/filoozom/",
            twitter: "https://twitter.com/filoozom",
            linkedin:
              "https://www.linkedin.com/in/philippe-schommers-4aa42694/",
          }}
        />

        <TeamMember
          name="Grégory"
          title="Graphic Designer"
          avatar={gregory}
          links={{
            facebook: "https://www.facebook.com/gregoryxsch",
            linkedin: "https://www.linkedin.com/in/schommers/",
          }}
        />

        <TeamMember
          name="Bastien"
          title="Developer"
          avatar={bastien}
          links={{
            facebook: "https://www.facebook.com/bastien.fajs",
            linkedin: "https://www.linkedin.com/in/bastien-fajs-397706230/",
          }}
        />
      </Team>
    </div>
  </div>
);
