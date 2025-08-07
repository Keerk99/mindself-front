import { planList } from "@/utils";
import Section from "../layouts/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function SectionPlans() {
  return (
    <Section>
      <div className="flex flex-col justify-between w-full gap-16">
        <h3 className="text-2xl text-center">Escoje el tipo de Servicio</h3>
        <div className="flex gap-8 flex-wrap justify-center">
          {planList.map(({ id, title, platform, plan1, plan2 }) => (
            <Card
              key={id}
              className="w-full max-w-xs hover:cursor-pointer py-8"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                <CardTitle className="text-2xl text-center">{title}</CardTitle>
                <CardDescription className="text-xl">
                  {platform}
                </CardDescription>
                <CardContent>
                  <p>{plan1}</p>
                  <p>{plan2}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
