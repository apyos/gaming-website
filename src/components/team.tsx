import { ComponentChildren } from "preact";

// Assets
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

// Config
const LINKS = {
  facebook: {
    name: "Facebook",
    icon: facebook,
  },
  twitter: {
    name: "Twitter",
    icon: twitter,
  },
  linkedin: {
    name: "LinkedIn",
    icon: linkedin,
  },
};

type TeamMemberLinkProps = {
  type: keyof typeof LINKS;
  link: string;
};

const TeamMemberLink = ({ type, link }: TeamMemberLinkProps) => {
  if (!link) {
    return null;
  }

  const { name, icon } = LINKS[type];
  return (
    <a class="hover:opacity-70" aria-label={name} href={link}>
      <img src={icon} class="inline-block w-6" />
    </a>
  );
};

type TeamMemberProps = {
  name: string;
  title: string;
  avatar: string;
  links?: Partial<Record<keyof typeof LINKS, string>>;
};

export const TeamMember = ({ name, title, avatar, links }: TeamMemberProps) => (
  <div class="flex-shrink max-w-full px-4 w-full md:w-1/3 xl:px-6">
    <div
      class="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
      data-wow-duration="1s"
    >
      <div class="relative overflow-hidden px-6">
        <img
          src={avatar}
          class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale max-w-sm"
          alt="title image"
        />
      </div>
      <div class="pt-6 text-center">
        <p class="text-lg leading-normal font-bold mb-1">{name}</p>
        <p class="text-gray-500 leading-relaxed font-light">{title}</p>
        <div class="mt-2 mb-5 space-x-2">
          {links &&
            Object.entries(links).map(([type, link]) => (
              <TeamMemberLink type={type as keyof typeof LINKS} link={link} />
            ))}
        </div>
      </div>
    </div>
  </div>
);

type TeamProps = {
  children: ComponentChildren;
};

export const Team = ({ children }: TeamProps) => (
  <div class="flex flex-wrap flex-row -mx-4 justify-center">{children}</div>
);
