
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const treadmill_crane: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [university.name,],
  "name": "treadmill crane",
  "age": "castle",
  "color": "green",
}
