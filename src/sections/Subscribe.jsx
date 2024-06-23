import {Button} from "../components"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading--[64px] font-palanquin font-bold text-center">
        Sign up for <span className=" text-coral-red"> Updates </span> & Newsletter 
      </h3>
      <div className="lg:max-w-[50%] w-full flex justify-between items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full ">
        <input type="text" placeholder="Subscribe@nike.com" className="input p-2.5" />
      <div className="flex max-sm:justify-center items-center max-sm:w-full">
      <Button label={"Sign Up"} />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
