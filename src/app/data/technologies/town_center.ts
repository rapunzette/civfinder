
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const town_center: Technology = {
  "name": "town center",
  "age": "dark",
  "color": "red",
  dependencies: [dark_age.name]
}
