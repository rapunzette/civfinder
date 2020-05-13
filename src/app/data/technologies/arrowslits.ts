
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
import { imperial_age } from './imperial_age'
export const arrowslits: Technology = {
  dependencies: [university.name, imperial_age.name],
  "name": "arrowslits",
  "age": "imperial",
  "color": "green",
}
