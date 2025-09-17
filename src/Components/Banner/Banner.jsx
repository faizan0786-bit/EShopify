import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="min-h-[680px] flex justify-items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in">
            <img
              className="max-w-[450px] h-[400px] w-full mx-auto object-cover my-4"
              src={BannerImg}
              alt="Banner img"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-300 tracking-wide leading-5"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              fugiat odio pariatur impedit sint. Dolorem autem suscipit vitae.
              Quibusdam, amet distinctio, illum deleniti laborum natus ut rem
              veritatis autem non, nobis ipsam.
            </p>
            <div className="flex flex-cold gap-4">
              <div data-aos="fade-up" className="flex item-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Product</p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Easy Payment Methods</p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Get Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
