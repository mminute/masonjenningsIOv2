export const VIDEO_GAME = 'videoGame';
export const BOARD_GAME = 'boardGame';

export const RECOMMEND = {
  yes: 1,
  neutral: 0,
  no: -1,
};

export const PLATFORM = {
  ps4: 'PS4',
  steam: 'Steam',
  steamWindows: 'Steam- Windows',
  switch: 'Nintendo Switch',
  playstation: 'PlayStation',
  c64: 'Commodore 64',
  windows3dot1: 'Windows 3.1',
  windows95: 'Windows 95',
}

class Game {
  constructor({
    completed,
    link,
    notes,
    owned,
    platform,
    played,
    recommended,
    title,
    type,
    vr,
  }) {
    this.completed = completed || false;
    this.link = link;
    this.notes = notes;
    this.owned = owned || false;
    this.platform = platform;
    this.played = played || false;
    this.recommended = recommended || RECOMMEND.neutral;
    this.title = title;
    this.type = type;
    this.vr = vr || false;
  }
}

const ofInterest = [
  new Game({
    title: 'The Grizzled: Armistice Edition',
    type: BOARD_GAME,
    link:
      'https://boardgamegeek.com/boardgame/231327/grizzled-armistice-edition',
  }),
];

const played = [
  new Game({
    title: 'Chex Quest',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Chex_Quest',
    notes: 'Got this in a cereal box as a kid and loved it!',
    played: true,
    owned: false,
    platform: PLATFORM.windows3dot1,
  }),
  new Game({
    title: 'Heavy Gear',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Heavy_Gear_(video_game)',
    notes: 'Played a lot of this 1st person mech battler as a kid',
    played: true,
    owned: false,
    platform: PLATFORM.windows95,
  }),
  new Game({
    title: 'Heavy Gear II',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Heavy_Gear_II',
    notes: "Didn't like the sequel nearly as much as the first game",
    played: true,
    owned: false,
    platform: PLATFORM.windows95,
  }),
  new Game({
    title: 'Command & Conquer',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Command_%26_Conquer',
    notes:
      'My favorite real time strategy game as a kid. Bought the remastered game on Steam',
    played: true,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.windows95,
  }),
  new Game({
    title: 'Command & Conquer: Red Alert',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Command_%26_Conquer',
    played: true,
    owned: false,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.windows95,
  }),
  new Game({
    title: 'Portal 2',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Portal_2',
    notes:
      'Loved this game! Was so excited to play it that I even bought a new laptop',
    played: true,
    owned: false,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.steam
  }),
  new Game({
    title: 'SimCity 2000',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/SimCity_2000',
    played: true,
    owned: false,
    platform: PLATFORM.windows95,
  }),
  new Game({
    title: 'Sigma 7',
    type: VIDEO_GAME,
    link: 'https://www.myabandonware.com/game/sigma-7-5w7',
    notes: 'One of the first video games I ever played. Commodore 64',
    played: true,
    owned: false,
    platform: PLATFORM.c64,
  }),
  new Game({
    title: "Nemo's War",
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/187617/nemos-war-second-edition',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Tokyo Highway',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/261901/tokyo-highway',
    played: true,
    owned: true,
    completed: true,
  }),
  new Game({
    title: 'King of Tokyo',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/70323/king-tokyo',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Leaving Earth',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/173064/leaving-earth',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Leaving Earth: Outer Planets',
    type: BOARD_GAME,
    link:
      'https://boardgamegeek.com/boardgame/190924/leaving-earth-outer-planets',
    played: false,
    owned: true,
  }),
  new Game({
    title: 'Leaving Earth: Stations',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/227951/leaving-earth-stations',
    played: false,
    owned: true,
  }),
  new Game({
    title: 'Leaving Earth: Mercury',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/182732/leaving-earth-mercury',
    played: true,
    owned: true,
  }),
  new Game({
    title: 'Pandemic',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/30549/pandemic',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Star Wars: X-Wing Miniatures Game',
    type: BOARD_GAME,
    link:
      'https://boardgamegeek.com/boardgame/103885/star-wars-x-wing-miniatures-game',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Star Trek: Attack Wing',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/139771/star-trek-attack-wing',
    played: true,
    owned: true,
  }),
  new Game({
    title: 'BioShock',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/BioShock',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'BioShock 2',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/BioShock_2',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'BioShock Infinite',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/BioShock_Infinite',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Metal Gear Solid',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Metal_Gear_Solid_(1998_video_game)',
    played: true,
    owned: false,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.playstation,
  }),
  new Game({
    title: 'Gran Turismo',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Gran_Turismo_(1997_video_game)',
    played: true,
    owned: false,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.playstation,
  }),
  new Game({
    title: 'JetMoto',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Jet_Moto',
    played: true,
    owned: false,
    completed: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.playstation,
  }),
  new Game({
    title: 'Star Trek: Bridge Crew',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Star_Trek:_Bridge_Crew',
    played: true,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Gran Turismo Sport',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Gran_Turismo_Sport',
    played: true,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Ultrawings VR',
    type: VIDEO_GAME,
    link: 'https://ultrawingsgame.com/',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Trackmania Turbo',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/TrackMania',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Iron Man VR',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Iron_Man_VR',
    played: true,
    owned: true,
    recommended: RECOMMEND.no,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Need for Speed Rivals',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Need_for_Speed_Rivals',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Redout',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Redout_(video_game)',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Project CARS',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Project_CARS_(video_game)',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Horizon Zero Dawn',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Horizon_Zero_Dawn',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'F1 2019',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/F1_2019_(video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'F1 2017',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/F1_2017_(video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Wolfenstein II: The New Colossus',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Wolfenstein_II:_The_New_Colossus',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Star Wars Battlefront',
    type: VIDEO_GAME,
    link:
      'https://en.wikipedia.org/wiki/Star_Wars_Battlefront_(2015_video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Space Alert',
    type: BOARD_GAME,
    link: 'https://en.wikipedia.org/wiki/Space_Alert',
    played: false,
    owned: true,
  }),
  new Game({
    title: 'Exit: The Game- The Abandoned Cabin',
    type: BOARD_GAME,
    link:
      'https://boardgamegeek.com/boardgame/203420/exit-game-abandoned-cabin',
    played: true,
    owned: true,
  }),
  new Game({
    title: 'Forbidden Island',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/65244/forbidden-island',
    played: true,
    owned: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Star Trek Fluxx',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/246531/star-trek-fluxx',
    played: true,
    owned: true,
    completed: true,
  }),
  new Game({
    title: 'Star Wars: Legion',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/233571/star-wars-legion',
    played: true,
  }),
  new Game({
    title: 'Star Wars: Outer Rim',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/271896/star-wars-outer-rim',
    played: true,
  }),
  new Game({
    title: 'Scythe',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/169786/scythe',
    played: true,
  }),
  new Game({
    title: 'Flamme Rouge',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/199478/flamme-rouge',
    played: true,
    notes: 'Played on table top simulator',
  }),
  new Game({
    title: 'The Networks',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/72321/networks',
    played: true,
  }),
  new Game({
    title: 'Codenames',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/178900/codenames',
    played: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Sequence',
    type: BOARD_GAME,
    link: 'https://boardgamegeek.com/boardgame/2375/sequence',
    played: true,
    completed: true,
    recommended: RECOMMEND.yes,
  }),
  new Game({
    title: 'Subnautica',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Subnautica',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Subnautica: Below Zero',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Subnautica:_Below_Zero',
    played: false,
    owned: true,
    platform: PLATFORM.switch,
  }),
  new Game({
    title: 'God of War',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Just Dance 2019',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Just_Dance_2019',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Just Dance 2020',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Just_Dance_2020',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Never Alone',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Never_Alone_(video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Lovers in a Dangerous Spacetime',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Lovers_in_a_Dangerous_Spacetime',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Sonic Mania',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Sonic_Mania',
    played: true,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'The Last of Us Remastered',
    type: VIDEO_GAME,
    link:
      'https://en.wikipedia.org/wiki/The_Last_of_Us#The_Last_of_Us_Remastered',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Eagle Flight',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Eagle_Flight',
    played: true,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Shuttle Commander',
    type: VIDEO_GAME,
    link: 'https://vrgamecritic.com/game/shuttle-commander',
    played: true,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Apollo 11 VR',
    type: VIDEO_GAME,
    link: 'https://vrgamecritic.com/game/apollo-11-vr',
    played: true,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Superhot VR',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Superhot',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Driveclub VR',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Driveclub',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Overcooked',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Overcooked',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Beat Saber',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Beat_Saber',
    played: true,
    owned: true,
    recommended: RECOMMEND.yes,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Abzu',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Abz%C3%BB',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Paper Beast',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Paper_Beast',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Moss',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Moss_(video_game)',
    played: false,
    owned: true,
    vr: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Rez Infinite',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Rez#Rez_Infinite',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'The Witness',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/The_Witness_(2016_video_game)',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Thumper',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Thumper_(video_game)',
    played: false,
    owned: true,
    platform: PLATFORM.ps4,
  }),
  new Game({
    title: 'Bridge Constructor Portal',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Bridge_Constructor_Portal',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Castle Crashers',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Castle_Crashers',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Circuit Superstars',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Circuit_Superstars',
    played: true,
    owned: true,
    platform: PLATFORM.steamWindows,
  }),
  new Game({
    title: 'Command & Conquer Remastered',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Command_%26_Conquer_Remastered_Collection',
    played: true,
    owned: true,
    platform: PLATFORM.steamWindows,
  }),
  new Game({
    title: 'Cuphead',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Cuphead',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
    notes: 'SO HARD!'
  }),
  new Game({
    title: 'Defect',
    type: VIDEO_GAME,
    link: 'https://store.steampowered.com/app/352370/Defect/',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Euro Truck Simulator 2',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Euro_Truck_Simulator_2',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'F1 2013',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/F1_2013_(video_game)',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'For the King',
    type: VIDEO_GAME,
    link: 'https://store.steampowered.com/app/527230/For_The_King/',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Half-Life 2: Deathmatch',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Half-Life_(video_game)#Third-party_mods',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Motorsport Manager',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Motorsport_Manager',
    played: true,
    owned: true,
    platform: PLATFORM.steam,
  }),
  new Game({
    title: 'Mudrunner',
    type: VIDEO_GAME,
    link: 'https://en.wikipedia.org/wiki/Mudrunner',
    played: true,
    owned: true,
    platform: PLATFORM.steamWindows,
  }),
];

export default played;
