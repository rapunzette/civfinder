
import { Technology } from 'src/app/models/technology.model'


import { iron_casting } from './iron_casting'
export const blast_furnace: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [, iron_casting.name],
  "name": "blast furnace",
  "age": "imperial",
  "color": "green",
}
