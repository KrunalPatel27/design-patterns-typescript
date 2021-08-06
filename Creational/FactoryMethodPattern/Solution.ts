import { MagicMazeGame } from "./Game/MagicMazeGame";
import { MazeGame } from "./Game/MazeGame";
import { OrdinaryMazeGame } from "./Game/OrdinaryMazeGame";

export class Solution {
	constructor() {
		let ordinaryMazeGame: MazeGame = new OrdinaryMazeGame();
		let magicMazeGame: MazeGame = new MagicMazeGame();
	}
}