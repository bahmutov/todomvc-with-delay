/// <reference types="cypress" />
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})

beforeEach(() => {
  cy.visit('/')
  cy.window().should('have.property', 'app')
})

const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('waits for app to start', () => {
  addItem('first item')
  addItem('second item')
  cy.get('li.todo').should('have.length', 2)
})
