import Image from 'next/image'

export default async function Home() {

  return (
    <main className='relative h-screen'>
      <div>Hello world</div>
      {/* <Image
        src="https://bit.ly/react-cover"
        alt='mountain'
        fill
        className='object-cover'
        sizes='(min-width: 480px) 100vw, (min-width: 768px) 100vw, 33vw'
        quality={100}
        priority
      /> */}
    </main>
  )
}
