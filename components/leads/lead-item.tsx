"use client";

import React, { Suspense } from "react";
import { Tables } from "@/database.types";
import { getFormattedDate } from "@/utils/utils";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  MoreVertical,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import LocalDate from "../local-date";
import { deleteLead } from "@/utils/dal";
import LeadStatusBadge from "./lead-status-badge";

export default function LeadItem({ lead }: { lead: Tables<"leads"> }) {
  return (
    <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
      <CardHeader className='flex flex-row items-start bg-muted/50'>
        <div className='grid gap-0.5'>
          <CardTitle className='group flex items-center gap-2 text-lg'>
            {lead.name}
            {/* <Button
                    size='icon'
                    variant='outline'
                    className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
                  >
                    <Copy className='h-3 w-3' />
                    <span className='sr-only'>Copy Order ID</span>
                  </Button> */}
          </CardTitle>
          <CardDescription>
            Created: <LocalDate timestamp={lead.created_at} />
          </CardDescription>
        </div>
        <div className='ml-auto flex items-center gap-1'>
          <AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' variant='outline' className='h-8 w-8'>
                  <MoreVertical className='h-3.5 w-3.5' />
                  <span className='sr-only'>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className='text-red-500'>
                    Trash
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogContent>
              <form action={() => deleteLead(lead.id)}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button variant='destructive' type='submit' asChild>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </Button>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>
      <CardContent className='p-6 text-sm'>
        {/* <div className='grid gap-3'>
                <div className='font-semibold'>Order Details</div>
                <ul className='grid gap-3'>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator className='my-2' />
                <ul className='grid gap-3'>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li className='flex items-center justify-between font-semibold'>
                    <span className='text-muted-foreground'>Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator className='my-4' />
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <div className='font-semibold'>Shipping Information</div>
                  <address className='grid gap-0.5 not-italic text-muted-foreground'>
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div className='grid auto-rows-max gap-3'>
                  <div className='font-semibold'>Billing Information</div>
                  <div className='text-muted-foreground'>
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator className='my-4' /> */}
        <div className='grid gap-3'>
          <div className='font-semibold'>Lead Information</div>
          <dl className='grid gap-3'>
            <div className='flex items-center justify-between'>
              <dt className='text-muted-foreground'>Lead Name</dt>
              <dd>{lead.name}</dd>
            </div>
            <div className='flex items-center justify-between'>
              <dt className='text-muted-foreground'>Email</dt>
              <dd>
                <a href='mailto:'>{lead.email}</a>
              </dd>
            </div>
            <div className='flex items-center justify-between'>
              <dt className='text-muted-foreground'>Source</dt>
              <dd>
                <a href='mailto:'>{lead.source}</a>
              </dd>
            </div>
            <div className='flex items-center justify-between'>
              <dt className='text-muted-foreground'>Status</dt>
              <dd>
                <a href='mailto:'>
                  <LeadStatusBadge status={lead.status} />
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <Separator className='my-4' />
        <div className='grid gap-3'>
          <div className='font-semibold'>Payment Information</div>
          <dl className='grid gap-3'>
            <div className='flex items-center justify-between'>
              <dt className='flex items-center gap-1 text-muted-foreground'>
                <CreditCard className='h-4 w-4' />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
        <div className='text-xs text-muted-foreground'>
          Updated <time dateTime='2023-11-23'>November 23, 2023</time>
        </div>
        <Pagination className='ml-auto mr-0 w-auto'>
          <PaginationContent>
            <PaginationItem>
              <Button size='icon' variant='outline' className='h-6 w-6'>
                <ChevronLeft className='h-3.5 w-3.5' />
                <span className='sr-only'>Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size='icon' variant='outline' className='h-6 w-6'>
                <ChevronRight className='h-3.5 w-3.5' />
                <span className='sr-only'>Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
}
