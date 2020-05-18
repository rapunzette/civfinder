
import { Technology } from 'src/app/models/technology.model'
import { galleon_research } from './galleon_research'
export const galleon: Technology = {
  "name": "galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [galleon_research.name,]
}
