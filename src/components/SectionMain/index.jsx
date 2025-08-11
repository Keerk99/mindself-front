import Section from "../layouts/Section";
import { Button } from "../ui/button";
import { playfair } from "@/app/fonts";

export default function SectionMain() {
  return (
    <Section backgroundImg>
      <div className="flex flex-col justify-between w-full gap-10 text-[#25411e] mt-[20vh]">
        <div>
          <h1
            className={`${playfair.className} text-8xl text-black font-[500]`}
          >
            MINDSELF
          </h1>
          <h2 className={`${playfair.className} text-6xl text-black`}>
            Psicólogos Especialistas
          </h2>
        </div>
        <h2
          className={`${playfair.className} italic text-4xl text-white font-[500]`}
        >
          Un equipo profesional para cada necesidad emocional
        </h2>
        <div>
          <Button
            className={`${playfair.className} text-xl py-6 px-8 bg-[#25411e] cursor-pointer text-white`}
          >
            Reservar cita
          </Button>
        </div>
      </div>
    </Section>
  );
}
