import Transition from "../utils/transition";

const Home = () => {
  return (
    <Transition>
      <section className='flex items-center h-full text-center justify-center px-2 relative'>
        <h1 className='text-8xl font-bold'>Home</h1>
      </section>
    </Transition>
  );
};

export default Home;
