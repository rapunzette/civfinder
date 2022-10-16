
import { Technology } from 'src/app/models/technology.model'

import { blacksmith } from './blacksmith'
export const siege_workshop: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege workshop",
  "age": "castle",
  "color": "red",
  dependencies: [, blacksmith.name]
}
