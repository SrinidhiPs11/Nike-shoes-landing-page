import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"
const SpecialOffers = () => {
  return (
    <section className="flex justify-start items-center max-xl:flex-col-reverse gap-10 max-container">
   <div className="flex-1 justify-center">
    <img src={offer} width={773} height={687} className="object-contain w-full" />
   </div>
    <div className=" flex flex-1 flex-col">
    <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>Special <span className='text-coral-red inline-block mt-3'>
      Offers </span>
    </h2>
    <p className=' mt-4 lg:max-w-lg info-text my-5'>
          Elevate your style with our special offers on the latest shoe
          collection. Indulge in premium quality footwear at unbeatable prices,
          crafted with meticulous attention to detail and designed to make a
          statement. Don't miss this opportunity to upgrade your wardrobe and
          step out in confidence.
    </p>
    <Button label='Shop now' iconURL={arrowRight}/>
  </div>
  <div className="flex-1 flex justify-center">

  </div>
  </section>
  )
}

export default SpecialOffers
