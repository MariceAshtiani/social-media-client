// The user can log out with the log out button

const EMAIL = "thisismyemail@stud.noroff.no";
const PASSWORD = "thisismypassword";

describe("logout", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("./");
    });

    it("logs out user with logout button", () => {
        // make sure the user logs in first (probably a better way to do this but I'm running out of time)
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
        cy.wait(2000);

        //now logged in, lets log out

        cy.get("button[data-auth='logout']")
            .click()
            .should(() => {
                expect(localStorage.getItem('token')).to.be.null
            });
        cy.location("pathname").should("eq", "/");
    })
})