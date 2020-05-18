
import { Technology } from 'src/app/models/technology.model'
import { siege_ram_research } from './siege_ram_research'
export const siege_ram: Technology = {
  "name": "siege ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_ram_research.name]
}
