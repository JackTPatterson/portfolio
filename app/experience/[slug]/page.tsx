import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { experiences, getExperienceBySlug } from '@/lib/experience'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
	return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>
}): Promise<Metadata> {
	const { slug } = await params
	const job = getExperienceBySlug(slug)
	if (!job) return { title: 'Experience — Jack Patterson' }
	return {
		title: `${job.role} @ ${job.company} — Jack Patterson`,
		description: job.description,
	}
}

export default async function ExperienceDetailPage({
	params,
}: {
	params: Promise<Params>
}) {
	const { slug } = await params
	const job = getExperienceBySlug(slug)
	if (!job) notFound()

	const meta = [job.dateRange ?? job.year, job.location].filter(Boolean).join(' · ')

	return (
		<div className="min-h-screen bg-background text-foreground">
			<main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-24">
				<Link
					href="/#work"
					className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
				>
					<ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
					Back to experience
				</Link>

				<header className="space-y-6 mb-12 sm:mb-16">
					<div className="text-sm text-muted-foreground tracking-wider">{meta}</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
						{job.role}
					</h1>
					<div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl text-muted-foreground">
						<span>@ {job.company}</span>
						{job.link && (
							<a
								href={job.link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-1 text-sm hover:text-foreground transition-colors duration-300"
							>
								{job.link.label}
								<ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
							</a>
						)}
					</div>
					<div className="flex flex-wrap gap-2 pt-2">
						{job.tech.map((t) => (
							<span
								key={t}
								className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
							>
								{t}
							</span>
						))}
					</div>
				</header>

				<p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 sm:mb-16">
					{job.description}
				</p>

				{job.sections && job.sections.length > 0 && (
					<div className="space-y-12 sm:space-y-16">
						{job.sections.map((section) => (
							<section key={section.heading} className="space-y-4 sm:space-y-6">
								<h2 className="text-xl sm:text-2xl font-light tracking-tight">
									{section.heading}
								</h2>
								<ul className="space-y-3">
									{section.items.map((item) => (
										<li
											key={item}
											className="flex gap-3 text-muted-foreground leading-relaxed"
										>
											<span className="text-muted-foreground/40 select-none">—</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</section>
						))}
					</div>
				)}

				<div className="mt-16 sm:mt-24 pt-8 border-t border-border">
					<Link
						href="/#work"
						className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
					>
						<ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
						Back to experience
					</Link>
				</div>
			</main>
		</div>
	)
}
