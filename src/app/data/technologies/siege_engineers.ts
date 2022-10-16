
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'


export const siege_engineers: Technology = {
  cost: {
    "wood": 600,
    "gold": 0,
    "food": 500,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "siege engineers",
  "age": "imperial",
  "color": "green",
}
