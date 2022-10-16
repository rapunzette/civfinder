
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
export const loom: Technology = {
  cost: {
    "wood": 0,
    "gold": 50,
    "food": 0,
    "stone": 0
  },
  dependencies: [town_center.name,],
  "name": "loom",
  "age": "dark",
  "color": "green",
}
