import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function technology(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name, age, color } = _options;

    let underscoreName = name.split(" ").join("_")

    // the instance file
    let filepath = `/src/app/data/technologies/${underscoreName}.ts`
    let code = `
import { Technology } from 'src/app/models/technology.model'
export const ${underscoreName}: Technology = {
  "name": "${name}",
  "age": "${age}",
  "color": "${color}",
  dependencies: [],
}
`
    tree.create(filepath, code);

    // updating the tech index
    let techIndexFilePath = "/src/app/data/technologies/index.ts";
    let techIndexFileEntry = tree.get(techIndexFilePath);
    let newImport = `import { ${underscoreName} } from './${underscoreName}';\n`;
    let newExport = `export { ${underscoreName} } from './${underscoreName}';\n`;
    let newContent = newImport + newExport + techIndexFileEntry?.content.toString();
    newContent = newContent.substring(0, newContent.length - 1); // chopping off the last bracket
    newContent += `  ${underscoreName},\n]`; // adding the tech to the array
    tree.overwrite(techIndexFilePath, newContent);

    // updating the civ model
    let civModelFilePath = "/src/app/models/civilization.model.ts";
    let civModelFileEntry = tree.get(civModelFilePath);
    let civModelContent = "" + civModelFileEntry?.content.toString();
    civModelContent = civModelContent.substring(0, civModelContent.length - 1); // chopping off the last curly bracket
    civModelContent += `  "${name}": boolean;\n}`; // adding the tech to the model
    tree.overwrite(civModelFilePath, civModelContent);

    // updating the civ instances with a default of true
    const civs: string[] = [
      "aztecs",
      "berbers",
      "britons",
      "bulgarians",
      "burmese",
      "byzantines",
      "celts",
      "chinese",
      "cumans",
      "ethiopians",
      "franks",
      "goths",
      "huns",
      "incas",
      "indians",
      "italians",
      "japanese",
      "khmer",
      "koreans",
      "lithuanians",
      "magyars",
      "malay",
      "malians",
      "mayans",
      "mongols",
      "persians",
      "portuguese",
      "saracens",
      "slavs",
      "spanish",
      "tatars",
      "teutons",
      "turks",
      "vietnamese",
      "vikings",
    ]
    civs.forEach(civ => {
      let civInstanceFilePath = `/src/app/data/civilizations/${civ}.ts`;
      let civInstanceFileEntry = tree.get(civInstanceFilePath);
      let civInstanceContent = "" + civInstanceFileEntry?.content.toString();
      civInstanceContent = civInstanceContent.substring(0, civInstanceContent.length - 1); // chopping off the last curly bracket
      civInstanceContent += `  "${name}": true,\n}`; // adding the tech to the instance
      tree.overwrite(civInstanceFilePath, civInstanceContent);
    })

    return tree;
  };
}
