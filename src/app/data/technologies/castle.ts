
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
export const castle: Technology = {
  "name": "castle",
  "age": "castle",
  "color": "red",
  dependencies: [castle_age.name]
}
