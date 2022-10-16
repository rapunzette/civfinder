
import { Technology } from 'src/app/models/technology.model'


import { iron_casting } from './iron_casting'
export const blast_furnace: Technology = {
  cost: {
    "wood": 0,
    "gold": 225,
    "food": 275,
    "stone": 0
  },
  dependencies: [, iron_casting.name],
  "name": "blast furnace",
  "age": "imperial",
  "color": "green",
}
