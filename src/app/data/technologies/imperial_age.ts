
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
export const imperial_age: Technology = {
  "name": "imperial age",
  "age": "castle",
  "color": "green",
  dependencies: [castle_age.name]
}
