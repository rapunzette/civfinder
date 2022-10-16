
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const scale_barding_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [blacksmith.name],
  "name": "scale barding armor",
  "age": "feudal",
  "color": "green",
}
