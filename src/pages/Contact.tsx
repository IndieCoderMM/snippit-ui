import { Link } from 'react-router-dom';

const people = [
  {
    name: 'Prantosh Biswas',
    role: 'Full-stack Developer',
    bio: 'UI/UX wizard building amazing apps. From front-end to back-end, he crafts code into seamless experiences.',
    imageUrl: 'https://avatars.githubusercontent.com/u/93311467?v=4',
    github: 'https://github.com/PrantoshB',
  },
  {
    name: 'Hein Thant',
    role: 'Full-stack Developer',
    bio: 'Fearless code warrior fueled by caffeine. Debugs while sleeping and dreams of optimized algorithms.',
    imageUrl: 'https://avatars.githubusercontent.com/u/72640048?v=4',
    github: 'https://github.com/IndieCoderMM',
  },
];

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Brilliant Developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These are the talented developers who brought this platform to life.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-start gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:underline">
                    <Link to={person.github}>{person.name}</Link>
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <p className="text-sm">{person.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
