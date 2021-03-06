describe('Kiểm thử can le trai combo Dan toc', function() {

  context('login', function(){
    beforeEach(function(){
      cy.visit('/main/patients/new')
    })

     it('Đăng nhập thành công', function(){
      cy.get('input[name=email]').type('doctor_10@gmail.com')
      cy.get('input[name=password]').type('Methadone@2017{enter}')

      cy.url().should('include', '/main/doctor/dashboard')
      cy.wait(3000)
      cy.visit('/main/patients/new')
    	cy.wait(3000)
 		cy.get('.ui-select-container.select2.select2-container.ng-not-empty.ng-valid').first().click()
 		cy.wait(1000)
 		cy.get('.select2-result-label.ui-select-choices-row-inner span').and('have.css', 'text-align')
 		.and('match', /left/)
    })

  })

})