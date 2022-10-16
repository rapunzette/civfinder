
import { Technology } from 'src/app/models/technology.model'
import { town_watch } from './town_watch'

export const town_patrol: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 300,
    "stone": 0
  },
  dependencies: [town_watch.name,],
  "name": "town patrol",
  "age": "castle",
  "color": "green",
}
