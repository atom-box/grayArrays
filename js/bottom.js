  // Only node.js has this modules stuff?  ES6 whither??
// export  {dummy, jr, rotators, nouns, verbs, cliffWords, bardWords};


console.log("hellow from BOTTOM");
const dummy =()=>{
	return "I come from bottom JS.";
}

let cliffWords = ["Lear", "addresses", "these", "words", "to", "the", "body", "of", "Cordelia", "in", "the", "play’s", "final", "scene"];
let bardWords = ["O", "thou'lt", "come", "no", "more", "never", "never", "never", "never", "never"];

let jr = [
{
	"name": "CamEst thou from an OBJECT in TOP?" ,
	"printableCode": "p r i n n a b l e" ,
	"data1": "nihilwordsQuote",
	"verb": "function(a){return this.a}"
},
{
	"name": "Gramps & Fran",
	"printableCode": "null" ,
	"verb": "function(a){return this.a}"
}
];


let rotators =
[
  {
    "Rk": 1,
    "Pos": "SP",
    "Name": "Jordan Zimmermann",
    "Age": 33,
    "W": 0,
    "L": 0,
    "W-L%": "",
    "ERA": 0.66,
    "G": 2,
    "GS": 2,
    "GF": 0,
    "CG": 0,
    "SHO": 0,
    "SV": 0,
    "IP": 13.2,
    "H": 7,
    "R": 1,
    "ER": 1,
    "HR": 0,
    "BB": 1,
    "IBB": 1,
    "K": 10,
    "HBP": 0,
    "BK": 0,
    "WP": 0,
    "BF": 49,
    "ERA+": 540,
    "FIP": 1.69,
    "WHIP": 0.585,
    "H9": 4.6,
    "HR9": 0,
    "BB9": 0.7,
    "SO9": 6.6,
    "SO/W": 10
  },
  {
    "Rk": 2,
    "Pos": "SP",
    "Name": "Matthew Boyd",
    "Age": 28,
    "W": 0,
    "L": 1,
    "W-L%": 0,
    "ERA": 3.18,
    "G": 2,
    "GS": 2,
    "GF": 0,
    "CG": 0,
    "SHO": 0,
    "SV": 0,
    "IP": 11.1,
    "H": 10,
    "R": 5,
    "ER": 4,
    "HR": 0,
    "BB": 4,
    "IBB": 0,
    "K": 23,
    "HBP": 0,
    "BK": 0,
    "WP": 0,
    "BF": 48,
    "ERA+": 113,
    "FIP": -0.07,
    "WHIP": 1.235,
    "H9": 7.9,
    "HR9": 0,
    "BB9": 3.2,
    "SO9": 18.3,
    "SO/W": 5.75
  },
  {
    "Rk": 3,
    "Pos": "SP",
    "Name": "Matt Moore",
    "Age": 30,
    "W": 0,
    "L": 0,
    "W-L%": "",
    "ERA": 0,
    "G": 1,
    "GS": 1,
    "GF": 0,
    "CG": 0,
    "SHO": 0,
    "SV": 0,
    "IP": 7,
    "H": 2,
    "R": 0,
    "ER": 0,
    "HR": 0,
    "BB": 1,
    "IBB": 0,
    "K": 6,
    "HBP": 0,
    "BK": 0,
    "WP": 0,
    "BF": 23,
    "ERA+": "",
    "FIP": 1.64,
    "WHIP": 0.429,
    "H9": 2.6,
    "HR9": 0,
    "BB9": 1.3,
    "SO9": 7.7,
    "SO/W": 6
  },
  {
    "Rk": 4,
    "Pos": "SP",
    "Name": "Spencer Turnbull",
    "Age": 26,
    "W": 0,
    "L": 1,
    "W-L%": 0,
    "ERA": 5.4,
    "G": 1,
    "GS": 1,
    "GF": 0,
    "CG": 0,
    "SHO": 0,
    "SV": 0,
    "IP": 5,
    "H": 4,
    "R": 3,
    "ER": 3,
    "HR": 1,
    "BB": 2,
    "IBB": 0,
    "K": 5,
    "HBP": 1,
    "BK": 0,
    "WP": 0,
    "BF": 21,
    "ERA+": 69,
    "FIP": 5.33,
    "WHIP": 1.2,
    "H9": 7.2,
    "HR9": 1.8,
    "BB9": 3.6,
    "SO9": 9,
    "SO/W": 2.5
  },
  {
    "Rk": 5,
    "Pos": "SP",
    "Name": "Tyson Ross",
    "Age": 32,
    "W": 0,
    "L": 1,
    "W-L%": 0,
    "ERA": 3.6,
    "G": 1,
    "GS": 1,
    "GF": 0,
    "CG": 0,
    "SHO": 0,
    "SV": 0,
    "IP": 5,
    "H": 4,
    "R": 3,
    "ER": 2,
    "HR": 2,
    "BB": 4,
    "IBB": 0,
    "K": 4,
    "HBP": 0,
    "BK": 0,
    "WP": 1,
    "BF": 23,
    "ERA+": 104,
    "FIP": 8.93,
    "WHIP": 1.6,
    "H9": 7.2,
    "HR9": 3.6,
    "BB9": 7.2,
    "SO9": 7.2,
    "SO/W": 1
  }
];

