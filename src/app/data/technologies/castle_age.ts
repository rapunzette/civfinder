
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
export const castle_age: Technology = {
  "name": "castle age",
  "age": "castle",
  "color": "green",
  dependencies: [feudal_age.name]
}
