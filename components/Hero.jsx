import Image from 'next/image';

function Hero() {
  return (
    <container className="flex flex-row justify-between pt-10 pl-40 w-full">
      {/* left hero */}
      <div className="flex flex-col space-y-5">
        <h1 className="text-left text-4xl font-bold ">Here is my portfolio</h1>
        <p className="w-1/3 font-itallic text-gray-500 text-xl ">
          I am a fullstack developer working with various technologies to create
          beautiful websites and mobile applications. Here is a list of my
          techstack.
        </p>
        <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <div className="">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">1</span>{" "}
            Flutter for Mobile applications.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">2</span> React
            js for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">3</span> Next
            js for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">4</span> Vue js
            for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">5</span> Node
            js for backend.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">6</span> Nest
            js for backend.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">7</span> Golang
            for backend.
          </div>
        </div>
      </div>
      {/* right hero */}
      <div><Image
      src="/development.png"
      width={600}
      height={600}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    /></div>
    </container>
  );
}

export default Hero;
 