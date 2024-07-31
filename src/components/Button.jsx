
const Button = ({label,iconURL}) => {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-red-500 hover:scale-105 duration-300"> 
        {label}
        {iconURL ? <img src = {iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5" />:<></>}
      </button>
    </div>
  )
}

export default Button
