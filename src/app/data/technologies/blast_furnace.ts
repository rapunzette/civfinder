
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { iron_casting } from './iron_casting'
export const blast_furnace: Technology = {
  dependencies: [imperial_age.name, iron_casting.name],
  "name": "blast furnace",
  "age": "imperial",
  "color": "green",
}
