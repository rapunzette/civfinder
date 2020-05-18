
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon_research } from './cannon_galleon_research'
export const cannon_galleon: Technology = {
  "name": "cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [cannon_galleon_research.name,]
}
