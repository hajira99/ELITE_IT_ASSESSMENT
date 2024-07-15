export function URL()
{

    it('Getting URL', () => {
        cy.visit("https://demo.automationtesting.in/Register.html"),{ failOnStatusCode: false };  
        
    });
}