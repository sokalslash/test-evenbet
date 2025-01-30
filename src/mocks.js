const dataPalayerInfo = {
  userName: "LongUserName",
  avatar: "./src/assets/picture.png",
  starts: 5,
  balance: "100,500.00",
};

const dataLoader = {
  percent: 70,
};

const dataTournamentItem = [
  {
    name: "OFC Pineapple",
    nameAccentPrime: true,
    isAvailable: true,
    status: "Registering",
    tags: ["./src/assets/pin-tag.svg", "./src/assets/draw-tag.svg"],
    date: "12:00 pm, 28 July",
    players: "1000/1000",
    score: 1000000,
  },
  {
    name: "OFC Pineapple",
    isAvailable: true,
    status: "Registering",
    tags: ["./src/assets/pin-tag.svg", "./src/assets/holdem-tag.svg"],
    date: "12:00 pm, 28 July",
    players: "1/16",
    score: 100,
  },
  {
    name: "Hourly Freeroll",
    isAvailable: false,
    status: "Canceled",
    tags: [
      "./src/assets/pin-tag.svg",
      "./src/assets/pineapple-tag.svg",
      "./src/assets/time-tag.svg",
      "./src/assets/free-roll-tag.svg",
    ],
    date: "12:00 pm, 28 July",
    players: "1/10 000",
    score: 1000,
  },
  {
    name: "Rapid Tournament",
    isAvailable: false,
    status: "Canceled",
    tags: ["./src/assets/omaha-tag.svg"],
    date: "12:00 pm, 28 July",
    players: "0/0",
    score: 1000000,
  },
  {
    name: "PL Omaha Knockout",
    nameAccent: true,
    isAvailable: false,
    status: "Canceled",
    tags: ["./src/assets/nl-omaha-tag.svg", "./src/assets/rapid-tag.svg"],
    date: "12:00 pm, 28 July",
    players: "0/0",
    score: 1000000,
  },
  {
    name: "PL Omaha Knockout",
    isAvailable: true,
    status: "OFC Pineapple",
    tags: ["./src/assets/draw-tag.svg"],
    date: "12:00 pm, 28 July",
    players: "1000/1000",
    score: 1000000,
  },
];

export { dataPalayerInfo, dataLoader, dataTournamentItem };
