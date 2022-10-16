
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const padded_archer_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [blacksmith.name],
  "name": "padded archer armor",
  "age": "feudal",
  "color": "green",
}
