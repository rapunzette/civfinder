
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
import { imperial_age } from './imperial_age'
export const siege_engineers: Technology = {
  dependencies: [university.name, imperial_age.name],
  "name": "siege engineers",
  "age": "imperial",
  "color": "green",
}
