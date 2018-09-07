/// <reference types="cypress" />
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})

beforeEach(() => {
  cy.visit('/')
  // if our application simply does window.app = app
  // then we can have for the property to be there
  // cy.window().should('have.property', 'app')

  // if application sets property to some initial value
  // but then changes it to expected value when ready
  // like "window.appReady = true"
  // we should assert the value of the property
  //                    assertion        name     value
  cy.window().should('have.property', 'appReady', true)

  // for more assertion examples see
  // https://github.com/cypress-io/cypress-example-recipes/commit/9d75842c18535d691f7c717186b5a855e004674e#diff-1f0349eb597d2c41384216c1ffb4c517
})

const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('waits for app to start', () => {
  addItem('first item')
  addItem('second item')
  cy.get('li.todo').should('have.length', 2)
})
