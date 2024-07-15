import { URL1, URL_for_password } from "./Password_URL.cy";
import { Signup_page } from "./Signup_page.cy";
import { URL } from "./URL_for_signup_page.cy";
describe('Test Suit', () => {
  
    afterEach( () => {
          cy.wait(2000);
    });
     URL();
     Signup_page();
     URL_for_password();


  });