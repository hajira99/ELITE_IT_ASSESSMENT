export function URL_for_password()
{

    it('Getting URL', () => {
        cy.visit("https://www.passwordmonster.com/"),{ failOnStatusCode: false };  
        
    });

 
  it('should validate weak password', () => {
    cy.get('#lgd_out_pg_pass').clear().type('Penadol'); // Enter Penedol
    cy.get('#complexity-span').should('contain', 'Very Weak'); // Showing Strength Very weak
  });

  it('should validate weak password', () => {
    cy.get('#lgd_out_pg_pass').clear().type('Penadol1'); // Replace 'Penedol1'
    cy.get('#complexity-span').should('contain', 'Weak'); //Showing Strength weak
  });

  it('should validate medium password', () => {
    cy.get('#lgd_out_pg_pass').clear().type('Penadol@12'); // Replace 'Penedol@12' 
    cy.get('#complexity-span').should('contain', 'Medium'); // Showing Strength Medium
  });

  it('should validate strong password', () => {
    cy.get('#lgd_out_pg_pass').clear().type('Penedol@98'); // Replace 'Penedol@98'
    cy.get('#complexity-span').should('contain', 'Strong'); // Showing Strength Strong
  });


}