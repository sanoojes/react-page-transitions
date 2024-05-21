const NavBar = () => {
  return (
    <nav className='flex h-16 w-full bg-[#6aa082] border border-neutral-50/30 items-center justify-between px-4 absolute z-10'>
      <h1 className='font-bold text-xl '>Simple Page Transition</h1>
      <section className='space-x-2'>
        <a href='./'>Home</a>
        <a href='./about'>About</a>
        <a href='./projects'>Projects</a>
      </section>
    </nav>
  );
};

export default NavBar;
