import { MagicRoom } from "../Room/MagicRoom";
import { Room } from "../Room/Room";
import { MazeGame } from "./MazeGame";

export class MagicMazeGame extends MazeGame{

	public makeRoom(): Room{
		return new MagicRoom();
	}
}