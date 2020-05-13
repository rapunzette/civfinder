
import { Technology } from 'src/app/models/technology.model'
import { capped_ram } from './capped_ram'
export const siege_ram: Technology = {
  "name": "siege ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [capped_ram.name]
}
