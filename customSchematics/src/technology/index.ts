import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function technology(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name, age, color } = _options;
    let underscoreName = name.split(" ").join("_")
    let filepath = `/src/app/data/technologies/${underscoreName}.ts`
    let code = `
import { Technology } from 'src/app/models/technology.model'
export const ${underscoreName}: Technology = {
  "name": "${name}",
  "age": "${age}",
  "color": "${color}",
}
`

    tree.create(filepath, code);
    let techIndexFilePath = "/src/app/data/technologies/index.ts"
    let techIndexFileEntry = tree.get(techIndexFilePath)
    let newImport = `import { ${underscoreName} } from './${underscoreName}';`
    let newContent = newImport + techIndexFileEntry?.content.toString();
    tree.overwrite(techIndexFilePath, newContent);
    return tree;
  };
}
