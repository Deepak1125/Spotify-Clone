let shuffle = document.querySelector(".player_icons #pi1");
shuffle.addEventListener("click", () => {
    let imgSrc1 = "../photos/player_shuffle.png";
    let imgSrc2 = "../photos/player_icon1.png";
    if (shuffle.src.includes("player_shuffle.png")) {
        shuffle.src = imgSrc2;
    } else {
        shuffle.src = imgSrc1;
    }
});

let pause = document.querySelector(".player_icons #pi3");
pause.addEventListener("click", () => {
    let imgSrc1 = "../photos/player_pause.png";
    let imgSrc2 = "../photos/player_icon3.png";
    if (pause.src.includes("player_pause.png")) {
        pause.src = imgSrc2;
    } else {
        pause.src = imgSrc1;
    }
});

let repeat = document.querySelector(".player_icons #pi5");
repeat.addEventListener("click", () => {
    let imgSrc1 = "../photos/player_icon5.png";
    let imgSrc2 = "../photos/repeat_single.png";
    if (repeat.src.includes("repeat_single.png")) {
        repeat.src = imgSrc1;
    } else {
        repeat.src = imgSrc2;
    }
});

let heart = document.querySelector(".control-icon #ai1");
heart.addEventListener("click", () => {
    let imgSrc1 = "../photos/red_heart.png";
    let imgSrc2 = "../photos/album_icon1.png";
    if (heart.src.includes("red_heart.png")) {
        heart.src = imgSrc2;
    } else {
        heart.src = imgSrc1;
    }
});
let arr = ["../photos/card1img.jpeg", "../photos/card2img.jpeg", "../photos/card3img.jpeg", "../photos/card4img.jpeg", "../photos/card5img.jpeg", "../photos/card6img.jpeg"];
let arr1 =["Top 50 GLOBAL SONGS","Trending TOP 20 Songs","Eluka Majaka","Voice of Thalapathy Vijay","Top Songs Global","Top Songs India"];
let arr2 = ["chill beats,lofi vibes,new tracks every","Releases, #Trending#Hindi Songs","2015 • Ballepalli Mohan","A playlist of all the pan world hits by the most talented artist, Thalapathy Vijay.","Our weekly update of the most played tracks right now - Global."," Our weekly update of the most played tracks right now - Inida."];
let music_player = document.querySelector(".music-bar");
let img_change = music_player.querySelector("img");
function checksrc(){
    let imgsrc = img_change.getAttribute("src");
    for (let index = 0; index < arr.length; index++) {
        if (imgsrc === arr[index]) {
            return index;
        }
    }
}
let textchg1 = document.querySelector(".title1 .a1");
let textchg2 = document.querySelector(".title1 .a2");
let backward = document.querySelector(".player_icons #pi2");
let forward = document.querySelector(".player_icons #pi4");
function frwd(){
    let idx = (checksrc()+1)%6;
    img_change.setAttribute("src",arr[idx]);
    textchg1.innerHTML = arr1[idx];
    textchg2.innerHTML = arr2[idx];
}
function bckwd(){
    let idx = (checksrc()-1)%6;
    img_change.setAttribute("src",arr[idx]);
    tc1 = arr[idx];
    tc2 = arr[idx];
}
forward.addEventListener("click", frwd);
backward.addEventListener("click", bckwd);
