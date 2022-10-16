
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
export const villager: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [town_center.name,],
  "name": "villager",
  "age": "dark",
  "color": "blue",
}
