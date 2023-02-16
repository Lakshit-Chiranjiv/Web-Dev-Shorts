const movieData = [
    {
      title: "500 Days of Summer",
      emojiImgs: "👦💔👱‍♀️☀️",
      genres: ["Comedy", "Romance", "Drama"],
      itemLink: "https://www.imdb.com/title/tt1022603/",
      type: "movie",
      year: 2009,
    },
    {
      title: "2001: A Space Odyssey",
      emojiImgs: "🐵🌖👨‍🚀🤖👴",
      genres: ["adventure, sci-fi"],
      type: "movie",
      year: 1968,
      itemLink: "https://www.imdb.com/title/tt0062622/",
    },
    {
      title: "300",
      emojiImgs: " 💪🤕👊🏻⚔️ 🛡",
      genres: ["action", "drama", "fantasy"],
      type: "movie",
      year: 2007,
      itemLink: "https://www.imdb.com/title/tt0416449",
    },
    {
      title: "A Bug's Life",
      emojiImgs: "🐜🍃🦗🐦",
      genres: ["animation", "adventure", "comedy"],
      type: "movie",
      year: 1998,
      itemLink: "https://www.imdb.com/title/tt0120623/",
    },
    {
      title: "A Quiet Place",
      emojiImgs: "🤫🤐👂🛀👶",
      genres: ["drama", "horror", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt6644200/",
      type: "movie",
      year: 2018,
    },
    {
      title: "A Star is Born",
      emojiImgs: "🎤👩👨🎸⭐",
      genres: ["drama", "music", "romance"],
      type: "movie",
      year: 2018,
      itemLink: "https://www.imdb.com/title/tt1517451",
    },
    {
      title: "Aladdin",
      emojiImgs: "🧞‍♂️💞👸👳🏰",
      genres: ["adventure", "family", "comedy"],
      type: "movie",
      year: 2019,
      itemLink: "https://www.imdb.com/title/tt6139732",
    },
    {
      title: "Alice in Wonderland",
      emojiImgs: "👱‍🐇⌚👑♥️",
      genres: ["animation", "adventure", "family"],
      type: "movie",
      year: 1951,
      itemLink: "https://www.imdb.com/title/tt0043274/",
    },
    {
      title: "Alien",
      emojiImgs: "🚀👾🔫👨‍🚀",
      genres: ["suspense", "horror"],
      type: "movie",
      year: 1979,
      itemLink: "https://www.imdb.com/title/tt0078748/",
    },
    {
      title: "Anastasia",
      emojiImgs: "🏰👸🧙🇷🇺💗",
      genres: ["animation", "adventure", "drama"],
      itemLink: "https://www.imdb.com/title/tt0118617/",
      type: "movie",
      year: 1997,
    },
    {
      title: "Ant-Man and the Wasp",
      emojiImgs: "🐜🙍‍♂️🐝🙎‍♀️👻",
      genres: ["action", "adventure", "comedy"],
      type: "movie",
      year: 2018,
      itemLink: "https://www.imdb.com/title/tt5095030/",
    },
    {
      title: "Batman Begins",
      emojiImgs: "🦇👨🏙️🚰🤢",
      genres: ["action", "adventure"],
      itemLink: "https://www.imdb.com/title/tt0372784/",
      type: "movie",
      year: 2005,
    },
    {
      title: "Beauty and the Beast",
      emojiImgs: "🏰🥀🎶📚🕰️",
      genres: ["animation", "family", "fantasy"],
      type: "movie",
      year: 1991,
      itemLink: "https://www.imdb.com/title/tt2771200",
    },
    {
      title: "Beetlejuice",
      emojiImgs: "⚰️🧟‍👰📙",
      genres: ["comedy", "fantasy"],
      type: "movie",
      year: 1988,
      itemLink: "https://www.imdb.com/title/tt0094721/",
    },
    {
      title: "Bend It Like Beckham",
      emojiImgs: "🇮🇳🙎🏽‍♀️🙍🏽‍♂️🇬🇧⚽",
      genres: ["comedy", "drama", "romance"],
      type: "movie",
      year: 2002,
      itemLink: "https://www.imdb.com/title/tt0286499/",
    },
    {
      title: "The Breakfast Club",
      emojiImgs: "🏫🧠🤾👸",
      genres: ["comedy", "drama"],
      type: "movie",
      year: 1985,
      itemLink: "https://www.imdb.com/title/tt0088847/",
    },
    {
      title: "Black Panther",
      emojiImgs: "😺🌍🏴💪🏿🦸🏿",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2018,
      itemLink: "https://www.imdb.com/title/tt1825683",
    },
    {
      title: "Black Swan",
      emojiImgs: "🩰👯‍♀️🦢🎭🔪",
      genres: ["drama", "thriller"],
      type: "movie",
      year: 2010,
      itemLink: "https://www.imdb.com/title/tt0947798",
    },
    {
      title: "Blade Runner",
      emojiImgs: "🗡️🏃🌕",
      genres: ["action", "thriller", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt0083658/",
      type: "movie",
      year: 1982,
    },
    {
      title: "Boyhood",
      emojiImgs: "👶⚾🧑📷💔",
      genres: ["drama"],
      type: "movie",
      year: 2014,
      itemLink: "https://www.imdb.com/title/tt1065073/",
    },
    {
      title: "Brave",
      emojiImgs: "🏹🎯🛡️🐻",
      genres: ["animation", "adventure", "comedy"],
      type: "movie",
      year: 2012,
      itemLink: "https://www.imdb.com/title/tt1217209/",
    },
    {
      title: "Bring It On",
      emojiImgs: "💃🤸‍♀️💗🤷‍♀️🧖‍♀️",
      genres: ["comedy", "romance", "sport"],
      type: "movie",
      year: 2000,
      itemLink: "https://www.imdb.com/title/tt0204946/",
    },
    {
      title: "Captain Marvel",
      emojiImgs: "🙍‍♀️🛩🌌🦹‍♀️",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2019,
      itemLink: "https://www.imdb.com/title/tt4154664/",
    },
    {
      title: "Cars",
      emojiImgs: "🚗🍃🏁⛽️",
      genres: ["animation", "comedy", "family"],
      type: "movie",
      year: 2006,
      itemLink: "https://www.imdb.com/title/tt0317219/",
    },
    {
      title: "Cast Away",
      emojiImgs: "🏐🥥🏝️",
      genres: ["action", "comedy", "musical"],
      itemLink: "https://www.imdb.com/title/tt0162222/",
      type: "movie",
      year: 2000,
    },
    {
      title: "Catch Me If You Can",
      emojiImgs: "🕵️‍🏃‍👨‍✈️🏃‍‍",
      genres: ["biography", "crime", "drama"],
      type: "movie",
      year: 2002,
      itemLink: "https://www.imdb.com/title/tt0264464/",
    },
    {
      title: "The Cheetah Girls",
      emojiImgs: "🐆👭🐆👭🎵",
      genres: ["comedy", "drama", "musical"],
      itemLink: "https://www.imdb.com/title/tt0338852/",
      type: "movie",
      year: 2003,
    },
    {
      title: "Chicago",
      emojiImgs: "🎷👯🔫👠🕺",
      genres: ["musical", "drama", "comedy"],
      itemLink: "https://www.imdb.com/title/tt0299658/",
      type: "movie",
      year: 2002,
    },
    {
      title: "Chicken Little",
      emojiImgs: "🐓👽🌎",
      genres: ["family", "comedy", "animated"],
      itemLink: "https://www.imdb.com/title/tt0371606/",
      type: "movie",
      year: 2005,
    },
    {
      title: "Child's Play",
      emojiImgs: "👶😰😫☠",
      genres: ["action", "horror", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt8663516/",
      type: "movie",
      year: 2019,
    },
    {
      title: "Cinderella",
      emojiImgs: "🤴👸👠🐭🧚‍♀️",
      genres: ["animation", "family", "fantasy"],
      type: "movie",
      year: 1950,
      itemLink: "https://www.imdb.com/title/tt0042332/",
    },
    {
      title: "Citizen Kane",
      emojiImgs: "🌹🛷📰🗞️",
      genres: ["drama", "mystery", "classic"],
      type: "movie",
      year: 1941,
      itemLink: "https://www.imdb.com/title/tt0033467/",
    },
    {
      title: "Cloudy with a Chance of Meatballs",
      emojiImgs: "☁️🥩⚽☂️",
      genres: ["animation", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt0844471/",
      type: "movie",
      year: 2009,
    },
    {
      title: "Clueless",
      emojiImgs: "🛍️💅💞💋🗽",
      genres: ["comedy", "romance"],
      itemLink: "https://www.imdb.com/title/tt0112697/",
      type: "movie",
      year: 1995,
    },
    {
      title: "Coco",
      emojiImgs: "🇲🇽🎸💀🔔👨‍👩‍👧‍👦",
      genres: ["animation", "adventure", "family"],
      itemLink: "https://www.imdb.com/title/tt2380307/",
      type: "movie",
      year: 2017,
    },
    {
      title: "The Color Purple",
      emojiImgs: "💜🏃🏾‍♀️🧘🏾‍♀️",
      genres: ["drama"],
      itemLink: "https://www.imdb.com/title/tt0088939/",
      type: "movie",
      year: 1986,
    },
    {
      title: "The Curious Case of Benjamin Button",
      emojiImgs: "👴🏻➡️🧔🏻➡️👶🏻",
      genres: ["drama", "fantasy", "romance"],
      type: "movie",
      year: 2008,
      itemLink: "https://www.imdb.com/title/tt0421715/",
    },
    {
      title: "The Dark Knight",
      emojiImgs: "🦇🕶️🏇⚔️",
      genres: ["action", "crime", "drama"],
      itemLink: "https://www.imdb.com/title/tt0468569/",
      type: "movie",
      year: 2008,
    },
    {
      title: "The Day the Earth Stood Still",
      emojiImgs: "☀️🌎⌛🛑",
      genres: ["drama", "sci-fi"],
      type: "movie",
      year: 1951,
      itemLink: "https://www.imdb.com/title/tt0043456/",
    },
    {
      title: "Devil Wears Prada",
      emojiImgs: "😈💄👠🧣👓",
      genres: ["comedy", "drama"],
      type: "movie",
      year: 2006,
    },
    {
      title: "Dirty Dancing",
      emojiImgs: "🍉💃🕶🕺👶",
      genres: ["drama", "music", "romance"],
      type: "movie",
      year: 1987,
    },
    {
      title: "Dude, Where's My Car?",
      emojiImgs: "👨❓🚗",
      genres: ["comedy", "sci-fi"],
      type: "movie",
      year: 2000,
      itemLink: "https://www.imdb.com/title/tt0242423/",
    },
    {
      title: "Dunkirk",
      emojiImgs: "🇫🇷💥🚢🌊🚂",
      genres: ["action", "adventure", "drama"],
      type: "movie",
      year: 2017,
      itemLink: "https://www.imdb.com/title/tt5013056/",
    },
    {
      title: "Edward Sicssorhands",
      emojiImgs: "👦✂🙌",
      genres: ["drama", "fantasy", "romance"],
      itemLink: "https://www.imdb.com/title/tt0099487/",
      type: "movie",
      year: 1990,
    },
    {
      title: "The Emoji Movie",
      emojiImgs: "😀😒✋💩",
      genres: ["animation", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt4877122/",
      type: "movie",
      year: 2017,
    },
    {
      title: "Eragon",
      emojiImgs: "👦🏼🐉🥚⚔️👑",
      genres: ["action", "adventure", "family"],
      itemLink: "https://www.imdb.com/title/tt0449010/",
      type: "movie",
      year: 2006,
    },
    {
      title: "E.T. the Extra-Terrestrial",
      emojiImgs: "🌙🚲👉🏻👈🏻👽",
      genres: ["family", "sci-fi"],
      type: "movie",
      year: 1982,
    },
    {
      title: "Fantastic Beasts and Where to Find Them",
      emojiImgs: "🐉🐀🦉🔎💼",
      genres: ["adventure", "family", "fantasy"],
      itemLink: "https://www.imdb.com/title/tt3183660/",
      type: "movie",
      year: 2016,
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindelwald",
      emojiImgs: "🐉🦉🚔👨‍🦳🧙‍♂️",
      genres: ["adventure", "family", "fantasy"],
      itemLink: "https://www.imdb.com/title/tt4123430/",
      type: "movie",
      year: 2018,
    },
    {
      title: "Fargo",
      emojiImgs: "🚔🌳👶🏻⚰️",
      genres: ["crime", "drama", "thriller"],
      type: "movie",
      year: 1996,
    },
    {
      title: "The Fast and the Furious",
      emojiImgs: "🚗💨😡",
      genres: ["action", "crime", "thriller"],
      type: "movie",
      year: 2001,
    },
    {
      title: "Fight Club",
      emojiImgs: "🥊🧼🤐",
      genres: ["drama"],
      type: "movie",
      year: 1999,
    },
    {
      title: "Five Feet Apart",
      emojiImgs: "🏣🧒5⃣👧💞",
      genres: ["Drama", "Romance", "Comedy"],
      type: "movie",
      year: 2019,
    },
    {
      title: "Fried Green Tomatoes",
      emojiImgs: "🍅👯👒🍴☕️",
      genres: ["feel-good", "drama"],
      itemLink: "https://www.imdb.com/title/tt0101921/",
      type: "movie",
      year: 1991,
    },
    {
      title: "Forrest Gump",
      emojiImgs: "🏃🏻🍫🍤",
      genres: ["drama", "romance"],
      itemLink: "https://www.imdb.com/title/tt0109830/",
      type: "movie",
      year: 1994,
    },
    {
      title: "Four Weddings and a Funeral",
      emojiImgs: "4️⃣💒💑⚰️",
      genres: ["Comedy", "Drama", "Romance"],
      type: "movie",
      year: 1994,
      itemLink: "https://www.imdb.com/title/tt0109831/",
    },
    {
      title: "The Fox and the Hound",
      emojiImgs: "🦊🔫👨🏼‍🦳🐶",
      genres: ["animation", "adventure", "drama"],
      type: "movie",
      year: 1981,
      itemLink: "https://www.imdb.com/title/tt0082406/",
    },
    {
      title: "Get Out",
      emojiImgs: "😮😱💪🏿🦸🏿",
      genres: ["horror", "sci-fi"],
      type: "movie",
      year: 2018,
      itemLink: "https://www.imdb.com/title/tt5052448/",
    },
    {
      title: "Ghostbusters",
      emojiImgs: "👻🔫👨‍🚒️",
      genres: ["comedy", "action", "fantasy"],
      type: "movie",
      year: 1984,
      itemLink: "https://www.imdb.com/title/tt1289401/",
    },
    {
      title: "Gladiator",
      emojiImgs: "🤺⚔️🛡️",
      genres: ["action", "adventure", "drama"],
      type: "movie",
      year: 2000,
      itemLink: "https://www.imdb.com/title/tt0172495/",
    },
    {
      title: "The Godfather",
      emojiImgs: "🇮🇹🤵🐴🔫💵",
      genres: ["crime", "drama"],
      type: "movie",
      year: 1972,
      itemLink: "https://www.imdb.com/title/tt0068646/",
    },
    {
      title: "Goonies",
      emojiImgs: "🚴🚴‍♀️😲💍👨‍👩‍👧‍👦",
      genres: ["adventure", "comedy", "family"],
      type: "movie",
      year: 1985,
      itemLink: "https://www.imdb.com/title/tt0089218/",
    },
    {
      title: "Gravity",
      emojiImgs: "🚀✨👩🏻‍🚀",
      genres: ["drama", "sci-fi", "thriller"],
      itemLink: "https://www.imdb.com/title/tt1454468/",
      type: "movie",
      year: 2013,
    },
    {
      title: "Grease",
      emojiImgs: "🌅👸💞👨‍🎤🚘",
      genres: ["musical", "romance"],
      type: "movie",
      year: 1978,
      itemLink: "https://www.imdb.com/title/tt0077631/",
    },
    {
      title: "The Greatest Showman",
      emojiImgs: "🎩🕺🎪🔥🎶",
      genres: ["biography", "drama", "musical"],
      type: "movie",
      year: 2017,
      itemLink: "https://www.imdb.com/title/tt1485796/",
    },
    {
      title: "Grey's Anatomy",
      emojiImgs: "💊💉🧪⚕🍷",
      genres: ["drama", "romance"],
      type: "tv",
      year: 2005,
      itemLink: "https://www.imdb.com/title/tt0413573/",
    },
    {
      title: "The Girl with the Dragon Tattoo",
      emojiImgs: "👧💉🐉",
      itemLink: "https://www.imdb.com/title/tt0000000001132620/",
      genres: ["crime", "drama", "mystery"],
      type: "movie",
      year: 2009,
    },
    {
      title: "Hackers",
      emojiImgs: "👩🏻‍💻👨🏻‍💻📡🕵",
      genres: ["action-adventure", "mystery", "fiction-fantasy"],
      type: "movie",
      year: 1995,
      itemLink: "https://www.imdb.com/title/tt0113243/",
    },
    {
      title: "The Hangover",
      emojiImgs: "🤵🎰🥃🍾🤕",
      genres: ["comedy"],
      type: "movie",
      year: 2009,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      emojiImgs: "🐍🧙‍♂️📓👩🏻‍🦰⚡",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2002,
    },
    {
      title: "Harry Potter and the Deathly Hallows – Part 1",
      emojiImgs: "👰🏻🤵🏻💀🐍🔪",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2010,
    },
    {
      title: "Harry Potter and the Deathly Hallows – Part 2",
      emojiImgs: "💍💀🐍🏰🔥",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2011,
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      emojiImgs: "🐉🧜☠️🏆🧙‍♂️",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2005,
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      emojiImgs: "👦🏻🐍💀📖🧙🏻‍♂️",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2009,
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      emojiImgs: "💀🏠💅🏻💭🔮",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2007,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      emojiImgs: "📨🎂✨📖💎",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2001,
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      emojiImgs: "👨‍🏫🌕🐺🐀⚡",
      genres: ["adventure", "family", "fantasy"],
      type: "movie",
      year: 2004,
    },
    {
      title: "Hereditary",
      emojiImgs: "😱👑🚗👨‍👩‍👧‍👧🏡",
      genres: ["drama", "horror", "mystery"],
      type: "movie",
      year: 2018,
      itemLink: "https://www.imdb.com/title/tt7784604/",
    },
    {
      title: "Hidden Figures",
      emojiImgs: "🚀👩🏽‍💻🧮👨🏻‍🦳👨🏻‍🚀",
      genres: ["biography", "drama", "history"],
      type: "movie",
      year: 2016,
    },
    {
      title: "The Hills Have Eyes",
      emojiImgs: "👨‍👩‍👧‍👦🚐🏔👀",
      genres: ["horror", "thriller"],
      type: "movie",
      year: 2006,
    },
    {
      title: "Holes",
      emojiImgs: "0️⃣👟🦎🕳️☀️",
      genres: ["Adventure", "Comedy", "Drama", "Family", "Mystery"],
      type: "movie",
      year: 2003,
      itemLink: "https://www.imdb.com/title/tt0311289/",
    },
    {
      title: "Home Alone",
      emojiImgs: "🏠🙈🎄",
      genres: ["comedy", "family"],
      type: "movie",
      year: 1990,
    },
    {
      title: "Ice Age",
      emojiImgs: "👶🐅🐘🌰❄️",
      genres: ["animation", "adventure", "comedy"],
      type: "movie",
      year: 2002,
      itemLink: "https://www.imdb.com/title/tt0268380/",
    },
    {
      title: "The Incredible Hulk",
      emojiImgs: "🤢💪🦍",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2008,
      itemLink: "https://www.imdb.com/title/tt0800080/",
    },
    {
      title: "Independence Day",
      emojiImgs: "🛸👽🌎🛩️",
      genres: ["war", "adventure", "drama", "sci-fi"],
      type: "movie",
      year: 1996,
      itemLink: "https://www.imdb.com/title/tt0116629/",
    },
    {
      title: "Inglorious Basterds",
      emojiImgs: "💀🔪🎖️📽️🔥",
      genres: ["war", "history"],
      itemLink: "https://www.imdb.com/title/tt0361748/",
      type: "movie",
      year: 2009,
    },
    {
      title: "Interstellar",
      emojiImgs: "🌍👨‍🚀⏱️❤️",
      genres: ["adventure", "drama", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt0816692/",
      type: "movie",
      year: 2014,
    },
    {
      title: "IT",
      emojiImgs: "🎈🤡☔🚲",
      genres: ["horror", "thriller"],
      itemLink: "https://www.imdb.com/title/tt1396484/",
      type: "movie",
      year: 2017,
    },
    {
      title: "James and the Giant Peach",
      emojiImgs: "🍑👦🦗🐛🐞",
      genres: ["animation", "adventure", "family"],
      type: "movie",
      year: 1996,
      itemLink: "https://www.imdb.com/title/tt0116683/",
    },
    {
      title: "Jaws",
      emojiImgs: "🛥️🌊🏊‍♂️🦈",
      genres: ["adventure", "drama", "thriller"],
      itemLink: "https://www.imdb.com/title/tt0073195/",
      type: "movie",
      year: 1975,
    },
    {
      title: "John Wick",
      emojiImgs: "🔪🐶🚗🔫🤵🏻",
      genres: ["action", "crime", "thriller"],
      itemLink: "https://www.imdb.com/title/tt2911666/",
      type: "movie",
      year: 2014,
    },
    {
      title: "The Jungle Book",
      emojiImgs: "🐻🐯🐍🐵📖",
      genres: ["adventure", "drama", "family"],
      itemLink: "https://www.imdb.com/title/tt3040964/",
      type: "movie",
      year: 2016,
    },
    {
      title: "Jurassic Park",
      emojiImgs: "🔬🦖🏝",
      genres: ["action", "adventure", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt0107290/",
      type: "movie",
      year: 1993,
    },
    {
      title: "The Karate Kid",
      emojiImgs: "🤼‍♂️👦🏻👘",
      genres: ["action", "drama", "family"],
      type: "movie",
      year: 1984,
      itemLink: "https://www.imdb.com/title/tt0087538/",
    },
    {
      title: "Kiki's Delivery Service",
      emojiImgs: "👧🐱🧹📫",
      genres: ["animated"],
      itemLink: "https://www.imdb.com/title/tt0097814/",
      type: "movie",
      year: 1989,
    },
    {
      title: "Kill Bill: Volume 1",
      emojiImgs: "🗡️🙍‍🥋🦶🇯🇵",
      genres: ["action", "drama"],
      itemLink: "https://www.imdb.com/title/tt0266697/",
      type: "movie",
      year: 2003,
    },
    {
      title: "Kill Bill: Volume 2",
      emojiImgs: "👰🗡️👧💓💥",
      genres: ["action", "drama"],
      itemLink: "https://www.imdb.com/title/tt0378194/",
      type: "movie",
      year: 2004,
    },
    {
      title: "King Authur",
      emojiImgs: "⚔️🤴🏼️️️⚔️",
      genres: ["action", "sci-fi"],
      type: "movie",
      year: 2017,
      itemLink: "https://www.imdb.com/title/tt1972591/",
    },
    {
      title: "Kingsman: The Secret Service ",
      emojiImgs: "👑👨👮🤵🐕",
      genres: ["action", "adventure", "comedy"],
      type: "movie",
      year: 2014,
      itemLink: "https://www.imdb.com/title/tt2802144/",
    },
    {
      title: "Kung Fu Panda",
      emojiImgs: "🐼🎍🇨🇳🥟🍚",
      genres: ["animation", "action", "adventure"],
      itemLink: "https://www.imdb.com/title/tt0441773/",
      type: "movie",
      year: 2008,
    },
    {
      title: "La La Land",
      emojiImgs: "💃🙋‍♂️🎹🎶",
      genres: ["romance", "drama", "musical"],
      type: "movie",
      year: 2016,
      itemLink: "https://www.imdb.com/title/tt3783958/",
    },
    {
      title: "Lady and the Tramp",
      emojiImgs: "💃🐶🍝",
      genres: ["animation", "romance"],
      type: "movie",
      year: 1955,
      itemLink: "https://www.imdb.com/title/tt0048280/",
    },
    {
      title: "Lady Bird",
      emojiImgs: "💃🐦❤️🏙️",
      genres: ["comedy", "drama"],
      type: "movie",
      year: 2017,
      itemLink: "https://www.imdb.com/title/tt4925292/",
    },
    {
      title: "Lawrence of Arabia",
      emojiImgs: "🐎⚔🤠🏜🐫",
      genres: ["adventure", "biography", "drama"],
      type: "movie",
      year: 1962,
      itemLink: "https://www.imdb.com/title/tt0056172/",
    },
    {
      title: "Legally Blonde",
      emojiImgs: "👩‍⚖️👠💘🏫🐶",
      genres: ["romance", "comedy"],
      type: "movie",
      year: 2001,
      itemLink: "https://www.imdb.com/title/tt0250494/",
    },
    {
      title: "Leon: The Professional",
      emojiImgs: "🧒🔫🧔🌷‍",
      genres: ["thriller"],
      type: "movie",
      year: 1994,
      itemLink: "https://www.imdb.com/title/tt0110413/",
    },
    {
      title: "Life of Pi",
      emojiImgs: "👪⛵🌊🚣🐅",
      genres: ["Drama", "Fantasy"],
      itemLink: "https://www.imdb.com/title/tt0454876/",
      type: "movie",
      year: 2012,
    },
    {
      title: "The Lion King",
      emojiImgs: "🦁👑🌍",
      genres: ["animation", "adventure", "drama"],
      type: "movie",
      year: 1994,
    },
    {
      title: "The Little Mermaid",
      emojiImgs: "‍🧜🏽‍🤴🏽🐠🦞🐙",
      genres: ["animation", "family", "fantasy"],
      type: "movie",
      year: 1989,
      itemLink: "https://www.imdb.com/title/tt0097757/",
    },
    {
      title: "The Lizzie McGuire Movie",
      emojiImgs: "🎓✈🇮🇹👯🎤",
      genres: ["adventure", "comedy", "family"],
      type: "movie",
      year: 2003,
      itemLink: "https://www.imdb.com/title/tt0306841/",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      emojiImgs: "💍🧝⚔️🧙",
      genres: ["adventure", "drama", "fantasy"],
      type: "movie",
      year: 2001,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      emojiImgs: "💍🌋🦅",
      genres: ["adventure", "drama", "fantasy"],
      type: "movie",
      year: 2003,
      itemLink: "https://www.imdb.com/title/tt0167260",
    },
    {
      title: "Love and Other Drugs",
      emojiImgs: "😍🆘💊💔💏",
      genres: ["romance", "drama", "comedy"],
      type: "movie",
      year: 2010,
      itemLink: "https://www.imdb.com/title/tt0758752/",
    },
    {
      title: "Maleficient: Mistress of Evil",
      emojiImgs: "🧝‍♀️🧙‍♀️💔👸🖤",
      genres: ["action", "fantasy"],
      itemLink: "https://www.imdb.com/title/tt4777008/",
      type: "movie",
      year: 2019,
    },
    {
      title: "The Martian",
      emojiImgs: "👨🏻‍🚀🌕🥔📷🚀",
      genres: ["adventure", "drama", "sci-fi"],
      itemLink: "https://www.imdb.com/title/tt3659388/",
      type: "movie",
      year: 2015,
    },
    {
      title: "The Mask",
      emojiImgs: "🐶🤓👺🤪🕺",
      genres: ["comedy", "crime", "fantasy"],
      type: "movie",
      year: 1994,
      itemLink: "https://www.imdb.com/title/tt0110475/",
    },
    {
      title: "Matrix",
      emojiImgs: "👨‍💻👩‍💻🔫🥋",
      genres: ["action", "sci-fi"],
      type: "movie",
      year: 1999,
      itemLink: "https://www.imdb.com/title/tt0133093/",
    },
    {
      title: "Matrix Revolutions",
      emojiImgs: "📞💻🕶️",
      genres: ["action", "sci-fi"],
      type: "movie",
      year: 2003,
      itemLink: "https://www.imdb.com/title/tt0242653/",
    },
    {
      title: "Mean Girls",
      emojiImgs: "👚🏫📓🔥😏",
      genres: ["movie", "comedy"],
      type: "movie",
      year: 2004,
      itemLink: "https://www.imdb.com/title/tt0377092/",
    },
    {
      title: "Men in Black",
      emojiImgs: "👨⤵◾",
      genres: ["action", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt0119654/",
      type: "movie",
      year: 1997,
    },
    {
      title: "Midsommar",
      emojiImgs: "🌞👩‍👧‍👧🌼🔥💀",
      genres: ["Drama", "Thriller"],
      type: "movie",
      year: 2019,
      itemLink: "https://www.imdb.com/title/tt8772262/",
    },
    {
      title: "Monty Python and the Holy Grail",
      emojiImgs: "🤵🐍⛪🍷",
      genres: ["comedy"],
      type: "movie",
      year: 1975,
      itemLink: "https://www.imdb.com/title/tt0071853/",
    },
    {
      title: "Moonrise Kingdom",
      emojiImgs: "⛺️🧳🌕👑",
      genres: ["Comedy", "Drama", "Romance"],
      itemLink: "https://www.imdb.com/title/tt1748122/",
      type: "movie",
      year: 2012,
    },
    {
      title: "Moulin Rouge",
      emojiImgs: "💃🇫🇷🎟🎭💋",
      genres: ["drama", "musical", "romance"],
      type: "movie",
      year: 2001,
      itemLink: "https://www.imdb.com/title/tt0203009/",
    },
    {
      title: "Mulan",
      emojiImgs: "👩➡️👨🤺⚔️",
      genres: ["war", "music"],
      type: "movie",
      year: 1998,
      itemLink: "https://www.imdb.com/title/tt0120762/",
    },
    {
      title: "Mrs. Doubtfire",
      emojiImgs: "👨🏼 👵🏻 👩‍👧‍👦🧹🔥",
      genres: ["family", "comedy"],
      type: "movie",
      year: 1993,
      itemLink: "https://www.imdb.com/title/tt0107614/",
    },
    {
      title: "National Treasure",
      emojiImgs: "🇺🇸🗝🏺🧭💰",
      genres: ["action", "adventure", "mystery"],
      type: "movie",
      year: 2004,
      itemLink: "https://www.imdb.com/title/tt0368891/",
    },
    {
      title: "The NeverEnding Story",
      emojiImgs: "♾️🐉📖🐉♾️",
      genres: ["fantasy", "adventure"],
      itemLink: "https://www.imdb.com/title/tt0088323/",
      type: "movie",
      year: 1984,
    },
    {
      title: "Nightmare Before Christmas",
      emojiImgs: "💀🎅🎃👻🐕",
      genres: ["animation", "family", "fantasy", "musical"],
      type: "movie",
      year: 1993,
      itemLink: "https://www.imdb.com/title/tt0107688/",
    },
    {
      title: "No Country for Old Men",
      emojiImgs: "⛔️🇺🇸👴💰",
      genres: ["crime", "drama", "thriller"],
      type: "movie",
      year: 2007,
      itemLink: "https://www.imdb.com/title/tt0477348/",
    },
    {
      title: "Office Space",
      emojiImgs: "👔🖨⚒💾💰",
      genres: ["comedy"],
      type: "movie",
      year: 1999,
      itemLink: "https://www.imdb.com/title/tt0151804/",
    },
    {
      title: "Passport to Paris",
      emojiImgs: "🎟✈🗼",
      genres: ["comedy", "romance"],
      type: "movie",
      year: 1999,
      itemLink: "https://www.imdb.com/title/tt0202521/",
    },
    {
      title: "Pet Sematary",
      emojiImgs: "🐶🐱☠️⚰️",
      genres: ["horror", "thriller", "mystery"],
      type: "movie",
      year: 2019,
      itemLink: "https://www.imdb.com/title/tt0837563/",
    },
    {
      title: "Pearl Harbor",
      emojiImgs: "🇯🇵🛩💣🇺🇸🏝",
      genres: ["Action", "Drama", "History", "Romance", "War"],
      type: "movie",
      year: 2001,
      itemLink: "https://www.imdb.com/title/tt0213149/",
    },
    {
      title: "Pinocchio",
      emojiImgs: "🤥👴🐋",
      genres: ["animation"],
      type: "movie",
      year: 1940,
      itemLink: "https://www.imdb.com/title/tt0032910/",
    },
    {
      title: "Pirates of the Caribbean",
      emojiImgs: "🍻🏴‍☠️🚢",
      genres: ["action", "comedy"],
      type: "movie",
      year: 2006,
    },
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      emojiImgs: "🏴‍☠️🦜🔑🚢",
      genres: ["Action", "Adventure", "Fantasy"],
      itemLink: "https://www.imdb.com/title/tt0325980/",
      type: "movie",
      year: 2003,
    },
    {
      title: "Pokemon Detective Pikachu",
      emojiImgs: "🕵️⚡🐭⚡☕",
      genres: ["action", "adventure", "comedy"],
      type: "movie",
      year: 2019,
      itemLink: "https://www.imdb.com/title/tt5884052/",
    },
    {
      title: "Princess and the Frog",
      emojiImgs: "👸🏽🐸💋💒🥂",
      genres: ["animation", "adventure", "comedy"],
      type: "movie",
      year: 2009,
      itemLink: "https://www.imdb.com/title/tt0780521/",
    },
    {
      title: "Princess Bride",
      emojiImgs: "🏴‍☠️👸🔥🤺",
      genres: ["adventure", "family"],
      type: "movie",
      year: 1987,
      itemLink: "https://www.imdb.com/title/tt0093779/",
    },
    {
      title: "The Princess Diaries",
      emojiImgs: "👩‍🦰✈️🏰👑👸",
      genres: ["comedy", "family", "romance"],
      type: "movie",
      year: 2001,
      itemLink: "https://www.imdb.com/title/tt0247638/",
    },
    {
      title: "Psycho",
      emojiImgs: "😱🛀🔪",
      genres: ["horror", "mystery", "thriller"],
      itemLink: "https://www.imdb.com/title/tt0054215/",
      type: "movie",
      year: 1960,
    },
    {
      title: "Ratatouille",
      emojiImgs: "🐀👨‍🍳🔪",
      genres: ["animation", "comedy", "family"],
      type: "movie",
      year: 2007,
      itemLink: "https://www.imdb.com/title/tt0382932/",
    },
    {
      title: "Rocky",
      emojiImgs: "🏃‍♂️🥊🕴️",
      genres: ["drama", "sport"],
      type: "movie",
      year: 1976,
    },
    {
      title: "The Rocky Horror Picture Show",
      emojiImgs: "🧪👽🎤😈👠",
      genres: ["comedy", "musical"],
      type: "movie",
      year: 1975,
      itemLink: "https://www.imdb.com/title/tt0073629/",
    },
    {
      title: "Ready Player One",
      emojiImgs: "🏁🕹1️⃣",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2018,
    },
    {
      title: "Rent",
      emojiImgs: "👨👭💊💉🎶",
      genres: ["drama", "musical", "romance"],
      type: "movie",
      year: 2005,
    },
    {
      title: "Reservoir Dogs",
      emojiImgs: "🕴️🕴️🕴️🕴️🕴️",
      genres: ["crime", "thriller"],
      type: "movie",
      year: 1992,
    },
    {
      title: "Resident Evil",
      emojiImgs: "🔫👩🦠🧟",
      genres: ["action", "horror", "sci-fi"],
      type: "movie",
      year: 2002,
      itemLink: "https://www.imdb.com/title/tt0120804/",
    },
    {
      title: "The Revenant",
      emojiImgs: "🐻💥🤕❄️🥶",
      genres: ["action", "adventure", "biography"],
      itemLink: "https://www.imdb.com/title/tt1663202/",
      type: "movie",
      year: 2015,
    },
    {
      title: "RocketMan",
      emojiImgs: "🐱🚀📫",
      genres: ["drama", "musical"],
      type: "movie",
      year: 2019,
    },
    {
      title: "Saving Private Ryan",
      emojiImgs: "🇫🇷🔍🔫☠🎖️",
      genres: ["drama", "war"],
      itemLink: "https://www.imdb.com/title/tt0120815/",
      type: "movie",
      year: 1998,
    },
    {
      title: "School of Rock",
      emojiImgs: "🏫🎸🥁🎹",
      genres: ["comedy", "music"],
      type: "movie",
      year: 2003,
    },
    {
      title: "Scream",
      emojiImgs: "📞😱🔪🎭",
      genres: ["horror", "mystery"],
      itemLink: "https://www.imdb.com/title/tt0117571/",
      type: "movie",
      year: 1996,
    },
    {
      title: "See No Evil, Hear No Evil",
      emojiImgs: "🙈👹🙉👹",
      genres: ["comedy", "crime"],
      type: "movie",
      year: 1989,
    },
    {
      title: "Se7en",
      emojiImgs: "🕵🔪👮‍♂️😈",
      genres: ["drama"],
      type: "movie",
      year: 2007,
    },
    {
      title: "Seven Samurai",
      emojiImgs: "⚔️⛩️🍚🎰",
      genres: ["adventure", "drama"],
      itemLink: "https://www.imdb.com/title/tt0047478/",
      type: "movie",
      year: 1954,
    },
    {
      title: "Shaun Of The Dead",
      emojiImgs: "🧟🏏🍦🍺",
      genres: ["comedy", "horror"],
      type: "movie",
      year: 2004,
      itemLink: "https://www.imdb.com/title/tt0365748/",
    },
    {
      title: "The Shawshank Redemption",
      emojiImgs: "👮🧑🏾🔒🧑🏻👮",
      genres: ["drama"],
      type: "movie",
      year: 1994,
      itemLink: "https://www.imdb.com/title/tt0111161/",
    },
    {
      title: "The Shining",
      emojiImgs: "👭🔪🚪🆘",
      genres: ["drama", "horror"],
      type: "movie",
      year: 1980,
      itemLink: "https://www.imdb.com/title/tt0081505/",
    },
    {
      title: "Shrek",
      emojiImgs: "🤴🤝🧟‍♂️👉👸",
      genres: ["animation", "adventure", "comedy"],
      type: "movie",
      year: 2001,
      itemLink: "https://m.imdb.com/title/tt0126029/",
    },
    {
      title: "Silence of the Lambs",
      emojiImgs: "🤐🐑🍷🦋",
      genres: ["crime", "drama", "thriller"],
      type: "movie",
      year: 1991,
    },
    {
      title: "Sing",
      emojiImgs: "🐨🎶🐷🐘🦍",
      genres: ["animation", "comedy", "family"],
      type: "movie",
      year: 2016,
      itemLink: "https://www.imdb.com/title/tt3470600/",
    },
    {
      title: "Singin' In The Rain",
      emojiImgs: "🎥😄🎤💃❤️",
      genres: ["classical", "comedy", "musical", "perfoming arts", "romance"],
      itemLink: "https://www.imdb.com/title/tt0045152/",
      type: "movie",
      year: 1952,
    },
    {
      title: "Sister Act",
      emojiImgs: "👩🏿👠🎶⛪",
      genres: ["comedy", "crime", "family"],
      type: "movie",
      year: 1992,
      itemLink: "https://www.imdb.com/title/tt0105417/",
    },
    {
      title: "Sixth Sense",
      emojiImgs: "👻👦👀",
      genres: ["drama", "mystery", "thriller"],
      type: "movie",
      year: 1999,
    },
    {
      title: "Snatch",
      emojiImgs: "🔫💪🏿🔪💰💎",
      genres: ["comedy", "crime"],
      type: "movie",
      year: 2000,
      itemLink: "https://www.imdb.com/title/tt0208092/",
    },
    {
      title: "Snow White",
      emojiImgs: "🍎👸💤🤴💋",
      genres: ["musical", "animated", "romance"],
      type: "movie",
      year: 1944,
    },
    {
      title: "The Social Network",
      emojiImgs: "💻😐🌐👤",
      genres: ["biography", "drama"],
      type: "movie",
      year: 2010,
      itemLink: "https://www.imdb.com/title/tt1285016/",
    },
    {
      title: "Spaceballs",
      emojiImgs: "🚀🛸⚽🏀",
      genres: ["adventure", "comedy", "sci-fi"],
      type: "movie",
      year: 1987,
      itemLink: "https://www.imdb.com/title/tt0094012/",
    },
    {
      title: "Space Jam",
      emojiImgs: "🏀🛸🚀",
      genres: ["action", "comedy", "musical"],
      type: "movie",
      year: 1994,
    },
    {
      title: "Speed",
      emojiImgs: "🚍⏱💣",
      genres: ["action", "adventure", "Thriller"],
      type: "movie",
      year: 1994,
      itemLink: "https://www.imdb.com/title/tt1517451/",
    },
    {
      title: "Spiderman",
      emojiImgs: "🕷️👨‍💪🕸️🕸️",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2019,
    },
    {
      title: "Spider-Man: Homecoming",
      emojiImgs: "🕷🦸‍♀️🏫👷🏻🦅",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      itemLink: "https://www.imdb.com/title/tt2250912/",
      year: 2019,
    },
    {
      title: "Spirited Away",
      emojiImgs: "👧🏮🐷👵🐉",
      genres: ["animation", "adventure", "family"],
      type: "movie",
      year: 2001,
      itemLink: "https://www.imdb.com/title/tt0245429/",
    },
    {
      title: "Stargate",
      emojiImgs: "🔼🛸⭕️👽",
      genres: ["Action", "Adventure", "Sci-Fi"],
      itemLink: "https://www.imdb.com/title/tt0111282/",
      type: "movie",
      year: 1994,
    },
    {
      title: "Tarzan",
      emojiImgs: "🦍🌴👨❤️👩",
      genres: ["animation", "adventure", "family"],
      type: "movie",
      year: 1999,
      itemLink: "https://www.imdb.com/title/tt0120855/",
    },
    {
      title: "Taxi Driver",
      emojiImgs: "🚕🙎‍♂️👮‍♂️🤬",
      genres: ["crime", "drama"],
      type: "movie",
      year: 1976,
      itemLink: "https://www.imdb.com/title/tt0075314/",
    },
    {
      title: "Teenage Mutant Ninja Turtles",
      emojiImgs: "🐀🐢🎭🥋",
      genres: ["animation", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt0100758/",
      type: "movie",
      year: 1990,
    },
    {
      title: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
      emojiImgs: "🐱‍👤🐢🍕👊",
      genres: ["action", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt0103060/",
      type: "movie",
      year: 1991,
    },
    {
      title: "Titanic",
      emojiImgs: "💑❄🚢⬇️",
      genres: ["drama", "romance"],
      type: "movie",
      year: 1997,
      itemLink: "https://www.imdb.com/title/tt0120338/",
    },
    {
      title: "Top Gun",
      emojiImgs: "🔝🔫🛩️🕶️",
      genres: ["action", "drama"],
      itemLink: "https://www.imdb.com/title/tt0092099/",
      type: "movie",
      year: 1986,
    },
    {
      title: "The Wizard of Oz",
      emojiImgs: "🐶🌪️🤖🦁🧙‍",
      genres: ["adventure", "family", "fantasy"],
      itemLink: "https://www.imdb.com/title/tt0032138/",
      type: "movie",
      year: 1939,
    },
    {
      title: "Thor: Ragnarok",
      emojiImgs: "🌩🤴🏼🔨🦹🏻‍♀️🌋",
      genres: ["action", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt3501632/",
      type: "movie",
      year: 2017,
    },
    {
      title: "Treasure Planet",
      emojiImgs: "💰🌏🛸🏄‍♂️🏴‍☠️",
      genres: ["Animation", "Adventure", "Family"],
      type: "movie",
      year: 2002,
      itemLink: "https://www.imdb.com/title/tt0133240/",
    },
    {
      title: "Tron: Legacy",
      emojiImgs: "📟🕹🤖🏍️⭕",
      genres: ["action", "adventure", "sci-fi"],
      type: "movie",
      year: 2010,
      itemLink: "https://www.imdb.com/title/tt1104001",
    },
    {
      title: "Up",
      emojiImgs: "🎈🏠🐶👴🏻",
      genres: ["action", "comedy", "musical"],
      type: "movie",
      year: 1994,
    },
    {
      title: "Us",
      emojiImgs: "🎭👩🏿✂️🏚️🐰",
      genres: ["horror", "thriller"],
      type: "movie",
      year: 2019,
    },
    {
      title: "Wall-E",
      emojiImgs: "📺❤️💻",
      genres: ["animation", "adventure", "family"],
      type: "movie",
      year: 2008,
    },
    {
      title: "War for the Planet of the Apes",
      emojiImgs: "⚔🔥🌍🦍",
      genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
      type: "movie",
      year: 2017,
      itemLink: "https://www.imdb.com/title/tt3450958/",
    },
    {
      title: "War Horse",
      emojiImgs: "🐎👦⚔️🎖️",
      genres: ["action", "adventure", "drama"],
      type: "movie",
      year: 2011,
      itemLink: "https://www.imdb.com/title/tt1568911/",
    },
    {
      title: "WatchMen",
      emojiImgs: "⌚👀👨",
      genres: ["Action", "Drama", "Mystery", "Sci-Fi"],
      itemLink: "https://www.imdb.com/title/tt0409459/",
      type: "movie",
      year: 2009,
    },
    {
      title: "Willy Wonka & the Chocolate Factory",
      emojiImgs: "🧒🏻🍫🏭🎩️",
      genres: ["family", "fantasy", "musical"],
      type: "movie",
      year: 1971,
    },
    {
      title: "Young Frankenstein",
      emojiImgs: "👶🌭🍺⚡️🧟‍",
      genres: ["comedy"],
      type: "movie",
      year: 1974,
    },
    {
      title: "Zootopia",
      emojiImgs: "🐰👮🦊👔🦁",
      genres: ["animation", "adventure", "comedy"],
      itemLink: "https://www.imdb.com/title/tt2948356/",
      type: "movie",
      year: 2016,
    },
  ];
//   {
//     title: "500 Days of Summer",
//     emojiImgs: "👦💔👱‍♀️☀️",
//     genres: ["Comedy", "Romance", "Drama"],
//     itemLink: "https://www.imdb.com/title/tt1022603/",
//     type: "movie",
//     year: 2009,
//   },
const generateRandomMovie = () => {
    const randomMovie =
        movieData[Math.floor(Math.random() * movieData.length)];
    return randomMovie;
}

let userGuess = "";
let tries = 10;
let generatedMovie;
let generatedMovieTitle; 
let guessString = "";
let prevGuessString = "";

const triesText = document.querySelector("#tries");
const emojisPara = document.querySelector('#emo')
const result = document.querySelector("#result");
const guess = document.querySelector("#guess");

const emojiDiv = document.querySelector(".emoji");
const guessingDiv = document.querySelector(".guessing");
const inputBtns = document.querySelector(".inputBtns");
const resultDiv = document.querySelector(".result");
const spinner = document.querySelector(".spinner");
const card = document.querySelector(".card");
const ans = document.querySelector("#ans");

const renderButtons = () => {

    // append buttons for A-Z and 0-9 in inputBtns div
    for (let i = 65; i < 91; i++) {

        // add a break tag after every 9th button
        if (i === 74 || i === 83) {
            inputBtns.appendChild(document.createElement("br"));
        }

        const btn = document.createElement("button");
        btn.classList.add("letterBtn");
        btn.classList.add("btn");
        btn.innerText = String.fromCharCode(i);
        inputBtns.appendChild(btn);
        btn.addEventListener("click", () => {
            btn.disabled = true;

            if(!userGuess.includes(btn.innerText)){
                userGuess += btn.innerText;
            }
            if(!generatedMovieTitle.includes(btn.innerText)){
                tries--;
                triesText.innerText = tries;
                if(tries === 0){
                    resultDiv.classList.remove("hidden");
                    result.innerText = "You Lose!";
                    result.classList.add("lose");
                    result.classList.remove("win");
                    ans.innerText = `The answer was ${generatedMovieTitle}`;

                    // disable all the buttons
                    const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                    enabledBtns.forEach((btn) => {
                        btn.disabled = true;
                    })
                }
            }
            prevGuessString = guessString;
            guessString = ""
            for (let i = 0; i < generatedMovieTitle.length; i++) {
                if (generatedMovieTitle[i] === btn.innerText) {
                    guessString += btn.innerText;
                }
                else if (generatedMovieTitle[i] === " ") {
                    guessString += " ";
                }
                else {
                    if (prevGuessString[i] !== "_") {
                        guessString += prevGuessString[i];
                    }
                    else {
                        guessString += "_";
                    }
                }
            }
            guess.innerText = guessString;
            if(guessString === generatedMovieTitle){
                resultDiv.classList.remove("hidden");
                result.innerText = "You Win!";
                result.classList.add("win");
                result.classList.remove("lose");

                // disable all the buttons
                const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                enabledBtns.forEach((btn) => {
                    btn.disabled = true;
                })
            }
        })
    }

    inputBtns.appendChild(document.createElement("br"));

    for (let i = 48; i < 58; i++) {
        const btn = document.createElement("button");
        btn.classList.add("numberBtn");
        btn.classList.add("btn");
        btn.innerText = String.fromCharCode(i);
        inputBtns.appendChild(btn);
        btn.addEventListener("click", () => {
            btn.disabled = true;
            if(!userGuess.includes(btn.innerText)){
                userGuess += btn.innerText;
            }
            if(!generatedMovieTitle.includes(btn.innerText)){
                tries--;
                triesText.innerText = tries;
                if(tries === 0){
                    resultDiv.classList.remove("hidden");
                    result.innerText = "You Lose!";
                    result.classList.add("lose");
                    result.classList.remove("win");
                    ans.innerText = `The answer was ${generatedMovieTitle}`;

                    // disable all the buttons
                    const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                    enabledBtns.forEach((btn) => {
                        btn.disabled = true;
                    })
                }
            }
            prevGuessString = guessString;
            guessString = ""
            for (let i = 0; i < generatedMovieTitle.length; i++) {
                if (generatedMovieTitle[i] === btn.innerText) {
                    guessString += btn.innerText;
                }
                else if (generatedMovieTitle[i] === " ") {
                    guessString += " ";
                }
                else {
                    if (prevGuessString[i] !== "_") {
                        guessString += prevGuessString[i];
                    }
                    else {
                        guessString += "_";
                    }
                }
            }
            guess.innerText = guessString;
            if(guessString === generatedMovieTitle){
                resultDiv.classList.remove("hidden");
                result.innerText = "You Win!";
                result.classList.add("win");
                result.classList.remove("lose");

                // disable all the buttons
                const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                enabledBtns.forEach((btn) => {
                    btn.disabled = true;
                })
            }
        })
    }

}

const startGame = () => {
    tries = 10;
    triesText.innerText = tries;
    generatedMovie = generateRandomMovie();
    generatedMovieTitle = generatedMovie.title.toUpperCase(); 
    guessString = "";
    prevGuessString = "";
    for (let i = 0; i < generatedMovieTitle.length; i++) {
        if (generatedMovieTitle[i] === " ") {
            guessString += " ";
        } else {
            guessString += "_";
        }
    }
    ans.innerText = "";
    emojisPara.innerText = generatedMovie.emojiImgs;
    guess.innerText = guessString;
    result.innerText = "";
    //hide result div
    resultDiv.classList.add("hidden");

    // enable all the disabled buttons
    const disabledBtns = document.querySelectorAll(".btn:disabled");
    disabledBtns.forEach((btn) => {
        btn.disabled = false;
    })
}


const nextMovieBtn = document.querySelector("#next-btn");

// window.onload = () => {
//     spinner.classList.remove("hidden");
//     card.classList.add("hidden");
//     nextMovieBtn.classList.add("hidden");
//     startGame();
//     renderButtons();
//     setTimeout(() => {
//         spinner.classList.add("hidden");
//         card.classList.remove("hidden");
//         nextMovieBtn.classList.remove("hidden");
//     }, 3000)
// }

nextMovieBtn.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    card.classList.add("hidden");
    nextMovieBtn.classList.add("hidden");
    startGame();
    setTimeout(() => {
        spinner.classList.add("hidden");
        card.classList.remove("hidden");
        nextMovieBtn.classList.remove("hidden");
    }, 3000)
})

spinner.classList.remove("hidden");
card.classList.add("hidden");
nextMovieBtn.classList.add("hidden");
startGame();
renderButtons();
setTimeout(() => {
    spinner.classList.add("hidden");
    card.classList.remove("hidden");
    nextMovieBtn.classList.remove("hidden");
}, 3000)

// TODO:
// 1. Next Movie Button functionality --- X
// 2. Add movies to movieData array
// 3. Add emoji rendering functionality --- X
// 4. Put all the game events in a function and call it when the page loads --- X
// 5. Conditional rendering the gameplay buttons and the result text