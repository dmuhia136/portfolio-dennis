

function Accomplish({img,title,desc}){
    return (
       <div className='h-[90px] border w-[100px] rounded-r-lg border-yellow-400 '>
        <p className='text-xl font-bold text-center pt-2'>{title}</p>
        <p className='text-md font-itallic text-center'>{desc}</p>
       </div>
    );
}

export default Accomplish