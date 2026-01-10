describe('Cypress e Github Action', () => {
  it('Visitando o site e testandhgo', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq' , 'Curso de Cypress + Github Actions')
  })
})