
import { Technology } from 'src/app/models/technology.model'
import { mining_camp } from './mining_camp'
import { feudal_age } from './feudal_age'
export const gold_mining: Technology = {
  "name": "gold mining",
  "age": "feudal",
  "color": "green",
  dependencies: [mining_camp.name, feudal_age.name],
}
