import { allPosts } from '@/.contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <div className="absolute left-[50%] top-[0rem] z-0 ml-[-273px] h-[546px] w-[602px]">
        <Image src="/grid.png" width="602" height="546" decorative />
      </div>{' '}
      <div className="absolute left-[50%] top-[-20rem] z-0 ml-[-20rem] h-[40rem] w-[40rem] rounded-full bg-[#D1A8FF] blur-3xl opacity-5"></div>
      <div className="relative z-10">
        <div className="py-32 text-center mx-auto ">
          <h1 className="mb-2 text-4xl font-light text-white font-secondary">Effortless money management</h1>
          <div className="font-medium bg-gradient-to-br from-[#9747FF] via-[#EEB4EF] to-[#F7C386] inline-block text-transparent bg-clip-text">
            Easily handle contracts, invoicing, expenses and reporting.
          </div>
          {/* background: var(--Gradient, linear-gradient(118deg, #9747FF -0.18%, #EEB4EF 34.19%, #F7C386 99.11%));
           */}
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
  )
}
