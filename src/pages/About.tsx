const links = [
  { name: 'Project repository', href: '#' },
  { name: 'Future features', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Contact us', href: '#' },
];
const stats = [
  { name: 'Snippets Shared', value: '5500+' },
  { name: 'Active Contributors', value: '1200+' },
  { name: 'Community Engagements', value: '10,000+' },
  { name: 'User Growth', value: '30%' },
];

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            Welcome to Snippit!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're on a mission to build an community where developers like you
            can freely share, team up and learn from one another. We truly
            believe in the power of open-source to drive innovation and push the
            boundaries of what's possible.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We invite you to contribute to our project. Together, let's build
            something extraordinary that benefits the entire developer
            community.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            <strong>So, come join us on this exciting journey!</strong>
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
