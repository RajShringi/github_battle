import { FaUserAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";
import NotFound from "./NotFound";

function Repos({ repos }) {
  if (repos.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {repos.map((repo, index) => {
        return (
          <div
            className="text-center bg-gray-50 dark:bg-zinc-600 dark:text-white p-4"
            key={repo.id}
          >
            <h2 className="text-4xl font-light">#{index + 1}</h2>
            <div className="my-6">
              <img
                className="h-[150px] w-full object-contain "
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
              />
            </div>
            <a className="text-xl font-bold text-rose-500" href={repo.html_url}>
              {repo.name}
            </a>
            <div>
              <div className="flex items-center  space-x-4 my-2">
                <FaUserAlt className="text-amber-400 text-2xl" />
                <p className="text-lg font-semibold">{repo.name}</p>
              </div>

              <div className="flex items-center  space-x-4 my-2">
                <AiFillStar className="text-amber-200 text-2xl" />
                <p className="text-lg font-medium">
                  {repo.stargazers_count} stars
                </p>
              </div>

              <div className="flex items-center  space-x-4 my-2">
                <AiOutlineFork className="text-sky-400 text-2xl" />
                <p className="text-lg font-medium">{repo.forks} forks</p>
              </div>

              <div className="flex items-center  space-x-4 my-2">
                <IoWarningOutline className="text-rose-400 text-2xl" />
                <p className="text-lg font-medium">
                  {repo.open_issues} open issues
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Repos;
