
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const fletching: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [blacksmith.name],
  "name": "fletching",
  "age": "feudal",
  "color": "green",
}
