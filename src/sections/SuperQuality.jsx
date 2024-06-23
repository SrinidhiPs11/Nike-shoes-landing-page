import  {Button}  from "../components/index.js";
import {shoe8} from '../assets/images'



const SuperQuality = () => {
  return (
    <section id="about-us" className=" flex justify-between items-center max-lg:flex-col gap-5 w-full max-container">
      <div className=" flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>We provide you <span className='text-coral-red inline-block mt-3'>
          Super </span>
          <span className='text-coral-red inline-block mt-3 leading-10'>
            Quality 
          </span> Shoes
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text my-5'>
          Our shoes are crafted with the finest materials and attention to
          detail, ensuring unparalleled comfort and durability for all your
          adventures.
        </p>
        <Button label='View Detail'/>
      </div>
      <div className="flex-1 flex justify-center">

      <img src={shoe8} alt="Shoe Image" className="object-contain hover:scale-105 transition-all duration-500" width={570} height={522} />
      </div>
      
    </section>
  )
}

export default SuperQuality
