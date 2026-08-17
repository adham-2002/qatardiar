import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { InteriorPage } from "@/types/qataridiar";
import { InteriorBanner } from "./InteriorBanner";
import { PageShell } from "./PageShell";
import { ContactForm } from "./ContactForm";

export function InteriorPageView({ page }: { page: InteriorPage }) {
  if (page.notFound) {
    return (
      <PageShell darkHeader>
        <section className="bg-qd-cream px-[15px] py-[200px] text-center">
          <h1 className="mb-[20px] text-[35px] font-bold text-qd-navy">
            {page.title}
          </h1>
          <p className="mb-[30px] text-qd-text">{page.intro}</p>
          <Link href="/" className="font-bold text-qd-gold uppercase">
            العودة للرئيسية
          </Link>
        </section>
      </PageShell>
    );
  }

  const isProjects = page.key === "ar-projects";
  const isMap = page.key === "ar-projects-map";
  const isMedia = page.key === "ar-media";
  const isBusiness = page.key === "ar-other-businesses";
  const isForm =
    page.key === "ar-contact-us" ||
    page.key === "ar-inquire" ||
    page.key === "ar-request-access-information";

  return (
    <PageShell darkHeader>
      <InteriorBanner
        title={page.title}
        subtitle={page.subtitle}
        image={page.banner}
      />

      <section className="bg-qd-cream py-[70px] max-[767px]:py-[40px]">
        <Container>
          {page.intro ? (
            <p className="mb-[40px] max-w-[900px] text-[17px] leading-[30px] text-qd-text">
              {page.intro}
            </p>
          ) : null}

          {page.paragraphs
            ?.filter((p) => p !== page.intro)
            .map((p, i) => (
              <p
                key={p.slice(0, 40) + i}
                className="mb-[20px] max-w-[900px] text-[16px] leading-[28px] text-qd-text"
              >
                {p}
              </p>
            ))}

          {page.labeled?.length ? (
            <div className="mt-[40px] grid gap-[30px] md:grid-cols-2">
              {page.labeled.map((item) => (
                <div
                  key={`${item.label}-${item.value.slice(0, 20)}`}
                  className="border-t border-qd-rule pt-[20px]"
                >
                  <h2 className="mb-[12px] text-[22px] font-bold text-qd-navy">
                    {item.label}
                  </h2>
                  <p className="text-[15px] leading-[26px] text-qd-text">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {isProjects && page.projects?.length ? (
            <>
              {page.mapLink ? (
                <div className="mb-[30px]">
                  <Link
                    href={page.mapLink}
                    className="text-[14px] font-bold text-qd-gold uppercase"
                  >
                    عرض على الخريطة
                  </Link>
                </div>
              ) : null}
              <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                {page.projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={p.href}
                    className="group block overflow-hidden bg-white"
                  >
                    <div className="relative aspect-[685/387] overflow-hidden">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.imageAlt || p.title}
                          fill
                          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      ) : null}
                    </div>
                    <h3 className="p-[20px] text-[18px] font-bold text-qd-navy uppercase">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </>
          ) : null}

          {isMap && page.projects?.length ? (
            <div className="space-y-[40px]">
              <div className="text-center">
                <Link
                  href={page.mapLink || "/ar/projects"}
                  className="text-[14px] font-bold text-qd-gold uppercase"
                >
                  عرض القائمة
                </Link>
              </div>
              <div className="mx-auto max-w-[997px]">
                <div className="relative aspect-[997/650]">
                  <Image
                    src="/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/map-gcc.png"
                    alt="خريطة المشاريع"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          ) : null}

          {isMedia && page.items?.length ? (
            <>
              {page.intro ? null : (
                <p className="mb-[40px] max-w-[720px] text-[16px] leading-[28px] text-qd-text">
                  آخر الأخبار والبيانات الصحفية عن شركة الديار القطرية
                </p>
              )}
              <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                {page.items.map((item) => (
                  <article
                    key={item.href}
                    className="group overflow-hidden bg-white"
                  >
                    <div className="relative aspect-[685/387] overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          fill
                          className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      ) : null}
                    </div>
                    <div className="p-[20px]">
                      <h3 className="mb-[10px] text-[16px] leading-[24px] font-bold text-qd-navy">
                        {item.title}
                      </h3>
                      {item.date ? (
                        <time className="text-[13px] text-qd-text">
                          {item.date}
                        </time>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : null}

          {isBusiness && page.businesses?.length ? (
            <div className="mt-[20px] space-y-[50px]">
              {page.businesses.map((b) => (
                <div
                  key={b.name + b.href}
                  className="grid items-center gap-[30px] border-b border-qd-rule pb-[40px] md:grid-cols-[200px_1fr]"
                >
                  {b.image ? (
                    <div className="relative mx-auto h-[120px] w-[180px]">
                      <Image
                        src={b.image}
                        alt={b.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                  <div>
                    <h3 className="mb-[12px] text-[22px] font-bold text-qd-navy">
                      {b.name}
                    </h3>
                    {b.body ? (
                      <p className="mb-[16px] text-[15px] leading-[26px] text-qd-text">
                        {b.body}
                      </p>
                    ) : null}
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-bold text-qd-gold uppercase"
                    >
                      {b.cta || "زيارة الموقع"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {page.links?.length && !isProjects && !isMap && !isMedia && !isBusiness ? (
            <div className="mt-[30px] grid gap-[20px] sm:grid-cols-2">
              {page.links.map((l) =>
                l.href.startsWith("http") ? (
                  <a
                    key={l.href + l.title}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-qd-rule bg-white p-[20px]"
                  >
                    <div className="font-bold text-qd-navy">{l.title}</div>
                    {l.body ? (
                      <p className="mt-[8px] text-[14px] text-qd-text">
                        {l.body}
                      </p>
                    ) : null}
                  </a>
                ) : (
                  <Link
                    key={l.href + l.title}
                    href={l.href}
                    className="block border border-qd-rule bg-white p-[20px]"
                  >
                    <div className="font-bold text-qd-navy">{l.title}</div>
                    {l.body ? (
                      <p className="mt-[8px] text-[14px] text-qd-text">
                        {l.body}
                      </p>
                    ) : null}
                  </Link>
                ),
              )}
            </div>
          ) : null}

          {page.gallery && page.gallery.length > 1 && !isProjects && !isMap ? (
            <div className="mt-[50px] grid grid-cols-2 gap-[15px] md:grid-cols-3">
              {page.gallery.slice(1).map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={g.src}
                    alt={g.alt || page.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          ) : null}

          {isForm ? (
            <div className="mt-[40px] grid gap-[50px] lg:grid-cols-2">
              <ContactForm
                title={page.key === "ar-inquire" ? "استعلام" : "أرسل رسالة"}
              />
              {page.paragraphs && page.paragraphs.length > 1 ? (
                <div className="space-y-[12px] text-[15px] leading-[26px] text-qd-text">
                  {page.paragraphs
                    .filter((p) => p !== page.intro)
                    .map((p, i) => (
                      <p key={p.slice(0, 30) + i}>{p}</p>
                    ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </Container>
      </section>
    </PageShell>
  );
}
