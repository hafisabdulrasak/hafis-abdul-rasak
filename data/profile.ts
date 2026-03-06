export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  tags: string[];
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  period: string;
  description: string;
  tags: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  placeholder?: boolean;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  about: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
};

export const profile: Profile = {
  name: 'Hafis Abdul Rasak',
  title: 'Techno Functional Consultant',
  location: 'Dubai, UAE',
  phone: '(+971) 50-625-2215',
  email: 'hafisa25@gmail.com',
  github: 'hafisabdulrasak',
  linkedin: 'hafisabdulrasak123',
  summary:
    'Senior Techno-Functional Consultant with 7+ years of experience delivering ERP transformations, integration programs, and data-driven solutions. Proven success in Odoo migrations, e-commerce and finance integrations, BI enablement, and cross-functional team leadership across UAE business environments.',
  about:
    'I specialize in aligning business objectives with scalable technology solutions. My work spans end-to-end Odoo implementation, operational process optimization, API-led integrations, analytics, and stakeholder enablement. I focus on measurable outcomes, sustainable architecture, and high adoption across operations, finance, and sales teams.',
  skills: [
    { title: 'ERP / Odoo', items: ['Odoo', 'Odoo.sh', 'Manufacturing', 'POS', 'EDI', 'ERP Implementation'] },
    { title: 'Integrations', items: ['REST API', 'Shopify', 'Magento', 'Amazon', 'Stripe', 'Network', 'TAP', 'Qashio', 'WhatsApp'] },
    { title: 'BI / Analytics', items: ['Power BI', 'Metabase', 'Apache Superset', 'Redash', 'Alteryx', 'GA4', 'Plausible'] },
    { title: 'Dev Tools / Platforms', items: ['Git', 'PyCharm', 'VS Code', 'Anaconda', 'Jupyter', 'Linux', 'Windows', 'AWS', 'WordPress'] },
    { title: 'Programming & Data', items: ['Python', 'XML', 'JavaScript', 'SQL', 'PostgreSQL', 'MySQL', 'CSS'] },
    { title: 'Languages', items: ['English', 'Malayalam', 'Tamil', 'Hindi'] },
  ],
  experience: [
    {
      company: 'Suma Gourmet General Trading',
      role: 'Techno Functional Consultant',
      location: 'Dubai, UAE',
      period: 'June 2023 – Present',
      tags: ['Odoo', 'BI', 'Integration', 'E-commerce', 'Automation'],
      highlights: [
        'Led Odoo migrations from v15→v16 and v16→v18 with process continuity and minimal downtime.',
        'Managed Odoo.sh deployments, release governance, and production support workflows.',
        'Delivered BI integrations and executive dashboards to improve operational visibility.',
        'Integrated Shopify, Magento, and Amazon channels with ERP workflows for unified operations.',
        'Implemented WhatsApp integrations for customer communication and order workflows.',
        'Enabled Qashio and bank synchronization for stronger finance automation and reconciliation.',
        'Integrated payment gateways including Stripe, Network, and TAP for seamless transactions.',
        'Implemented GA4 and Plausible tracking for web and e-commerce performance insights.',
        'Optimized Manufacturing, POS, driver portal, EDI, and Slider delivery operations.',
        'Managed a delivery team and coordinated stakeholders across business and technical functions.',
      ],
    },
    {
      company: 'Lootah BCGas',
      role: 'IT Specialist',
      location: 'Dubai, UAE',
      period: 'Feb 2022 – May 2023',
      tags: ['IT Operations', 'Automation', 'Support'],
      highlights: [
        'Provided end-user and infrastructure support for critical business systems.',
        'Improved IT operations reliability through standardization and preventive maintenance.',
        'Collaborated with departments to align system capabilities with business requirements.',
      ],
    },
    {
      company: 'ABC Mercantile FZCO',
      role: 'Techno Functional Consultant',
      location: 'Dubai, UAE',
      period: 'Apr 2021 – Jan 2022',
      tags: ['Odoo', 'Process Improvement', 'Integration'],
      highlights: [
        'Supported ERP implementation and customization to fit procurement and sales workflows.',
        'Mapped and optimized business processes across inventory, finance, and operations.',
        'Implemented integrations to reduce manual activities and improve data consistency.',
      ],
    },
    {
      company: 'Abrus Networks',
      role: 'Python/Odoo Developer',
      location: 'India',
      period: 'Jul 2019 – Mar 2021',
      tags: ['Python', 'Odoo', 'Development'],
      highlights: [
        'Built custom Odoo modules and Python-based features for client-specific requirements.',
        'Developed reports, automation scripts, and data workflows to improve usability and accuracy.',
        'Worked with technical teams on integrations, debugging, and deployment activities.',
      ],
    },
  ],
  education: [
    {
      institution: 'Royal College of Engineering and Technology',
      degree: 'B.Tech Computer Science and Engineering',
      period: 'Aug 2015 – Jun 2019',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      date: 'Apr 2024',
    },
    {
      name: 'Data Analyst in Power BI',
      issuer: 'DataCamp',
      date: 'Mar 2024',
    },
  ],
  projects: [
    {
      name: 'Leaf Disease Detection Using Smartphone',
      period: 'May 2019',
      description: 'Image-driven analysis project for early plant disease detection using smartphone inputs.',
      tags: ['Analytics', 'Computer Vision'],
    },
    {
      name: 'Mosque Management Module',
      period: 'Jul 2020',
      description: 'Custom Odoo module for administrative workflows, records, and scheduling.',
      tags: ['Odoo', 'Automation'],
    },
    {
      name: 'Odoo ERP Implementation for UAE Companies',
      period: '2022–2025',
      description: 'Multi-client ERP implementation engagements covering finance, inventory, sales, and operations.',
      tags: ['Odoo', 'ERP', 'Integration'],
    },
    {
      name: 'Devbies – Odoo E-commerce Clothing Store',
      period: '2024',
      description: 'E-commerce solution built on Odoo with integrated order, payment, and fulfillment workflows.',
      tags: ['Odoo', 'E-commerce', 'Integration'],
    },
  ],
  services: [
    {
      title: 'ERP Implementation & Optimization',
      description: 'End-to-end Odoo implementation, migration, and process optimization for scalable operations.',
    },
    {
      title: 'Business Integrations',
      description: 'API-led integrations across commerce, payments, logistics, messaging, and finance platforms.',
    },
    {
      title: 'Analytics & Dashboards',
      description: 'KPI frameworks and dashboarding using Power BI and modern BI tools for executive decisions.',
    },
    {
      title: 'Workflow Automation',
      description: 'Automation of repetitive tasks, approvals, and data pipelines to improve productivity and control.',
    },
  ],
  testimonials: [
    {
      name: 'A. Nair',
      role: 'Head of Operations, FMCG Distribution',
      quote:
        'Hafis led our Odoo upgrades from v15 to v18 without disrupting daily operations. The transition was structured, well-communicated, and completed with minimal downtime.',
    },
    {
      name: 'M. Rahman',
      role: 'Finance & Systems Manager, Retail Group',
      quote:
        'Our Shopify, Amazon, and payment gateway integrations became far more reliable after Hafis redesigned the workflow. Month-end reconciliation is now faster and much more accurate.',
    },
  ],
};
