import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { serviceList } from "@/utils";

export function Header() {
  const textStyle = `text-[#25411e] cursor-pointer
                    hover:text-[#25411e] focus-visible:text-[#25411e] active:text-[#25411e]
                    data-[state=open]:text-[#25411e] data-[active]:text-[#25411e]`;

  const textStyleButton = `bg-[#25411e]
                          text-white`;

  return (
    <header className="fixed w-full z-100">
      <NavigationMenu
        viewport={false}
        className="max-w-[1900px] flex justify-between items-center mx-auto my-0 px-[10rem] py-[3rem]"
      >
        <p>MINDSELF logo</p>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${textStyle}`}
            >
              <Link href="/">Inicio</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={textStyle}>
              Nuestros Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50 md:absolute left-1/2 -translate-x-1/2 w-full md:w-auto">
              <ul
                className="grid w-[400px] gap-2 md:w-[520px] md:grid-cols-2 lg:w-[640px]
                 max-h-[70vh] overflow-y-auto p-3 overscroll-contain"
              >
                {serviceList.slice(0, 8).map((service) => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/servicios/${service.slug}`}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={textStyle}>
              ¿Quienes Somos?
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-max gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/quienes-somos/mision-y-vision">
                      <div className="font-medium">Misión y visión</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/quienes-somos/equipo-mindself">
                      <div className="font-medium">Equipo MINDSELF</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${textStyleButton}`}
            >
              <Link
                href="https://wa.me/51973920145"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar cita
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export function ListItem({ title, href, children, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
