export function Dashboard(){


    it('Clicking on a button in the popup to select a category', () => {
        cy.wait(4000);
        cy.get('.boarding-roles > :nth-child(2)').click();
      });

    it('clicking on 2nd popup for further selection', () => {
        cy.get(':nth-child(3) > app-template-project-boxes > .project-item > .project-item__thumbnail').click();
    });

    it('', () => {
        cy.reload();
  cy.wait(3000);
    });
  






    }
