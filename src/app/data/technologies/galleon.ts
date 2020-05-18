
import { Technology } from 'src/app/models/technology.model'
import { war_galley } from './war_galley'
import { imperial_age } from './imperial_age'
export const galleon: Technology = {
  "name": "galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [war_galley.name,]
}
