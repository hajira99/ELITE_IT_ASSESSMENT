

export function Signup_page() 
{

  it("Enter first Name", () => {
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("Hajira shams");
  });

  it("Enter Email Address", () => {
    cy.get('#eid > .form-control').type("hajirashamsofficial@gmail.com");
  });
  it('Click on Gender', () => {
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(2)').click();
  });

  it('Select Year', () => {
    cy.get('#yearbox').select("1996");
  });

  it('Select Month', () => {
    cy.get(':nth-child(11) > :nth-child(3) > .form-control').select("May",{force: true});
  });

  it('Select Day', () => {
    cy.get('#daybox').select("14" ,{force: true} );
  });

  it('Enter Password', () => {
    cy.get('#firstpassword').type("Test@abc123");
  });

  it('Enter Confirm Password', () => {
    cy.get('#secondpassword').type("Test@abc123");
  });

  it('Click on submit buttton', () => {
    cy.get('#submitbtn').click();
  });
}

