
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'


export const siege_engineers: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [university.name,],
  "name": "siege engineers",
  "age": "imperial",
  "color": "green",
}
