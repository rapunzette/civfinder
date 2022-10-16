
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const onager: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [onager_research.name,]
}
