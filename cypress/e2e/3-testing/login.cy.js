describe("login", () => {
  it("can log in a user that uses valid credentials", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input#loginEmail").type("tjtjtj@stud.noroff.no", {
      delay: 100,
    });
    cy.get("input#loginPassword").type("Noroff123", { delay: 100 });
    cy.get("button[type='submit']:visible").click();
    cy.wait(500);
    cy.url().should("include", "/?view=profile&name=", { delay: 500 });
    cy.wait(2000);
  });

  it("cannot log in a user with invalid credentials and displays a message", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input#loginEmail").type("tjtjtj@stud.noroff.no", {
      delay: 100,
    });
    cy.get("input#loginPassword").type("No123", { delay: 100 });
    cy.get("button[type='submit']:visible").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
    cy.wait(2000);
  });
});
