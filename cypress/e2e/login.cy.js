// test if the user can log in with the login-form using valid credentials

//const USER_NAME = "Thisisaname";
const EMAIL = "thisismyemail@stud.noroff.no";
const PASSWORD = "thisismypassword";

describe("login", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("./");
    });

    it("logs in user with valid credentials", () => {
        cy.get("#registerModal button")
            .contains("Login")
            .should("be.visible")
            .wait(1000)
            .click()
            .wait(500);
        cy.get("input#loginEmail[name='email']").type(EMAIL);
        cy.get("input#loginPassword[name='password']").type(PASSWORD);
        cy.wait(1000);
        cy.get("button[type='submit']").contains("Login").click();
        cy.wait(1000);
        cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
    });
});