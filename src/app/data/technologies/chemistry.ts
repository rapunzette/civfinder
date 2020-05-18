
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { university } from './university'
export const chemistry: Technology = {
  "name": "chemistry",
  "age": "imperial",
  "color": "green",
  dependencies: [, university.name]
}
