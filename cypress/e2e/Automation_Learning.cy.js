/// <reference types="cypress"/>

import { Dashboard } from "./Dashboard.cy";
import { Login } from "./Login.cy";
import { Random_Textt } from "./Random_Function";
import { Signup } from "./Sigup.cy";
import { URLS } from "./URL.cy";
import { Logout } from "./logout.cy";


//Test Suit
describe('Test Suit', () => {
  
  afterEach( () => {
        cy.wait(2000);
  });
   URLS();
   Signup();
   Dashboard();
   Logout();
   Login();

});