
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const onager: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [onager_research.name,]
}
