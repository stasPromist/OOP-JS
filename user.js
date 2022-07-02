

let id = 0;
let state = true;
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
        id++;
        this.id = id;
        this.myCreators = [];
    }
    joinCreator(creator) {
        if (state) {
            let found = false;
            this.myCreators.forEach(curCreator => {
                if (curCreator.id === creator.id)
                    found = true;
            });
            if (!found) {
                this.myCreators.push(creator);
                creator.addNewSubscriber(this);
                console.log(`${this.fullName}  "subscribed to " ${creator.fullName}`);
            }
            else {
                console.log("Уже подписал. Чё надо?🔥");
            }
        } else {
            console.log("Server offline error on join");
        }
    }
    notify(video, creator) {
        console.log(`${this.id}  ${creator.fullName}  "added new vidos" ${video.title}`);
    }

}

export { User }



