
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
export const villager: Technology = {
  dependencies: [town_center.name,],
  "name": "villager",
  "age": "dark",
  "color": "blue",
}
