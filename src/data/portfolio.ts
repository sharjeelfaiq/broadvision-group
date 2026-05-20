export type PortfolioProject = {
  name: string;
  description: string;
  url: string;
  status: string;
};

export type PortfolioCategory = {
  name: string;
  slug: string;
  projects: PortfolioProject[];
};

export type PortfolioProjectEntry = PortfolioProject & {
  category: string;
  categorySlug: string;
};

export const allPortfolioCategory = {
  name: "All",
  slug: "all",
} as const;

export const portfolioCategories: PortfolioCategory[] = [
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    projects: [
      {
        name: "Aluna Health",
        description:
          "AI-powered digital health data management platform for automating clinical practices and research workflows",
        url: "https://www.alunahealth.com/",
        status: "Private",
      },
      {
        name: "BigObject",
        description: "Space/time AI for continuous activity tracking anonymously",
        url: "https://www.bigobject.io/?lang=EN",
        status: "Private",
      },
      {
        name: "C3.ai",
        description: "Leading enterprise AI platform to drive digital transformation",
        url: "https://c3.ai/",
        status: "NYSE: AI",
      },
      {
        name: "Cicada Speech",
        description:
          "Conversational AI platform for enhanced customer engagement experience",
        url: "https://cicada-speech.com/",
        status: "Private",
      },
      {
        name: "Ellipsis Health",
        description:
          "Conversational AI app for quantifying anxiety and depression severity",
        url: "https://www.ellipsishealth.com/",
        status: "Private",
      },
      {
        name: "Envive",
        description: "Deep learning AI platform for robo-assisted medical diagnostics",
        url: "https://envive.org/about/",
        status: "Private",
      },
      {
        name: "Rosetta.ai",
        description:
          "Machine-learning based neural network platform for boosting e-merchant sales",
        url: "https://rosetta.ai/",
        status: "Private",
      },
      {
        name: "Synaptiq",
        description:
          "AI-Powered Training for Medical Doctors - Study less. Remember more. Critical Learning that adapts to you",
        url: "https://synaptiq.co/",
        status: "Private",
      },
      {
        name: "Syntiant",
        description:
          "Intelligent always-on edge IoT devices that sense, analyze and autonomously act to create a healthier and more sustainable environment for all",
        url: "https://www.syntiant.com/",
        status: "Private",
      },
      {
        name: "VocXi Health",
        description:
          "Human Breath Intelligence via Artificial Intelligence - Detecting health and disease status with less than a minute of your breath",
        url: "https://vocxihealth.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Cleantech",
    slug: "cleantech",
    projects: [
      {
        name: "BravoWhale",
        description:
          "Private blockchain network for digitizing business cashflow and corporate carbon credits, end-to-end, to ensure transparency and accountability",
        url: "https://www.bravowhale.com/",
        status: "Private",
      },
      {
        name: "Syntiant",
        description:
          "Intelligent always-on edge IoT devices that sense, analyze and autonomously act to create a healthier and more sustainable environment for all",
        url: "https://www.syntiant.com/",
        status: "Private",
      },
      {
        name: "TricornTech",
        description:
          "Innovative portable gas analysis platform for precise/continuous VOC detection",
        url: "https://www.tricorntech.com/",
        status: "TPEX: 6909",
      },
      {
        name: "VeryCleanPlanet",
        description: "Global digital network for i-REC exchange and ESG compliance",
        url: "https://www.verycleanplanet.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Cloudtech / Big Data / Digital Engagement",
    slug: "cloudtech-big-data-digital-engagement",
    projects: [
      {
        name: "Baishan Cloud",
        description: "Unified global edge cloud platform",
        url: "https://intl.baishancloud.com/",
        status: "Private",
      },
      {
        name: "BigObject",
        description: "Space/time AI for continuous activity tracking anonymously",
        url: "https://www.bigobject.io/?lang=EN",
        status: "Private",
      },
      {
        name: "BroadVision",
        description: "Global pioneer in e-commerce and digital engagement platforms",
        url: "https://broadvision.com/broadvision/",
        status: "Nasdaq: BVSN / Acquired by ESW Capital",
      },
      {
        name: "Cicada Speech",
        description:
          "Conversational AI platform for enhanced customer engagement experience",
        url: "https://cicada-speech.com/",
        status: "Private",
      },
      {
        name: "EngageZ",
        description:
          "Powerful, easy-to-use virtual event platform for both internal and external engagement",
        url: "https://engagez.com/",
        status: "Private",
      },
      {
        name: "Hype.co",
        description:
          "The Creator HQ - Build a website, grow your audience, and get paid - all from one place",
        url: "http://hype.co/",
        status: "Private",
      },
      {
        name: "MyMeta Software",
        description:
          "Digital Adoption Platform to simplify business processes, maximize IT ROI",
        url: "https://www.mymetasoftware.com/",
        status: "Private",
      },
      {
        name: "TigerConnect",
        description: "Cloud platform for clinical team collaboration",
        url: "https://get.tigerconnect.com/",
        status: "Private / Acquired by Vista Equity Partners",
      },
      {
        name: "TigerGraph",
        description: "Most scalable graph database for the enterprise",
        url: "https://www.tigergraph.com/",
        status: "Private",
      },
      {
        name: "Tresl",
        description:
          "Data-driven marketing platform for long-term customer relationship management",
        url: "https://www.tresl.co/",
        status: "Private",
      },
      {
        name: "VMoso",
        description: "Platform-as-a-Service for building high-touch engagement apps",
        url: "https://vmoso.com/",
        status: "Private",
      },
      {
        name: "WolleyTech",
        description:
          "Innovative enabler for storage class memory (SCM), delivering 10X performance vs. NAND at 50% TCO vs. DRAM",
        url: "https://www.wolleytech.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Fintech",
    slug: "fintech",
    projects: [
      {
        name: "Allocations",
        description: "Advanced, easy-to-setup private fund management platform",
        url: "https://www.allocations.com/",
        status: "Private",
      },
      {
        name: "ANG Fintech",
        description:
          "Marking a historic first in the US financial services industry by offering a trilogy of investment products, insurance coverages, and service solutions, all within a single app",
        url: "https://www.angfintech.com/",
        status: "Private",
      },
      {
        name: "BravoWhale",
        description:
          "Private blockchain network for digitizing business cashflow and corporate carbon credits, end-to-end, to ensure transparency and accountability",
        url: "https://www.bravowhale.com/",
        status: "Private",
      },
      {
        name: "Figure",
        description: "Fastest way to find and choose the right loan or mortgage",
        url: "https://www.figure.com/",
        status: "Private",
      },
      {
        name: "Finpay",
        description:
          "Streamlined engagement for fulfilling patient's financial responsibilities",
        url: "https://www.finpay.com/",
        status: "Private",
      },
      {
        name: "Ripple",
        description: "FX payment platform for moving money faster and at lower cost",
        url: "https://ripple.com/",
        status: "Private",
      },
      {
        name: "Streetbeat",
        description:
          "Next-gen personal stock trading platform, empowering user to trade like a pro",
        url: "https://streetbeat.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Healthtech / Digital Health",
    slug: "healthtech-digital-health",
    projects: [
      {
        name: "Alto Pharmacy",
        description:
          "Full-service e-pharmacy, delivering prescriptions to your door 7x24 for free",
        url: "https://alto.com/",
        status: "Private",
      },
      {
        name: "Aluna Health",
        description:
          "AI-powered digital health data management platform for automating clinical practices and research workflows",
        url: "https://www.alunahealth.com/",
        status: "Private",
      },
      {
        name: "Applied Cognition",
        description: "Prevent and treat age-related declines in cognitive functions",
        url: "https://appliedcognition.com/",
        status: "Private",
      },
      {
        name: "AptiHealth",
        description: "Personalized and comprehensive behavioral healthcare",
        url: "https://www.aptihealth.com/",
        status: "Private",
      },
      {
        name: "Ellipsis Health",
        description:
          "Conversational AI app for quantifying anxiety and depression severity",
        url: "https://www.ellipsishealth.com/",
        status: "Private",
      },
      {
        name: "Envive",
        description: "Deep learning AI platform for robo-assisted medical diagnostics",
        url: "https://envive.org/about/",
        status: "Private",
      },
      {
        name: "Fir Momentum",
        description:
          "Digital-first, clinician-supervised platform for treating health deterioration due to capillary blood flow impairment",
        url: "https://www.firmomentum.com/",
        status: "Private",
      },
      {
        name: "Foresight Mental Health",
        description: "Network of on/offline centers for mental healthcare",
        url: "https://www.foresightmentalhealth.com/",
        status: "Private",
      },
      {
        name: "Galileo",
        description:
          "Value-based healthcare network addressing medical issues proactively across both digital and home-based settings",
        url: "https://galileo.io/",
        status: "Private",
      },
      {
        name: "Human API",
        description: "Making health data accessible and useable to consumers",
        url: "https://www.humanapi.co/",
        status: "Private / Acquired by Lexis/Nexis",
      },
      {
        name: "Kareo",
        description: "Full business management suite for doctor's offices and clinics",
        url: "https://learn.kareo.com/",
        status: "Private",
      },
      {
        name: "Kindbody",
        description: "Digital health network for at-home fertility care",
        url: "https://kindbody.com/",
        status: "Private",
      },
      {
        name: "Levels Health",
        description: "Digital health network for metabolic health management",
        url: "https://www.levelshealth.com/",
        status: "Private",
      },
      {
        name: "LinqCare",
        description:
          "Next generation behavioral care - optimizing outcomes, happiness, and health of each patient through personalized precision care and technology",
        url: "https://www.linqcare.com/",
        status: "Private",
      },
      {
        name: "Luna",
        description: "Physical Therapy, delivered to you",
        url: "https://www.getluna.com/",
        status: "Private",
      },
      {
        name: "Maximus",
        description:
          "Maximizing mind & body with safe & effective medical prescription programs",
        url: "https://www.maximustribe.com/",
        status: "Private",
      },
      {
        name: "NeuroFlow",
        description:
          "Optimizing how behavioral healthcare is delivered and assessed for major health plans",
        url: "https://www.neuroflow.com/",
        status: "Private",
      },
      {
        name: "PL Renal",
        description:
          "Network of dialysis centers as an optimal environment for transforming patients' lives",
        url: "https://plrenal.com/",
        status: "Private",
      },
      {
        name: "Restore Sleep",
        description: "Digital health network for holistic sleep management",
        url: "https://www.restoresleep.com/",
        status: "Private",
      },
      {
        name: "Senseye",
        description: "Breakthrough diagnostic platform for mental health",
        url: "https://senseye.co/",
        status: "Private",
      },
      {
        name: "Synaptiq",
        description: "AI-Powered Training for Medical Doctors",
        url: "https://synaptiq.co/",
        status: "Private",
      },
      {
        name: "The Mighty",
        description: "Social network for people with health challenges",
        url: "https://themighty.com/",
        status: "Private",
      },
      {
        name: "TigerConnect",
        description: "Cloud platform for clinical team collaboration",
        url: "https://get.tigerconnect.com/",
        status: "Private / Acquired by Vista Equity Partners",
      },
    ],
  },
  {
    name: "Medtech",
    slug: "medtech",
    projects: [
      {
        name: "Applied Cognition",
        description: "Prevent and treat age-related declines in cognitive functions",
        url: "https://appliedcognition.com/",
        status: "Private",
      },
      {
        name: "Crown Laboratories",
        description:
          "Diverse portfolio of safe and effective science-based solutions for a lifetime of healthy skin",
        url: "https://www.crownlaboratories.com/",
        status: "Private",
      },
      {
        name: "Elemind",
        description:
          "Wearable device for treating sleep insomnia via neuromodulation algorithms",
        url: "http://www.elemindtech.com/",
        status: "Private",
      },
      {
        name: "Fir Momentum",
        description:
          "Digital-first, clinician-supervised platform for treating health deterioration due to capillary blood flow impairment",
        url: "https://www.firmomentum.com/",
        status: "Private",
      },
      {
        name: "GC Aesthetics",
        description: "Safe and reliable surgical implants for body augmentation",
        url: "https://www.gcaesthetics.com/",
        status: "Private",
      },
      {
        name: "Invicta Medical",
        description: "The world's first injectable therapy for treating sleep apnea",
        url: "http://invictamedical.com/",
        status: "Private",
      },
      {
        name: "Levels Health",
        description: "Digital health network for metabolic health management",
        url: "https://www.levelshealth.com/",
        status: "Private",
      },
      {
        name: "Noctrix Health",
        description:
          "Therapeutic wearables for treating chronic neurological disorders",
        url: "https://noctrixhealth.com/",
        status: "Private",
      },
      {
        name: "Oxos Medical",
        description:
          "The world's first handheld, dynamic digital radiographic instrument",
        url: "https://oxos.com/",
        status: "Private",
      },
      {
        name: "iNAP Sleep",
        description: "Digital health network for holistic sleep management",
        url: "https://www.inapsleep.online/",
        status: "Private",
      },
      {
        name: "Visby Medical",
        description: "Instrument-free, point-of-care ready rapid PCR test platform",
        url: "https://www.visbymedical.com/",
        status: "Private",
      },
      {
        name: "VocXi Health",
        description:
          "Human Breath Intelligence via Artificial Intelligence - Detecting health and disease status with less than a minute of your breath",
        url: "https://vocxihealth.com/",
        status: "Private",
      },
      {
        name: "Zeto",
        description: "True dry electrode EEG system for detecting brain disorders",
        url: "https://zeto-inc.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Biotech",
    slug: "biotech",
    projects: [
      {
        name: "Alto Neuroscience",
        description:
          "Precision medicine for the brain, applying the right drug per patient's exact biomarkers",
        url: "https://www.altoneuroscience.com/",
        status: "NYSE: ANRO",
      },
      {
        name: "Ansun BioPharma",
        description:
          "Innovative therapeutics for addressing unmet needs in cancer and viral infections",
        url: "https://www.ansunbiopharma.com/",
        status: "Private",
      },
      {
        name: "ATAI Life Sciences",
        description:
          "Decentralized platform for developing mental health treatments",
        url: "https://www.atai.life/",
        status: "Nasdaq: ATAI",
      },
      {
        name: "Gilgamesh Pharmaceuticals",
        description:
          "Harnessing therapeutic psychedelics for treating mental illness",
        url: "https://www.gilgameshpharmaceutical.com/",
        status: "Private",
      },
      {
        name: "Lexen Pharma",
        description:
          "First-to-market generic medicines for treating diseases affecting large populations",
        url: "http://www.lexenpharm.com/",
        status: "Private",
      },
      {
        name: "Onward Therapeutics",
        description: "Breakthrough therapeutics for treating cancer",
        url: "https://www.onward-therapeutics.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Semiconductor",
    slug: "semiconductor",
    projects: [
      {
        name: "Syntiant",
        description:
          "Intelligent always-on edge IoT devices that sense, analyze and autonomously act to create a healthier and more sustainable environment for all",
        url: "https://www.syntiant.com/",
        status: "Private",
      },
      {
        name: "WolleyTech",
        description:
          "Innovative enabler for storage class memory (SCM), delivering 10X performance vs. NAND at 50% TCO vs. DRAM. Critical core technology for super-big data apps",
        url: "https://www.wolleytech.com/",
        status: "Private",
      },
    ],
  },
  {
    name: "Miscellaneous",
    slug: "miscellaneous",
    projects: [
      {
        name: "Boom Supersonic",
        description:
          "Next-gen supersonic jets for intercontinental travel at half the time",
        url: "https://boomsupersonic.com/",
        status: "Private",
      },
      {
        name: "Element Farms",
        description: "Tech-driven fresh organic greens for local markets",
        url: "https://www.element-farms.com/",
        status: "Private",
      },
      {
        name: "iHeartJane",
        description:
          "Leading online portal for cannabis products that bring well-being, health, and love to this world",
        url: "https://www.iheartjane.com/about-us",
        status: "Private",
      },
      {
        name: "Venus Aerospace",
        description:
          "Rocket-powered supersonic jets for any global transportation within one hour",
        url: "https://www.venusaero.com/",
        status: "Private",
      },
    ],
  },
];

export const portfolioTabs = [allPortfolioCategory, ...portfolioCategories];

export const portfolioProjects = portfolioCategories.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    category: category.name,
    categorySlug: category.slug,
  })),
);

export function getPortfolioCategoryBySlug(slug: string | null) {
  if (!slug || slug === allPortfolioCategory.slug) {
    return allPortfolioCategory;
  }

  return (
    portfolioCategories.find((category) => category.slug === slug) ??
    allPortfolioCategory
  );
}

export function getPortfolioProjectsByCategory(slug: string) {
  if (slug === allPortfolioCategory.slug) {
    return portfolioProjects;
  }

  return portfolioProjects.filter((project) => project.categorySlug === slug);
}
