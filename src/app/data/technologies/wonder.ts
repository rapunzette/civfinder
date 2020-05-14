
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
export const wonder: Technology = {
  "name": "wonder",
  "age": "imperial",
  "color": "red",
  dependencies: [imperial_age.name]
}
