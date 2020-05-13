import { Technology } from 'src/app/models/technology.model';
import { long_swordsman } from './long_swordsman';
import { imperial_age } from './imperial_age';

export const two_handed_swordsman: Technology = {
  "name": "two handed swordsman",
  "age": "imperial",
  "color": "blue",
  dependencies: [long_swordsman.name, imperial_age.name],
}