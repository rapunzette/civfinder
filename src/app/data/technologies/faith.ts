
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'


export const faith: Technology = {
  cost: {
    "wood": 0,
    "gold": 1000,
    "food": 750,
    "stone": 0
  },
  dependencies: [monastery.name,],
  "name": "faith",
  "age": "imperial",
  "color": "green",
}
