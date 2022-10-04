import { FaUserFriends, FaFighterJet } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
function Instructions() {
  return (
    <div>
      <h1 className="text-3xl text-center my-4">Instructions</h1>
      <div className="grid grid-cols-3 gap-5 my-4">
        <div className="bg-gray-50 text-center p-8">
          <p className="mb-4 text-2xl">Enter two Github Users</p>
          <div>
            <FaUserFriends className="text-[120px] mx-auto text-amber-400" />
          </div>
        </div>

        <div className="bg-gray-50 text-center p-8">
          <p className="mb-4 text-2xl">Battle</p>
          <div>
            <FaFighterJet className="text-[120px] mx-auto text-slate-600" />
          </div>
        </div>

        <div className="bg-gray-50 text-center p-8">
          <p className="mb-4 text-2xl">See the winner</p>
          <div>
            <BsFillTrophyFill className="text-[120px] mx-auto text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Instructions;
