import { Room } from "../Room/Room";

export abstract class MazeGame {
	public rooms: Room[]=[];

	constructor(){
		let room1: Room = this.makeRoom();
		this.rooms.push(room1);
	}

	abstract makeRoom(): Room;
}