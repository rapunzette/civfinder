
import { Technology } from 'src/app/models/technology.model'
import { capped_ram_research } from './capped_ram_research'
export const siege_ram_research: Technology = {
  "name": "siege ram research",
  "age": "imperial",
  "color": "green",
  dependencies: [capped_ram_research.name],
}
