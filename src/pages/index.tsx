import type { NextPage } from 'next';
import Animated from 'src/components/Animated';

const Home: NextPage = () => {
  return (
    <Animated.FadeUp>
      <h1 className="text-3xl">App</h1>
    </Animated.FadeUp>
  );
};

export default Home;
