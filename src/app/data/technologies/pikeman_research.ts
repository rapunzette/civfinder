
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
import { castle_age } from './castle_age'
export const pikeman_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "pikeman research",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name,],
}
