
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
import { feudal_age } from './feudal_age'
export const wheelbarrow: Technology = {
  dependencies: [town_center.name,],
  "name": "wheelbarrow",
  "age": "feudal",
  "color": "green",
}
