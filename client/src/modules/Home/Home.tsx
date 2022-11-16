import { Link } from "react-router-dom";

import { routes } from "../../utils/routes";

const Home = () => {
  return (
    <div className="bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-6xl font-bold tracking-tight sm:text-center sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-400">
                  NFT
                </span>{" "}
                at your fingertips
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Explore a new way of searching and collecting data about your
                favourite NFT projects
              </p>
              <div className="mt-8 flex gap-x-4 justify-center">
                <Link to={routes.NFT_BALANCE}>
                  <button className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                    Get started
                    <span className="text-indigo-200"> &rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
