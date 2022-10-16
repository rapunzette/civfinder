
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const scale_mail_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [blacksmith.name],
  "name": "scale mail armor",
  "age": "feudal",
  "color": "green",
}
