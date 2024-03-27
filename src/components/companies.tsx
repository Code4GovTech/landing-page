// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import {companiesData} from "../constants/index"
const Companies = () => {
  return (
    <div className="impact py-20">
      <h1 className="text-secondary px-5 md:px-0 text-center text-[24px] md:text-[50px] font-bold pb-2">
        Project Partners
      </h1>
      <div className="container mx-auto w-[30vw] pb-10 md:pb-16">
        <img src="/images/separator.png" />
      </div>
      <div className="px-5 md:px-0 grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-5 container mx-auto">
        {/* <img src="/images/organisations/avanti.png" />
        <img src="/images/organisations/dhiway.png" />
        <img src="/images/organisations/digital-green.png" />
        <img src="/images/organisations/egov.png" />
        <img src="/images/organisations/ek-step.png" />
        <img src="/images/organisations/fide.png" />
        <img src="/images/organisations/meity.png" />
        <img src="/images/organisations/nha.png" />
        <img src="/images/organisations/reap-benefit.png" />
        <img src="/images/organisations/sahaj.png" />
        <img src="/images/organisations/samagra-x.png" />
        <img src="/images/organisations/samanvay.png" />
        <img src="/images/organisations/sanketika.png" />
        <img src="/images/organisations/shikshalokam.png" />
        <img src="/images/organisations/tarento.png" />
        <img src="/images/organisations/tech4dev.png" />
        <img src="/images/organisations/tekdi.png" />
        <img src="/images/organisations/thoughtworks.png" />
        <img src="/images/organisations/tibil.png" />
        <img src="/images/organisations/trustin.png" /> */}
        {companiesData.map((data, index) => (
          <img src={data.imageUrl} alt="organisations logo image" />
           ))}
      </div>
    </div>
  );
};

export default Companies;
