# Age of Empires II [Civfinder](https://civfinder.web.app/)

A web app that determines which of the 35 Age of Empires II civilizations correspond to desired technologies. It also draws a technology dependency graph.

## Creating and running a local development environment

This is a 100% frontend [Angular](https://angular.io/) web app; so no database/backend setup is required. Here are a set of commands you can use to get up and running quickly:

```
git clone https://github.com/evheath/civfinder.git
cd civfinder
npm install
npm start
```

Then simply navigate to http://localhost:4200 to see your changes live!


## Creating new civ

-Create civ singleton in app/data/civilizations (copy template.ts)
-Import/Export the singleton in the civilizations array in app/data/civilizations/index.ts (note order matters)

## Creating new tech

-Create tech singleton in app/data/technologies
-Import/export the singleton in the techs array in app/data/technologies/index.ts