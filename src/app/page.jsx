import Image from 'next/image';

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
    {/* Image Section */}
    <div className="h-1/2 relative lg:h-full lg:w-1/2 z-40">
      <Image src="/hero.png" alt="Molham" fill className='object-contain' />
    </div>
    {/* Text section */}
    <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
      <h1 className='md:text-4xl font-bold'>Full-Stack Web Developer</h1>
      <p className='text-xs md:text-lg'>As a passionate and dedicated web developer, I am committed to continuous learning and self-improvement. I thrive in a dynamic team environment and possess strong organizational and time-management skills. With a background in teaching and voice acting, my excellent communication and interpersonal skills allow me to effectively collaborate with clients and colleagues.</p>
    
    {/* Buttons */}
    <div className='lg:w-full flex gap-8'>
      <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View my work</button>
      <button className='p-4 rounded-lg ring-1 ring-black'>Contact me</button>
    </div>
    </div>
  </div>;
};

export default Homepage;
