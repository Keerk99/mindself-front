import { serviceList } from "@/utils";
import Section from "../layouts/Section";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function SectionServices() {
  return (
    <Section>
      <div className="flex flex-col justify-between w-full gap-16">
        <h3 className="text-2xl text-center">Nuestros Servicios</h3>
        <div className="flex gap-8 flex-wrap justify-center">
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
