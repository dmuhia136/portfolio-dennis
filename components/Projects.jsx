import Image from 'next/image';

function Projects() {
  return (
    <div className="pt-10 pb-10">
      <h1 className="text-5xl m-auto font-bold place-items-center">Projects</h1>
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10">
        <div className=" place-items-center m-auto flex text-lg font-bold">
         
          <Image
      src="/flutter.png"
      width={300}
      height={300}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
        </div>
        <div className=" place-items-center m-auto flex text-lg font-bold">
        <Image
      src="/admin.webp"
      width={300}
      height={300}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
        </div>
        <div className=" place-items-center m-auto  text-lg font-bold">
        <Image
      src="/backend.png"
      width={300}
      height={300}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
     <p className='text-center font-normal md:font-bold'>Backend for and audio streaming app</p>
        </div>
       
      </div>
    </div>
  );
}

export default Projects;
