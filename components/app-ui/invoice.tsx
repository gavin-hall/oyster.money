import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const AppUIInvoice = () => {
  return (
    <div className="z-10 relative bg-darker">
      <div className="px-16 py-8 flex items-center justify-between border-t-4 border-b border-dark">
        <div className="flex items-center gap-4">
          <div className="bg-red text-inherit rounded-md">Late</div>
          <div className="">This invoice is 4 days overdue.</div>
        </div>
        <div className="flex items-center gap-4">
          <Button>Click me</Button>
          <Button>Click me</Button>
        </div>
      </div>
      <div className="flex items-center justify-end px-16 py-8">
        <div className="relative w-24 h-12 md:w-32 md:h-16 ">
          <Image src="/sample-logo.svg" fill className="object-contain" alt="Oyster" />
        </div>
      </div>
      <div className="px-16 py-8 text-white">
        <div className="text-4xl font-light mb-4">
          Invoice <span className="text-medium">08204</span>
        </div>
        <div className="">
          Invoice for items under <span className="font-semibold">[0422] PPC</span> and <span className="font-semibold">[0381] Content Marketing</span> agreements.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-16 py-8 items-start">
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3">Invoice for</div>
          <div className="md:col-span-4 text-white">Allied Materials and Allied Products Corporation</div>
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3">Invoice from</div>
          <div className="md:col-span-4 text-white">
            Magnet Co, LLC
            <br />
            1806 River Heights Lane
            <br />
            Villa Hills
            <br />
            KY 41017
            <br />
            United States
            <br />
            +1 (424) 322-9059
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-16 py-8 items-start">
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3">Issue date</div>
          <div className="md:col-span-4 text-white">02/01/2025</div>
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3">Due date</div>
          <div className="md:col-span-4 text-white">03/01/2025 (Net 30)</div>
        </div>
      </div>
      <div className="px-12 py-8 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4 px-4 py-2">
          <div className="flex-grow">Item</div>
          <div className="hidden md:flex flex-none w-24">Hours</div>
          <div className="hidden md:flex flex-none w-24">Rate</div>
          <div className="flex-none w-24 flex justify-end">Amount</div>
        </div>
        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-dark text-white rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>

        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-dark text-white rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>
        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-dark text-white rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>
        <div className="flex items-start  gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Subtotal</div>
              <div className="md:col-span-4 text-white flex md:justify-end">$324,000,000</div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Tax (0%)</div>
              <div className="md:col-span-4 text-white flex md:justify-end">$0</div>
            </div>
          </div>
        </div>
        <div className="flex items-start  gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Paid</div>
              <div className="md:col-span-4 text-white flex md:justify-end">$0</div>
            </div>
          </div>
        </div>
        <div className="flex items-start  gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Total due</div>
              <div className="md:col-span-4 text-white flex md:justify-end text-2xl">$324,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppUIInvoice
