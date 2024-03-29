/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/T6TBdvCnE1m
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"

export function Evals() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <ListIcon className="h-4 w-4" />
                All Evaluations
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ClockIcon className="h-4 w-4" />
                Pending
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">2</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CheckCircleIcon className="h-4 w-4" />
                Completed
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <XCircleIcon className="h-4 w-4" />
                Failed
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden gap-5 text-sm font-medium lg:flex lg:gap-5 lg:text-base">
            <Link className="font-bold" href="#">
              All Evaluations
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Pending
              <Badge className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">2</Badge>
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Completed
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Failed
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <form className="flex items-center gap-2 ml-auto">
              <Label className="sr-only" htmlFor="search">
                Search
              </Label>
              <Input
                className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
                id="search"
                placeholder="Search..."
                type="search"
              />
              <Button size="icon" type="submit">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                  id="menu"
                  size="icon"
                  variant="ghost"
                >
                  <UserIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-2xl">All Evaluations</h1>
              <Button className="ml-auto" size="sm">
                New Evaluation
              </Button>
            </div>
            <div className="mt-4 grid gap-4 text-sm md:grid-cols-2 lg:text-base">
              <Card>
                <CardContent className="p-4 grid gap-2">
                  <div className="font-semibold">Sentiment Analysis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date: 2023-12-01 10:30 AM</div>
                  <div className="text-sm">Status: Pending</div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4 grid gap-2">
                  <div className="font-semibold">Spam Detection</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date: 2023-11-30 08:45 AM</div>
                  <div className="text-sm">Status: Completed</div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4 grid gap-2">
                  <div className="font-semibold">Image Recognition</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date: 2023-11-29 11:20 AM</div>
                  <div className="text-sm">Status: Failed</div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4 grid gap-2">
                  <div className="font-semibold">Language Translation</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date: 2023-11-28 02:10 PM</div>
                  <div className="text-sm">Status: Completed</div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 1-2 2H5a2 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 1 7.24 3h9.52a2 1.8 1.1L21" />
      <path d="M12 3v6" />
    </svg>
  )
}


function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 1 12 0c0 7 3 9 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 3.4" />
    </svg>
  )
}


function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 16 14" />
    </svg>
  )
}


function CheckCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function XCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0-4-4H9a4 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
