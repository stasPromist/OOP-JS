import { Creator } from "./creator.js";
import { User } from "./user.js";
import { Video } from "./video.js";

// let state = true;

let Stas = new User("Stas", "Byron");
let Sergey = new User("Sergey", "Klyin");
let Keren = new Creator("Keren", "Haimov");
let Olga = new User("Olga", "Imbragimov");
let Vladimir = new User("Vladimir", "Vladimir");
let Vlad = new User("Vlad", "Vlad");



console.log(Stas, Sergey, Keren);

Stas.joinCreator(Keren);
Sergey.joinCreator(Keren);
Sergey.joinCreator(Keren);


Keren.insertNewVideo(new Video("FirsVideo"));

console.log(Keren.subscribers);

// state = false;
Olga.joinCreator(Keren);
Keren.insertNewVideo(new Video("SecondVideo"));

// state = false;
Vladimir.joinCreator(Keren);
Keren.insertNewVideo(new Video("thirdVideo"));

state = false;
Vlad.joinCreator(Keren);
Keren.insertNewVideo(new Video("SecondVideo"));