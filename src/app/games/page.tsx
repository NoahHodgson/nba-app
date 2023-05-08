import GameComp from "../components/GameComp";
import { GameResponse } from "../classes/APIResponses";

//  date voodoo
const today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
const date_string = yyyy + '-' + mm + '-' + dd
const past_date = today.setDate(today.getDate() - 2);
dd = String(today.getDate()).padStart(2, '0');
mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
yyyy = today.getFullYear();
const old_date_string = yyyy + '-' + mm + '-' + dd


async function fetchGames(){
    const response = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${old_date_string}&end_date=${date_string}`,
        { next: { revalidate: 240 } });
    const game = await response.json();
    console.log(game.data)
    return game.data;
}

const GamePage = async () => {
    const games = await fetchGames();
    return(
        <main>
            <div>
                {
                    games.map((game: GameResponse) => (
                        <div>
                            {/* @ts-expect-error Server Component */}
                            <GameComp gameStats={game as GameResponse} />
                        </div>
                    ))
                }
            </div>
        </main>
    );
}

export default GamePage;