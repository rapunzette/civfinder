
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const lumber_camp: Technology = {
  "name": "lumber camp",
  "age": "dark",
  "color": "red",
  dependencies: [dark_age.name]
}
