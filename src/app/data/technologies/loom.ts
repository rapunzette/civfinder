
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
export const loom: Technology = {
  dependencies: [town_center.name,],
  "name": "loom",
  "age": "dark",
  "color": "green",
}
