/// <reference types="cypress" />
// resets the database via API call to always start with 0 items
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})

beforeEach(() => {
  cy.visit('/')
  // if our application simply does window.app = app
  // then we can have for the property to be there
  cy.window().should('have.property', 'app')

  // if application sets property to some initial value
  // but then changes it to expected value when ready like
  //  window.appReady = true
  // then we can do two things

  // 1: grab window, then its property "appReady"
  //  then wait for specific value
  // cy.window().its('appReady').should('equal', true)

  // 2: use "have.property" <name> <expect value> assertion
  //                    assertion        name     value
  // cy.window().should('have.property', 'appReady', true)

  // orphan reference - the entire `window.config` object changes
  // when the app starts, so it cannot get reference to the top object
  // and keep retrying its property - because a different object will
  // have the right property!
  // the line below works for:
  //    window.config.appReady = true
  // and does NOT work for:
  //    window.config = {appReady: true}
  // cy.window().its('config').its('appReady').should('equal', true)

  // solution 1:
  // cy.window().should('have.deep.property', 'config.appReady', true)
  // cy.window().its('config.appReady').should('equal', true)

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
