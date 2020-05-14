
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const house: Technology = {
  "name": "house",
  "age": "dark",
  "color": "red",
  dependencies: [dark_age.name]
}
