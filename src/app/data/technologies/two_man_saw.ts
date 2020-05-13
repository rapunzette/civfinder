
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { bow_saw } from './bow_saw'
export const two_man_saw: Technology = {
  "name": "two man saw",
  "age": "imperial",
  "color": "green",
  dependencies: [imperial_age.name, bow_saw.name]
}
