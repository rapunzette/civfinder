
import { Technology } from 'src/app/models/technology.model'
import { battering_ram } from './battering_ram'
import { imperial_age } from './imperial_age'
export const capped_ram: Technology = {
  "name": "capped ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [battering_ram.name, imperial_age.name]
}
