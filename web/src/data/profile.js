const LINKS = {
  linkedin: {
    key: "linkedin",
    label: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/maxim-betin",
    tone: "primary",
  },
  stackOverflow: {
    key: "stack-overflow",
    label: "Stack Overflow",
    icon: "mdi-stack-overflow",
    href: "https://stackoverflow.com/users/9146820/maxim",
    tone: "accent",
  },
  github: {
    key: "github",
    label: "GitHub",
    icon: "mdi-github",
    href: "https://github.com/maximbetin",
    tone: "primary",
  },
  resume: {
    key: "resume",
    label: "Resume",
    icon: "mdi-file-account",
    href:
      "https://storage.googleapis.com/phonic-network-281616.appspot.com/Maxim%20Betin%20-%20Resume%20(English).pdf",
    tone: "accent",
  },
};

export const HERO_ACTIONS = [
  LINKS.linkedin,
  LINKS.stackOverflow,
  LINKS.github,
  LINKS.resume,
];

export const FOOTER_LINKS = [LINKS.linkedin, LINKS.github];
