import { FaUserAlt, FaUsers, FaUserFriends, FaCode } from "react-icons/fa";

function Player({ player, score, result }) {
  return (
    <div className="p-4 basis-[24%] bg-gray-50 dark:text-white dark:bg-zinc-600">
      <div className="text-center">
        <h1 className="text-3xl text-center mb-4 font-light">{result}</h1>
        <img
          className="w-full h-[200px] object-contain"
          src={player.avatar_url}
          alt={player.name}
        />
        <h5 className="my-4 text-sm font-bold">Score: {score}</h5>
        <h2 className="my-6 text-xl text-rose-600 font-bold">{player.login}</h2>
      </div>
      <div>
        <div className="flex items-center  space-x-4 my-2">
          <FaUserAlt className="text-rose-400 text-2xl" />
          <p className="text-lg font-semibold">{player.name}</p>
        </div>

        <div className="flex items-center  space-x-4 my-2">
          <FaUsers className="text-sky-400 text-2xl" />
          <p className="text-lg font-medium">{player.followers} followers</p>
        </div>

        <div className="flex items-center  space-x-4 my-2">
          <FaUserFriends className="text-green-400 text-2xl" />
          <p className="text-lg font-medium">{player.following} following</p>
        </div>

        <div className="flex items-center  space-x-4 my-2">
          <FaCode className="text-zinc-600 dark:text-zinc-400 text-2xl" />
          <p className="text-lg font-medium">
            {player.public_repos} repositories
          </p>
        </div>
      </div>
    </div>
  );
}
export default Player;
