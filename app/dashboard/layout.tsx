import Breadcrumbs from "@/components/breadcrumbs";
import DesktopNav from "@/components/nav/desktop-nav";
import MobileNav from "@/components/nav/mobile-nav";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/server";
import { Search } from "lucide-react";
import Image from "next/image";
import { signOutAction } from "../actions";
import UserProfileIcon from "@/components/user-icon/user-profile-icon";

export default async function DashboardFunction({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex-1 h-full w-full flex flex-col gap-12'>
      <div className='flex w-full flex-col'>
        <DesktopNav />
        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
          <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <MobileNav />
            <Breadcrumbs />
            <div className='relative ml-auto flex-1 md:grow-0'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search...'
                className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
              />
            </div>
            <UserProfileIcon />
          </header>
          <div className='p-4 sm:px-6 sm:py-0'>{children}</div>
        </div>
      </div>
    </div>
  );
}
