import React from "react";
import {communityData} from "../constants/index"
const CommunityPartners = () => {
  return (
    <div className="home">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="h-100 flex flex-col justify-center items-center cols-2">
          {/* <h1 className="text-secondary text-[24px] md:text-[50px] font-bold pb-2">
            Impact
          </h1>
          <div className="container mx-auto w-[20vw] pb-10 md:pb-16">
            <img src="/images/separator.png" />
          </div>
          <p className="mb-4 font-mono-medium text-white xl:px-24 text-center text-[16px] md:text-[20px] ">
            C4GT has conducted two rounds of Dedicated Mentoring Program (DMP)
            since 2022 where selected students and working professionals get an
            opportunity to contribute to critical tech building blocks with the
            guidance of a dedicated mentor. They work closely with DPG builder
            and adopter organizations on real world problem statements that have
            a population scale social impact.
          </p>
          <p className="mt-10 font-mono-medium text-white xl:px-24 text-center text-[16px] md:text-[22px] ">
            Here is a glimpse of the program from 2022 & 2023!
          </p> */}
          {/* <div className="px-5 md:px-0 grid grid-cols-1 md:grid md:grid-cols-5 gap-12 container mx-auto">
            <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
              <img
                src="/images/DPGA.svg"
                className="self-center h-100 md:mx-10"
              />
            </div>
            <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
              <img src="/images/Github.png" className="self-center h-100" />
            </div>
            <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
              <img src="/images/oni.jpg" className="self-center h-100" />
            </div>
            <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
              <img src="/images/bmgf.png" alt="image bmgf"className="self-center h-100" />
            </div>
            <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
              <img src="/images/Samagra.png"  alt="Image"className="self-center h-100" />
            </div>
          </div> */}
          {/* Modified code above code by Lahu19 */}
          <div className="px-5 md:px-0 grid grid-cols-1 md:grid md:grid-cols-5 gap-12 container mx-auto">
          {communityData.map((card, index) => (
                <div className="bg-white px-4 py-4 h-100 flex justify-center items-center">
                  <img
                src={card.imageUrl}
                className="self-center h-100 md:mx-10"
              />
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartners;
