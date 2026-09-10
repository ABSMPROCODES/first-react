import image from '../assets/bg-shadow.png'
import bannerImage from '../assets/banner-main.png'

const Banner = () => {
  return (
<div className="bg-black min-h-[500px] container mx-auto rounded-[25px] my-20 relative overflow-hidden flex justify-center items-center">
    <img src={image} alt="Banner" className="w-full h-full absolute inset-0 object-cover rounded-[25px]" />
  <div>
  <img src={bannerImage} alt="Banner" className="relative z-10 mx-auto block size-[200]" />
  <h1 className="relative z-10 text-white text-4xl font-bold text-center mb-4 my-[10px] pt-[40px]">
    Assemble Your Ultimate Dream 11 Cricket Team
  </h1>
  <p className="relative z-10 text-[#FFFFFF]/70 text-lg text-center">
    Beyond Boundaries Beyond Limits
  </p>
  <button className="bg-gradient-to-b from-[#E2FF3B] to-[#B3D610] text-black font-bold px-6 py-2.5 rounded-xl border-4 border-[#1E1E1E] ring-2 ring-[#D9F929] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.3)] hover:brightness-105 active:scale-95 transition-all justify-center items-center flex gap-2 mt-4 mx-auto block">
  Claim Free Credit
</button>

</div>

</div>
  );
};

export default Banner;    