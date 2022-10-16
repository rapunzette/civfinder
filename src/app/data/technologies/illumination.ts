
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'


export const illumination: Technology = {
  cost: {
    "wood": 0,
    "gold": 120,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name,],
  "name": "illumination",
  "age": "imperial",
  "color": "green",
}