const nouns = [
  {
    "word": "people",
    "frequency": 372,
    "type": "(noun)"
  },
  {
    "word": "history",
    "frequency": 187,
    "type": "(noun)"
  },
  {
    "word": "way",
    "frequency": 185,
    "type": "(noun)"
  },
  {
    "word": "art",
    "frequency": 183,
    "type": "(noun)"
  },
  {
    "word": "world",
    "frequency": 169,
    "type": "(noun)"
  },
  {
    "word": "information",
    "frequency": 168,
    "type": "(noun)"
  },
  {
    "word": "map",
    "frequency": 167,
    "type": "(noun)"
  },
  {
    "word": "two",
    "frequency": 164,
    "type": "(noun)"
  },
  {
    "word": "family",
    "frequency": 159,
    "type": "(noun)"
  },
  {
    "word": "government",
    "frequency": 143,
    "type": "(noun)"
  },
  {
    "word": "health",
    "frequency": 122,
    "type": "(noun)"
  },
  {
    "word": "system",
    "frequency": 111,
    "type": "(noun)"
  },
  {
    "word": "computer",
    "frequency": 109,
    "type": "(noun)"
  },
  {
    "word": "meat",
    "frequency": 99,
    "type": "(noun)"
  },
  {
    "word": "year",
    "frequency": 96,
    "type": "(noun)"
  },
  {
    "word": "thanks",
    "frequency": 84,
    "type": "(noun)"
  },
  {
    "word": "music",
    "frequency": 80,
    "type": "(noun)"
  },
  {
    "word": "person",
    "frequency": 80,
    "type": "(noun)"
  },
  {
    "word": "reading",
    "frequency": 77,
    "type": "(noun)"
  },
  {
    "word": "method",
    "frequency": 76,
    "type": "(noun)"
  },
  {
    "word": "data",
    "frequency": 74,
    "type": "(noun)"
  },
  {
    "word": "food",
    "frequency": 73,
    "type": "(noun)"
  },
  {
    "word": "understanding",
    "frequency": 73,
    "type": "(noun)"
  },
  {
    "word": "theory",
    "frequency": 71,
    "type": "(noun)"
  },
  {
    "word": "law",
    "frequency": 70,
    "type": "(noun)"
  },
  {
    "word": "bird",
    "frequency": 68,
    "type": "(noun)"
  },
  {
    "word": "literature",
    "frequency": 67,
    "type": "(noun)"
  },
  {
    "word": "problem",
    "frequency": 66,
    "type": "(noun)"
  },
  {
    "word": "software",
    "frequency": 63,
    "type": "(noun)"
  },
  {
    "word": "control",
    "frequency": 62,
    "type": "(noun)"
  },
  {
    "word": "knowledge",
    "frequency": 62,
    "type": "(noun)"
  },
  {
    "word": "power",
    "frequency": 62,
    "type": "(noun)"
  },
  {
    "word": "ability",
    "frequency": 61,
    "type": "(noun)"
  },
  {
    "word": "economics",
    "frequency": 61,
    "type": "(noun)"
  },
  {
    "word": "love",
    "frequency": 60,
    "type": "(noun)"
  },
  {
    "word": "internet",
    "frequency": 59,
    "type": "(noun)"
  },
  {
    "word": "television",
    "frequency": 59,
    "type": "(noun)"
  },
  {
    "word": "science",
    "frequency": 58,
    "type": "(noun)"
  },
  {
    "word": "library",
    "frequency": 57,
    "type": "(noun)"
  },
  {
    "word": "nature",
    "frequency": 57,
    "type": "(noun)"
  },
  {
    "word": "fact",
    "frequency": 56,
    "type": "(noun)"
  },
  {
    "word": "product",
    "frequency": 56,
    "type": "(noun)"
  },
  {
    "word": "idea",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "temperature",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "investment",
    "frequency": 52,
    "type": "(noun)"
  },
  {
    "word": "area",
    "frequency": 50,
    "type": "(noun)"
  },
  {
    "word": "society",
    "frequency": 50,
    "type": "(noun)"
  },
  {
    "word": "activity",
    "frequency": 48,
    "type": "(noun)"
  },
  {
    "word": "story",
    "frequency": 48,
    "type": "(noun)"
  },
  {
    "word": "industry",
    "frequency": 47,
    "type": "(noun)"
  },
  {
    "word": "media",
    "frequency": 47,
    "type": "(noun)"
  },
  {
    "word": "thing",
    "frequency": 47,
    "type": "(noun)"
  },
  {
    "word": "oven",
    "frequency": 45,
    "type": "(noun)"
  },
  {
    "word": "community",
    "frequency": 44,
    "type": "(noun)"
  },
  {
    "word": "definition",
    "frequency": 44,
    "type": "(noun)"
  },
  {
    "word": "safety",
    "frequency": 44,
    "type": "(noun)"
  },
  {
    "word": "quality",
    "frequency": 43,
    "type": "(noun)"
  },
  {
    "word": "development",
    "frequency": 42,
    "type": "(noun)"
  },
  {
    "word": "language",
    "frequency": 42,
    "type": "(noun)"
  },
  {
    "word": "management",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "player",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "variety",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "video",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "week",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "security",
    "frequency": 38,
    "type": "(noun)"
  },
  {
    "word": "country",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "exam",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "movie",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "organization",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "equipment",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "physics",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "analysis",
    "frequency": 34,
    "type": "(noun)"
  },
  {
    "word": "policy",
    "frequency": 34,
    "type": "(noun)"
  },
  {
    "word": "series",
    "frequency": 34,
    "type": "(noun)"
  },
  {
    "word": "thought",
    "frequency": 34,
    "type": "(noun)"
  },
  {
    "word": "basis",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "boyfriend",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "direction",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "strategy",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "technology",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "army",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "camera",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "freedom",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "paper",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "environment",
    "frequency": 31,
    "type": "(noun)"
  },
  {
    "word": "child",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "instance",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "month",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "truth",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "marketing",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "university",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "writing",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "article",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "department",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "difference",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "goal",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "news",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "audience",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "fishing",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "growth",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "income",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "marriage",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "user",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "combination",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "failure",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "meaning",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "medicine",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "philosophy",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "teacher",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "communication",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "night",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "chemistry",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "disease",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "disk",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "energy",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "nation",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "road",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "role",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "soup",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "advertising",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "location",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "success",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "addition",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "apartment",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "education",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "math",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "moment",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "painting",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "politics",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "attention",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "decision",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "event",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "property",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "shopping",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "student",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "wood",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "competition",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "distribution",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "entertainment",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "office",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "population",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "president",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "unit",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "category",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "cigarette",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "context",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "introduction",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "opportunity",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "performance",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "driver",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "flight",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "length",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "magazine",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "newspaper",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "relationship",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "teaching",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "cell",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "dealer",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "finding",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "lake",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "member",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "message",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "phone",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "scene",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "appearance",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "association",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "concept",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "customer",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "death",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "discussion",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "housing",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "inflation",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "insurance",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "mood",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "woman",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "advice",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "blood",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "effort",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "expression",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "importance",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "opinion",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "payment",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "reality",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "responsibility",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "situation",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "skill",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "statement",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "wealth",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "application",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "city",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "county",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "depth",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "estate",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "foundation",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "grandmother",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "heart",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "perspective",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "photo",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "recipe",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "studio",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "topic",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "collection",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "depression",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "imagination",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "passion",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "percentage",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "resource",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "setting",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "ad",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "agency",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "college",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "connection",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "criticism",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "debt",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "description",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "memory",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "patience",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "secretary",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "solution",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "administration",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "aspect",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "attitude",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "director",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "personality",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "psychology",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "recommendation",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "response",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "selection",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "storage",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "version",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "alcohol",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "argument",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "complaint",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "contract",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "emphasis",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "highway",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "loss",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "membership",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "possession",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "preparation",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "steak",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "union",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "agreement",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "cancer",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "currency",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "employment",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "engineering",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "entry",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "interaction",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "mixture",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "preference",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "region",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "republic",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "tradition",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "virus",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "actor",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "classroom",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "delivery",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "device",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "difficulty",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "drama",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "election",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "engine",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "football",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "guidance",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "hotel",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "owner",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "priority",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "protection",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "suggestion",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "tension",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "variation",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "anxiety",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "atmosphere",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "awareness",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "bath",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "bread",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "candidate",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "climate",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "comparison",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "confusion",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "construction",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "elevator",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "emotion",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "employee",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "employer",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "guest",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "height",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "leadership",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "mall",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "manager",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "operation",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "recording",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "sample",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "transportation",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "charity",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "cousin",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "disaster",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "editor",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "efficiency",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "excitement",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "extent",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "feedback",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "guitar",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "homework",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "leader",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "mom",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "outcome",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "permission",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "presentation",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "promotion",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "reflection",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "refrigerator",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "resolution",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "revenue",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "session",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "singer",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "tennis",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "basket",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "bonus",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "cabinet",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "childhood",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "church",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "clothes",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "coffee",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "dinner",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "drawing",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "hair",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "hearing",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "initiative",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "judgment",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "lab",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "measurement",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "mode",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "mud",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "orange",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "poetry",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "police",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "possibility",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "procedure",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "queen",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "ratio",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "relation",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "restaurant",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "satisfaction",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "sector",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "signature",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "significance",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "song",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "tooth",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "town",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "vehicle",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "volume",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "wife",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "accident",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "airport",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "appointment",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "arrival",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "assumption",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "baseball",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "chapter",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "committee",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "conversation",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "database",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "enthusiasm",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "error",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "explanation",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "farmer",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "gate",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "girl",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "hall",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "historian",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "hospital",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "injury",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "instruction",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "maintenance",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "manufacturer",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "meal",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "perception",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "pie",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "poem",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "presence",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "proposal",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "reception",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "replacement",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "revolution",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "river",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "son",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "speech",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "tea",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "village",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "warning",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "winner",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "worker",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "writer",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "assistance",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "breath",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "buyer",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "chest",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "chocolate",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "conclusion",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "contribution",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "cookie",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "courage",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "dad",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "desk",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "drawer",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "establishment",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "examination",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "garbage",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "grocery",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "honey",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "impression",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "improvement",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "independence",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "insect",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "inspection",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "inspector",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "king",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "ladder",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "menu",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "penalty",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "piano",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "potato",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "profession",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "professor",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "quantity",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "reaction",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "requirement",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "salad",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "sister",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "supermarket",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "tongue",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "weakness",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "wedding",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "affair",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "ambition",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "analyst",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "apple",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "assignment",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "assistant",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "bathroom",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "bedroom",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "beer",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "birthday",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "celebration",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "championship",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "cheek",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "client",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "consequence",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "departure",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "diamond",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "dirt",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "ear",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "fortune",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "friendship",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "funeral",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "gene",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "girlfriend",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "hat",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "indication",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "intention",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "lady",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "midnight",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "negotiation",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "obligation",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "passenger",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "pizza",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "platform",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "poet",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "pollution",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "recognition",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "reputation",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "shirt",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "sir",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "speaker",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "stranger",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "surgery",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "sympathy",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "tale",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "throat",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "trainer",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "uncle",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "youth",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "time",
    "frequency": 369,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "work",
    "frequency": 224,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "film",
    "frequency": 209,
    "type": "(noun, verb)"
  },
  {
    "word": "water",
    "frequency": 201,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "money",
    "frequency": 174,
    "type": "(noun, adjective)"
  },
  {
    "word": "example",
    "frequency": 147,
    "type": "(noun, verb)"
  },
  {
    "word": "while",
    "frequency": 147,
    "type": "(noun, conjunction, preposition)"
  },
  {
    "word": "business",
    "frequency": 127,
    "type": "(noun, adjective)"
  },
  {
    "word": "study",
    "frequency": 118,
    "type": "(noun, verb)"
  },
  {
    "word": "game",
    "frequency": 117,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "life",
    "frequency": 107,
    "type": "(noun, adjective)"
  },
  {
    "word": "form",
    "frequency": 99,
    "type": "(noun, verb)"
  },
  {
    "word": "air",
    "frequency": 98,
    "type": "(noun, verb)"
  },
  {
    "word": "day",
    "frequency": 98,
    "type": "(noun, adjective)"
  },
  {
    "word": "place",
    "frequency": 98,
    "type": "(noun, verb)"
  },
  {
    "word": "number",
    "frequency": 97,
    "type": "(noun, verb)"
  },
  {
    "word": "part",
    "frequency": 96,
    "type": "(noun, verb, adverb)"
  },
  {
    "word": "field",
    "frequency": 95,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "fish",
    "frequency": 92,
    "type": "(noun, verb)"
  },
  {
    "word": "back",
    "frequency": 86,
    "type": "(noun, adverb, verb)"
  },
  {
    "word": "process",
    "frequency": 85,
    "type": "(noun, verb)"
  },
  {
    "word": "heat",
    "frequency": 84,
    "type": "(noun, verb)"
  },
  {
    "word": "hand",
    "frequency": 81,
    "type": "(noun, verb)"
  },
  {
    "word": "experience",
    "frequency": 80,
    "type": "(noun, verb)"
  },
  {
    "word": "job",
    "frequency": 80,
    "type": "(noun, verb)"
  },
  {
    "word": "book",
    "frequency": 77,
    "type": "(noun, verb)"
  },
  {
    "word": "end",
    "frequency": 76,
    "type": "(noun, verb)"
  },
  {
    "word": "point",
    "frequency": 74,
    "type": "(noun, verb)"
  },
  {
    "word": "type",
    "frequency": 74,
    "type": "(noun, verb)"
  },
  {
    "word": "home",
    "frequency": 72,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "economy",
    "frequency": 71,
    "type": "(noun, adjective)"
  },
  {
    "word": "value",
    "frequency": 70,
    "type": "(noun, verb)"
  },
  {
    "word": "body",
    "frequency": 69,
    "type": "(noun, verb)"
  },
  {
    "word": "market",
    "frequency": 69,
    "type": "(noun, verb)"
  },
  {
    "word": "guide",
    "frequency": 68,
    "type": "(noun, verb)"
  },
  {
    "word": "interest",
    "frequency": 67,
    "type": "(noun, verb)"
  },
  {
    "word": "state",
    "frequency": 63,
    "type": "(noun, verb)"
  },
  {
    "word": "radio",
    "frequency": 62,
    "type": "(noun, verb)"
  },
  {
    "word": "course",
    "frequency": 61,
    "type": "(noun, verb)"
  },
  {
    "word": "company",
    "frequency": 60,
    "type": "(noun, verb)"
  },
  {
    "word": "price",
    "frequency": 60,
    "type": "(noun, verb)"
  },
  {
    "word": "size",
    "frequency": 60,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "card",
    "frequency": 58,
    "type": "(noun, verb)"
  },
  {
    "word": "list",
    "frequency": 58,
    "type": "(noun, verb)"
  },
  {
    "word": "mind",
    "frequency": 58,
    "type": "(noun, verb)"
  },
  {
    "word": "trade",
    "frequency": 58,
    "type": "(noun, verb)"
  },
  {
    "word": "line",
    "frequency": 56,
    "type": "(noun, verb)"
  },
  {
    "word": "care",
    "frequency": 55,
    "type": "(noun, verb)"
  },
  {
    "word": "group",
    "frequency": 55,
    "type": "(noun, verb)"
  },
  {
    "word": "risk",
    "frequency": 55,
    "type": "(noun, verb)"
  },
  {
    "word": "word",
    "frequency": 55,
    "type": "(noun, verb, interjection)"
  },
  {
    "word": "fat",
    "frequency": 54,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "force",
    "frequency": 54,
    "type": "(noun, verb)"
  },
  {
    "word": "key",
    "frequency": 54,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "light",
    "frequency": 54,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "training",
    "frequency": 54,
    "type": "(noun, adjective)"
  },
  {
    "word": "name",
    "frequency": 53,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "school",
    "frequency": 53,
    "type": "(noun, verb)"
  },
  {
    "word": "top",
    "frequency": 53,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "amount",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "level",
    "frequency": 51,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "order",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "practice",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "research",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "sense",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "service",
    "frequency": 51,
    "type": "(noun, verb)"
  },
  {
    "word": "piece",
    "frequency": 50,
    "type": "(noun, verb)"
  },
  {
    "word": "web",
    "frequency": 49,
    "type": "(noun, verb)"
  },
  {
    "word": "boss",
    "frequency": 48,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "sport",
    "frequency": 47,
    "type": "(noun, verb)"
  },
  {
    "word": "fun",
    "frequency": 46,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "house",
    "frequency": 46,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "page",
    "frequency": 46,
    "type": "(noun, verb)"
  },
  {
    "word": "term",
    "frequency": 46,
    "type": "(noun, verb)"
  },
  {
    "word": "test",
    "frequency": 46,
    "type": "(noun, verb)"
  },
  {
    "word": "answer",
    "frequency": 45,
    "type": "(noun, verb)"
  },
  {
    "word": "sound",
    "frequency": 45,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "focus",
    "frequency": 44,
    "type": "(noun, verb)"
  },
  {
    "word": "matter",
    "frequency": 44,
    "type": "(noun, verb)"
  },
  {
    "word": "kind",
    "frequency": 43,
    "type": "(noun, adjective)"
  },
  {
    "word": "soil",
    "frequency": 43,
    "type": "(noun, verb)"
  },
  {
    "word": "board",
    "frequency": 42,
    "type": "(noun, verb)"
  },
  {
    "word": "oil",
    "frequency": 42,
    "type": "(noun, verb)"
  },
  {
    "word": "picture",
    "frequency": 42,
    "type": "(noun, verb)"
  },
  {
    "word": "access",
    "frequency": 41,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "garden",
    "frequency": 41,
    "type": "(noun, verb)"
  },
  {
    "word": "range",
    "frequency": 41,
    "type": "(noun, verb)"
  },
  {
    "word": "rate",
    "frequency": 41,
    "type": "(noun, verb)"
  },
  {
    "word": "reason",
    "frequency": 41,
    "type": "(noun, verb)"
  },
  {
    "word": "future",
    "frequency": 40,
    "type": "(noun, adjective)"
  },
  {
    "word": "site",
    "frequency": 40,
    "type": "(noun, verb)"
  },
  {
    "word": "demand",
    "frequency": 39,
    "type": "(noun, verb)"
  },
  {
    "word": "exercise",
    "frequency": 39,
    "type": "(noun, verb)"
  },
  {
    "word": "image",
    "frequency": 39,
    "type": "(noun, verb)"
  },
  {
    "word": "case",
    "frequency": 38,
    "type": "(noun, verb)"
  },
  {
    "word": "cause",
    "frequency": 38,
    "type": "(noun, verb)"
  },
  {
    "word": "coast",
    "frequency": 38,
    "type": "(noun, verb)"
  },
  {
    "word": "action",
    "frequency": 37,
    "type": "(noun, adjective)"
  },
  {
    "word": "age",
    "frequency": 37,
    "type": "(noun, verb)"
  },
  {
    "word": "bad",
    "frequency": 37,
    "type": "(noun, adverb, adjective)"
  },
  {
    "word": "boat",
    "frequency": 37,
    "type": "(noun, verb)"
  },
  {
    "word": "record",
    "frequency": 37,
    "type": "(noun, verb)"
  },
  {
    "word": "result",
    "frequency": 37,
    "type": "(noun, verb)"
  },
  {
    "word": "section",
    "frequency": 37,
    "type": "(noun, verb)"
  },
  {
    "word": "building",
    "frequency": 36,
    "type": "(noun, verb)"
  },
  {
    "word": "mouse",
    "frequency": 36,
    "type": "(noun, verb)"
  },
  {
    "word": "cash",
    "frequency": 35,
    "type": "(noun, verb)"
  },
  {
    "word": "class",
    "frequency": 35,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "nothing",
    "frequency": 35,
    "type": "(noun, pronoun, adjective)"
  },
  {
    "word": "period",
    "frequency": 35,
    "type": "(noun, adjective)"
  },
  {
    "word": "plan",
    "frequency": 35,
    "type": "(noun, verb)"
  },
  {
    "word": "store",
    "frequency": 35,
    "type": "(noun, verb)"
  },
  {
    "word": "tax",
    "frequency": 35,
    "type": "(noun, verb)"
  },
  {
    "word": "side",
    "frequency": 34,
    "type": "(noun, verb)"
  },
  {
    "word": "subject",
    "frequency": 34,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "space",
    "frequency": 33,
    "type": "(noun, verb)"
  },
  {
    "word": "rule",
    "frequency": 32,
    "type": "(noun, verb)"
  },
  {
    "word": "stock",
    "frequency": 32,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "weather",
    "frequency": 32,
    "type": "(noun, verb)"
  },
  {
    "word": "chance",
    "frequency": 31,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "figure",
    "frequency": 31,
    "type": "(noun, verb)"
  },
  {
    "word": "man",
    "frequency": 31,
    "type": "(noun, verb, interjection)"
  },
  {
    "word": "model",
    "frequency": 31,
    "type": "(noun, verb)"
  },
  {
    "word": "source",
    "frequency": 31,
    "type": "(noun, verb)"
  },
  {
    "word": "beginning",
    "frequency": 30,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "earth",
    "frequency": 30,
    "type": "(noun, verb)"
  },
  {
    "word": "program",
    "frequency": 30,
    "type": "(noun, verb)"
  },
  {
    "word": "chicken",
    "frequency": 29,
    "type": "(noun, adjective)"
  },
  {
    "word": "design",
    "frequency": 29,
    "type": "(noun, verb)"
  },
  {
    "word": "feature",
    "frequency": 29,
    "type": "(noun, verb)"
  },
  {
    "word": "head",
    "frequency": 29,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "material",
    "frequency": 29,
    "type": "(noun, adjective)"
  },
  {
    "word": "purpose",
    "frequency": 29,
    "type": "(noun, verb)"
  },
  {
    "word": "question",
    "frequency": 29,
    "type": "(noun, verb)"
  },
  {
    "word": "rock",
    "frequency": 29,
    "type": "(noun, verb)"
  },
  {
    "word": "salt",
    "frequency": 29,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "act",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "birth",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "car",
    "frequency": 28,
    "type": "(noun, adjective)"
  },
  {
    "word": "dog",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "object",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "scale",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "sun",
    "frequency": 28,
    "type": "(noun, verb)"
  },
  {
    "word": "note",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "profit",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "rent",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "speed",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "style",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "war",
    "frequency": 27,
    "type": "(noun, verb)"
  },
  {
    "word": "bank",
    "frequency": 26,
    "type": "(noun, verb)"
  },
  {
    "word": "craft",
    "frequency": 26,
    "type": "(noun, verb)"
  },
  {
    "word": "half",
    "frequency": 26,
    "type": "(noun, predeterminer, adverb)"
  },
  {
    "word": "inside",
    "frequency": 26,
    "type": "(noun, adjective, preposition)"
  },
  {
    "word": "outside",
    "frequency": 26,
    "type": "(noun, adjective, preposition)"
  },
  {
    "word": "standard",
    "frequency": 26,
    "type": "(noun, adjective)"
  },
  {
    "word": "bus",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "exchange",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "eye",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "fire",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "position",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "pressure",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "stress",
    "frequency": 25,
    "type": "(noun, verb)"
  },
  {
    "word": "advantage",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "benefit",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "box",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "frame",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "issue",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "step",
    "frequency": 24,
    "type": "(noun, verb)"
  },
  {
    "word": "cycle",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "face",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "item",
    "frequency": 23,
    "type": "(noun, adverb)"
  },
  {
    "word": "metal",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "paint",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "review",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "room",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "screen",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "structure",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "view",
    "frequency": 23,
    "type": "(noun, verb)"
  },
  {
    "word": "account",
    "frequency": 22,
    "type": "(noun, verb)"
  },
  {
    "word": "ball",
    "frequency": 22,
    "type": "(noun, verb)"
  },
  {
    "word": "discipline",
    "frequency": 22,
    "type": "(noun, verb)"
  },
  {
    "word": "medium",
    "frequency": 22,
    "type": "(noun, adjective)"
  },
  {
    "word": "share",
    "frequency": 22,
    "type": "(noun, verb)"
  },
  {
    "word": "balance",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "bit",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "black",
    "frequency": 21,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "bottom",
    "frequency": 21,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "choice",
    "frequency": 21,
    "type": "(noun, adjective)"
  },
  {
    "word": "gift",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "impact",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "machine",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "shape",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "tool",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "wind",
    "frequency": 21,
    "type": "(noun, verb)"
  },
  {
    "word": "address",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "average",
    "frequency": 20,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "career",
    "frequency": 20,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "culture",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "morning",
    "frequency": 20,
    "type": "(noun, adverb)"
  },
  {
    "word": "pot",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "sign",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "table",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "task",
    "frequency": 20,
    "type": "(noun, verb)"
  },
  {
    "word": "condition",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "contact",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "credit",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "egg",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "hope",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "ice",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "network",
    "frequency": 19,
    "type": "(noun, verb)"
  },
  {
    "word": "north",
    "frequency": 19,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "square",
    "frequency": 19,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "attempt",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "date",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "effect",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "link",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "post",
    "frequency": 18,
    "type": "(noun, verb, adverb)"
  },
  {
    "word": "star",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "voice",
    "frequency": 18,
    "type": "(noun, verb)"
  },
  {
    "word": "capital",
    "frequency": 17,
    "type": "(noun, adjective)"
  },
  {
    "word": "challenge",
    "frequency": 17,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "friend",
    "frequency": 17,
    "type": "(noun, verb)"
  },
  {
    "word": "self",
    "frequency": 17,
    "type": "(noun, pronoun, adjective)"
  },
  {
    "word": "shot",
    "frequency": 17,
    "type": "(noun, adjective)"
  },
  {
    "word": "brush",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "couple",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "debate",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "exit",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "front",
    "frequency": 16,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "function",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "lack",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "living",
    "frequency": 16,
    "type": "(noun, adjective)"
  },
  {
    "word": "plant",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "plastic",
    "frequency": 16,
    "type": "(noun, adjective)"
  },
  {
    "word": "spot",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "summer",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "taste",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "theme",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "track",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "wing",
    "frequency": 16,
    "type": "(noun, verb)"
  },
  {
    "word": "brain",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "button",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "click",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "desire",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "foot",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "gas",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "influence",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "notice",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "rain",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "wall",
    "frequency": 15,
    "type": "(noun, verb)"
  },
  {
    "word": "base",
    "frequency": 14,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "damage",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "distance",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "feeling",
    "frequency": 14,
    "type": "(noun, adjective)"
  },
  {
    "word": "pair",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "savings",
    "frequency": 14,
    "type": "(noun, adjective, preposition)"
  },
  {
    "word": "staff",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "sugar",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "target",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "text",
    "frequency": 14,
    "type": "(noun, verb)"
  },
  {
    "word": "animal",
    "frequency": 13,
    "type": "(noun, adjective)"
  },
  {
    "word": "author",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "budget",
    "frequency": 13,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "discount",
    "frequency": 13,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "file",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "ground",
    "frequency": 13,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "lesson",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "minute",
    "frequency": 13,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "officer",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "phase",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "reference",
    "frequency": 13,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "register",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "sky",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "stage",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "stick",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "title",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "trouble",
    "frequency": 13,
    "type": "(noun, verb)"
  },
  {
    "word": "bowl",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "bridge",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "campaign",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "character",
    "frequency": 12,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "club",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "edge",
    "frequency": 12,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "evidence",
    "frequency": 12,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "fan",
    "frequency": 12,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "letter",
    "frequency": 12,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "lock",
    "frequency": 12,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "maximum",
    "frequency": 12,
    "type": "(noun, adjective)"
  },
  {
    "word": "novel",
    "frequency": 12,
    "type": "(noun, adjective)"
  },
  {
    "word": "option",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "pack",
    "frequency": 12,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "park",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "plenty",
    "frequency": 12,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "quarter",
    "frequency": 12,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "skin",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "sort",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "weight",
    "frequency": 12,
    "type": "(noun, verb)"
  },
  {
    "word": "baby",
    "frequency": 11,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "background",
    "frequency": 11,
    "type": "(noun, adjective)"
  },
  {
    "word": "carry",
    "frequency": 11,
    "type": "(noun, verb)"
  },
  {
    "word": "dish",
    "frequency": 11,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "factor",
    "frequency": 11,
    "type": "(noun, verb)"
  },
  {
    "word": "fruit",
    "frequency": 11,
    "type": "(noun, verb)"
  },
  {
    "word": "glass",
    "frequency": 11,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "joint",
    "frequency": 11,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "master",
    "frequency": 11,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "muscle",
    "frequency": 11,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "red",
    "frequency": 11,
    "type": "(noun, adjective, idiom)"
  },
  {
    "word": "strength",
    "frequency": 11,
    "type": "(noun, idiom)"
  },
  {
    "word": "traffic",
    "frequency": 11,
    "type": "(noun, verb)"
  },
  {
    "word": "trip",
    "frequency": 11,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "vegetable",
    "frequency": 11,
    "type": "(noun, adjective)"
  },
  {
    "word": "appeal",
    "frequency": 10,
    "type": "(noun, verb)"
  },
  {
    "word": "chart",
    "frequency": 10,
    "type": "(noun, verb)"
  },
  {
    "word": "gear",
    "frequency": 10,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "ideal",
    "frequency": 10,
    "type": "(noun, adjective)"
  },
  {
    "word": "kitchen",
    "frequency": 10,
    "type": "(noun, adjective)"
  },
  {
    "word": "land",
    "frequency": 10,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "log",
    "frequency": 10,
    "type": "(noun, verb)"
  },
  {
    "word": "mother",
    "frequency": 10,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "net",
    "frequency": 10,
    "type": "(noun, verb)"
  },
  {
    "word": "party",
    "frequency": 10,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "principle",
    "frequency": 10,
    "type": "(noun, idiom)"
  },
  {
    "word": "relative",
    "frequency": 10,
    "type": "(noun, adjective)"
  },
  {
    "word": "sale",
    "frequency": 10,
    "type": "(noun, idiom)"
  },
  {
    "word": "season",
    "frequency": 10,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "signal",
    "frequency": 10,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "spirit",
    "frequency": 10,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "street",
    "frequency": 10,
    "type": "(noun, adjective, idiom)"
  },
  {
    "word": "tree",
    "frequency": 10,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "wave",
    "frequency": 10,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "belt",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "bench",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "commission",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "copy",
    "frequency": 9,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "drop",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "minimum",
    "frequency": 9,
    "type": "(noun, adjective)"
  },
  {
    "word": "path",
    "frequency": 9,
    "type": "(noun, idiom)"
  },
  {
    "word": "progress",
    "frequency": 9,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "project",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "sea",
    "frequency": 9,
    "type": "(noun, adjective, idiom)"
  },
  {
    "word": "south",
    "frequency": 9,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "status",
    "frequency": 9,
    "type": "(noun, adjective)"
  },
  {
    "word": "stuff",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "ticket",
    "frequency": 9,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "tour",
    "frequency": 9,
    "type": "(noun, verb)"
  },
  {
    "word": "angle",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "blue",
    "frequency": 8,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "breakfast",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "confidence",
    "frequency": 8,
    "type": "(noun, idiom)"
  },
  {
    "word": "daughter",
    "frequency": 8,
    "type": "(noun, adjective)"
  },
  {
    "word": "degree",
    "frequency": 8,
    "type": "(noun, idiom)"
  },
  {
    "word": "doctor",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "dot",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "dream",
    "frequency": 8,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "duty",
    "frequency": 8,
    "type": "(noun, idiom)"
  },
  {
    "word": "essay",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "father",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "fee",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "finance",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "hour",
    "frequency": 8,
    "type": "(noun, adjective, idiom)"
  },
  {
    "word": "juice",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "limit",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "luck",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "milk",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "mouth",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "peace",
    "frequency": 8,
    "type": "(noun, interjection, verb)"
  },
  {
    "word": "pipe",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "seat",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "stable",
    "frequency": 8,
    "type": "(noun, verb)"
  },
  {
    "word": "storm",
    "frequency": 8,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "substance",
    "frequency": 8,
    "type": "(noun, idiom)"
  },
  {
    "word": "team",
    "frequency": 8,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "trick",
    "frequency": 8,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "afternoon",
    "frequency": 7,
    "type": "(noun, adjective)"
  },
  {
    "word": "bat",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "beach",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "blank",
    "frequency": 7,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "catch",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "chain",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "consideration",
    "frequency": 7,
    "type": "(noun, idiom)"
  },
  {
    "word": "cream",
    "frequency": 7,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "crew",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "detail",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "gold",
    "frequency": 7,
    "type": "(noun, adjective)"
  },
  {
    "word": "interview",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "kid",
    "frequency": 7,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "mark",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "match",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "mission",
    "frequency": 7,
    "type": "(noun, adjective)"
  },
  {
    "word": "pain",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "pleasure",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "score",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "screw",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "sex",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "shop",
    "frequency": 7,
    "type": "(noun, verb, interjection)"
  },
  {
    "word": "shower",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "suit",
    "frequency": 7,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "tone",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "window",
    "frequency": 7,
    "type": "(noun, verb)"
  },
  {
    "word": "agent",
    "frequency": 6,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "band",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "block",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "bone",
    "frequency": 6,
    "type": "(noun, verb, adverb)"
  },
  {
    "word": "calendar",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "cap",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "coat",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "contest",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "corner",
    "frequency": 6,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "court",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "cup",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "district",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "door",
    "frequency": 6,
    "type": "(noun, idiom)"
  },
  {
    "word": "east",
    "frequency": 6,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "finger",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "garage",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "guarantee",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "hole",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "hook",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "implement",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "layer",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "lecture",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "lie",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "manner",
    "frequency": 6,
    "type": "(noun, idiom)"
  },
  {
    "word": "meeting",
    "frequency": 6,
    "type": "(noun, idiom)"
  },
  {
    "word": "nose",
    "frequency": 6,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "parking",
    "frequency": 6,
    "type": "(noun, adjective)"
  },
  {
    "word": "partner",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "profile",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "respect",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "rice",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "routine",
    "frequency": 6,
    "type": "(noun, adjective)"
  },
  {
    "word": "schedule",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "swimming",
    "frequency": 6,
    "type": "(noun, adjective)"
  },
  {
    "word": "telephone",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "tip",
    "frequency": 6,
    "type": "(noun, verb)"
  },
  {
    "word": "winter",
    "frequency": 6,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "airline",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "bag",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "battle",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "bed",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "bill",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "bother",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "cake",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "code",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "curve",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "designer",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "dimension",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "dress",
    "frequency": 5,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "ease",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "emergency",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "evening",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "extension",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "farm",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "fight",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "gap",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "grade",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "holiday",
    "frequency": 5,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "horror",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "horse",
    "frequency": 5,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "host",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "husband",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "loan",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "mistake",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "mountain",
    "frequency": 5,
    "type": "(noun, adjective, idiom)"
  },
  {
    "word": "nail",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "noise",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "occasion",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "package",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "patient",
    "frequency": 5,
    "type": "(noun, adjective)"
  },
  {
    "word": "pause",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "phrase",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "proof",
    "frequency": 5,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "race",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "relief",
    "frequency": 5,
    "type": "(noun, idiom)"
  },
  {
    "word": "sand",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "sentence",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "shoulder",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "smoke",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "stomach",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "string",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "tourist",
    "frequency": 5,
    "type": "(noun, adverb)"
  },
  {
    "word": "towel",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "vacation",
    "frequency": 5,
    "type": "(noun, verb)"
  },
  {
    "word": "west",
    "frequency": 5,
    "type": "(noun, adjective, adverb)"
  },
  {
    "word": "wheel",
    "frequency": 5,
    "type": "(noun, verb, idiom)"
  },
  {
    "word": "wine",
    "frequency": 5,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "arm",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "aside",
    "frequency": 4,
    "type": "(noun, adverb)"
  },
  {
    "word": "associate",
    "frequency": 4,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "bet",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "blow",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "border",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "branch",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "breast",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "brother",
    "frequency": 4,
    "type": "(noun, interjection)"
  },
  {
    "word": "buddy",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "bunch",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "chip",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "coach",
    "frequency": 4,
    "type": "(noun, verb, adverb)"
  },
  {
    "word": "cross",
    "frequency": 4,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "document",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "draft",
    "frequency": 4,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "dust",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "expert",
    "frequency": 4,
    "type": "(noun, adjective)"
  },
  {
    "word": "floor",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "god",
    "frequency": 4,
    "type": "(noun, interjection)"
  },
  {
    "word": "golf",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "habit",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "iron",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "judge",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "knife",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "landscape",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "league",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "mail",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "mess",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "native",
    "frequency": 4,
    "type": "(noun, adjective)"
  },
  {
    "word": "opening",
    "frequency": 4,
    "type": "(noun, adjective)"
  },
  {
    "word": "parent",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "pattern",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "pin",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "pool",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "pound",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "request",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "salary",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "shame",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "shelter",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "shoe",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "silver",
    "frequency": 4,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "tackle",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "tank",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "trust",
    "frequency": 4,
    "type": "(noun, verb)"
  },
  {
    "word": "assist",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "bake",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "bar",
    "frequency": 3,
    "type": "(noun, verb, preposition)"
  },
  {
    "word": "bell",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "bike",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "blame",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "boy",
    "frequency": 3,
    "type": "(noun, interjection)"
  },
  {
    "word": "brick",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "chair",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "closet",
    "frequency": 3,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "clue",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "collar",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "comment",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "conference",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "devil",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "diet",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "fear",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "fuel",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "glove",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "jacket",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "lunch",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "monitor",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "mortgage",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "nurse",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "pace",
    "frequency": 3,
    "type": "(noun, verb, preposition)"
  },
  {
    "word": "panic",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "peak",
    "frequency": 3,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "plane",
    "frequency": 3,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "reward",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "row",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "sandwich",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "shock",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "spite",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "spray",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "surprise",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "till",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "transition",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "weekend",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "welcome",
    "frequency": 3,
    "type": "(noun, interjection, verb)"
  },
  {
    "word": "yard",
    "frequency": 3,
    "type": "(noun, verb)"
  },
  {
    "word": "alarm",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "bend",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "bicycle",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "bite",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "blind",
    "frequency": 2,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "bottle",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "cable",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "candle",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "clerk",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "cloud",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "concert",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "counter",
    "frequency": 2,
    "type": "(noun, verb, adverb)"
  },
  {
    "word": "flower",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "grandfather",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "harm",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "knee",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "lawyer",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "leather",
    "frequency": 2,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "load",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "mirror",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "neck",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "pension",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "plate",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "purple",
    "frequency": 2,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "ruin",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "ship",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "skirt",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "slice",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "snow",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "specialist",
    "frequency": 2,
    "type": "(noun, adjective)"
  },
  {
    "word": "stroke",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "switch",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "trash",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "tune",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "zone",
    "frequency": 2,
    "type": "(noun, verb)"
  },
  {
    "word": "anger",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "award",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "bid",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "bitter",
    "frequency": 1,
    "type": "(noun, adjective)"
  },
  {
    "word": "boot",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "bug",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "camp",
    "frequency": 1,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "candy",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "carpet",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "cat",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "champion",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "channel",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "clock",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "comfort",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "cow",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "crack",
    "frequency": 1,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "engineer",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "entrance",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "fault",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "grass",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "guy",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "hell",
    "frequency": 1,
    "type": "(noun, interjection)"
  },
  {
    "word": "highlight",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "incident",
    "frequency": 1,
    "type": "(noun, adjective)"
  },
  {
    "word": "island",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "joke",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "jury",
    "frequency": 1,
    "type": "(noun, verb, adjective)"
  },
  {
    "word": "leg",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "lip",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "mate",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "motor",
    "frequency": 1,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "nerve",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "passage",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "pen",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "pride",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "priest",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "prize",
    "frequency": 1,
    "type": "(noun, adjective, verb)"
  },
  {
    "word": "promise",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "resident",
    "frequency": 1,
    "type": "(noun, adjective)"
  },
  {
    "word": "resort",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "ring",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "roof",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "rope",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "sail",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "scheme",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "script",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "sock",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "station",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "toe",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "tower",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "truck",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "witness",
    "frequency": 1,
    "type": "(noun, verb)"
  },
  {
    "word": "a",
    "frequency": 4506,
    "type": "(indefinite article, noun, preposition)"
  },
  {
    "word": "you",
    "frequency": 2041,
    "type": "(pronoun, noun)"
  },
  {
    "word": "it",
    "frequency": 1386,
    "type": "(pronoun, noun)"
  },
  {
    "word": "can",
    "frequency": 895,
    "type": "(auxiliary verb, noun)"
  },
  {
    "word": "will",
    "frequency": 577,
    "type": "(auxiliary verb, noun)"
  },
  {
    "word": "if",
    "frequency": 546,
    "type": "(conjunction, noun)"
  },
  {
    "word": "one",
    "frequency": 441,
    "type": "(adjective, noun, pronoun)"
  },
  {
    "word": "many",
    "frequency": 397,
    "type": "(adjective, noun, pronoun)"
  },
  {
    "word": "most",
    "frequency": 378,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "other",
    "frequency": 369,
    "type": "(adjective, noun, pronoun)"
  },
  {
    "word": "use",
    "frequency": 319,
    "type": "(verb, noun)"
  },
  {
    "word": "make",
    "frequency": 262,
    "type": "(verb, noun)"
  },
  {
    "word": "good",
    "frequency": 201,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "look",
    "frequency": 144,
    "type": "(verb, noun, interjection)"
  },
  {
    "word": "help",
    "frequency": 141,
    "type": "(verb, noun, interjection)"
  },
  {
    "word": "go",
    "frequency": 131,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "great",
    "frequency": 126,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "being",
    "frequency": 124,
    "type": "(verb, noun)"
  },
  {
    "word": "few",
    "frequency": 117,
    "type": "(adjective, noun, pronoun)"
  },
  {
    "word": "might",
    "frequency": 116,
    "type": "(auxiliary verb, noun)"
  },
  {
    "word": "still",
    "frequency": 112,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "public",
    "frequency": 97,
    "type": "(adjective, noun)"
  },
  {
    "word": "read",
    "frequency": 97,
    "type": "(verb, noun)"
  },
  {
    "word": "keep",
    "frequency": 96,
    "type": "(verb, noun)"
  },
  {
    "word": "start",
    "frequency": 96,
    "type": "(verb, noun)"
  },
  {
    "word": "give",
    "frequency": 93,
    "type": "(verb, noun)"
  },
  {
    "word": "human",
    "frequency": 92,
    "type": "(adjective, noun)"
  },
  {
    "word": "local",
    "frequency": 90,
    "type": "(adjective, noun)"
  },
  {
    "word": "general",
    "frequency": 85,
    "type": "(adjective, noun)"
  },
  {
    "word": "she",
    "frequency": 85,
    "type": "(pronoun, noun)"
  },
  {
    "word": "specific",
    "frequency": 83,
    "type": "(adjective, noun)"
  },
  {
    "word": "long",
    "frequency": 82,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "play",
    "frequency": 75,
    "type": "(verb, noun)"
  },
  {
    "word": "feel",
    "frequency": 74,
    "type": "(verb, noun)"
  },
  {
    "word": "high",
    "frequency": 74,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "tonight",
    "frequency": 71,
    "type": "(adverb, noun)"
  },
  {
    "word": "put",
    "frequency": 70,
    "type": "(verb, noun)"
  },
  {
    "word": "common",
    "frequency": 69,
    "type": "(adjective, noun)"
  },
  {
    "word": "set",
    "frequency": 69,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "change",
    "frequency": 67,
    "type": "(verb, noun)"
  },
  {
    "word": "simple",
    "frequency": 63,
    "type": "(adjective, noun)"
  },
  {
    "word": "past",
    "frequency": 60,
    "type": "(adjective, noun, preposition)"
  },
  {
    "word": "big",
    "frequency": 59,
    "type": "(adjective, noun)"
  },
  {
    "word": "possible",
    "frequency": 59,
    "type": "(adjective, noun)"
  },
  {
    "word": "particular",
    "frequency": 58,
    "type": "(adjective, noun)"
  },
  {
    "word": "today",
    "frequency": 54,
    "type": "(adverb, noun)"
  },
  {
    "word": "major",
    "frequency": 53,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "personal",
    "frequency": 53,
    "type": "(adjective, noun)"
  },
  {
    "word": "current",
    "frequency": 52,
    "type": "(adjective, noun)"
  },
  {
    "word": "national",
    "frequency": 52,
    "type": "(adjective, noun)"
  },
  {
    "word": "cut",
    "frequency": 50,
    "type": "(verb, noun)"
  },
  {
    "word": "natural",
    "frequency": 50,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "physical",
    "frequency": 50,
    "type": "(adjective, noun)"
  },
  {
    "word": "show",
    "frequency": 50,
    "type": "(verb, noun)"
  },
  {
    "word": "try",
    "frequency": 50,
    "type": "(verb, noun)"
  },
  {
    "word": "check",
    "frequency": 49,
    "type": "(verb, noun, interjection)"
  },
  {
    "word": "second",
    "frequency": 49,
    "type": "(number, noun)"
  },
  {
    "word": "call",
    "frequency": 47,
    "type": "(verb, noun)"
  },
  {
    "word": "move",
    "frequency": 47,
    "type": "(verb, noun)"
  },
  {
    "word": "pay",
    "frequency": 47,
    "type": "(verb, noun)"
  },
  {
    "word": "let",
    "frequency": 46,
    "type": "(verb, noun)"
  },
  {
    "word": "increase",
    "frequency": 45,
    "type": "(verb, noun)"
  },
  {
    "word": "single",
    "frequency": 45,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "individual",
    "frequency": 44,
    "type": "(adjective, noun)"
  },
  {
    "word": "turn",
    "frequency": 44,
    "type": "(verb, noun)"
  },
  {
    "word": "ask",
    "frequency": 42,
    "type": "(verb, noun)"
  },
  {
    "word": "buy",
    "frequency": 42,
    "type": "(verb, noun)"
  },
  {
    "word": "guard",
    "frequency": 42,
    "type": "(verb, noun)"
  },
  {
    "word": "hold",
    "frequency": 42,
    "type": "(verb, noun)"
  },
  {
    "word": "main",
    "frequency": 42,
    "type": "(adjective, noun)"
  },
  {
    "word": "offer",
    "frequency": 42,
    "type": "(verb, noun)"
  },
  {
    "word": "potential",
    "frequency": 42,
    "type": "(adjective, noun)"
  },
  {
    "word": "professional",
    "frequency": 42,
    "type": "(adjective, noun)"
  },
  {
    "word": "international",
    "frequency": 41,
    "type": "(adjective, noun)"
  },
  {
    "word": "travel",
    "frequency": 41,
    "type": "(verb, noun)"
  },
  {
    "word": "cook",
    "frequency": 40,
    "type": "(verb, noun)"
  },
  {
    "word": "alternative",
    "frequency": 39,
    "type": "(adjective, noun)"
  },
  {
    "word": "following",
    "frequency": 39,
    "type": "(preposition, noun, adjective)"
  },
  {
    "word": "special",
    "frequency": 39,
    "type": "(adjective, noun)"
  },
  {
    "word": "working",
    "frequency": 39,
    "type": "(adjective, noun)"
  },
  {
    "word": "whole",
    "frequency": 38,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "dance",
    "frequency": 37,
    "type": "(verb, noun)"
  },
  {
    "word": "excuse",
    "frequency": 37,
    "type": "(verb, noun)"
  },
  {
    "word": "cold",
    "frequency": 34,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "commercial",
    "frequency": 34,
    "type": "(adjective, noun)"
  },
  {
    "word": "low",
    "frequency": 34,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "purchase",
    "frequency": 34,
    "type": "(verb, noun)"
  },
  {
    "word": "deal",
    "frequency": 33,
    "type": "(verb, noun)"
  },
  {
    "word": "primary",
    "frequency": 33,
    "type": "(adjective, noun)"
  },
  {
    "word": "worth",
    "frequency": 33,
    "type": "(adjective, noun)"
  },
  {
    "word": "fall",
    "frequency": 32,
    "type": "(verb, noun)"
  },
  {
    "word": "necessary",
    "frequency": 31,
    "type": "(adjective, noun)"
  },
  {
    "word": "positive",
    "frequency": 31,
    "type": "(adjective, noun)"
  },
  {
    "word": "produce",
    "frequency": 31,
    "type": "(verb, noun)"
  },
  {
    "word": "search",
    "frequency": 31,
    "type": "(verb, noun)"
  },
  {
    "word": "present",
    "frequency": 30,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "spend",
    "frequency": 30,
    "type": "(verb, noun)"
  },
  {
    "word": "talk",
    "frequency": 30,
    "type": "(verb, noun)"
  },
  {
    "word": "creative",
    "frequency": 29,
    "type": "(adjective, noun)"
  },
  {
    "word": "tell",
    "frequency": 29,
    "type": "(verb, noun)"
  },
  {
    "word": "cost",
    "frequency": 28,
    "type": "(verb, noun)"
  },
  {
    "word": "drive",
    "frequency": 28,
    "type": "(verb, noun)"
  },
  {
    "word": "green",
    "frequency": 28,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "support",
    "frequency": 28,
    "type": "(verb, noun)"
  },
  {
    "word": "glad",
    "frequency": 27,
    "type": "(adjective, noun)"
  },
  {
    "word": "remove",
    "frequency": 27,
    "type": "(verb, noun)"
  },
  {
    "word": "return",
    "frequency": 27,
    "type": "(verb, noun)"
  },
  {
    "word": "run",
    "frequency": 27,
    "type": "(verb, noun)"
  },
  {
    "word": "complex",
    "frequency": 26,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "due",
    "frequency": 26,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "effective",
    "frequency": 26,
    "type": "(adjective, noun)"
  },
  {
    "word": "middle",
    "frequency": 26,
    "type": "(adjective, noun)"
  },
  {
    "word": "regular",
    "frequency": 26,
    "type": "(adjective, noun)"
  },
  {
    "word": "reserve",
    "frequency": 26,
    "type": "(verb, noun)"
  },
  {
    "word": "independent",
    "frequency": 25,
    "type": "(adjective, noun)"
  },
  {
    "word": "leave",
    "frequency": 25,
    "type": "(verb, noun)"
  },
  {
    "word": "original",
    "frequency": 25,
    "type": "(adjective, noun)"
  },
  {
    "word": "reach",
    "frequency": 25,
    "type": "(verb, noun)"
  },
  {
    "word": "rest",
    "frequency": 25,
    "type": "(verb, noun)"
  },
  {
    "word": "serve",
    "frequency": 25,
    "type": "(verb, noun)"
  },
  {
    "word": "watch",
    "frequency": 25,
    "type": "(verb, noun)"
  },
  {
    "word": "beautiful",
    "frequency": 24,
    "type": "(adjective, noun, interjection)"
  },
  {
    "word": "charge",
    "frequency": 24,
    "type": "(verb, noun)"
  },
  {
    "word": "active",
    "frequency": 23,
    "type": "(adjective, noun)"
  },
  {
    "word": "break",
    "frequency": 23,
    "type": "(verb, noun)"
  },
  {
    "word": "negative",
    "frequency": 23,
    "type": "(adjective, noun, interjection)"
  },
  {
    "word": "safe",
    "frequency": 23,
    "type": "(adjective, noun)"
  },
  {
    "word": "stay",
    "frequency": 23,
    "type": "(verb, noun)"
  },
  {
    "word": "visit",
    "frequency": 23,
    "type": "(verb, noun)"
  },
  {
    "word": "visual",
    "frequency": 23,
    "type": "(adjective, noun)"
  },
  {
    "word": "affect",
    "frequency": 22,
    "type": "(verb, noun)"
  },
  {
    "word": "cover",
    "frequency": 22,
    "type": "(verb, noun)"
  },
  {
    "word": "report",
    "frequency": 22,
    "type": "(verb, noun)"
  },
  {
    "word": "rise",
    "frequency": 22,
    "type": "(verb, noun)"
  },
  {
    "word": "walk",
    "frequency": 21,
    "type": "(verb, noun)"
  },
  {
    "word": "white",
    "frequency": 21,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "beyond",
    "frequency": 20,
    "type": "(preposition, noun)"
  },
  {
    "word": "junior",
    "frequency": 20,
    "type": "(adjective, noun)"
  },
  {
    "word": "pick",
    "frequency": 20,
    "type": "(verb, noun)"
  },
  {
    "word": "unique",
    "frequency": 20,
    "type": "(adjective, noun)"
  },
  {
    "word": "anything",
    "frequency": 19,
    "type": "(pronoun, noun, adverb)"
  },
  {
    "word": "classic",
    "frequency": 19,
    "type": "(adjective, noun)"
  },
  {
    "word": "final",
    "frequency": 19,
    "type": "(adjective, noun)"
  },
  {
    "word": "lift",
    "frequency": 19,
    "type": "(verb, noun)"
  },
  {
    "word": "mix",
    "frequency": 19,
    "type": "(verb, noun)"
  },
  {
    "word": "private",
    "frequency": 19,
    "type": "(adjective, noun)"
  },
  {
    "word": "stop",
    "frequency": 19,
    "type": "(verb, noun)"
  },
  {
    "word": "teach",
    "frequency": 19,
    "type": "(verb, noun)"
  },
  {
    "word": "western",
    "frequency": 19,
    "type": "(adjective, noun)"
  },
  {
    "word": "concern",
    "frequency": 18,
    "type": "(verb, noun)"
  },
  {
    "word": "familiar",
    "frequency": 18,
    "type": "(adjective, noun)"
  },
  {
    "word": "fly",
    "frequency": 18,
    "type": "(verb, noun)"
  },
  {
    "word": "official",
    "frequency": 18,
    "type": "(adjective, noun)"
  },
  {
    "word": "broad",
    "frequency": 17,
    "type": "(adjective, noun)"
  },
  {
    "word": "comfortable",
    "frequency": 17,
    "type": "(adjective, noun)"
  },
  {
    "word": "gain",
    "frequency": 17,
    "type": "(verb, noun)"
  },
  {
    "word": "maybe",
    "frequency": 17,
    "type": "(adverb, noun)"
  },
  {
    "word": "rich",
    "frequency": 17,
    "type": "(adjective, noun)"
  },
  {
    "word": "save",
    "frequency": 17,
    "type": "(verb, noun, preposition)"
  },
  {
    "word": "stand",
    "frequency": 17,
    "type": "(verb, noun)"
  },
  {
    "word": "young",
    "frequency": 17,
    "type": "(adjective, noun)"
  },
  {
    "word": "fail",
    "frequency": 16,
    "type": "(verb, noun)"
  },
  {
    "word": "heavy",
    "frequency": 16,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "hello",
    "frequency": 16,
    "type": "(interjection, noun)"
  },
  {
    "word": "lead",
    "frequency": 16,
    "type": "(verb, noun)"
  },
  {
    "word": "listen",
    "frequency": 16,
    "type": "(verb, noun)"
  },
  {
    "word": "valuable",
    "frequency": 16,
    "type": "(adjective, noun)"
  },
  {
    "word": "worry",
    "frequency": 16,
    "type": "(verb, noun)"
  },
  {
    "word": "handle",
    "frequency": 15,
    "type": "(verb, noun)"
  },
  {
    "word": "leading",
    "frequency": 15,
    "type": "(adjective, noun)"
  },
  {
    "word": "meet",
    "frequency": 15,
    "type": "(verb, noun)"
  },
  {
    "word": "release",
    "frequency": 15,
    "type": "(verb, noun)"
  },
  {
    "word": "sell",
    "frequency": 15,
    "type": "(verb, noun)"
  },
  {
    "word": "finish",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "normal",
    "frequency": 14,
    "type": "(adjective, noun)"
  },
  {
    "word": "press",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "ride",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "secret",
    "frequency": 14,
    "type": "(adjective, noun)"
  },
  {
    "word": "spread",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "spring",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "tough",
    "frequency": 14,
    "type": "(adjective, noun)"
  },
  {
    "word": "wait",
    "frequency": 14,
    "type": "(verb, noun)"
  },
  {
    "word": "brown",
    "frequency": 13,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "deep",
    "frequency": 13,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "display",
    "frequency": 13,
    "type": "(verb, noun)"
  },
  {
    "word": "flow",
    "frequency": 13,
    "type": "(verb, noun)"
  },
  {
    "word": "hit",
    "frequency": 13,
    "type": "(verb, noun)"
  },
  {
    "word": "objective",
    "frequency": 13,
    "type": "(adjective, noun)"
  },
  {
    "word": "shoot",
    "frequency": 13,
    "type": "(verb, noun, interjection)"
  },
  {
    "word": "touch",
    "frequency": 13,
    "type": "(verb, noun)"
  },
  {
    "word": "cancel",
    "frequency": 12,
    "type": "(verb, noun)"
  },
  {
    "word": "chemical",
    "frequency": 12,
    "type": "(adjective, noun)"
  },
  {
    "word": "cry",
    "frequency": 12,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "dump",
    "frequency": 12,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "extreme",
    "frequency": 12,
    "type": "(adjective, noun)"
  },
  {
    "word": "push",
    "frequency": 12,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "conflict",
    "frequency": 11,
    "type": "(verb, noun)"
  },
  {
    "word": "eat",
    "frequency": 11,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "fill",
    "frequency": 11,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "formal",
    "frequency": 11,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "jump",
    "frequency": 11,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "kick",
    "frequency": 11,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "opposite",
    "frequency": 11,
    "type": "(adjective, noun, preposition)"
  },
  {
    "word": "pass",
    "frequency": 11,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "pitch",
    "frequency": 11,
    "type": "(verb, noun)"
  },
  {
    "word": "remote",
    "frequency": 11,
    "type": "(adjective, noun)"
  },
  {
    "word": "total",
    "frequency": 11,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "treat",
    "frequency": 11,
    "type": "(verb, noun)"
  },
  {
    "word": "vast",
    "frequency": 11,
    "type": "(adjective, noun)"
  },
  {
    "word": "abuse",
    "frequency": 10,
    "type": "(verb, noun)"
  },
  {
    "word": "beat",
    "frequency": 10,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "burn",
    "frequency": 10,
    "type": "(verb, noun)"
  },
  {
    "word": "deposit",
    "frequency": 10,
    "type": "(verb, noun)"
  },
  {
    "word": "print",
    "frequency": 10,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "raise",
    "frequency": 10,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "sleep",
    "frequency": 10,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "somewhere",
    "frequency": 10,
    "type": "(adverb, noun)"
  },
  {
    "word": "advance",
    "frequency": 9,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "anywhere",
    "frequency": 9,
    "type": "(adverb, noun)"
  },
  {
    "word": "consist",
    "frequency": 9,
    "type": "(verb, noun)"
  },
  {
    "word": "dark",
    "frequency": 9,
    "type": "(adjective, noun, idiom)"
  },
  {
    "word": "double",
    "frequency": 9,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "draw",
    "frequency": 9,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "equal",
    "frequency": 9,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "fix",
    "frequency": 9,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "hire",
    "frequency": 9,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "internal",
    "frequency": 9,
    "type": "(adjective, noun)"
  },
  {
    "word": "join",
    "frequency": 9,
    "type": "(verb, noun)"
  },
  {
    "word": "kill",
    "frequency": 9,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "sensitive",
    "frequency": 9,
    "type": "(adjective, noun)"
  },
  {
    "word": "tap",
    "frequency": 9,
    "type": "(verb, noun)"
  },
  {
    "word": "win",
    "frequency": 9,
    "type": "(verb, noun)"
  },
  {
    "word": "attack",
    "frequency": 8,
    "type": "(verb, noun)"
  },
  {
    "word": "claim",
    "frequency": 8,
    "type": "(verb, noun)"
  },
  {
    "word": "constant",
    "frequency": 8,
    "type": "(adjective, noun)"
  },
  {
    "word": "drag",
    "frequency": 8,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "drink",
    "frequency": 8,
    "type": "(verb, noun)"
  },
  {
    "word": "guess",
    "frequency": 8,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "minor",
    "frequency": 8,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "pull",
    "frequency": 8,
    "type": "(verb, noun)"
  },
  {
    "word": "raw",
    "frequency": 8,
    "type": "(adjective, noun, idiom)"
  },
  {
    "word": "soft",
    "frequency": 8,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "solid",
    "frequency": 8,
    "type": "(adjective, noun)"
  },
  {
    "word": "wear",
    "frequency": 8,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "weird",
    "frequency": 8,
    "type": "(adjective, noun)"
  },
  {
    "word": "wonder",
    "frequency": 8,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "annual",
    "frequency": 7,
    "type": "(adjective, noun)"
  },
  {
    "word": "count",
    "frequency": 7,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "dead",
    "frequency": 7,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "doubt",
    "frequency": 7,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "feed",
    "frequency": 7,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "forever",
    "frequency": 7,
    "type": "(adverb, noun, idiom)"
  },
  {
    "word": "impress",
    "frequency": 7,
    "type": "(verb, noun)"
  },
  {
    "word": "nobody",
    "frequency": 7,
    "type": "(pronoun, noun)"
  },
  {
    "word": "repeat",
    "frequency": 7,
    "type": "(verb, noun)"
  },
  {
    "word": "round",
    "frequency": 7,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "sing",
    "frequency": 7,
    "type": "(verb, noun)"
  },
  {
    "word": "slide",
    "frequency": 7,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "strip",
    "frequency": 7,
    "type": "(verb, noun)"
  },
  {
    "word": "whereas",
    "frequency": 7,
    "type": "(conjunction, noun)"
  },
  {
    "word": "wish",
    "frequency": 7,
    "type": "(verb, noun)"
  },
  {
    "word": "combine",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "command",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "dig",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "divide",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "equivalent",
    "frequency": 6,
    "type": "(adjective, noun)"
  },
  {
    "word": "hang",
    "frequency": 6,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "hunt",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "initial",
    "frequency": 6,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "march",
    "frequency": 6,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "mention",
    "frequency": 6,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "smell",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "spiritual",
    "frequency": 6,
    "type": "(adjective, noun)"
  },
  {
    "word": "survey",
    "frequency": 6,
    "type": "(verb, noun)"
  },
  {
    "word": "tie",
    "frequency": 6,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "adult",
    "frequency": 5,
    "type": "(adjective, noun)"
  },
  {
    "word": "brief",
    "frequency": 5,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "crazy",
    "frequency": 5,
    "type": "(adjective, noun, idiom)"
  },
  {
    "word": "escape",
    "frequency": 5,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "gather",
    "frequency": 5,
    "type": "(verb, noun, idiom)"
  },
  {
    "word": "hate",
    "frequency": 5,
    "type": "(verb, noun)"
  },
  {
    "word": "prior",
    "frequency": 5,
    "type": "(adjective, noun, idiom)"
  },
  {
    "word": "repair",
    "frequency": 5,
    "type": "(verb, noun)"
  },
  {
    "word": "rough",
    "frequency": 5,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "sad",
    "frequency": 5,
    "type": "(adjective, noun)"
  },
  {
    "word": "scratch",
    "frequency": 5,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "sick",
    "frequency": 5,
    "type": "(adjective, noun, idiom)"
  },
  {
    "word": "strike",
    "frequency": 5,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "employ",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "external",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "hurt",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "illegal",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "laugh",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "lay",
    "frequency": 4,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "mobile",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "nasty",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "ordinary",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "respond",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "royal",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "senior",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "split",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "strain",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "struggle",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "swim",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "train",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "upper",
    "frequency": 4,
    "type": "(adjective, noun)"
  },
  {
    "word": "wash",
    "frequency": 4,
    "type": "(verb, noun)"
  },
  {
    "word": "yellow",
    "frequency": 4,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "convert",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "crash",
    "frequency": 3,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "dependent",
    "frequency": 3,
    "type": "(adjective, noun)"
  },
  {
    "word": "fold",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "funny",
    "frequency": 3,
    "type": "(adjective, noun)"
  },
  {
    "word": "grab",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "hide",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "miss",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "permit",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "quote",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "recover",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "resolve",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "roll",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "sink",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "slip",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "spare",
    "frequency": 3,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "suspect",
    "frequency": 3,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "sweet",
    "frequency": 3,
    "type": "(adjective, noun)"
  },
  {
    "word": "swing",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "twist",
    "frequency": 3,
    "type": "(verb, noun)"
  },
  {
    "word": "upstairs",
    "frequency": 3,
    "type": "(adjective, noun)"
  },
  {
    "word": "usual",
    "frequency": 3,
    "type": "(adjective, noun)"
  },
  {
    "word": "abroad",
    "frequency": 2,
    "type": "(adverb, noun)"
  },
  {
    "word": "brave",
    "frequency": 2,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "calm",
    "frequency": 2,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "concentrate",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "estimate",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "grand",
    "frequency": 2,
    "type": "(adjective, noun)"
  },
  {
    "word": "male",
    "frequency": 2,
    "type": "(adjective, noun)"
  },
  {
    "word": "mine",
    "frequency": 2,
    "type": "(pronoun, noun, verb)"
  },
  {
    "word": "prompt",
    "frequency": 2,
    "type": "(verb, noun, adjective)"
  },
  {
    "word": "quiet",
    "frequency": 2,
    "type": "(adjective, noun, verb)"
  },
  {
    "word": "refuse",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "regret",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "reveal",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "rush",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "shake",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "shift",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "shine",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "steal",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "suck",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "surround",
    "frequency": 2,
    "type": "(verb, noun)"
  },
  {
    "word": "anybody",
    "frequency": 1,
    "type": "(pronoun, noun)"
  },
  {
    "word": "bear",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "brilliant",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "dare",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "dear",
    "frequency": 1,
    "type": "(adjective, noun, adverb)"
  },
  {
    "word": "delay",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "drunk",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "female",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "hurry",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "inevitable",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "invite",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "kiss",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "neat",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "pop",
    "frequency": 1,
    "type": "(verb, noun, adverb)"
  },
  {
    "word": "punch",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "quit",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "reply",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "representative",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "resist",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "rip",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "rub",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "silly",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "smile",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "spell",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "stretch",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "stupid",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "tear",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "temporary",
    "frequency": 1,
    "type": "(adjective, noun)"
  },
  {
    "word": "tomorrow",
    "frequency": 1,
    "type": "(adverb, noun)"
  },
  {
    "word": "wake",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "wrap",
    "frequency": 1,
    "type": "(verb, noun)"
  },
  {
    "word": "yesterday",
    "frequency": 1,
    "type": "(adverb, noun)"
  }
];

