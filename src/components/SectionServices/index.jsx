import { serviceList } from "@/utils";
import Section from "../layouts/Section";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

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
          {serviceList.map(({ id, title, img }) => (
            <Card
              key={id}
              className="w-full max-w-xs hover:cursor-pointer py-8"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                <Image src={img} alt={`Imagen de ${title}`} width={250} />
                <CardTitle className="text-2xl text-center">{title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
