import React from 'react';
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img:Img1,
        title: "Casual Wear",
        description: "Lorem jhbdcchv jachjbc cdhjvewg chjvhj jcbcgub",
    },
     {
        id: 2,
        img:Img2,
        title: "Printed Shirt",
        description: "Lorem jhbdcchv jachjbc cdhjvewg chjvhj jcbcgub",
    },
     {
        id: 3,
        img:Img3,
        title: "Women Shirt",
        description: "Lorem jhbdcchv jachjbc cdhjvewg chjvhj jcbcgub",
    },
    
];

export const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="container">
        <div className="text-left mg-24">
            <p data-aos="fade-up" className="text-sm text-primary">
                Top Rated products for you

            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
                Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
               Lorem hch shbssbja hjbshbsch hsbhbs adjhvu ascvsh gsgs saif gadsgbh vssv i?
             
            </p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data)=> (
                        <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                            

                        </div>
                    ))}

                </div>
            </div>

        </div>
    </div>
  )
};
