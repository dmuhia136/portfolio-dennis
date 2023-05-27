import Image from "next/image";
import Accomplish from "../components/Accomplish";

function Hero() {
  return (
    <container className="md:flex lg:flex-row justify-between pt-10 pl-40 w-full flex flex-col-reverse">
      {/* left hero */}
      <div className="flex flex-col space-y-5">
        <h1 className="md:text-left text-4xl font-bold sm:text-center">
          Hi,I am Dennis Muhia and here is my portfolio.
        </h1>
        <p className=" font-itallic text-center text-gray-300 md:text-xl text-normal md:text-left">
          I am a fullstack developer working with various technologies to create
          beautiful websites and mobile applications. Here is a list of my
          techstack.
        </p>
        <div className="md:flex md:gap-4 grid md:grid-cols-2 grid-cols-1 space-y-2">
          <Accomplish title="02" desc="Awards" />
          <Accomplish title="20+" desc="Clients" />
          <Accomplish title="5" desc="Years of experience" />
          <Accomplish title="70+" desc="Projects" />
        </div>
        <div className="grid grid-cols-1 space-y-2  lg:grid-cols-2">
          <div className="">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">1</span>{" "}
            Flutter for Mobile applications.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">2</span>{" "}
            React js for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">3</span>{" "}
            Next js for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">4</span>{" "}
            Vue js for websites.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">5</span>{" "}
            Node js for backend.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">6</span>{" "}
            Nest js for backend.
          </div>
          <div className="mb-4">
            <span className="rounded bg-yellow-300 text-gray-800 p-2 ">7</span>{" "}
            Golang for backend.
          </div>
        </div>
      </div>
      {/* right hero */}
      <div>
        <Image
          src="/dennis.png"
          width={600}
          height={600}
          className="rotate-10 ml-4"
          alt="Dennis Njoroge Muhia"
        />
      </div>
    </container>
  );
}

export default Hero;
