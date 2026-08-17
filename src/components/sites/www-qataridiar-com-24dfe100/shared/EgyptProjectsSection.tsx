import Image from "next/image";
import Link from "next/link";

export function EgyptProjectsSection({ projects }: { projects: { slug: string; href: string; title: string; image: string; imageAlt: string; location: string; status: string }[] }) {
  return (
    <div className="mt-[60px]">
      <h2 className="mb-[30px] text-[28px] font-bold text-qd-navy">مشاريع مصر</h2>
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <Link key={p.slug} href={p.href} className="group block overflow-hidden bg-white">
            <div className="relative aspect-[685/387] overflow-hidden">
              {p.image ? (
                <Image src={p.image} alt={p.imageAlt || p.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" sizes="25vw" />
              ) : null}
            </div>
            <div className="p-[16px]">
              <div className="text-[13px] text-qd-gold">{p.location}</div>
              <h3 className="my-[8px] text-[16px] font-bold text-qd-navy">{p.title}</h3>
              <div className="text-[13px] text-qd-text">{p.status}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
