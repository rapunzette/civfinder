
import { Technology } from 'src/app/models/technology.model'
import { careening } from './careening'
import { imperial_age } from './imperial_age'
export const dry_dock: Technology = {
  "name": "dry dock",
  "age": "imperial",
  "color": "green",
  dependencies: [careening.name, imperial_age.name]
}
