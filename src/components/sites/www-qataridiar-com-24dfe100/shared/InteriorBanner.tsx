import Image from "next/image";

export function InteriorBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative bg-qd-navy pt-[180px] pb-[60px] max-[767px]:pt-[130px] max-[767px]:pb-[40px]">
      <div className="mx-auto grid max-w-[1230px] grid-cols-1 items-center gap-[40px] px-[15px] md:grid-cols-2">
        <div className="text-right">
          <h1 className="mb-[16px] text-[42px] leading-[50px] font-bold text-white uppercase max-[767px]:text-[28px] max-[767px]:leading-[36px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-[20px] leading-[30px] font-bold text-qd-gold max-[767px]:text-[16px]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[941/700] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
