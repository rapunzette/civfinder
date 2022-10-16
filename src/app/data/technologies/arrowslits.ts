
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'


export const arrowslits: Technology = {
  cost: {
    "wood": 250,
    "gold": 0,
    "food": 250,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "arrowslits",
  "age": "imperial",
  "color": "green",
}
