
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
export const loom: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [town_center.name,],
  "name": "loom",
  "age": "dark",
  "color": "green",
}
