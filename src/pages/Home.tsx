const Home = () => {
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-20 lg:py-40">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Join our ever-growing community of over 300,000 coding
            enthusiasts!&nbsp;&nbsp;
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connect, Learn and Share with Snippit
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A thriving community-driven platform designed for developers to
            share and explore code from diverse programming domains. Discover an
            extensive collection of code snippets contributed by talented
            developers worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/sign-in"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
