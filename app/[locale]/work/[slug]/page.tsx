import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectById } from "@/data/projects";
import { getProjectDetail } from "@/data/project-details";
import { routing } from "@/i18n/routing";
import ProjectDetailView from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectById(slug);
  const detail = getProjectDetail(locale, slug);
  if (!project || !detail) return {};
  return {
    title: `${project.name} — METEK`,
    description: detail.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectById(slug);
  const detail = getProjectDetail(locale, slug);
  if (!project || !detail) notFound();

  return <ProjectDetailView project={project} detail={detail} />;
}
