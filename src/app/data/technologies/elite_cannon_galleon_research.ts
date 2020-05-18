
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon_research } from './cannon_galleon_research'
export const elite_cannon_galleon_research: Technology = {
  "name": "elite cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [cannon_galleon_research.name],
}
