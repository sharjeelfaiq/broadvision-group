import { portfolioCategories } from "@/src/data/portfolio";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const founderImage = "/Dr.%20Pehong%20Chen.webp";

const sectorImages = {
  "artificial-intelligence":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mdvAP2K3yRRNscNrzxDTd3-uk7BOqVPkYmWimYpBMi355Mtx-3EhbamKQyyCWBb_2FF1b--GVLFxk3Tc8bR6KXZtWM3csdy3hp-1X_YVC5SscwBR4tdOLucgyzSI0--iPr95twdED92Sk96pYSQPVtBjX5SOLAK3PBjxWAXV87SzosAJ_GUGtHrtQTXxhM4aMoWN3X3VkvWAeEJNYMkN8Zglg91aLK4XN02ZVcJ5sH00rTQKx6ODOBzKOJG7t0-BiI1fkin2fPA",
  cleantech:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuATEvAXbNtupAJ1iuXolM9UOdhocROxw2RIJB27iFZ9TTOvHWDjE9ZG4sR6h7dELVGjdtTP5RuWvGqustnXmPE6WmbVfJjIax7KhIkqDwIoQUjGbq2vDTSIQT5OkhiUBvZTPK_U82p9t0glmz6tb8-i4ux1Qs4K0hy6TABZFgTbBpgD2rPefh5eH39oQzI4P8O0GPxNbZ5cZzpScC2J3hmIX6h0TSfTO3taCsUtNYHn2cst7KGYxHLkJTsv3U64-_3m8WVIhqA-HSE",
  "cloudtech-big-data-digital-engagement":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALIVUDMOcjZlHJSKLvjqeHJK6YF5tRP9FH3ZD6OP_zgPMS0HkuxWoKIpqr9UCG9w9GU5onIiHeqpx19XX6_k9Y6UythkA5BIFqHqmMuwSumkmg64PJc33GGRWbnByhldtsl_xKfdCpugCuJeO33Az010zKOQjL0NFNq2NGkbCOl5BSUjRYRBk5Irjw_hyaq4pearc2Vb_zWGU-k-b_4cwORdE_m0dyAKCzbApsQh3oYS4JhdmRSWpYrHITSTRVaXZ2EgeX7AGBa_A",
  fintech:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRvFE54sfP3JGNNWty8qUv0UIqRjebQX0yWsRI70sERKqvmm8_RBQowDTKQLHh2Lmz_f4FLDnvi6eiFsh3z1MktRfw-jmHhvXhGy_S9O2WDq-3Y_SW74MbKJXvMymhRBcBDRuS3-Rg6fvRSVhVyQ9zf4OQDQxG5BklQ7upAzW42kIq0_iKwfGuzmvUNdAxcVUdis3nF5-z5GJ_c-ADDyVz3PQBZoCvoj0wHdShowcVScB1j2zb7nr60O7Vjo966jbdOIvu17l75HI",
  "healthtech-digital-health":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7ERhbnSmXzpUlxT6cRW9d_tXUYmuqzYJnDb0M8fFeRcT6isjvQ2NHtQeekH788n879Ar3qhxHhHFe42KCuEo4aShjX4_tQ8So84iddKDvATPPRlSD6aOiBNAevfyrs0qEby5wRl8fOR9kIsEBxFEcUGOnb5VVRMmZMQVWUIVDDpXNeO16GbESt8l0EKOczAwm-2oZnj3idYNOYqKEu24Pa0xUwcRyWh2O3jU5uk1tnbJy46QWTFVUIHEqFUU-J-0J1u5_w-wTurA",
  medtech:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCNEgQbVxVoGKia3mZjNdmTcBaS1pA3gjkWVgUFBdMLduBsgpfqU_h_d6PTrQSHP5O6y1YGmb4OZXsx7mIop0XUGrskBXTQTvUFoKE-ArUb_0PgsQaX4L3UOhRHCQcL4Nez7TbERnyPNbfBUoHrE02GTtpaBtfH9Sf_teAc0n_lo6OjJG9cWhn-vN_dVpBOqmNPABGTaI7jNRxdWZsI8DV3pAbfd_uYHu12yIICCy-TB6gftXRxQbW6na-nu7jPJTvqMzkDYSbD1Xs",
  biotech:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3klVlerFdAiwx37v0DI9ZeMmSSaWvV6hYaNiWPF_r2SDm3iW7P2edCJVc4WyNUylmAx6mFVtLRY_iSGuhXRLkzSKjpHgywLWe7JPqa2tIVqaR0QRuCB1oTT8V7DJtCyNxgTtpbViG5pQQTft6xH8-bAlSA3PIT7ylG_NuUtPAwJDQWSAgRZ0AjNDs_liI3Vd6OcFDugw2QT2onvQVGuhPqQeFkTTMngy9Py35JMFC0fb6t3oiVh06_TXWBsJOLVVCAvgtDfmMOY0",
  semiconductor:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCg8m0wfWkOGzpmg4dPHA4yOFtZ-wencxOcowKcLvhSkp22dDZqnTpuUONKXTZxmmEdZpuWXPwXh01qqSdX0uKr2NsJOhe3cdA1YOG13Cl3CSn0XK1YiJA9EePo1XIg7idteyb_h35jytct8iRVEZEXrubppBlGxpObjW7WRj-mAJkGQcdBwd1D0wLPAuKNsYBkyxNN-7dqkxdGrgmrqyJ1VW_gnt523-0yS9whP-l6tPFlTBW9050dvAIuJdqf-oT5h0SFJzxWi8A",
  miscellaneous:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWbRQ3MzrSrmirvB1Fk0tUtpS78FlzsDcolmvj2RcrrTgZJi686piw2Fcmba5q5Xr-i_0de-uZCllexdwA-o8v6fDxrNLQKDxHMYsj1Kf4y21mccdLpsM3gnQ6uzbnLxOy4SRMQHJl_-1IrPuwXjyBHkE9oOn-Zcyoa-KdS0wBaADRfhRsvCMSX3ZL2kxyfMSzsPD6aT5XA3ET9469Xakmk6tUJQQns1RG6CcEbqPIm2I4eKfZz2vxz4D6y9FgC1rx0stg4-jlFd8",
};

export const sectorCards = portfolioCategories.map((category) => ({
  title: category.name,
  href: `/portfolio?category=${category.slug}`,
  image: sectorImages[category.slug as keyof typeof sectorImages],
}));

export const teamMembers = [
  {
    name: "Dr. Pehong Chen",
    title: "Founder & Chairman",
    image: "/Dr. Pehong Chen.webp",
  },
  {
    name: "A.R. Weiler",
    title: "Managing Director, Americas",
    image: "/A.R. Weiler.webp",
  },
  {
    name: "Andrea Rubei",
    title: "Managing Director, EMEA",
    image: "/Andrea Rubei.webp",
  },
  {
    name: "Toshi Sakayori",
    title: "Managing Director, Japan",
    image: "/Toshi Sakayori.webp",
  },
  {
    name: "Yun-Ping Hsu",
    title: "Managing Director, Asia Pacific",
    image: "/Yun-Ping Hsu.webp",
  },
];
