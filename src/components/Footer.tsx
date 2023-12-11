import exypnosLogo from "../assets/exypnos.png";

function Footer() {
  return (
    <div className='w-full h-[30vh] flex'>
      <div className=' mt-auto w-full h-fit flex items-center justify-center bg-accent bg-opacity-50'> 
        <img src={exypnosLogo} alt="" className='w-[70px] h-[70px]'/>
      </div>
    </div>
  )
}

export default Footer