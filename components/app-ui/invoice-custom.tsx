import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const AppUIInvoiceCustom = () => {
  return (
    <div className="z-10 relative bg-[#F5F4EE] text-[#9C9A8C]">
      <div className="px-16 py-8 flex items-center justify-between border-t-4 border-b border-[#4C4A39]">
        <div className="flex items-center gap-4">
          <div className="bg-red text-[#4C4A39] rounded-md">Late</div>
          <div className="">This invoice is 4 days overdue.</div>
        </div>
        <div className="flex items-center gap-4">
          <Button>Click me</Button>
          <Button>Click me</Button>
        </div>
      </div>
      <div className="flex items-center justify-end px-16 py-8">
        <div className="relative w-24 h-12 md:w-32 md:h-16 text-[#4C4A39]">
          <svg width="144" height="36" viewBox="0 0 144 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 1L18.3414 15.9543L23.5199 1.92111L18.9871 16.176L28.4416 4.58461L19.5259 16.5953L32.2318 8.70188L19.8993 17.1669L34.4798 13.8267L20.0669 17.8287L34.9419 19.4038L20.0105 18.5091L33.5681 24.8288L19.7363 19.1344L30.5073 29.5138L19.2739 19.6367L26.0911 32.9511L18.6734 19.9616L20.7981 34.7681L18 20.074L15.2019 34.7681L17.3266 19.9616L9.90889 32.9511L16.7261 19.6367L5.49269 29.5138L16.2637 19.1344L2.43185 24.8288L15.9895 18.5091L1.05806 19.4038L15.9331 17.8287L1.5202 13.8267L16.1007 17.1669L3.76817 8.70188L16.4741 16.5953L7.55838 4.58461L17.0129 16.176L12.4801 1.92111L17.6586 15.9543L18 1Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1.61905"
            />
            <path
              d="M53.1078 26H50.2998V8.57996H54.1218L59.1398 18.668L60.7258 22.282H60.9338L62.4678 18.668L67.4338 8.57996H71.2558V26H68.4478V15.314L68.5518 12.792H68.3438L67.2778 15.314L62.4678 24.96H59.0878L54.2778 15.314L53.2118 12.792H53.0038L53.1078 15.314V26Z"
              fill="currentColor"
            />
            <path
              d="M85.8223 26H83.2483V22.672L83.0663 22.594V18.174C83.0663 17.0993 82.8063 16.354 82.2863 15.938C81.7836 15.5046 80.9083 15.288 79.6603 15.288C78.4643 15.288 77.5716 15.496 76.9823 15.912C76.393 16.328 76.0983 17.0126 76.0983 17.966V18.07H73.3163V17.966C73.3163 16.978 73.5763 16.1026 74.0963 15.34C74.6163 14.56 75.3616 13.9446 76.3323 13.494C77.3203 13.0433 78.499 12.818 79.8683 12.818C81.2376 12.818 82.3556 13.052 83.2223 13.52C84.1063 13.9706 84.7563 14.5946 85.1723 15.392C85.6056 16.1893 85.8223 17.108 85.8223 18.148V26ZM77.3983 26.26C76.0636 26.26 74.9976 25.9653 74.2003 25.376C73.4203 24.7693 73.0303 23.9373 73.0303 22.88C73.0303 22.204 73.195 21.6406 73.5243 21.19C73.871 20.722 74.3563 20.358 74.9803 20.098C75.6043 19.838 76.341 19.656 77.1903 19.552L83.3263 18.902V20.566L77.9963 21.164C77.2683 21.2506 76.7223 21.4066 76.3583 21.632C76.0116 21.84 75.8383 22.1953 75.8383 22.698C75.8383 23.218 76.0203 23.608 76.3843 23.868C76.7656 24.1106 77.355 24.232 78.1523 24.232C79.1403 24.232 79.9983 24.1106 80.7263 23.868C81.4543 23.608 82.0263 23.2093 82.4423 22.672C82.8583 22.1346 83.0663 21.4413 83.0663 20.592L83.4303 20.644V22.776H83.0663C82.7196 23.868 82.0523 24.726 81.0643 25.35C80.0936 25.9566 78.8716 26.26 77.3983 26.26Z"
              fill="currentColor"
            />
            <path
              d="M94.8549 30.68C93.5722 30.68 92.4455 30.4806 91.4749 30.082C90.5042 29.7006 89.7415 29.146 89.1869 28.418C88.6495 27.69 88.3809 26.806 88.3809 25.766H91.1629C91.1629 26.39 91.2929 26.8926 91.5529 27.274C91.8129 27.6553 92.2202 27.924 92.7749 28.08C93.3469 28.2533 94.0922 28.34 95.0109 28.34C95.9989 28.34 96.7789 28.2273 97.3509 28.002C97.9402 27.794 98.3649 27.4213 98.6249 26.884C98.8849 26.3466 99.0149 25.6013 99.0149 24.648V17.082L99.2229 16.9V13.078H101.797V24.492C101.797 25.9306 101.511 27.1006 100.939 28.002C100.367 28.9206 99.5609 29.5966 98.5209 30.03C97.4809 30.4633 96.2589 30.68 94.8549 30.68ZM93.6849 24.83C92.4022 24.83 91.3015 24.5786 90.3829 24.076C89.4815 23.5733 88.7795 22.8713 88.2769 21.97C87.7915 21.0686 87.5489 20.02 87.5489 18.824C87.5489 17.628 87.8002 16.5793 88.3029 15.678C88.8229 14.7766 89.5509 14.0746 90.4869 13.572C91.4402 13.0693 92.5669 12.818 93.8669 12.818C95.2189 12.818 96.3629 13.1213 97.2989 13.728C98.2522 14.3173 98.8415 15.1753 99.0669 16.302H99.6649L99.5089 18.564H99.0149C99.0149 17.836 98.8415 17.2293 98.4949 16.744C98.1482 16.2413 97.6542 15.8686 97.0129 15.626C96.3715 15.3833 95.5915 15.262 94.6729 15.262C93.7889 15.262 93.0175 15.3746 92.3589 15.6C91.7175 15.8253 91.2235 16.198 90.8769 16.718C90.5475 17.2206 90.3829 17.9226 90.3829 18.824C90.3829 19.708 90.5475 20.41 90.8769 20.93C91.2062 21.45 91.6829 21.8313 92.3069 22.074C92.9482 22.2993 93.7109 22.412 94.5949 22.412C96.0162 22.412 97.1082 22.1173 97.8709 21.528C98.6335 20.9386 99.0149 20.072 99.0149 18.928H99.5089V21.476H98.8329C98.6075 22.464 98.0615 23.27 97.1949 23.894C96.3282 24.518 95.1582 24.83 93.6849 24.83Z"
              fill="currentColor"
            />
            <path
              d="M117.629 26H114.821V18.98C114.821 17.7666 114.526 16.8566 113.937 16.25C113.365 15.6433 112.403 15.34 111.051 15.34C109.647 15.34 108.607 15.704 107.931 16.432C107.272 17.1426 106.943 18.2 106.943 19.604L106.449 19.63L106.319 17.082H106.891C107.03 16.354 107.307 15.6693 107.723 15.028C108.156 14.3693 108.746 13.8406 109.491 13.442C110.254 13.026 111.181 12.818 112.273 12.818C113.469 12.818 114.466 13.0606 115.263 13.546C116.06 14.0313 116.65 14.6813 117.031 15.496C117.43 16.3106 117.629 17.2206 117.629 18.226V26ZM106.943 26H104.135V13.078H106.709V17.134L106.943 17.264V26Z"
              fill="currentColor"
            />
            <path
              d="M126.371 26.26C124.967 26.26 123.736 26 122.679 25.48C121.622 24.96 120.798 24.1973 120.209 23.192C119.637 22.1866 119.351 20.9733 119.351 19.552C119.351 18.2 119.637 17.0213 120.209 16.016C120.798 15.0106 121.613 14.2306 122.653 13.676C123.693 13.104 124.915 12.818 126.319 12.818C127.654 12.818 128.824 13.0606 129.829 13.546C130.852 14.014 131.64 14.7073 132.195 15.626C132.767 16.5273 133.053 17.6366 133.053 18.954C133.053 19.1793 133.044 19.396 133.027 19.604C133.01 19.7946 132.984 19.9853 132.949 20.176H121.145V18.616H131.103L130.375 19.578C130.392 19.4046 130.401 19.24 130.401 19.084C130.401 18.9106 130.401 18.7373 130.401 18.564C130.401 17.368 130.054 16.484 129.361 15.912C128.685 15.3226 127.654 15.028 126.267 15.028C124.724 15.028 123.624 15.3833 122.965 16.094C122.306 16.8046 121.977 17.8273 121.977 19.162V19.838C121.977 21.19 122.306 22.2213 122.965 22.932C123.624 23.6426 124.733 23.998 126.293 23.998C127.645 23.998 128.616 23.79 129.205 23.374C129.812 22.9406 130.115 22.3426 130.115 21.58V21.372H132.923V21.606C132.923 22.5246 132.637 23.3393 132.065 24.05C131.51 24.7433 130.739 25.2893 129.751 25.688C128.78 26.0693 127.654 26.26 126.371 26.26Z"
              fill="currentColor"
            />
            <path
              d="M143.372 26H140.408C139.022 26 137.921 25.662 137.106 24.986C136.309 24.31 135.91 23.192 135.91 21.632V10.244H138.692V21.476C138.692 22.2733 138.883 22.8106 139.264 23.088C139.646 23.348 140.235 23.478 141.032 23.478H143.372V26ZM143.372 15.418H133.726V13.078H143.372V15.418Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="px-16 py-8 text-[#4C4A39]">
        <div className="text-4xl font-light mb-4">
          Invoice <span className="text-medium">08204</span>
        </div>
        <div className="">
          Invoice for items under <span className="font-semibold">[0422] PPC</span> and <span className="font-semibold">[0381] Content Marketing</span> agreements.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-16 py-8 items-start">
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3 text-sm">Invoice for</div>
          <div className="md:col-span-4 text-[#4C4A39]">Allied Materials and Allied Products Corporation</div>
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3 text-sm">Invoice from</div>
          <div className="md:col-span-4 text-[#4C4A39]">
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
          <div className="md:col-span-3 text-sm">Issue date</div>
          <div className="md:col-span-4 text-[#4C4A39]">02/01/2025</div>
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-3 text-sm">Due date</div>
          <div className="md:col-span-4 text-[#4C4A39]">03/01/2025 (Net 30)</div>
        </div>
      </div>
      <div className="px-12 py-8 flex flex-col gap-1 text-sm">
        <div className="flex items-start justify-between gap-4 px-4 py-2">
          <div className="flex-grow">Item</div>
          <div className="hidden md:flex flex-none w-24">Hours</div>
          <div className="hidden md:flex flex-none w-24">Rate</div>
          <div className="flex-none w-24 flex justify-end">Amount</div>
        </div>
        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-[#EFEEE5] text-[#4C4A39] rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>

        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-[#EFEEE5] text-[#4C4A39] rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>
        <div className="flex items-start justify-between gap-4 px-4 py-2 bg-[#EFEEE5] text-[#4C4A39] rounded-md">
          <div className="flex-grow">[0422] Allied Springbok PPC Retainer - 01/08/2024 - PPC Management / Reisto Belovich: December 2023 Report</div>
          <div className="hidden md:flex flex-none w-24">12</div>
          <div className="hidden md:flex flex-none w-24">$200</div>
          <div className="flex-none w-24 flex justify-end">$324,000,000</div>
        </div>
        <div className="flex items-start gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Subtotal</div>
              <div className="md:col-span-4 text-[#4C4A39] flex md:justify-end">$324,000,000</div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Tax (0%)</div>
              <div className="md:col-span-4 text-[#4C4A39] flex md:justify-end">$0</div>
            </div>
          </div>
        </div>
        <div className="flex items-start  gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Paid</div>
              <div className="md:col-span-4 text-[#4C4A39] flex md:justify-end">$0</div>
            </div>
          </div>
        </div>
        <div className="flex items-start  gap-4 px-4 py-2">
          <div className="flex-grow hidden md:flex"></div>
          <div className="flex-none md:w-[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4">
              <div className="md:col-span-3">Total due</div>
              <div className="md:col-span-4 text-[#4C4A39] flex md:justify-end text-2xl">$324,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppUIInvoiceCustom
