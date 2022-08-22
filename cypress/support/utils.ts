
export function readImageFileToString(fileName: string, alias: string): void {
    // cy.log(fileName, "file in readImage")
    // cy.readFile(fileName, 'base64').then((file: string) => {
    //     cy.log(`Length of image '${alias}': ${file.length}`);
    // }).as(alias);
    // cy.readFile(fileName, 'base64').as('myAlias');
    // cy.get('@myAlias').then(file => {
    //     console.log(file, "MY FILE IS HERE")
    // })
    cy.readFile(fileName, 'base64').as(alias).then((file: string) => {
        cy.log(`Length of image '${alias}': ${file.length}`);
    });
}
