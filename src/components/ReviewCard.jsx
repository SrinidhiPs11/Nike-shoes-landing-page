import {star} from "../assets/icons";

const ReviewCard = ({imgURL,customerName, rating, feedback }) => {

  return (
  <div className="flex justify-center items-center flex-col">
    <img src={imgURL} alt="customer" className=" rounded-full w-[120px] h-[120px] object-cover" />
    <h4 className="text-2xl font-bold my-5 font-palanquin text-center ">{customerName}</h4>
    <p className="text-gray-600 font-montserrat max-w-sm text-center info-text">{feedback}</p>
    <div className="flex flex-row justify-center items-center">
    <img className="object-contain m-2" src={star} width={24} height={24}/>
    <p>({rating})</p>
    </div>



  </div>

)
  

};

export default ReviewCard;
