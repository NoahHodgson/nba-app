import GameDetails from "../components/GameDetails";
import { GameResponse } from "../classes/APIResponses";

type Props={
    gameStats:GameResponse;
}

const GameComp = async (props: Props)=>{
    const {gameStats} = props
    return(
        <div className="mx-auto my-2 max-w-md rounded overflow-hidden shadow-md text-xs">
            <div className="flex bg-gray-400 px-2 py-2">
                <div className="w-5/12 text-gray-700 text-left text-red-700">
                    {gameStats.time !== null ? <>{gameStats.time} - {gameStats.period}</> :
                        <>Starts at {new Date(gameStats.status).getHours()}:{new Date(gameStats.status).getMinutes()}</>
                    }
                </div>
                <div className="w-1/6 text-gray-700 text-right">{gameStats.date.split('T')[0]}</div>
            </div>

            <div className="flex px-2 py-2 items-center bg-gray-200">
                <div className="w-5/12 flex">
                <img className="w-6 sm:w-10 mr-2 self-center" alt="away-logo" src={`https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/${gameStats.visitor_team.abbreviation.toLowerCase()}.png&h=70&w=70`} />
                <div className="flex flex-col">
                    <p className="text-sm text-black font-bold">{gameStats.visitor_team.full_name}</p>
                    <p className="hidden sm:block text-gray-600">(DO LATER)</p>
                </div>
                </div>
                <p className="w-2/6 text-lg sm:text-xl text-black font-bold text-right">{gameStats.visitor_team_score}</p>
            </div>

            <div className="flex px-2 py-2 items-center bg-gray-200">
                <div className="w-5/12 flex">
                <img className="w-6 sm:w-10 mr-2 self-center" alt="home-logo" src={`https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/${gameStats.home_team.abbreviation.toLowerCase()}.png&h=70&w=70`} />
                <div className="flex flex-col">
                    <p className="text-sm text-black font-bold">{gameStats.home_team.full_name}</p>
                    <p className="hidden sm:block text-gray-600">(DO LATER)</p>
                </div>
                </div>
                <p className="w-2/6 text-lg sm:text-xl text-black font-bold text-right">{gameStats.home_team_score}</p>
            </div>
            <div className="flex flex-col px-2 py-2 items-center content-center bg-gray-200">
                {/* @ts-expect-error Server Component */}
                {gameStats.id !== undefined ? <GameDetails id={ gameStats.id } /> : <></>}
            </div>
            </div>)
};

export default GameComp;