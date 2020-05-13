
import { Technology } from 'src/app/models/technology.model'
import { town_center } from './town_center'
import { feudal_age } from './feudal_age'
export const town_watch: Technology = {
  dependencies: [town_center.name, feudal_age.name],
  "name": "town watch",
  "age": "feudal",
  "color": "green",
}
