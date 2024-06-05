export function URLS()
{

    it('Getting URL', () => {
        cy.visit("https://www.squibler.io/", { failOnStatusCode: false });   
    });
}