const verbs = 
[
  {
    "word": "is",
    "frequency": 2699,
    "type": "(verb)"
  },
  {
    "word": "are",
    "frequency": 1843,
    "type": "(verb)"
  },
  {
    "word": "has",
    "frequency": 384,
    "type": "(verb)"
  },
  {
    "word": "get",
    "frequency": 233,
    "type": "(verb)"
  },
  {
    "word": "see",
    "frequency": 204,
    "type": "(verb)"
  },
  {
    "word": "need",
    "frequency": 193,
    "type": "(verb)"
  },
  {
    "word": "know",
    "frequency": 181,
    "type": "(verb)"
  },
  {
    "word": "would",
    "frequency": 176,
    "type": "(verb)"
  },
  {
    "word": "find",
    "frequency": 166,
    "type": "(verb)"
  },
  {
    "word": "take",
    "frequency": 164,
    "type": "(verb)"
  },
  {
    "word": "want",
    "frequency": 163,
    "type": "(verb)"
  },
  {
    "word": "does",
    "frequency": 104,
    "type": "(verb)"
  },
  {
    "word": "learn",
    "frequency": 102,
    "type": "(verb)"
  },
  {
    "word": "become",
    "frequency": 97,
    "type": "(verb)"
  },
  {
    "word": "come",
    "frequency": 88,
    "type": "(verb)"
  },
  {
    "word": "include",
    "frequency": 80,
    "type": "(verb)"
  },
  {
    "word": "thank",
    "frequency": 78,
    "type": "(verb)"
  },
  {
    "word": "provide",
    "frequency": 68,
    "type": "(verb)"
  },
  {
    "word": "create",
    "frequency": 63,
    "type": "(verb)"
  },
  {
    "word": "add",
    "frequency": 60,
    "type": "(verb)"
  },
  {
    "word": "understand",
    "frequency": 59,
    "type": "(verb)"
  },
  {
    "word": "consider",
    "frequency": 57,
    "type": "(verb)"
  },
  {
    "word": "choose",
    "frequency": 49,
    "type": "(verb)"
  },
  {
    "word": "develop",
    "frequency": 49,
    "type": "(verb)"
  },
  {
    "word": "remember",
    "frequency": 46,
    "type": "(verb)"
  },
  {
    "word": "determine",
    "frequency": 40,
    "type": "(verb)"
  },
  {
    "word": "grow",
    "frequency": 37,
    "type": "(verb)"
  },
  {
    "word": "allow",
    "frequency": 35,
    "type": "(verb)"
  },
  {
    "word": "supply",
    "frequency": 34,
    "type": "(verb)"
  },
  {
    "word": "bring",
    "frequency": 31,
    "type": "(verb)"
  },
  {
    "word": "improve",
    "frequency": 31,
    "type": "(verb)"
  },
  {
    "word": "maintain",
    "frequency": 30,
    "type": "(verb)"
  },
  {
    "word": "begin",
    "frequency": 29,
    "type": "(verb)"
  },
  {
    "word": "exist",
    "frequency": 28,
    "type": "(verb)"
  },
  {
    "word": "tend",
    "frequency": 28,
    "type": "(verb)"
  },
  {
    "word": "enjoy",
    "frequency": 27,
    "type": "(verb)"
  },
  {
    "word": "perform",
    "frequency": 27,
    "type": "(verb)"
  },
  {
    "word": "decide",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "identify",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "continue",
    "frequency": 24,
    "type": "(verb)"
  },
  {
    "word": "protect",
    "frequency": 24,
    "type": "(verb)"
  },
  {
    "word": "require",
    "frequency": 24,
    "type": "(verb)"
  },
  {
    "word": "occur",
    "frequency": 23,
    "type": "(verb)"
  },
  {
    "word": "write",
    "frequency": 23,
    "type": "(verb)"
  },
  {
    "word": "approach",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "avoid",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "prepare",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "build",
    "frequency": 21,
    "type": "(verb)"
  },
  {
    "word": "achieve",
    "frequency": 20,
    "type": "(verb)"
  },
  {
    "word": "believe",
    "frequency": 20,
    "type": "(verb)"
  },
  {
    "word": "receive",
    "frequency": 20,
    "type": "(verb)"
  },
  {
    "word": "seem",
    "frequency": 20,
    "type": "(verb)"
  },
  {
    "word": "discuss",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "realize",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "contain",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "follow",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "refer",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "solve",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "describe",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "prefer",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "prevent",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "discover",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "ensure",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "expect",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "invest",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "reduce",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "speak",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "appear",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "explain",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "explore",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "involve",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "lose",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "afford",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "agree",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "hear",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "remain",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "represent",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "apply",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "forget",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "recommend",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "rely",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "vary",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "generate",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "obtain",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "accept",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "communicate",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "complain",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "depend",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "enter",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "happen",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "indicate",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "suggest",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "survive",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "appreciate",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "compare",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "imagine",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "manage",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "differ",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "encourage",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "expand",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "prove",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "react",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "recognize",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "relax",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "replace",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "borrow",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "earn",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "emphasize",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "enable",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "operate",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "reflect",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "send",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "anticipate",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "assume",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "engage",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "enhance",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "examine",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "install",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "participate",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "intend",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "introduce",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "relate",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "settle",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "assure",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "attract",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "distribute",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "overcome",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "owe",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "succeed",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "suffer",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "throw",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "acquire",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "adapt",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "adjust",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "argue",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "arise",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "confirm",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "encouraging",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "incorporate",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "justify",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "organize",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "ought",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "possess",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "relieve",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "retain",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "shut",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "calculate",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "compete",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "consult",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "deliver",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "extend",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "investigate",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "negotiate",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "qualify",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "retire",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "rid",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "weigh",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "arrive",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "attach",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "behave",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "celebrate",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "convince",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "disagree",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "establish",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "ignore",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "imply",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "insist",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "pursue",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "remaining",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "specify",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "warn",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "accuse",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "admire",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "admit",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "adopt",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "announce",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "apologize",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "approve",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "attend",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "belong",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "commit",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "criticize",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "deserve",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "destroy",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "hesitate",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "illustrate",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "inform",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "manufacturing",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "persuade",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "pour",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "propose",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "remind",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "shall",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "submit",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "suppose",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "translate",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "be",
    "frequency": 1145,
    "type": "(verb)"
  },
  {
    "word": "have",
    "frequency": 891,
    "type": "(verb)"
  },
  {
    "word": "use",
    "frequency": 319,
    "type": "(verb)"
  },
  {
    "word": "make",
    "frequency": 262,
    "type": "(verb)"
  },
  {
    "word": "look",
    "frequency": 144,
    "type": "(verb)"
  },
  {
    "word": "help",
    "frequency": 141,
    "type": "(verb)"
  },
  {
    "word": "go",
    "frequency": 131,
    "type": "(verb)"
  },
  {
    "word": "being",
    "frequency": 124,
    "type": "(verb)"
  },
  {
    "word": "think",
    "frequency": 116,
    "type": "(verb)"
  },
  {
    "word": "read",
    "frequency": 97,
    "type": "(verb)"
  },
  {
    "word": "keep",
    "frequency": 96,
    "type": "(verb)"
  },
  {
    "word": "start",
    "frequency": 96,
    "type": "(verb)"
  },
  {
    "word": "give",
    "frequency": 93,
    "type": "(verb)"
  },
  {
    "word": "play",
    "frequency": 75,
    "type": "(verb)"
  },
  {
    "word": "feel",
    "frequency": 74,
    "type": "(verb)"
  },
  {
    "word": "put",
    "frequency": 70,
    "type": "(verb)"
  },
  {
    "word": "set",
    "frequency": 69,
    "type": "(verb)"
  },
  {
    "word": "change",
    "frequency": 67,
    "type": "(verb)"
  },
  {
    "word": "say",
    "frequency": 66,
    "type": "(verb)"
  },
  {
    "word": "cut",
    "frequency": 50,
    "type": "(verb)"
  },
  {
    "word": "show",
    "frequency": 50,
    "type": "(verb)"
  },
  {
    "word": "try",
    "frequency": 50,
    "type": "(verb)"
  },
  {
    "word": "check",
    "frequency": 49,
    "type": "(verb)"
  },
  {
    "word": "call",
    "frequency": 47,
    "type": "(verb)"
  },
  {
    "word": "move",
    "frequency": 47,
    "type": "(verb)"
  },
  {
    "word": "pay",
    "frequency": 47,
    "type": "(verb)"
  },
  {
    "word": "let",
    "frequency": 46,
    "type": "(verb)"
  },
  {
    "word": "increase",
    "frequency": 45,
    "type": "(verb)"
  },
  {
    "word": "turn",
    "frequency": 44,
    "type": "(verb)"
  },
  {
    "word": "ask",
    "frequency": 42,
    "type": "(verb)"
  },
  {
    "word": "buy",
    "frequency": 42,
    "type": "(verb)"
  },
  {
    "word": "guard",
    "frequency": 42,
    "type": "(verb)"
  },
  {
    "word": "hold",
    "frequency": 42,
    "type": "(verb)"
  },
  {
    "word": "offer",
    "frequency": 42,
    "type": "(verb)"
  },
  {
    "word": "travel",
    "frequency": 41,
    "type": "(verb)"
  },
  {
    "word": "cook",
    "frequency": 40,
    "type": "(verb)"
  },
  {
    "word": "dance",
    "frequency": 37,
    "type": "(verb)"
  },
  {
    "word": "excuse",
    "frequency": 37,
    "type": "(verb)"
  },
  {
    "word": "live",
    "frequency": 35,
    "type": "(verb)"
  },
  {
    "word": "purchase",
    "frequency": 34,
    "type": "(verb)"
  },
  {
    "word": "deal",
    "frequency": 33,
    "type": "(verb)"
  },
  {
    "word": "mean",
    "frequency": 33,
    "type": "(verb)"
  },
  {
    "word": "fall",
    "frequency": 32,
    "type": "(verb)"
  },
  {
    "word": "produce",
    "frequency": 31,
    "type": "(verb)"
  },
  {
    "word": "search",
    "frequency": 31,
    "type": "(verb)"
  },
  {
    "word": "spend",
    "frequency": 30,
    "type": "(verb)"
  },
  {
    "word": "talk",
    "frequency": 30,
    "type": "(verb)"
  },
  {
    "word": "upset",
    "frequency": 30,
    "type": "(verb)"
  },
  {
    "word": "tell",
    "frequency": 29,
    "type": "(verb)"
  },
  {
    "word": "cost",
    "frequency": 28,
    "type": "(verb)"
  },
  {
    "word": "drive",
    "frequency": 28,
    "type": "(verb)"
  },
  {
    "word": "support",
    "frequency": 28,
    "type": "(verb)"
  },
  {
    "word": "remove",
    "frequency": 27,
    "type": "(verb)"
  },
  {
    "word": "return",
    "frequency": 27,
    "type": "(verb)"
  },
  {
    "word": "run",
    "frequency": 27,
    "type": "(verb)"
  },
  {
    "word": "appropriate",
    "frequency": 26,
    "type": "(verb)"
  },
  {
    "word": "reserve",
    "frequency": 26,
    "type": "(verb)"
  },
  {
    "word": "leave",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "reach",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "rest",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "serve",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "watch",
    "frequency": 25,
    "type": "(verb)"
  },
  {
    "word": "charge",
    "frequency": 24,
    "type": "(verb)"
  },
  {
    "word": "break",
    "frequency": 23,
    "type": "(verb)"
  },
  {
    "word": "stay",
    "frequency": 23,
    "type": "(verb)"
  },
  {
    "word": "visit",
    "frequency": 23,
    "type": "(verb)"
  },
  {
    "word": "affect",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "cover",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "report",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "rise",
    "frequency": 22,
    "type": "(verb)"
  },
  {
    "word": "walk",
    "frequency": 21,
    "type": "(verb)"
  },
  {
    "word": "pick",
    "frequency": 20,
    "type": "(verb)"
  },
  {
    "word": "lift",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "mix",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "stop",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "teach",
    "frequency": 19,
    "type": "(verb)"
  },
  {
    "word": "concern",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "fly",
    "frequency": 18,
    "type": "(verb)"
  },
  {
    "word": "born",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "gain",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "save",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "stand",
    "frequency": 17,
    "type": "(verb)"
  },
  {
    "word": "fail",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "lead",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "listen",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "worry",
    "frequency": 16,
    "type": "(verb)"
  },
  {
    "word": "express",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "handle",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "meet",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "release",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "sell",
    "frequency": 15,
    "type": "(verb)"
  },
  {
    "word": "finish",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "press",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "ride",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "spread",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "spring",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "wait",
    "frequency": 14,
    "type": "(verb)"
  },
  {
    "word": "display",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "flow",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "hit",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "shoot",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "touch",
    "frequency": 13,
    "type": "(verb)"
  },
  {
    "word": "cancel",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "cry",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "dump",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "push",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "select",
    "frequency": 12,
    "type": "(verb)"
  },
  {
    "word": "conflict",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "die",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "eat",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "fill",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "jump",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "kick",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "pass",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "pitch",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "treat",
    "frequency": 11,
    "type": "(verb)"
  },
  {
    "word": "abuse",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "beat",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "burn",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "deposit",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "print",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "raise",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "sleep",
    "frequency": 10,
    "type": "(verb)"
  },
  {
    "word": "advance",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "connect",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "consist",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "contribute",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "draw",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "fix",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "hire",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "join",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "kill",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "sit",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "tap",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "win",
    "frequency": 9,
    "type": "(verb)"
  },
  {
    "word": "attack",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "claim",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "drag",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "drink",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "guess",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "pull",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "wear",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "wonder",
    "frequency": 8,
    "type": "(verb)"
  },
  {
    "word": "count",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "doubt",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "feed",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "impress",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "repeat",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "seek",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "sing",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "slide",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "strip",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "wish",
    "frequency": 7,
    "type": "(verb)"
  },
  {
    "word": "collect",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "combine",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "command",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "dig",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "divide",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "hang",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "hunt",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "march",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "mention",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "smell",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "survey",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "tie",
    "frequency": 6,
    "type": "(verb)"
  },
  {
    "word": "escape",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "expose",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "gather",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "hate",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "repair",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "scratch",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "strike",
    "frequency": 5,
    "type": "(verb)"
  },
  {
    "word": "employ",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "hurt",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "laugh",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "lay",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "respond",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "split",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "strain",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "struggle",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "swim",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "train",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "wash",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "waste",
    "frequency": 4,
    "type": "(verb)"
  },
  {
    "word": "convert",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "crash",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "fold",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "grab",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "hide",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "miss",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "permit",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "quote",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "recover",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "resolve",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "roll",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "sink",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "slip",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "suspect",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "swing",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "twist",
    "frequency": 3,
    "type": "(verb)"
  },
  {
    "word": "concentrate",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "estimate",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "prompt",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "refuse",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "regret",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "reveal",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "rush",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "shake",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "shift",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "shine",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "steal",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "suck",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "surround",
    "frequency": 2,
    "type": "(verb)"
  },
  {
    "word": "bear",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "dare",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "delay",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "hurry",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "invite",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "kiss",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "marry",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "pop",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "pray",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "pretend",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "punch",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "quit",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "reply",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "resist",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "rip",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "rub",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "smile",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "spell",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "stretch",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "tear",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "wake",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "wrap",
    "frequency": 1,
    "type": "(verb)"
  },
  {
    "word": "was",
    "frequency": 352,
    "type": "(pas)"
  },
  {
    "word": "like",
    "frequency": 324,
    "type": "(prepositio)"
  },
  {
    "word": "even",
    "frequency": 223,
    "type": "(adjective)"
  },
  {
    "word": "film",
    "frequency": 209,
    "type": "(noun)"
  },
  {
    "word": "water",
    "frequency": 201,
    "type": "(noun)"
  },
  {
    "word": "been",
    "frequency": 200,
    "type": "(pas)"
  },
  {
    "word": "well",
    "frequency": 184,
    "type": "(adverb)"
  },
  {
    "word": "were",
    "frequency": 180,
    "type": "(pas)"
  },
  {
    "word": "example",
    "frequency": 147,
    "type": "(noun)"
  },
  {
    "word": "own",
    "frequency": 130,
    "type": "(adjective)"
  },
  {
    "word": "study",
    "frequency": 118,
    "type": "(noun)"
  },
  {
    "word": "must",
    "frequency": 108,
    "type": "(auxiliary verb)"
  },
  {
    "word": "form",
    "frequency": 99,
    "type": "(noun)"
  },
  {
    "word": "air",
    "frequency": 98,
    "type": "(noun)"
  },
  {
    "word": "place",
    "frequency": 98,
    "type": "(noun)"
  },
  {
    "word": "number",
    "frequency": 97,
    "type": "(noun)"
  },
  {
    "word": "part",
    "frequency": 96,
    "type": "(noun)"
  },
  {
    "word": "field",
    "frequency": 95,
    "type": "(noun)"
  },
  {
    "word": "fish",
    "frequency": 92,
    "type": "(noun)"
  },
  {
    "word": "process",
    "frequency": 85,
    "type": "(noun)"
  },
  {
    "word": "heat",
    "frequency": 84,
    "type": "(noun)"
  },
  {
    "word": "hand",
    "frequency": 81,
    "type": "(noun)"
  },
  {
    "word": "experience",
    "frequency": 80,
    "type": "(noun)"
  },
  {
    "word": "job",
    "frequency": 80,
    "type": "(noun)"
  },
  {
    "word": "book",
    "frequency": 77,
    "type": "(noun)"
  },
  {
    "word": "end",
    "frequency": 76,
    "type": "(noun)"
  },
  {
    "word": "point",
    "frequency": 74,
    "type": "(noun)"
  },
  {
    "word": "type",
    "frequency": 74,
    "type": "(noun)"
  },
  {
    "word": "value",
    "frequency": 70,
    "type": "(noun)"
  },
  {
    "word": "body",
    "frequency": 69,
    "type": "(noun)"
  },
  {
    "word": "market",
    "frequency": 69,
    "type": "(noun)"
  },
  {
    "word": "guide",
    "frequency": 68,
    "type": "(noun)"
  },
  {
    "word": "interest",
    "frequency": 67,
    "type": "(noun)"
  },
  {
    "word": "state",
    "frequency": 63,
    "type": "(noun)"
  },
  {
    "word": "radio",
    "frequency": 62,
    "type": "(noun)"
  },
  {
    "word": "course",
    "frequency": 61,
    "type": "(noun)"
  },
  {
    "word": "company",
    "frequency": 60,
    "type": "(noun)"
  },
  {
    "word": "price",
    "frequency": 60,
    "type": "(noun)"
  },
  {
    "word": "size",
    "frequency": 60,
    "type": "(noun)"
  },
  {
    "word": "card",
    "frequency": 58,
    "type": "(noun)"
  },
  {
    "word": "list",
    "frequency": 58,
    "type": "(noun)"
  },
  {
    "word": "mind",
    "frequency": 58,
    "type": "(noun)"
  },
  {
    "word": "trade",
    "frequency": 58,
    "type": "(noun)"
  },
  {
    "word": "line",
    "frequency": 56,
    "type": "(noun)"
  },
  {
    "word": "care",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "group",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "risk",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "word",
    "frequency": 55,
    "type": "(noun)"
  },
  {
    "word": "force",
    "frequency": 54,
    "type": "(noun)"
  },
  {
    "word": "light",
    "frequency": 54,
    "type": "(noun)"
  },
  {
    "word": "name",
    "frequency": 53,
    "type": "(noun)"
  },
  {
    "word": "school",
    "frequency": 53,
    "type": "(noun)"
  },
  {
    "word": "amount",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "order",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "practice",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "research",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "sense",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "service",
    "frequency": 51,
    "type": "(noun)"
  },
  {
    "word": "piece",
    "frequency": 50,
    "type": "(noun)"
  },
  {
    "word": "web",
    "frequency": 49,
    "type": "(noun)"
  },
  {
    "word": "boss",
    "frequency": 48,
    "type": "(noun)"
  },
  {
    "word": "sport",
    "frequency": 47,
    "type": "(noun)"
  },
  {
    "word": "page",
    "frequency": 46,
    "type": "(noun)"
  },
  {
    "word": "term",
    "frequency": 46,
    "type": "(noun)"
  },
  {
    "word": "test",
    "frequency": 46,
    "type": "(noun)"
  },
  {
    "word": "answer",
    "frequency": 45,
    "type": "(noun)"
  },
  {
    "word": "sound",
    "frequency": 45,
    "type": "(noun)"
  },
  {
    "word": "focus",
    "frequency": 44,
    "type": "(noun)"
  },
  {
    "word": "matter",
    "frequency": 44,
    "type": "(noun)"
  },
  {
    "word": "soil",
    "frequency": 43,
    "type": "(noun)"
  },
  {
    "word": "board",
    "frequency": 42,
    "type": "(noun)"
  },
  {
    "word": "oil",
    "frequency": 42,
    "type": "(noun)"
  },
  {
    "word": "picture",
    "frequency": 42,
    "type": "(noun)"
  },
  {
    "word": "access",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "garden",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "open",
    "frequency": 41,
    "type": "(adjective)"
  },
  {
    "word": "range",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "rate",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "reason",
    "frequency": 41,
    "type": "(noun)"
  },
  {
    "word": "according",
    "frequency": 40,
    "type": "(adjective)"
  },
  {
    "word": "site",
    "frequency": 40,
    "type": "(noun)"
  },
  {
    "word": "demand",
    "frequency": 39,
    "type": "(noun)"
  },
  {
    "word": "exercise",
    "frequency": 39,
    "type": "(noun)"
  },
  {
    "word": "image",
    "frequency": 39,
    "type": "(noun)"
  },
  {
    "word": "case",
    "frequency": 38,
    "type": "(noun)"
  },
  {
    "word": "cause",
    "frequency": 38,
    "type": "(noun)"
  },
  {
    "word": "coast",
    "frequency": 38,
    "type": "(noun)"
  },
  {
    "word": "age",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "boat",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "record",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "result",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "section",
    "frequency": 37,
    "type": "(noun)"
  },
  {
    "word": "building",
    "frequency": 36,
    "type": "(noun)"
  },
  {
    "word": "mouse",
    "frequency": 36,
    "type": "(noun)"
  },
  {
    "word": "cash",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "class",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "dry",
    "frequency": 35,
    "type": "(adjective)"
  },
  {
    "word": "plan",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "store",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "tax",
    "frequency": 35,
    "type": "(noun)"
  },
  {
    "word": "involved",
    "frequency": 34,
    "type": "(pas)"
  },
  {
    "word": "side",
    "frequency": 34,
    "type": "(noun)"
  },
  {
    "word": "space",
    "frequency": 33,
    "type": "(noun)"
  },
  {
    "word": "rule",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "weather",
    "frequency": 32,
    "type": "(noun)"
  },
  {
    "word": "figure",
    "frequency": 31,
    "type": "(noun)"
  },
  {
    "word": "man",
    "frequency": 31,
    "type": "(noun)"
  },
  {
    "word": "model",
    "frequency": 31,
    "type": "(noun)"
  },
  {
    "word": "source",
    "frequency": 31,
    "type": "(noun)"
  },
  {
    "word": "earth",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "program",
    "frequency": 30,
    "type": "(noun)"
  },
  {
    "word": "design",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "feature",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "purpose",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "question",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "rock",
    "frequency": 29,
    "type": "(noun)"
  },
  {
    "word": "act",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "birth",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "dog",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "object",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "scale",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "sun",
    "frequency": 28,
    "type": "(noun)"
  },
  {
    "word": "fit",
    "frequency": 27,
    "type": "(adjective)"
  },
  {
    "word": "note",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "profit",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "related",
    "frequency": 27,
    "type": "(pas)"
  },
  {
    "word": "rent",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "speed",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "style",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "war",
    "frequency": 27,
    "type": "(noun)"
  },
  {
    "word": "bank",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "content",
    "frequency": 26,
    "type": "(adjective)"
  },
  {
    "word": "craft",
    "frequency": 26,
    "type": "(noun)"
  },
  {
    "word": "bus",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "exchange",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "eye",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "fire",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "position",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "pressure",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "stress",
    "frequency": 25,
    "type": "(noun)"
  },
  {
    "word": "advantage",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "benefit",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "box",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "complete",
    "frequency": 24,
    "type": "(adjective)"
  },
  {
    "word": "frame",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "issue",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "limited",
    "frequency": 24,
    "type": "(pas)"
  },
  {
    "word": "step",
    "frequency": 24,
    "type": "(noun)"
  },
  {
    "word": "cycle",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "face",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "interested",
    "frequency": 23,
    "type": "(pas)"
  },
  {
    "word": "metal",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "paint",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "review",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "room",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "screen",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "structure",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "view",
    "frequency": 23,
    "type": "(noun)"
  },
  {
    "word": "account",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "ball",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "concerned",
    "frequency": 22,
    "type": "(pas)"
  },
  {
    "word": "discipline",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "ready",
    "frequency": 22,
    "type": "(adjective)"
  },
  {
    "word": "share",
    "frequency": 22,
    "type": "(noun)"
  },
  {
    "word": "balance",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "bit",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "black",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "bottom",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "gift",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "impact",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "machine",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "shape",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "tool",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "wind",
    "frequency": 21,
    "type": "(noun)"
  },
  {
    "word": "address",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "average",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "career",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "culture",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "pot",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "sign",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "table",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "task",
    "frequency": 20,
    "type": "(noun)"
  },
  {
    "word": "condition",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "contact",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "credit",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "egg",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "hope",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "ice",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "network",
    "frequency": 19,
    "type": "(noun)"
  },
  {
    "word": "separate",
    "frequency": 19,
    "type": "(adjective)"
  },
  {
    "word": "attempt",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "date",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "effect",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "link",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "perfect",
    "frequency": 18,
    "type": "(adjective)"
  },
  {
    "word": "post",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "star",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "voice",
    "frequency": 18,
    "type": "(noun)"
  },
  {
    "word": "challenge",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "friend",
    "frequency": 17,
    "type": "(noun)"
  },
  {
    "word": "warm",
    "frequency": 17,
    "type": "(adjective)"
  },
  {
    "word": "brush",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "couple",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "debate",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "exit",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "experienced",
    "frequency": 16,
    "type": "(pas)"
  },
  {
    "word": "function",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "lack",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "plant",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "spot",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "summer",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "taste",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "theme",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "track",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "wing",
    "frequency": 16,
    "type": "(noun)"
  },
  {
    "word": "brain",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "button",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "click",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "correct",
    "frequency": 15,
    "type": "(adjective)"
  },
  {
    "word": "desire",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "fixed",
    "frequency": 15,
    "type": "(pas)"
  },
  {
    "word": "foot",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "gas",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "influence",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "notice",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "rain",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "wall",
    "frequency": 15,
    "type": "(noun)"
  },
  {
    "word": "base",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "damage",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "distance",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "pair",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "staff",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "sugar",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "target",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "text",
    "frequency": 14,
    "type": "(noun)"
  },
  {
    "word": "author",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "complicated",
    "frequency": 13,
    "type": "(pas)"
  },
  {
    "word": "discount",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "file",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "ground",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "lesson",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "officer",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "phase",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "reference",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "register",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "secure",
    "frequency": 13,
    "type": "(adjective)"
  },
  {
    "word": "sky",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "stage",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "stick",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "title",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "trouble",
    "frequency": 13,
    "type": "(noun)"
  },
  {
    "word": "advanced",
    "frequency": 12,
    "type": "(pas)"
  },
  {
    "word": "bowl",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "bridge",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "campaign",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "club",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "edge",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "evidence",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "fan",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "letter",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "lock",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "option",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "organized",
    "frequency": 12,
    "type": "(pas)"
  },
  {
    "word": "pack",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "park",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "quarter",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "skin",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "sort",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "weight",
    "frequency": 12,
    "type": "(noun)"
  },
  {
    "word": "baby",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "carry",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "dish",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "exact",
    "frequency": 11,
    "type": "(adjective)"
  },
  {
    "word": "factor",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "fruit",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "muscle",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "traffic",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "trip",
    "frequency": 11,
    "type": "(noun)"
  },
  {
    "word": "appeal",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "chart",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "gear",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "land",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "log",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "lost",
    "frequency": 10,
    "type": "(adjective)"
  },
  {
    "word": "net",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "season",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "spirit",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "tree",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "wave",
    "frequency": 10,
    "type": "(noun)"
  },
  {
    "word": "belt",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "bench",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "closed",
    "frequency": 9,
    "type": "(pas)"
  },
  {
    "word": "commission",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "copy",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "drop",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "firm",
    "frequency": 9,
    "type": "(adjective)"
  },
  {
    "word": "frequent",
    "frequency": 9,
    "type": "(adjective)"
  },
  {
    "word": "progress",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "project",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "stuff",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "ticket",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "tour",
    "frequency": 9,
    "type": "(noun)"
  },
  {
    "word": "angle",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "blue",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "breakfast",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "doctor",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "dot",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "dream",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "essay",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "father",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "fee",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "finance",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "juice",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "limit",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "luck",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "milk",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "mixed",
    "frequency": 8,
    "type": "(pas)"
  },
  {
    "word": "mouth",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "pipe",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "please",
    "frequency": 8,
    "type": "(adverb)"
  },
  {
    "word": "seat",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "stable",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "storm",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "team",
    "frequency": 8,
    "type": "(noun)"
  },
  {
    "word": "amazing",
    "frequency": 7,
    "type": "(adjective)"
  },
  {
    "word": "bat",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "beach",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "blank",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "busy",
    "frequency": 7,
    "type": "(adjective)"
  },
  {
    "word": "catch",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "chain",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "cream",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "crew",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "detail",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "detailed",
    "frequency": 7,
    "type": "(pas)"
  },
  {
    "word": "interview",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "kid",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "mark",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "match",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "pain",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "pleasure",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "score",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "screw",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "sex",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "sharp",
    "frequency": 7,
    "type": "(adjective)"
  },
  {
    "word": "shop",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "shower",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "suit",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "tone",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "window",
    "frequency": 7,
    "type": "(noun)"
  },
  {
    "word": "wise",
    "frequency": 7,
    "type": "(adjective)"
  },
  {
    "word": "band",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "block",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "bone",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "calendar",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "cap",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "coat",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "contest",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "court",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "cup",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "district",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "finger",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "garage",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "guarantee",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "hole",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "hook",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "implement",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "layer",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "lecture",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "lie",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "married",
    "frequency": 6,
    "type": "(pas)"
  },
  {
    "word": "narrow",
    "frequency": 6,
    "type": "(adjective)"
  },
  {
    "word": "nose",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "partner",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "profile",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "respect",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "rice",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "schedule",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "telephone",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "tip",
    "frequency": 6,
    "type": "(noun)"
  },
  {
    "word": "bag",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "battle",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "bed",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "bill",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "bother",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "cake",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "code",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "curve",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "dimension",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "ease",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "farm",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "fight",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "gap",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "grade",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "horse",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "host",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "husband",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "loan",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "mistake",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "nail",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "noise",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "occasion",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "package",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "pause",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "phrase",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "race",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "sand",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "sentence",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "shoulder",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "smoke",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "stomach",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "string",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "surprised",
    "frequency": 5,
    "type": "(pas)"
  },
  {
    "word": "towel",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "vacation",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "wheel",
    "frequency": 5,
    "type": "(noun)"
  },
  {
    "word": "arm",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "associate",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "bet",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "blow",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "border",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "branch",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "breast",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "buddy",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "bunch",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "chip",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "coach",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "cross",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "document",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "draft",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "dust",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "floor",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "golf",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "habit",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "iron",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "judge",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "knife",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "landscape",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "league",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "mail",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "mess",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "parent",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "pattern",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "pin",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "pool",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "pound",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "request",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "salary",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "shame",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "shelter",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "shoe",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "tackle",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "tank",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "trust",
    "frequency": 4,
    "type": "(noun)"
  },
  {
    "word": "assist",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "bake",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "bar",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "bell",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "bike",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "blame",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "brick",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "chair",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "closet",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "clue",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "collar",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "comment",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "conference",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "devil",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "diet",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "fear",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "fuel",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "glove",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "jacket",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "lunch",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "monitor",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "mortgage",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "nurse",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "pace",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "panic",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "peak",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "provided",
    "frequency": 3,
    "type": "(pas)"
  },
  {
    "word": "reward",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "row",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "sandwich",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "shock",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "spite",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "spray",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "surprise",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "till",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "transition",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "weekend",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "yard",
    "frequency": 3,
    "type": "(noun)"
  },
  {
    "word": "alarm",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "bend",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "bicycle",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "bite",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "blind",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "bottle",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "cable",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "candle",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "clerk",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "cloud",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "concert",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "counter",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "dirty",
    "frequency": 2,
    "type": "(adjective)"
  },
  {
    "word": "flower",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "grandfather",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "harm",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "knee",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "lawyer",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "load",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "loose",
    "frequency": 2,
    "type": "(adjective)"
  },
  {
    "word": "mirror",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "neck",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "pension",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "plate",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "pleased",
    "frequency": 2,
    "type": "(pas)"
  },
  {
    "word": "proposed",
    "frequency": 2,
    "type": "(pas)"
  },
  {
    "word": "ruin",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "ship",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "skirt",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "slice",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "snow",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "stroke",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "switch",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "tired",
    "frequency": 2,
    "type": "(pas)"
  },
  {
    "word": "trash",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "tune",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "worried",
    "frequency": 2,
    "type": "(pas)"
  },
  {
    "word": "zone",
    "frequency": 2,
    "type": "(noun)"
  },
  {
    "word": "anger",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "award",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "bid",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "boot",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "bug",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "camp",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "candy",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "carpet",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "cat",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "champion",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "channel",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "clock",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "comfort",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "cow",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "crack",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "disappointed",
    "frequency": 1,
    "type": "(pas)"
  },
  {
    "word": "empty",
    "frequency": 1,
    "type": "(adjective)"
  },
  {
    "word": "engineer",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "entrance",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "fault",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "grass",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "guy",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "highlight",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "island",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "joke",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "jury",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "leg",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "lip",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "mate",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "nerve",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "passage",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "pen",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "pride",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "priest",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "promise",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "resort",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "ring",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "roof",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "rope",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "sail",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "scheme",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "script",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "slight",
    "frequency": 1,
    "type": "(adjective)"
  },
  {
    "word": "smart",
    "frequency": 1,
    "type": "(adjective)"
  },
  {
    "word": "sock",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "station",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "toe",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "tower",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "truck",
    "frequency": 1,
    "type": "(noun)"
  },
  {
    "word": "witness",
    "frequency": 1,
    "type": "(noun)"
  }
];



/*
CORS notes from Mozilla:
"CORS requests may only use the HTTPS URL scheme, but the URL specified by the request is of a different type. This often occurs if the URL specifies a local file, using a file:/// URL."

"To fix this problem, simply make sure you use HTTPS URLs when issuing requests involving CORS."
*/