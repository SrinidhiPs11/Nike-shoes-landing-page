import { ReviewCard } from "../components/index";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className=" text-coral-red ">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 text-center w-full">
        Our customer feedback section showcases positive experiences and
        testimonials from valued customers.
      </p>
      <div className="mt-24 flex flex-1 justify-center text-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <div key={index}>
          <ReviewCard {...review} />
        </div>))}
      </div>
    </section>
  );
};

export default CustomerReviews;
