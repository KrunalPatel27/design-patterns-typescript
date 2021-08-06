import { OrdinaryRoom } from "../Room/OrdinaryRoom";
import { Room } from "../Room/Room";
import { MazeGame } from "./MazeGame";

export class OrdinaryMazeGame extends MazeGame {

	public makeRoom(): Room {
		return new OrdinaryRoom();
	}

	public printRoom(){
		console.log("dummy");
	}
}