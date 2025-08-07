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
  return (
    <header>
      <NavigationMenu
        viewport={false}
        className="max-w-[1900px] flex justify-between items-center mx-auto my-0 px-[10rem] py-[3rem]"
      >
        <p>MINDSELF logo</p>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Inicio</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nuestros Servicios</NavigationMenuTrigger>
            <NavigationMenuContent className="left-1/2 -translate-x-1/2 w-full md:w-auto">
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {serviceList.map((service) => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>¿Quienes Somos?</NavigationMenuTrigger>
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
              className={navigationMenuTriggerStyle()}
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
