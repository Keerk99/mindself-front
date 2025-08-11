import Section from "../layouts/Section";
import { Button } from "../ui/button";

export default function SectionMain() {
  return (
    <Section backgroundImg>
      <div className="flex flex-col justify-between w-full gap-10 text-[#25411e] mt-[20vh]">
        <h1 className="text-6xl max-w-80">Centro de Psicología MINDSELF</h1>
        <h2 className="text-4xl">Descrubre el camino hacia el bienestar</h2>
        <div>
          <Button
            variant="outline"
            className="text-xl py-6 px-8 bg-[#25411e] cursor-pointer text-white hover:border-[#25411e]"
          >
            Reservar cita
          </Button>
        </div>
      </div>
    </Section>
  );
}
