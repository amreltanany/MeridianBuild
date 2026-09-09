export type ProjectCategory = 'Residential' | 'Commercial' | 'Renovation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  imageAlt: string;
  description: string;
  details: string;
  area: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Lakeview Residence',
    category: 'Residential',
    location: 'Aspen, CO',
    year: '2024',
    image:
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Exterior of contemporary residential house with panoramic windows and glass doors with a green lawn on a sunny day',
    description:
      'A 6,200 sq ft contemporary home featuring floor-to-ceiling glass walls, an infinity pool, and sustainable passive-solar design.',
    details:
      'This residence was engineered around a central courtyard that maximises natural light while maintaining privacy. The structural steel frame allows for expansive glazing without compromising thermal performance. Custom Italian oak millwork and a fully integrated smart-home system round out the build.',
    area: '6,200 sq ft',
    duration: '14 months',
  },
  {
    id: 'p2',
    title: 'Meridian Tower',
    category: 'Commercial',
    location: 'Denver, CO',
    year: '2023',
    image:
      'https://images.pexels.com/photos/267501/pexels-photo-267501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A modern glass-facade building against a blue sky with innovative architecture',
    description:
      'A 12-story mixed-use commercial tower with a curtain-wall glass facade and ground-floor retail.',
    details:
      'Meridian Tower anchors a revitalised downtown block with 180,000 sq ft of Class A office space above street-level retail. The post-tensioned concrete core and tuned-mass damper system ensure occupant comfort at height. LEED Platinum certified.',
    area: '180,000 sq ft',
    duration: '28 months',
  },
  {
    id: 'p3',
    title: 'Hillside Modern',
    category: 'Residential',
    location: 'Boulder, CO',
    year: '2024',
    image:
      'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Contemporary house with large windows surrounded by lush greenery and trees',
    description:
      'A hillside retreat with cantilevered volumes, a green roof, and seamless indoor-outdoor flow.',
    details:
      'Perched on a 15% grade, this home uses a stepped foundation system and two steel cantilevers to float the primary living spaces above the natural terrain. The green roof reduces stormwater runoff by 40% and blends the home into its hillside setting.',
    area: '4,800 sq ft',
    duration: '18 months',
  },
  {
    id: 'p4',
    title: 'Harbor Point Offices',
    category: 'Commercial',
    location: 'San Diego, CA',
    year: '2023',
    image:
      'https://images.pexels.com/photos/29214334/pexels-photo-29214334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Contemporary architecture with sleek modern design and glass facades in a harbour area',
    description:
      'Waterfront office complex with open floor plates, a public plaza, and harbour-view terraces.',
    details:
      'Harbor Point delivers three interconnected low-rise office buildings organised around a public plaza. Each floor plate offers column-free spans of up to 60 feet, and the terraces on every third level give tenants direct outdoor access.',
    area: '240,000 sq ft',
    duration: '34 months',
  },
  {
    id: 'p5',
    title: 'Stone & Oak Cottage',
    category: 'Renovation',
    location: 'Vail, CO',
    year: '2024',
    image:
      'https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern cottage house facade with large windows and mixed wooden and stone cladding in a snowy yard',
    description:
      'A full gut-renovation of a 1970s cabin into a modern mountain retreat with new mechanicals.',
    details:
      'We stripped the original structure to its studs, replaced all plumbing and electrical systems, added closed-cell spray foam insulation, and re-clad the exterior in local stone and reclaimed oak. The interior was reimagined with an open-plan great room.',
    area: '3,100 sq ft',
    duration: '9 months',
  },
  {
    id: 'p6',
    title: 'The Aspen Pavilion',
    category: 'Commercial',
    location: 'Aspen, CO',
    year: '2022',
    image:
      'https://images.pexels.com/photos/10530237/pexels-photo-10530237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern architecture against a clear blue sky showcasing geometric forms',
    description:
      'An event pavilion with a tensile fabric roof, polished concrete floors, and panoramic mountain views.',
    details:
      'The Aspen Pavilion hosts up to 300 guests under a PTFE tensile fabric roof that diffuses natural light by day and glows by night. Radiant-floor heating and a high-efficiency ERV system maintain comfort year-round.',
    area: '8,500 sq ft',
    duration: '12 months',
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: 'hard-hat' | 'compass' | 'hammer';
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'General Contracting',
    description:
      'Full-service construction management from groundbreaking to final inspection, delivered on schedule and on budget.',
    features: [
      'Pre-construction planning',
      'GMP & lump-sum contracts',
      'Self-perform concrete & carpentry',
      'Real-time progress tracking',
    ],
    icon: 'hard-hat',
  },
  {
    id: 's2',
    title: 'Architectural Design',
    description:
      'Concept-to-permit architectural design that balances aesthetics, performance, and buildability.',
    features: [
      'Schematic & design development',
      '3D visualisation & BIM',
      'Permit-ready construction docs',
      'Sustainability consulting',
    ],
    icon: 'compass',
  },
  {
    id: 's3',
    title: 'Renovations',
    description:
      'Transformative renovations of existing structures — from historic restorations to modern adaptive reuse.',
    features: [
      'Structural assessments',
      'Historic preservation',
      'Mechanical & envelope upgrades',
      'Interior fit-out',
    ],
    icon: 'hammer',
  },
];

export interface TimelineStage {
  id: string;
  step: string;
  title: string;
  description: string;
  duration: string;
}

export const timelineStages: TimelineStage[] = [
  {
    id: 't1',
    step: '01',
    title: 'Site Preparation',
    description:
      'Site survey, grading, erosion control, and utility connections are established before the first foundation pour.',
    duration: '2–4 weeks',
  },
  {
    id: 't2',
    step: '02',
    title: 'Foundation',
    description:
      'Footings, foundation walls, and the slab-on-grade are poured and waterproofed to create a stable base.',
    duration: '3–6 weeks',
  },
  {
    id: 't3',
    step: '03',
    title: 'Framing',
    description:
      'The structural skeleton rises — floor systems, walls, and roof sheathing define the building shape.',
    duration: '4–8 weeks',
  },
  {
    id: 't4',
    step: '04',
    title: 'Exterior & Systems',
    description:
      'Windows, doors, cladding, and roofing close the envelope while MEP rough-in happens inside.',
    duration: '6–12 weeks',
  },
  {
    id: 't5',
    step: '05',
    title: 'Final Handover',
    description:
      'Interior finishes, fixtures, commissioning, and a final walkthrough precede key handover to the owner.',
    duration: '4–8 weeks',
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];
