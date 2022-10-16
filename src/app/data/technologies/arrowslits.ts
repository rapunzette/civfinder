
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'


export const arrowslits: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "arrowslits",
  "age": "imperial",
  "color": "green",
}
