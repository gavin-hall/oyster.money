import { allPosts } from '@/.contentlayer/generated'
import Image from 'next/image'
import AppUIInvoice from '@/components/app-ui/invoice'
import AppUIInvoiceLight from '@/components/app-ui/invoice-light'
import AppUIInvoiceCustom from '@/components/app-ui/invoice-custom'
import StatNetWorth from '@/components/app-ui/stat-net-worth'
export default function Home() {
  return (
    <div className="">
      <div className="absolute left-[50%] top-[0rem] z-0 ml-[-273px] h-[546px] w-[602px]">
        <Image src="/grid.png" width="602" height="546" alt="" />
      </div>
      <div className="relative">
        <div className="absolute left-[50%] top-[-20rem] z-0 ml-[-20rem] h-[40rem] w-[40rem] rounded-full bg-[#D1A8FF] blur-3xl opacity-5"></div>
        <div className="relative z-10">
          <div className="max-w-2xl mt-32 mb-32">
            <div className="text-4xl font-light bg-gradient-to-br from-[#9747FF] via-[#EEB4EF] to-[#F7C386] inline-block text-transparent bg-clip-text">
              Everyone in your organization is relying on you to read the numbers right, to get the payments out and the invoices paid. You owe it to yourself and everyone else to use the best money
              management software.
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg mb-12">
            <div className="grid grid-cols-3 gap-2">
              <StatNetWorth netWorth="$2,087,341" date="March 9th, 2035" percentageChange="+2.05%" changeLabel="Since last month" />
              <StatNetWorth netWorth="$83,500" date="February 12th, 2035" percentageChange="+2.05%" changeLabel="Since last month" />
              <StatNetWorth netWorth="$15" date="April 9th, 2035" percentageChange="+7.55%" changeLabel="Since last year" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-[50%] top-[10rem] z-0 ml-[-20rem] h-[40rem] w-[40rem] rounded-full bg-[#D1A8FF] blur-3xl opacity-5"></div>
        <div className="absolute left-[50%] top-[0rem] z-10 ml-[-273px] h-[546px] w-[602px]">
          <Image src="/grid.png" width="602" height="546" alt="" />
        </div>
        <div className="relative z-20">
          <div className="py-32 md:text-center md:mx-auto ">
            <h1 className="mb-2 text-4xl font-light text-white font-secondary">Effortless money management</h1>
            <div className="font-medium bg-gradient-to-br from-[#9747FF] via-[#EEB4EF] to-[#F7C386] inline-block text-transparent bg-clip-text">
              Easily handle contracts, invoicing, expenses and reporting.
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg mb-12">
            <div className="grid grid-cols-3 gap-2">
              <StatNetWorth netWorth="$2,087,341" date="March 9th, 2035" percentageChange="+2.05%" changeLabel="Since last month" />
              <StatNetWorth netWorth="$83,500" date="February 12th, 2035" percentageChange="+2.05%" changeLabel="Since last month" />
              <StatNetWorth netWorth="$15" date="April 9th, 2035" percentageChange="+7.55%" changeLabel="Since last year" />
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg mb-12">
            <AppUIInvoice />
          </div>
          <div className="mx-auto max-w-screen-lg mb-12">
            <AppUIInvoiceLight />
          </div>
          <div className="mx-auto max-w-screen-lg mb-12">
            <AppUIInvoiceCustom />
          </div>

          {/* <div className="prose dark:prose-invert">
          {allPosts.map(post => (
            <article key={post._id}>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link>
              {post.description && <p>{post.description}</p>}
            </article>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  )
}
