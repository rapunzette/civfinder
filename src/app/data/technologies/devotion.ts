
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'


export const devotion: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 100,
    "stone": 0
  },
  dependencies: [monastery.name,],
  "name": "devotion",
  "age": "castle",
  "color": "green",
}
