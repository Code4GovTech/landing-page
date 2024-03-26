const Advisors = () => {
  return (
    <div className="impact">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12">
          <h1 className="text-secondary text-2xl md:text-4xl font-bold pb-2">
            Our Advisors
          </h1>
          <div className="w-20vw md:w-full pb-5 md:pb-10">
            <img src="/images/separator.png" alt="Separator" />
          </div>
          <AdvisorCard
            image="/images/abhishek.webp"
            name="Shri Abhishek Singh (IAS)"
            designation="President & CEO NeGD, MD & CEO - Digital India Corporation & CEO Karmayogi Bharat"
            description="Abhishek Singh is an officer of the 1995 batch of IAS and has worked with the central government to create policy for leveraging technology to improve Governance. He has been the guiding force behind running major population-scale projects such as Karamyogi, DIKSHA, and DigiLocker."
          />
          <AdvisorCard
            image="/images/pramod.webp"
            name="Dr Pramod Varma"
            designation="Chief Architect of Aadhaar, CTO - EkStep Foundation & Co-Founder - FIDE.org"
            description="Pramod played an integral role in building and scaling Aadhar to 1.2 billion people in a short span of 7 years. In addition, he has also helped architect various India Stack layers scale such as eSign, Digital Locker, and Unified Payment Interface (UPI)."
          />
          <AdvisorCard
            image="/images/lobo.webp"
            name="Donald Lobo"
            designation="Founder - Open Brackets Foundation & Executive Director - Chintu Gudiya Foundation"
            description="Donald has been actively working to empower NGOs and organisations to develop open-source software for the public good. His foundation's current focus is on transforming the way non-profits use tech and data via the Project Tech4Dev, Avni, and Glific initiatives."
          />
        </div>
      </div>
    </div>
  );
};

const AdvisorCard = ({ image, name, designation, description }) => {
  return (
    <div className="bg-white mx-5 md:mx-0 mt-8 py-8 px-5 md:px-6 rounded-xl border-3 border-[#B99806]">
      <img src={image} className="rounded-full mx-auto" alt={name} />
      <p className="text-2xl md:text-4xl font-bold text-secondary text-center mt-3 md:mt-5">{name}</p>
      <p className="text-lg md:text-xl font-mono-medium text-primary text-center mt-2">{designation}</p>
      <div className="w-20vw md:w-full mt-2">
        <img src="/images/separator.png" alt="Separator" />
      </div>
      <p className="text-base md:text-lg font-medium italic text-primary text-center mt-3 md:mt-5">{description}</p>
    </div>
  );
};

export default Advisors;
