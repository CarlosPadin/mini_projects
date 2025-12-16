const PrincipalContent = () => {
  return (
    <div className="bg-[#17494c]">
      <main className="flex gap-20 justify-between items-center max-w-4xl mx-auto text-white py-20">
        <div className="w-1/2">
          <h2 className="text-7xl font-bold leading-[1.4]">
            <span className="text-[#cc9fb6]">
              Champions
            </span>
            <br />{" "}
            <span className="text-[#fed6aa]">of</span>{" "}
            <span className="text-[#00a655] border-b-4 border-b-white">
              customer
            </span>
            <br />
            <span className="text-[#31aabd] border-b-4 border-b-white">
              service
            </span>
          </h2>
        </div>

        <div className="w-1/2">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Repellendus ex ad debitis
              quod eos, delectus illum incidunt saepe
              corporis sit Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet.
            </p>
          </div>

          <div className="flex mt-5 gap-10">
            <button className="bg-[#e4f0d3] p-3 text-[#17494c] font-bold">
              Free Trial
            </button>
            <button className="border-2 border-white p-3">
              View Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrincipalContent;
