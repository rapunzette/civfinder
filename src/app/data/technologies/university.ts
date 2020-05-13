
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
export const university: Technology = {
  "name": "university",
  "age": "castle",
  "color": "red",
  dependencies: [castle_age.name]
}
