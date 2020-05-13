
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { guard_tower } from './guard_tower'
export const keep: Technology = {
  "name": "keep",
  "age": "imperial",
  "color": "red",
  dependencies: [imperial_age.name, guard_tower.name]
}
