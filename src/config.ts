import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://alokm.github.io", // this is the target deployed domain
  author: "Alok Mohindra",
  desc: "Exploring the art and science of product management with an emphasis on product led growth strategies",
  title: "Alok's Product Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/alokm/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alokmohindra",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:alok.mohindra@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
