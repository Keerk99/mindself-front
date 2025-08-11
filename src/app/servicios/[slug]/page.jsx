import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceList } from "@/utils";

export async function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceList.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.description } : {};
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceList.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="min-h-[calc(100vh-116px)] px-[10rem] py-[3rem]">
      <h1 className="text-4xl text-[#60807c] mb-6">{service.title}</h1>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Image
          src={service.img}
          alt={service.title}
          className="rounded-2xl w-full h-auto"
        />
        <p className="text-lg leading-relaxed">{service.description}</p>
      </div>
    </main>
  );
}
