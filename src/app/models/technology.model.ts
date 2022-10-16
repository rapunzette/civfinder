import { Cost } from "./cost.model";

export interface Technology {
  name: string;
  age: "dark" | "feudal" | "castle" | "imperial";
  color: "blue" | "red" | "green" | "purple" | "transparent";
  cost: Cost;
  /**
   * A list of names (strings) of the techs that need to be researched prior to this one
   */
  dependencies: string[];
}