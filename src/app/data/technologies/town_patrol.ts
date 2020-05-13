
import { Technology } from 'src/app/models/technology.model'
import { town_watch } from './town_watch'
import { castle_age } from './castle_age'
export const town_patrol: Technology = {
  dependencies: [town_watch.name, castle_age.name],
  "name": "town patrol",
  "age": "castle",
  "color": "green",
}
