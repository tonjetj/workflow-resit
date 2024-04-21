describe("logout", () => {
  it("logs out user when logout-button is clicked", () => {
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
    cy.get("header button[data-auth='logout']:visible").click();
    cy.wait(3000);
  });
});
