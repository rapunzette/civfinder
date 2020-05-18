
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const fire_ship: Technology = {
  "name": "fire ship",
  "age": "castle",
  "color": "blue",
  dependencies: [war_galley_research.name,]
}
