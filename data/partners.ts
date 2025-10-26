// data/partners.ts
export type CTA = { href: string; label: string } | null;

export type FeaturedPartner = {
  name: string;
  logo: string; // path under /public/logos/
  tag?: string;
  description?: string;
  cta?: CTA;
};

export type SimplePartner = {
  name: string;
  logo: string;
};

/* -------------------------------------------------------------------------- */
/* 🏢 Corporate Clients                                                       */
/* -------------------------------------------------------------------------- */
const corporatePartners: SimplePartner[] = [
  { name: "HCL", logo: "corporate-clients/hcl.png" },
  { name: "Besmak", logo: "corporate-clients/besmak.jpg" },
  { name: "Blue Star", logo: "corporate-clients/blue star.png" },
  { name: "Cognizant", logo: "corporate-clients/cognizant.jpg" },
  { name: "Crossdomain", logo: "corporate-clients/crossdomain.jpg" },
  { name: "Hwashin", logo: "corporate-clients/hwashin.png" },
  { name: "Mphasis", logo: "corporate-clients/mphasis.jpg" },
  { name: "Muthoot Fincorp", logo: "corporate-clients/muthoot fincorp.jpg" },
  { name: "Redington", logo: "corporate-clients/redington.png" },
  { name: "Samsung", logo: "corporate-clients/samsung.jpg" },
  { name: "SGH", logo: "corporate-clients/sgh.png" },
  {
    name: "Tata Consultancy Services",
    logo: "corporate-clients/tata consultancy services.jpg",
  },
  { name: "Tata Power", logo: "corporate-clients/tata power.png" },
  { name: "Titan", logo: "corporate-clients/titan.png" },
  { name: "Valeo", logo: "corporate-clients/valeo.jpg" },
  { name: "Wipro", logo: "corporate-clients/wipro.jpg" },
  { name: "Yazaki", logo: "corporate-clients/yazaki.png" },
];

/* -------------------------------------------------------------------------- */
/* 🏛️ Government Partners                                                    */
/* -------------------------------------------------------------------------- */
const governmentPartners: SimplePartner[] = [
  {
    name: "Advanced Training Institute - Government of India",
    logo: "goverment-clients/advanced-training-institute.png",
  },
  { name: "CPCL", logo: "goverment-clients/CPCL.png" },
  {
    name: "Integral Coach Factory",
    logo: "goverment-clients/integral-coach-factory.png",
  },
];

/* -------------------------------------------------------------------------- */
/* 🎓 Educational Institutions (1–35)                                         */
/* -------------------------------------------------------------------------- */
const educationalPartners: SimplePartner[] = Array.from(
  { length: 35 },
  (_, i) => ({
    name: `Institution ${i + 1}`,
    logo: `educational-institution/${i + 1}.png`,
  })
);

/* -------------------------------------------------------------------------- */
/* 🌟 Featured Partners (subset of above)                                     */
/* -------------------------------------------------------------------------- */
const featured: FeaturedPartner[] = [
  {
    name: "HCL",
    logo: "corporate-clients/hcl.png",
    tag: "Corporate Partner",
    description: "Enterprise collaboration and training engagements.",
    cta: { href: "https://www.hcltech.com", label: "Visit HCL" },
  },
  {
    name: "Cognizant",
    logo: "corporate-clients/cognizant.jpg",
    tag: "Technology Partner",
    description: "Workforce skilling and industry projects.",
    cta: { href: "https://www.cognizant.com", label: "Visit Cognizant" },
  },
  {
    name: "Samsung",
    logo: "corporate-clients/samsung.jpg",
    tag: "Technology Partner",
    description: "Device & solutions collaboration for hands-on labs.",
    cta: { href: "https://www.samsung.com", label: "Visit Samsung" },
  },
];

/* -------------------------------------------------------------------------- */
/* 🔗 Combined Data Export                                                    */
/* -------------------------------------------------------------------------- */
const partnersData = {
  featured,
  corporatePartners,
  governmentPartners,
  educationalPartners,

  // 'others' is combined data used for grid or marquee
  others: [...corporatePartners, ...governmentPartners, ...educationalPartners],
};

export default partnersData;
export { corporatePartners, governmentPartners, educationalPartners, featured };
