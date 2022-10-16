
import { Technology } from 'src/app/models/technology.model'


import { university } from './university'
export const chemistry: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "chemistry",
  "age": "imperial",
  "color": "green",
  dependencies: [, university.name]
}
