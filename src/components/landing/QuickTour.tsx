import Image from "next/image";
import imageTour from '@/assets/images/tour.png'

const QuickTour = () => {
  return (
    <section className="bg-[#e4f0d3]">
      <div className="max-w-4xl mx-auto text-center py-10">
        <h3 className="text-[#03363e] text-4xl font-bold mb-5">
          Take a quick tour
        </h3>
        <p className="text-[#03363e] text-sm max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eius aliquid nihil earum eos.
          Eligendi numquam doloremque voluptatem corporis
          ipsa, perspiciatis architecto deserunt consequu
          nobis sapiente?
        </p>
        <Image className="mx-auto my-16" src={imageTour} alt="tour" width={500} height={500} />
      </div>
    </section>
  );
};

export default QuickTour;
