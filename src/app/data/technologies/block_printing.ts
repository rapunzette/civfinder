
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'


export const block_printing: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name,],
  "name": "block printing",
  "age": "imperial",
  "color": "green",
}
