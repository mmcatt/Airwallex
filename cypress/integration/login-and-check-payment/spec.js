it('Log in and check payment details', () => {
  // read language env
  cy.readFile(Cypress.env('en'), 'utf8').then(($lang) => {
    cy.visit($lang.root)
    cy.enterLoginPage($lang.login)
    // read user env
    cy.readFile(Cypress.env('user')).then(($user) => {
      cy
        .login('#email', $user.username, '#password', $user.password, $lang.loginForm, $lang.login)
        .wait(1000)
      // Assert user have been successfully logged in
      cy.url().should('include',$lang.dashboard)
      // Navigate to Payments > Payment List
      cy.get($lang.primary_nav_payments).click()
      cy.get($lang.payment_activity_tab).click()
      // Assert user is on Payment List
      cy.get('table').contains('tr',$lang.paymentamount).should('be.visible')
      // Click and validate the payment details
      cy.contains($lang.filters).click()
      cy.get($lang.paymentId).should('be.visible').wait(500).type($user.paymentid)
      cy.get($lang.footer_links).contains($lang.applyfilters).click()
      cy.get('tbody>tr>td').eq(1).click()
      cy.checkValue($lang.type_value, $lang.description_value, $lang.payment)
      cy.checkValue($lang.status_value, $lang.description_value, $lang.dispatched)
      cy.checkValue($lang.account_id_value, $lang.description_value, $user.accountid)
      cy.checkValue($lang.payment_id_value, $lang.description_value, $user.paymentid)
      cy.checkValue($lang.request_id_value, $lang.description_value, $user.requestid)
    })
  })
})