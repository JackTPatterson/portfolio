export type ExperienceSection = {
	heading: string
	items: string[]
}

export type Experience = {
	slug: string
	year: string
	role: string
	company: string
	description: string
	tech: string[]
	dateRange?: string
	location?: string
	link?: { label: string; url: string }
	sections?: ExperienceSection[]
}

export const experiences: Experience[] = [
	{
		slug: 'gofoton',
		year: '2025',
		role: 'AI-Driven Business Development Lead',
		company: 'Go!Foton',
		description:
			'Own the Go!Foton Service Platform end-to-end — production reliability, integrations, CI/CD, and release management across project management, finance, workforce, compliance, and marketplace features. Serve as the technical bridge between engineering and executive leadership, translating architecture, infrastructure investments, and technical-debt trade-offs into business impact. Drive an accelerated innovation culture through structured prototyping, feature-flag-gated experiments, competitive intelligence, and emerging-technology assessments.',
		tech: ['Next.js', 'PostgreSQL', 'Azure', 'CI/CD', 'AI Strategy'],
		dateRange: '2025 — Present',
		location: 'Somerset, NJ',
		link: { label: 'gofoton.com', url: 'https://gofoton.com' },
		sections: [
			{
				heading: 'Platform Ownership',
				items: [
					'Own end-to-end production stability across app, database, authentication, and cloud infrastructure',
					'Maintain and extend integrations with PM tools, analytics, communications, background-check providers, and ERP systems',
					'Operate CI/CD with three-job validation (code quality, tests, build verification) and branch-protected staging/main environments',
					'Coordinate releases to limit disruption, enable rollbacks, and align migrations with scalability goals',
					'Improve monitoring, alerting, incident response, and backup/disaster recovery to reduce downtime and protect against data loss',
				],
			},
			{
				heading: 'Technical-to-Executive Translation',
				items: [
					'Translate architecture, technical-debt implications, and infrastructure investments into business impact (cost, risk, revenue, positioning)',
					'Deliver executive-level briefings that turn complex topics into clear decisions with quantified trade-offs',
					'Convert sprint-level engineering output into strategic updates suitable for board, investor, and customer communications',
					'Provide rapid assessments on risks, vendors, competitive threats, and customer escalations',
				],
			},
			{
				heading: 'Strategic Technology Advisory',
				items: [
					'Advise on build/buy decisions, vendor selection, scaling strategy, and stack evolution grounded in ROI and total cost of ownership',
					'Assess emerging technologies for fit with Go!Foton’s operating model',
					'Represent Go!Foton’s technology in customer, partner, and industry settings',
				],
			},
			{
				heading: 'Innovation Strategy & Execution',
				items: [
					'Formalize a structured software innovation process to propose, evaluate, and prototype new ideas',
					'Identify high-impact opportunities from usage data, customer feedback, and competitive intelligence',
					'Run rapid prototypes via feature flags, isolated environments, and time-boxed experiments',
					'Build reusable assets (components, templates, tests, internal tools) that compound delivery speed across the platform',
				],
			},
			{
				heading: 'Cross-Functional Alignment',
				items: [
					'Translate field workflows into prioritized requirements so the platform reflects operational reality',
					'Set the cadence for executive-level technology reviews covering health metrics, milestones, risks, and resourcing',
					'Create documentation, architecture decision records, and onboarding materials to scale the engineering team',
				],
			},
		],
	},
	{
		slug: 'ropes-and-gray',
		year: '2025',
		role: 'Information Security Intern',
		company: 'Ropes & Gray LLP',
		description:
			"Monitored and analyzed SIEM alerts to identify threats, responded to security incidents, and researched Microsoft's Azure Network Security Perimeter to enhance protection for sensitive workloads.",
		tech: ['SIEM', 'Azure', 'Security', 'Risk Assessment'],
		dateRange: '2025',
	},
	{
		slug: 'stevens-course-assistant',
		year: '2024',
		role: 'Course Assistant',
		company: 'Stevens Institute of Technology',
		description:
			'Created and presented instructional content on UI/UX design, git, deploying web apps, and domain management. Provided personalized support to help students resolve technical challenges.',
		tech: ['UI/UX', 'Git', 'Web Deployment', 'Teaching'],
		dateRange: '2024',
		location: 'Hoboken, NJ',
	},
	{
		slug: 'aventix',
		year: '2022',
		role: 'Co-Founder',
		company: 'Aventix',
		description:
			'Co-founded and developed a multi-platform application enabling users to manage events and purchase tickets using Web3 technology. Directed a team of three developers and designers, establishing clear objectives and achieving all project milestones.',
		tech: ['Next.js', 'React Native', 'Node.js', 'Supabase', 'Web3'],
		dateRange: '2022 — Present',
		link: { label: 'aventix.net', url: 'https://aventix.net' },
	},
]

export function getExperienceBySlug(slug: string): Experience | undefined {
	return experiences.find((e) => e.slug === slug)
}
