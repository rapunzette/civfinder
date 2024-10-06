
import { Technology } from 'src/app/models/technology.model'
import { devotion } from './devotion'


export const faith: Technology = {
  cost: {
    "wood": 0,
    "gold": 750,
    "food": 550,
    "stone": 0
  },
  dependencies: [devotion.name,],
  "name": "faith",
  "age": "imperial",
  "color": "green",
}
