export function Login(){


it('Clicking on Login button', () => {
    cy.get('.header-log > a').click();
  });

  it('Getting email address field and typing email', () => {
    cy.get('.input').type("Hajirashamsofficial@gmail.com");
  });
  
  it('Click on Continue with email button', () => {
    cy.get('.singup-btn').click();
  });

  it('Enter your password', () => {
    cy.get(':nth-child(2) > .input').type('Test@abc');
  });

  it('Click on eye icon', () => {
    cy.get('.fas').click();
  });

  it('Click on sign in button', () => {
    cy.get('.singup-btn').click();
  });
}