import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { ProjectDetail } from "@/types/qataridiar";
import { PageShell } from "./PageShell";

export function ProjectDetailView({ project }: { project: ProjectDetail }) {
  const details = [
    project.region && { label: "المنطقة", value: project.region },
    project.location && { label: "الموقع", value: project.location },
    project.area && { label: "المساحة", value: project.area },
    project.status && { label: "الحالة", value: project.status },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <PageShell darkHeader>
      <section className="relative bg-qd-navy pt-[140px] pb-0 max-[767px]:pt-[110px]">
        <Container>
          <Link
            href="/ar/projects"
            className="mb-[30px] inline-block text-[14px] font-bold text-qd-gold uppercase"
          >
            العودة للمشاريع
          </Link>
          <div className="grid items-end gap-[30px] md:grid-cols-2">
            <div>
              <h1 className="mb-[24px] text-[42px] leading-[50px] font-bold text-white uppercase max-[767px]:text-[28px] max-[767px]:leading-[36px]">
                {project.title}
              </h1>
              <dl className="mb-[24px] space-y-[10px]">
                {details.map((d) => (
                  <div key={d.label} className="flex flex-wrap gap-[8px]">
                    <dt className="text-[13px] font-bold text-qd-gold">
                      {d.label}
                    </dt>
                    <dd className="text-[14px] text-white">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-[16px]">
                <Link
                  href="/ar/inquire"
                  className="bg-qd-gold px-[22px] py-[10px] text-[13px] font-bold text-white uppercase"
                >
                  إستعلم
                </Link>
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-[22px] py-[10px] text-[13px] font-bold text-white uppercase"
                  >
                    زيارة الموقع
                  </a>
                ) : null}
              </div>
            </div>
            {project.banner ? (
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={project.banner}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-qd-cream py-[70px] max-[767px]:py-[40px]">
        <Container>
          {project.summary ? (
            <h2 className="mb-[30px] max-w-[900px] text-[22px] leading-[34px] font-bold text-qd-navy">
              {project.summary}
            </h2>
          ) : null}
          <div className="max-w-[820px] space-y-[18px]">
            {project.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-[16px] leading-[28px] text-qd-text"
              >
                {p}
              </p>
            ))}
          </div>

          {project.gallery.length > 1 ? (
            <div className="mt-[60px]">
              <h2 className="mb-[24px] text-[28px] font-bold text-qd-navy">
                صور المشروع
              </h2>
              <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((g) => (
                  <div
                    key={g.src}
                    className="relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt || project.title}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </PageShell>
  );
}
