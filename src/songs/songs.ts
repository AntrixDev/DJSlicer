import { generateBeatmaps } from "./BeatmapCalculator";

export interface Song {
  id: number;
  title: string;
  singer: string;
  mp3: any;
  image: any;
  difficulty: string;
  tempo: number;
  offset: number;
  end: number;
  beatmaps: {
    left: number[];
    right: number[];
  };
}

const songs: Song[] = [
  {
    id: 1,
    title: 'Surrender',
    singer: 'Julien Schwarz',
    mp3: require('./tracks/Surrender.mp3'),
    image: require('../assets/songCovers/Surrender.png'),
    difficulty: 'Easy',
    tempo: 121.28,
    offset: 0.402,
    end: 163.05,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 2,
    title: 'Seize The Day',
    singer: 'Andrey Rossi',
    mp3: require('./tracks/SeizeTheDay.mp3'),
    image: require('../assets/songCovers/SeizeTheDay.png'),
    difficulty: 'Hard',
    tempo: 62.14,
    offset: 0.414,
    end: 100.05,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 3,
    title: "You've Got Control On Me",
    singer: 'Neozoic',
    mp3: require('./tracks/YouveGotControlOnMe.mp3'),
    image: require('../assets/songCovers/YouveGotControlOnMe.png'),
    difficulty: 'Medium',
    tempo: 118.09,
    offset: 0.238,
    end: 171.36,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 4,
    title: "Jitters",
    singer: 'Yeti Music',
    mp3: require('./tracks/Jitters.mp3'),
    image: require('../assets/songCovers/Jitters.png'),
    difficulty: 'Easy',
    tempo: 122.95,
    offset: 0.258,
    end: 82.51,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 5,
    title: "Swagger",
    singer: 'Trinity',
    mp3: require('./tracks/Swagger.mp3'),
    image: require('../assets/songCovers/Swagger.png'),
    difficulty: 'Hard',
    tempo: 120.37,
    offset: 0.117, 
    end: 132,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 6,
    title: "Everything I Need",
    singer: 'Needmospace',
    mp3: require('./tracks/EverythingINeed.mp3'),
    image: require('../assets/songCovers/EverythingINeed.png'),
    difficulty: 'Medium',
    tempo: 121.44,
    offset: 0.175,
    end: 114.1,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 7,
    title: "Bass Break",
    singer: 'Moire',
    mp3: require('./tracks/BassBreak.mp3'),
    image: require('../assets/songCovers/BassBreak.png'),
    difficulty: 'Hard',
    tempo: 114.33,
    offset: 0.131,
    end: 121.05,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 8,
    title: "Sun Shine Down",
    singer: 'All Good Folks',
    mp3: require('./tracks/SunShineDown.mp3'),
    image: require('../assets/songCovers/SunShineDown.png'),
    difficulty: 'Easy',
    tempo: 63.15,
    offset: 0.552,
    end: 125.76,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 9,
    title: "Body Language",
    singer: 'Sky Gienger',
    mp3: require('./tracks/BodyLanguage.mp3'),
    image: require('../assets/songCovers/BodyLanguage.png'),
    difficulty: 'Easy',
    tempo: 94.25,
    offset: 0.429,
    end: 155,
    beatmaps: {
      left: [],
      right: [],
    },
  },
  {
    id: 10,
    title: "Miami Vintage",
    singer: 'Sonda',
    mp3: require('./tracks/MiamiVintage.mp3'),
    image: require('../assets/songCovers/MiamiVintage.png'),
    difficulty: 'Easy',
    tempo: 90.26,
    offset: 10.5,
    end: 173.53,
    beatmaps: {
      left: [],
      right: [],
    },
  },
];

songs.forEach(song => {
  const { left, right } = generateBeatmaps({
    tempo: song.tempo,
    offset: song.offset,
    end: song.end,
  });

  song.beatmaps.left = left;
  song.beatmaps.right = right;
});

export default songs;
