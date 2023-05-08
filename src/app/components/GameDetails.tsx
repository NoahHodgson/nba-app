import { GamePlayer } from "../classes/APIResponses";

const fetchDetails = async (id: number) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${id}`);
    const game = await response.json();
    return game.data;
}


type TRProps = {
    incomingPlayers: GamePlayer[];
}

const TableRows = async (props: TRProps) => {
    const { incomingPlayers } = props;
    return(
        <>
        {
        incomingPlayers.map((player:GamePlayer)=>{
        if(player.min !== '00'){
            return(
                <tr>
                    <td>{player.player.first_name + ' ' + player.player.last_name}</td>
                    <td>{player.team.abbreviation}</td>
                    <td>{player.player.position}</td>
                    <th>{player.min}</th>
                    <td>{player.pts}</td>
                    <td>{player.ast}</td>
                    <td>{player.reb}</td>
                    <td>{player.blk}</td>
                    <td>{player.stl}</td>
                </tr>
            );
        }
})
        }
        </>
    );
}

type Props = {
    id: number,
}

const GameDetails = async (props:Props) => {
    const { id } = props;
    const players = await fetchDetails(id);

    return(
        <>
        <label  htmlFor={`my-modal-${id}`} className="btn block w-8/12 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 normal-case">Boxscore</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
        <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
        <label className="modal-box w-11/12 max-w-xl" htmlFor="">
            <div className="flex justify-center">
                <h2 className="text-lg font-bold">Stats</h2>
            </div>
            <table className="table-auto">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Position</th>
                    <th>Minutes</th>
                    <th>Points</th>
                    <th>Assists</th>
                    <th>Rebounds</th>
                    <th>Blocks</th>
                    <th>Steals</th>
                    </tr>
                </thead>
                <tbody>
                    {/* @ts-expect-error Server Component */}
                    {players.length > 0 ? <TableRows incomingPlayers={players} /> : <></>}
                </tbody>
            </table>
        </label>
        </label>
        </>
    )
}

export default GameDetails;