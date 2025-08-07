import Section from "../layouts/Section";

export default function SectionMain() {
  return (
    <Section>
      <div className="flex flex-col justify-between w-full gap-16">
        <h1 className="text-4xl text-center">
          Descubre el camino hacia el bienestar
        </h1>
        <h2 className="text-3xl text-center">
          Atención online, presencial o híbrida
        </h2>
      </div>
    </Section>
  );
}
