const { data } = require("cypress/types/jquery")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')

    it('login test',() => {
      cy.fixture('cypressTest').then(data=>{
        
      })
    })
  })
})