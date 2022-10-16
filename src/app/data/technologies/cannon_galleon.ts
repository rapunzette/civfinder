
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
export const cannon_galleon: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [chemistry.name,]
}
