
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const outpost: Technology = {
  "name": "outpost",
  "age": "dark",
  "color": "red",
  dependencies: [dark_age.name]
}
