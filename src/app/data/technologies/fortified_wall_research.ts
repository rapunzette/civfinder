
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const fortified_wall_research: Technology = {
  cost: {
    "wood": 100,
    "gold": 0,
    "food": 200,
    "stone": 0
  },
  "name": "fortified wall research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
