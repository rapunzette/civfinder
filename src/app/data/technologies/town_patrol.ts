
import { Technology } from 'src/app/models/technology.model'
import { town_watch } from './town_watch'
import { castle_age } from './castle_age'
export const town_patrol: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [town_watch.name,],
  "name": "town patrol",
  "age": "castle",
  "color": "green",
}
