
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const palisade_gate: Technology = {
  "name": "palisade gate",
  "age": "dark",
  "color": "red",
  dependencies: [dark_age.name]
}
