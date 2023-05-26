import Hero from '../components/Hero'
import Projects from '../components/Projects'
export default function Home() {
  return (
  <main className='h-full pl-10 pr-10 bg-gray-800 text-white'>
  {/* hero section */}
<Hero/>
  {/* Projects done */}
  <Projects/>
  {/* Links to portfolio */}
  </main>
  )
}
