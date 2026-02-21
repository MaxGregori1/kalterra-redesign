export interface TeamMember {
  name: string
  slug: string
  title: string
  bio: string
  education: string[]
  credentials?: string[]
  email: string
  image: string
}

export function getTeam(base: string): TeamMember[] {
  return [
    {
      name: 'Clint Nolen',
      slug: 'clint-nolen',
      title: 'Managing Partner & Co-Founder',
      bio: 'Clint has grown up around various aspects of real estate and specializes in business development, finance, and construction. He is a co-founder and Managing Partner of Kalterra. Clint has served in board positions including Vice President of the City of Dallas Housing Finance Corporation, Vice Chairman of the City of Dallas Planning & Zoning Board of Adjustments, Board Chairman of Grace Academy of Dallas and as a Board Member for the Entrepreneur Organization of Dallas.',
      education: ['Texas A&M University, BS in Industrial Distribution', 'Southern Methodist University, MBA in Finance & Real Estate Investment'],
      email: 'clint@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Dean Lontos',
      slug: 'dean-lontos',
      title: 'Partner & Co-Founder',
      bio: 'Dean Lontos is involved at the strategic and capital-markets level, working with partners on firm direction, major investment decisions, and capital relationships. He has more than 20 years of experience in real estate investment, development, and private credit, and has completed more than $2 billion in transactions, including large-scale multifamily acquisitions, repositionings, and ground-up developments.',
      education: ['University of Texas at Austin, BBA in Finance & Real Estate'],
      email: 'dean@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Nic Balsamo',
      slug: 'nic-balsamo',
      title: 'Partner & President',
      bio: 'Nic joined Kalterra in 2018 and has over 6 years of commercial real estate experience, specializing in acquisitions and development. His responsibilities include acquisitions, business development, and project management.',
      education: ['Florida State University, BS in Real Estate & Finance'],
      email: 'nic@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Brandon Marlow',
      slug: 'brandon-marlow',
      title: 'CFO',
      bio: 'Brandon joined Kalterra in 2020 with over 10 years of experience in multiple areas of financial consulting and investment analysis. He is responsible for finance, accounting, and technology for Kalterra Capital Partners.',
      education: ['University of Texas at Tyler, BS in Finance'],
      credentials: ['CFA Charterholder'],
      email: 'brandon@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Kyle Parker',
      slug: 'kyle-parker',
      title: 'Director of Acquisitions',
      bio: "Kyle joined Kalterra in the summer of 2024, bringing 7 years of commercial real estate experience with a focus on multifamily acquisitions. Before joining Kalterra, Kyle was the AVP of Investments at Equity Residential, where he concentrated on acquisitions across Texas. In his current role, he leads Kalterra's acquisitions team and is responsible for identifying and generating both on-market and off-market acquisition opportunities.",
      education: ['Texas A&M University – BBA in Accounting – Mays Business School', 'Texas A&M University – Master of Real Estate (MRE) Program – Mays Business School'],
      email: 'kyle@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Anthony Balsamo',
      slug: 'anthony-balsamo',
      title: 'Analyst',
      bio: "Anthony joined Kalterra in the fall of 2025, bringing five years of technology consulting and finance experience, including prior roles with Deloitte and Accenture. At Kalterra, Anthony supports the firm's investment and development platform by contributing to asset-level underwriting, financial modeling, and market analysis across multifamily and mixed-use opportunities, while leveraging data workflows and analytical tools to enhance consistency, efficiency, and decision-making across the firm's deal evaluation and asset strategy.",
      education: [],
      email: '',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Chris Bell',
      slug: 'chris-bell',
      title: 'Controller',
      bio: 'Chris joined Kalterra in October 2024 after six years in public accounting. Before joining Kalterra, Chris served as an Audit Manager at Fox, Garcia, & Company, where he gained valuable insights across multiple industries, including real estate, nonprofits, manufacturing, and government entities.',
      education: ['Texas State University, BBA in Accounting', 'Western Governors University, MS in Accounting'],
      credentials: ['Certified Public Accountant'],
      email: 'chris@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
    {
      name: 'Dylan',
      slug: 'dylan',
      title: 'Emotional Support Assistant',
      bio: 'Dylan joined the team in 2020 with over 6 years of experience in an emotional support role. In addition to supporting the team, he also brings a fun and laid back attitude to the office daily.',
      education: [],
      email: 'dylan@kalterra.com',
      image: `${base}assets/images/team/placeholder.svg`,
    },
  ]
}
