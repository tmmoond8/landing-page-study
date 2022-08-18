import type { NextPage } from 'next';
import Animated from 'src/components/Animated';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const Hovered = motion.div;
  return (
    <>
      <Animated.FadeUp>
        <h1 className="text-3xl">App</h1>
      </Animated.FadeUp>
      <Animated.Example />
      <Animated.Pendulum>down</Animated.Pendulum>
      <Animated.FadeUp>
        <Peoples />
      </Animated.FadeUp>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeLeft>
        <Card />
      </Animated.FadeLeft>
      <Animated.FadeRight>
        <Card />
      </Animated.FadeRight>
      <Animated.FadeRight>
        <Card />
      </Animated.FadeRight>
      <Hovered whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Animated.FadeRight>
          <Card />
        </Animated.FadeRight>
      </Hovered>

      <Animated.FadeRight>
        <Card />
      </Animated.FadeRight>
    </>
  );
};

export default Home;

function Peoples() {
  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Card() {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://tailwindcss.com/img/erin-lindford.jpg"
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Erin Lindford</p>
          <p className="text-slate-500 font-medium">Product Engineer</p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}
