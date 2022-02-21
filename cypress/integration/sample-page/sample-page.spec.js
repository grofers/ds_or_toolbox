describe("SamplePage", () => {
  it("should match the image snapshot on page load", () => {
    cy.visit("/");

    cy.findByText("Sample Header").should("be.visible");
    cy.findByText("Sample Form").should("be.visible");
    cy.findByText("Sample Table").should("be.visible");

    cy.matchImageSnapshot("sample-page");
  });
});
