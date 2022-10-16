
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const treadmill_crane: Technology = {
  cost: {
    "wood": 200,
    "gold": 0,
    "food": 300,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "treadmill crane",
  "age": "castle",
  "color": "green",
}
