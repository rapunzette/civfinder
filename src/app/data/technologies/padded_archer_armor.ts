
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const padded_archer_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [blacksmith.name],
  "name": "padded archer armor",
  "age": "feudal",
  "color": "green",
}
