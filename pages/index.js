import styles from '../styles/Home.module.css';
import Image from 'next/future/image';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-kalmyk-yellow">
      <div className="flex h-1/5">
        <h1 className="text-4xl md:text-6xl font-extrabold text-kalmyk-blue font-nunito-sans text-center m-auto">Free Kalmykia Foundation</h1>
      </div>
      <div className="h-3/5">
        <Image className="!relative" src="/Kalmyks.svg" fill style={{ objectFit: 'cover' }}/>
      </div>
      <div className="flex h-1/5">
        <h2 className="text-xl md:text-3xl text-bold text-kalmyk-blue font-nunito-sans m-auto">The website is coming soon</h2>
      </div>
    </div>
  )
}
