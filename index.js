
import 'dotenv/config' 
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
  res.send("Welcome to Halwai Party Menu")
})

app.get('/partyMenu', (req, res) => {
  const partyMenu = {
    "FRESH JUICE": [
        "Pineapple",
        "Kiwi",
        "WaterMelon Juice",
        "Fresh Orange Mosambi",
        "Mosambi Pineapple",
        "Black Grapes",
        "Water Melon",
        "Palm Water Melon",
        "Falsa Juice",
        "Falsa Jamun Fresh Juice",
        "Mixed Fruit Fresh Juice",
        "Green Grapes Tulsi Pudina",
        "Green Grapes Melon Juice",
        "Pineapple Mint Cooler",
        "Aam Ka Panna",
        "Fresh Guava With Pomegranate",
        "Black Grapes & Green Grapes Juice",
        "Thandai",
        "Guava Orange Punch"
    ],
    "MOCKTAILS": [
        "Pink Lady",
        "Green Lady",
        "Citrus Cucumber Fresco",
        "Hot Beauty",
        "Pina Colada",
        "Strawberry Colada",
        "Bul Bule e Sabanam",
        "Rose Lemondy",
        "Ocean Queen",
        "Fruit Punch",
        "Grass Hopper",
        "Virgin Merry",
        "Blue Perris",
        "Mint Mojito",
        "Khush Lemon Sarbat",
        "Hazma Hazam Adrak Nimbu Pani",
        "Cinderella",
        "Pineapple Apple Kiwi",
        "Blue Hawin Cooler",
        "Litchi Limca Float",
        "Berry Blast",
        "Orange Blossom",
        "Nimbu Pudina Pani",
        "Aerated Drink",
        "Apple Mint | Water Melon Mojito",
        "Strawberry Martini",
        "MangoTango"
    ],
    "LITE DRINKS": [
        "Mexican Tortilla",
        "Mexican Chilly Beans",
        "Cheese Corn Tomato"
    ],
    "SOUPS": [
        "Veg Noodles Soup",
        "Three Pepper",
        "Clear French Onion",
        "Tomato Dhaniya Sharba",
        "Cream of Tomato",
        "Cream of Mushroom",
        "Broccoli Almond",
        "Cream of Peas Almond",
        "Cream of Zucchini",
        "Cream of Broccoli Garlic",
        "Celery Mushroom",
        "Malaysian Laksa",
        "Three Pepper Herb Soup",
        "Thai Hot Pot Soup",
        "Veg. Khow Seuy Soup",
        "Sweet Corn Chowder Soup",
        "Lemon Coriander Soup",
        "Italian Verde",
        "White Mushroom Raw Stew",
        "Minestrone Soup",
        "Hot & Sour Soup",
        "Veg. Manchow",
        "Ganga Jamuna",
        "Pine Orange",
        "Jamun Hot Pot",
        "Sweet Corn Jade",
        "Coriander Broth Golden Corn",
        "Asian Green | Tomato Basil",
        "Mexican Dumpling Soup",
        "Burnt Garlic Coconut",
        "Vietnamese Sour Soup",
        "Minestrone Soup",
        "Thai Lemon Grass | Thai Coconut Soup"
    ]
}
  res.send(partyMenu)
})

app.get('/partPackage', (req,res)=>{
  const partPackage = {
    "packages": [
      {
        "name": "PACKAGE 1",
        "price": "1199",
        "currency": "INR",
        "items": [
          {
            "category": "Drinks",
            "items": [
              {"name": "Welcome Drink", "quantity": 1},
              {"name": "Fresh Juice", "quantity": 1}
            ]
          },
          {
            "category": "Soup",
            "items": [
              {"name": "Soup", "quantity": 2},
              {"name": "Soup Accompaniments", "quantity": 3}
            ]
          },
          {
            "category": "Main Course",
            "items": [
              {"name": "Dal", "quantity": 1},
              {"name": "Rice", "quantity": 2},
              {"name": "Indian Breads", "quantity": 3},
              {"name": "Raita", "quantity": 1},
              {"name": "Papad", "quantity": 2}
            ]
          },
          {
            "category": "Appetizers",
            "items": [
              {"name": "Appetizers", "quantity": 3},
              {"name": "Farsan", "quantity": 1},
              {"name": "Chaat Live", "quantity": 1},
              {"name": "Speciality Live Counter", "quantity": 1}
            ]
          },
          {
            "category": "Salad Bar",
            "items": [
              {"name": "Salad Bar", "quantity": 4},
              {"name": "Pickle", "quantity": 2}
            ]
          },
          {
            "category": "Sweets & Desserts",
            "items": [
              {"name": "Regular Sweet", "quantity": 1},
              {"name": "Premium Sweet", "quantity": 1},
              {"name": "Dessert", "quantity": 1},
              {"name": "Ice Cream", "quantity": 1}
            ]
          },
          {
            "category": "Miscellaneous",
            "items": [
              {"name": "Baked Dish", "quantity": 1},
              {"name": "Bottle Water (200 ml)", "quantity": 1},
              {"name": "Mukhwas", "quantity": 3}
            ]
          }
        ],
        "speciality_live_counter_options": [
          "Italian",
          "Mexican",
          "Oriental",
          "South Indian",
          "Amritsari"
        ]
      },
      {
        "name": "PACKAGE 2",
        "price": "1499",
        "currency": "INR",
        "items": [
          {
            "category": "Drinks",
            "items": [
              {"name": "Welcome Drink", "quantity": 2},
              {"name": "Fresh Juice", "quantity": 1}
            ]
          },
          {
            "category": "Soup",
            "items": [
              {"name": "Soup", "quantity": 2},
              {"name": "Soup Accompaniments", "quantity": 3}
            ]
          },
          {
            "category": "Main Course",
            "items": [
              {"name": "Rice", "quantity": 2},
              {"name": "Indian Breads", "quantity": 4},
              {"name": "Raita", "quantity": 1},
              {"name": "Papad", "quantity": 2}
            ]
          },
          {
            "category": "Appetizers",
            "items": [
              {"name": "Appetizers", "quantity": 4},
              {"name": "Farsan", "quantity": 1},
              {"name": "Chaat Live", "quantity": 2},
              {"name": "Speciality Live Counter", "quantity": 1}
            ]
          },
          {
            "category": "Salad Bar",
            "items": [
              {"name": "Salad Bar", "quantity": 4},
              {"name": "Pickle", "quantity": 2}
            ]
          },
          {
            "category": "Sweets & Desserts",
            "items": [
              {"name": "Regular Sweet", "quantity": 1},
              {"name": "Live Sweet", "quantity": 1},
              {"name": "Premium Sweet", "quantity": 1},
              {"name": "Dessert", "quantity": 1},
              {"name": "Ice Cream", "quantity": 1}
            ]
          },
          {
            "category": "Miscellaneous",
            "items": [
              {"name": "Baked Dish", "quantity": 1},
              {"name": "Bottle Water (200 ml)", "quantity": 1},
              {"name": "Mukhwas", "quantity": 3}
            ]
          }
        ],
        "speciality_live_counter_options": [
          "Italian",
          "Mexican",
          "Oriental",
          "South Indian",
          "Amritsari",
          "Rajasthani"
        ]
      }
    ]
  }
    res.send(partPackage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





