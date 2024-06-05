import { Random_Textt } from "./Random_Function";

export function Signup() {
  it("Logo should be present", () => {
    cy.get(".logo > a > .site_logo").should("be.visible");
  });

  it("Clicking on signup button", () => {
    cy.get(".header-cta > .scuilbler").click();
  });

  it("Click on email address field and enter email", () => {
    cy.get(".input").type("test." + Random_Textt() + "@gmail.com", {delay: 100,});
  });

  it("Click on continue with email for signup", () => {
    cy.get(".singup-btn").click();
  });

  it("Enter name", () => {
    cy.get("#username").type("Hajira");
  });

  it('Entering password', () => {
    cy.get(':nth-child(2) > .input').type("Test@abc123");
  });

  it('Enter confirm password', () => {
    cy.get(':nth-child(3) > .input').type("Test@abc123");
  });
  
  it('Click on signup button', () => {
    cy.get('.singup-btn').click();
   } );
 
}
