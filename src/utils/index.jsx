import terapiaIndividual from "@/assets/img/terapia-individual.png";
import parejaFamiliar from "@/assets/img/terapia-de-pareja.png";
import evaluaciones from "@/assets/img/evaluaciones-psicologicas.png";
import orientacionMental from "@/assets/img/asesoramiento-y-orientacion.png";
import estres from "@/assets/img/manejo-del-estres.png";
import ansiedad from "@/assets/img/ansiedad.png";
import depresion from "@/assets/img/depresion.png";

export const serviceList = [
  {
    id: 1,
    title: "Terapia individual",
    img: terapiaIndividual,
    href: "/servicios/terapia-individual",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "Terapia de pareja o familiar",
    img: parejaFamiliar,
    href: "/servicios/terapia-de-pareja-o-familiar",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Evaluaciones psicológicas",
    img: evaluaciones,
    href: "/servicios/evaluaciones-psicologicas",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    id: 4,
    title: "Asesoramiento y orientación en temas de salud mental",
    img: orientacionMental,
    href: "/servicios/asesoramiento-y-orientacion",
    description: "Visually or semantically separates content.",
  },
  {
    id: 5,
    title: "Manejo del estrés",
    img: estres,
    href: "/servicios/manejo-del-estres",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    id: 6,
    title: "Ansiedad",
    img: ansiedad,
    href: "/servicios/ansiedad",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: 7,
    title: "Depresión",
    img: depresion,
    href: "/servicios/depresion",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const planList = [
  {
    id: 1,
    title: "Terapia virtual",
    platform: "Google Meet",
    plan1: "50 x 45 minutos",
    plan2: "70 x 120 minutos",
  },
  {
    id: 2,
    title: "Terapia a domicilio",
    platform: "Presencial",
    plan1: "70 x 65 minutos",
    plan2: "100 x 2 horas",
  },
];
