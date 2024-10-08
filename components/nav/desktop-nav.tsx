import {
  Flame,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { NavItem } from "./nav-item";

export default function DesktopNav() {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
        <Link
          href='https://skylinedigital.co.nz'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
          <span className='sr-only'>Skyline Digital</span>
        </Link>

        <NavItem href='/dashboard' label='Dashboard'>
          <Home className='h-5 w-5' />
        </NavItem>

        <NavItem href='/dashboard/leads' label='Leads'>
          <Flame className='h-5 w-5' />
        </NavItem>

        <NavItem href='/dashboard/clients' label='Clients'>
          <Users2 className='h-5 w-5' />
        </NavItem>

        <NavItem href='/dashboard/analytics' label='Analytics'>
          <LineChart className='h-5 w-5' />
        </NavItem>
      </nav>
      <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='#'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
