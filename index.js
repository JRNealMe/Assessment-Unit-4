const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
const fortune = ["A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air.",
    "A fresh start will put you on your way."
  ];
app.get("/api/fortune", (req, res) => {
  

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.post("/api/fortune", (req, res) => {
  const {newFortune} = req.body
  fortune.push (newFortune)
console.log(newFortune)
  res.status(200).send("You got a new furtune.")
}) 

app.get("/api/DailyGoal", (req, res) => {
  const daily = ["Drink 8 cups of water today.",
					 "Eat veggies with 3 meals today.",
					 "Get 30 min of exercise today.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomdailyGoal);0
});

app.post("/api/dailyGoal", (req, res) => {
  const {newDailyGoal} = req.body
  fortune.push (newDailyGoal)
console.log(newDailyGoal)
  res.status(200).send("Keep it going, add a new daily goal.")

app.get("/api/motivation", (req, res) => {
    const motivation = ["You do not find the happy life. You make it.",
             "Stay close to anything that makes you glad you are alive.",
             "Keep your face to the sunshine and you cannot see a shadow.",
    ];
  
    
    let randomIndex = Math.floor(Math.random() * motivation.length);
    let randomMotivation = motivation[randomIndex];
  
    res.status(200).send(randomMotivation);
    
  });

app.listen(4000), () => console.log("Server running on 4000"));
