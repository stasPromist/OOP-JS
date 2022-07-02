
import { User } from "./user.js";
let state = true;
class Creator extends User {
    constructor(nameOfCreator, lastName) {
        super(nameOfCreator, lastName);
        this.content = [];
        this.subscribers = [];
    }
    insertNewVideo(video) {
        this.content.push(video);
        if (state) {
            this.subscribers.forEach(subscriber => subscriber.notify(video, this));
        }
        else {
            console.log("Server offline error on notify");
        }
    }
    addNewSubscriber(user) {
        this.subscribers.push(user);
    }
}


export {Creator}