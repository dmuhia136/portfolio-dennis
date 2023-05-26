import Image from 'next/image';

function Projects() {
  return (
    <div className="pt-10 pb-10">
      <h1 className="text-5xl m-auto font-bold place-items-center">Projects</h1>
      <div className="grid gap-2 grid-cols-2 pt-10">
        <div className=" place-items-center m-auto flex text-lg font-bold">
          Flutter Recipe App
          <Image
      src="/flutter.png"
      width={200}
      height={200}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
        </div>
        <div className=" place-items-center m-auto flex text-lg font-bold">Admin Interface
        <Image
      src="/admin.webp"
      width={200}
      height={200}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
        </div>
        <div className=" place-items-center m-auto flex text-lg font-bold">Backend for and audio streaming app
        <Image
      src="/backend.png"
      width={200}
      height={200}
      className='rotate-10 ml-4'
      alt="Dennis Njoroge Muhia"
    />
        </div>
       
      </div>
    </div>
  );
}

export default Projects;
