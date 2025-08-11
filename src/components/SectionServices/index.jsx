import { serviceList } from "@/utils";
import Section from "../layouts/Section";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SectionServices() {
  return (
    <Section>
      <div className="flex flex-col justify-between w-full gap-16">
        <h3 className="text-4xl text-center text-[#25411e]">
          Nuestros Servicios
        </h3>
        <div className="flex gap-8 flex-wrap justify-center">
          <p className="text-xl text-[#25411e]">
            En nuestro centro, ofrecemos una atención integral y personalizada
            para cada etapa de la vida, con el objetivo de promover el bienestar
            emocional, el desarrollo personal y la mejora en la calidad de vida
            de nuestros pacientes.
          </p>
          {serviceList.map(({ id, title, img, slug }) => (
            <Link
              key={id}
              href={`/servicios/${slug}`}
              className="group block w-full max-w-xs"
            >
              <Card
                className="h-full py-8 rounded-2xl
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]
                 hover:shadow-lg hover:z-10 will-change-transform
                 motion-reduce:transition-none motion-reduce:transform-none"
              >
                <CardHeader className="flex flex-col items-center gap-4">
                  <Image
                    src={img}
                    alt={`Imagen de ${title}`}
                    width={250}
                    className="transition-transform duration-300 transform-gpu group-hover:scale-105"
                  />
                  <CardTitle className="text-2xl text-center">
                    {title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
