// Test that the user cannot submit the login form with invalid credentials and is shown a message
// I interpreted invalid credentials as not a @noroff.no email, making the user unable to submit the form
// also shows an error message

describe("loginfail", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("./");
    })
    // very similar to the login-test

    it("cannot login user with invalid credentials", () => {
        cy.get("#registerModal button")
            .contains("Login")
            .should("be.visible")
            .wait(1000)
            .click()
            .wait(500);
        cy.get("input#loginEmail[name='email']").type("wrongemail@hotmail.no");
        cy.get("input#loginPassword[name='password']").type("0987654321");
        cy.get("button[type='submit']").contains("Login").click();
        cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    });

    it("cannot login user with unregistered credentials", () => {
        cy.get("#registerModal button")
            .contains("Login")
            .should("be.visible")
            .wait(1000)
            .click()
            .wait(500);
        cy.get("input#loginEmail[name='email']").type("wrongemail@stud.noroff.no");
        cy.get("input#loginPassword[name='password']").type("wrongpassword");
        cy.get("button[type='submit']").contains("Login").click()

        cy.on("window:alert", (alert) => (expect(alert).to.contain("Either your username was not found or your password is incorrect")))
    });
});
