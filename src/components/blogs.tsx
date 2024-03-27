const Blogs = () => {
  return (
    <div className="home py-20">
      <h1 className="text-secondary px-5 md:px-0 pb-2 text-center text-[24px] md:text-[50px] font-bold">
        Community Events
      </h1>
      <div className="container mx-auto w-[30vw] pb-10 md:pb-20">
        <img src="/images/separator.png"  alt="Separator line image" />
      </div>
      <div className="tech-slideshow">
        <div className="mover-1"></div>
        <div className="mover-2"></div>
      </div>
    </div>
  );
};

export default Blogs;
