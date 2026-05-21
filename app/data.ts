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
    slug: "pehong-chen",
    name: "Dr. Pehong Chen",
    title: "Founder & Chairman",
    image: "/Dr. Pehong Chen.webp",
    bio: [
      "Dr. Pehong Chen is Founder & Chairman of BroadVision Group (BVG), a private asset management firm focusing on funding, incubating, and operating cutting-edge business ventures globally across artificial intelligence, cleantech, cloudtech, fintech, healthtech, medtech, biotech, and other innovative technology domains. BVG's mission is to create and nurture unique solutions through digital transformation, delivering compelling growth and profitability for businesses as well as happier work and healthier life for the people they serve.",
      "Previously, Dr. Chen was CEO of BroadVision, Inc. (Nasdaq: BVSN), a highly recognized pioneer in e-commerce, content management, and enterprise digital hub platform solutions, which he founded in 1993 and took public in 1996, reaching a $26B market cap in 2000. For more than 25 years, BVSN has empowered thousands of enterprises worldwide to successfully transform and profitably operate their businesses digitally through high-output collaboration internally and high-touch engagement externally. BVSN was acquired by private equity firm ESW Capital in May 2020.",
      "Prior to starting BroadVision, Dr. Chen was Vice President of multimedia technology at Sybase, responsible for the company's digital initiatives. He founded and was President of Gain Technology, a leading supplier of hypermedia software platform and tools, where he spearheaded multimedia as a core technology for a new generation of business applications. Sybase acquired Gain in 1992 for over $150 million.",
      "A serial entrepreneur, dubbed \"Master of the Universe\" as one of the 25 most influential people in e-business by BusinessWeek, Dr. Chen is an active participant in the Silicon Valley success story. In addition to running and growing his own companies, he has helped a number of startup ventures achieve success with early-stage capital, mentoring, and business connections, including UT Starcom, NetIQ, Siebel Systems, Sina, UpWork, C3.ai, Somnics Health, Lucira Health, among others.",
      "Currently, Dr. Chen is a board member of Weibo (Nasdaq: WB), China's leading social media platform and microblogging network, and a trustee on the board of Asian Art Museum of San Francisco. He has been a member of the Committee of 100 since 1993 and served as Vice Chairman from 2006 to 2010.",
      "Dr. Chen received his PhD from University of California at Berkeley, MS from Indiana University, and BS from National Taiwan University, all in computer science. He is also a graduate of Stanford University's executive program in business and management.",
    ],
    details: [
      "Founder of BroadVision, Inc. in 1993",
      "Took BroadVision, Inc. public in 1996",
      "Former Vice President of multimedia technology at Sybase",
      "Founder and former President of Gain Technology",
    ],
  },
  {
    slug: "a-r-weiler",
    name: "A.R. Weiler",
    title: "Managing Director, Americas",
    image: "/A.R. Weiler.webp",
    bio: [
      "A.R. Weiler is an innovative, outcomes-oriented leader with a passion for building and scaling healthcare businesses, and in the process delivering transformational growth by increasing revenues and bottom-line results.",
      "Mr. Weiler was CEO of Livio Health Group, an innovative care delivery provider owned by the parent of Blue Cross of Minnesota, a $13 billion health plan. In this role, he led various clinical businesses including a mobile and onsite primary care practice for vulnerable populations, as well as a de novo palliative care service, utilizing a risk-bearing, value-based population health care model.",
      "From 2012 through 2016, Mr. Weiler was President and CEO of Healthsense, Inc., where under his focused leadership the company developed a technology-enabled passive remote monitoring system that improved care for the frail elderly and chronically ill while delivering cost savings. Healthsense earned several prestigious industry awards for its innovation and excellence in healthcare, and the company was subsequently acquired by GreatCall, Inc. in December 2016.",
      "Prior to Healthsense, Mr. Weiler held several executive leadership positions in the healthcare industry, including Senior Vice President of Payer Services for Change Healthcare; Senior Vice President of Partnerships for Virgin Pulse; Senior Vice President of Provider Sales and Account Management at OptumInsight; and Vice President of Oracle's North America Healthcare division.",
      "Mr. Weiler also has significant international business development experience. He served as Senior Vice President of Liberate Japan and Oracle Corporation's Japan subsidiary, where he helped establish foundational strategic partnerships that generated more than $1 billion in annual revenue within the first decade.",
      "Mr. Weiler earned a degree in Computer Science from Harvard University, and lives with his physician wife and family in Minneapolis, Minnesota.",
    ],
    details: [
      "Former CEO of Livio Health Group",
      "Former President and CEO of Healthsense, Inc.",
      "Healthcare executive leadership across Change Healthcare, Virgin Pulse, OptumInsight, and Oracle",
      "Computer Science degree from Harvard University",
    ],
  },
  {
    slug: "andrea-rubei",
    name: "Andrea Rubei",
    title: "Managing Director, EMEA",
    image: "/Andrea Rubei.webp",
    bio: [
      "Andrea Rubei, born in Rome, Italy, graduated from LUISS University and began his career in Holland with Hewlett Packard. He then moved to Cisco Systems, where he focused on growing the B2B e-commerce platform, radically transforming the business model with partners from physical to digital.",
      "Subsequently, Andrea moved to BroadVision, one of the fastest growing Silicon Valley internet software solution providers in the early 2000s, where he held roles of increasing responsibility until becoming COO in 2009.",
      "In 2011, Rubei joined Microsoft, where he managed the Nokia-Windows Phone division in Western Europe. He subsequently moved to Microsoft Portugal as Chief Operating and Marketing Officer.",
      "Currently, Andrea Rubei is one of the founders and CEO of myMeta Software, a fast-growing startup that provides a next-generation AI-powered digital adoption platform.",
    ],
    details: [
      "Former BroadVision COO",
      "Former Microsoft executive in Western Europe and Portugal",
      "Founder and CEO of myMeta Software",
      "Graduate of LUISS University",
    ],
  },
  {
    slug: "toshi-sakayori",
    name: "Toshi Sakayori",
    title: "Managing Director, Japan",
    image: "/Toshi Sakayori.webp",
    bio: [
      "Toshi Sakayori is a professional sales executive with more than 35 years of experience leading international companies like IBM, SAP, Manugistics, and InterSystems. He was the first President & Representative Director of BroadVision Japan KK, established as a wholly owned subsidiary of BroadVision, Inc. in 2000, where he led Japan operations and created strong customer relationships with large Japanese companies.",
      "Toshi's career includes being past Country Manager of U.S.-based software companies such as InterSystems Japan KK, a company providing database solutions; BroadVision Japan KK; and Manugistics Japan KK, a supply chain management solution provider.",
      "Before that, Toshi was the past General Manager for SAP Japan western region and sales division in Tokyo. Starting his career at IBM Japan, Toshi spent his first 15 years as an engineer.",
      "Toshi holds a BS in Mathematics from Yokohama City University.",
    ],
    details: [
      "First President & Representative Director of BroadVision Japan KK",
      "Former Country Manager for InterSystems Japan KK and Manugistics Japan KK",
      "Former General Manager for SAP Japan western region and sales division in Tokyo",
      "BS in Mathematics from Yokohama City University",
    ],
  },
  {
    slug: "yun-ping-hsu",
    name: "Yun-Ping Hsu",
    title: "Managing Director, Asia Pacific",
    image: "/Yun-Ping Hsu.webp",
    bio: [
      "Yun-Ping Hsu has over 20 years of software product development experience. He was VP of Engineering in SugarCRM and BroadVision, and held leadership positions in Iris/Lotus/IBM and DEC.",
      "His product experience includes CRM, e-commerce, and groupware. Most recently, he was Technical Director in Big Data and Cloud technology in the III, an NGO for Taiwan's information industry.",
    ],
    details: [
      "Former VP of Engineering at SugarCRM",
      "Former VP of Engineering at BroadVision",
      "Leadership roles at Iris/Lotus/IBM and DEC",
      "Former Technical Director in Big Data and Cloud technology at III",
    ],
  },
];

export type TeamMember = (typeof teamMembers)[number];

export const teamMemberSlugs = teamMembers.map((member) => member.slug);

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
