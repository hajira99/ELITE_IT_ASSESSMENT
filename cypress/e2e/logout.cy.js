export function Logout(){

it('Clicking on setting buttton', () => {
    cy.get(':nth-child(2) > .mat-tooltip-trigger').click();
});

it('Clicking on sign out button', () => {
    cy.get('div.settings__logout').click();

});

}