
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { dock } from './dock'
export const shipwright: Technology = {
  "name": "shipwright",
  "age": "imperial",
  "color": "green",
  dependencies: [dock.name,]
}
