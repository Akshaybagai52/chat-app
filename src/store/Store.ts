export type userId = string

export interface Chat {
    id: string;
    userId: string;
    name: string;
    message: string;
    upvotes: userId[];
}

export abstract class Store {
    constructor() {

    }
    initRoom(roomId:string) {

    }
    getChats(roomId:string, limit:number, offset: number) {

    }
    addChat(userId: userId,room:string, name:string, message:string) {

    }
}