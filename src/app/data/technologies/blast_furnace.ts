
import { Technology } from 'src/app/models/technology.model'


import { iron_casting } from './iron_casting'
export const blast_furnace: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [, iron_casting.name],
  "name": "blast furnace",
  "age": "imperial",
  "color": "green",
}
