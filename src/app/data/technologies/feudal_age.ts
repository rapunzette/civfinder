
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const feudal_age: Technology = {
  "name": "feudal age",
  "age": "dark",
  "color": "green",
  dependencies: [dark_age.name]
}
