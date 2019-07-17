Cypress.Commands.add("enterApplicantDetails", () => {
    
        cy.visit('https://dev.bcregistrynames.gov.bc.ca');

        cy.get('img[src="images/step3.gif"]').click();
        
        cy.get('input[name="_eventId_next"]').click();     

        cy.get('input[name="lastName"]').type('TEST');

        cy.get('input[name="firstName"]').type('TEST');

        cy.get('#notifyMethod2').click();

        cy.get('input[name="address1"]').type('TEST 940 Blanshard Street');

        cy.get('input[name="city"]').type('Victoria');

        cy.get('input[name="postalCode"]').type('V8W 2H3');

        cy.get('input[name="phoneNum"]').type('5555555555');        
           
});

Cypress.Commands.add("fillInOtherNameChoices", function(){
    cy.get('input[name="nameTwoText"]').type('ZZZZZZZ 2 TEST NAME DO NOT EXAMINE');

    cy.get('input[name="nameThreeText"]').type('ZZZZZZZ 3 TEST NAME DO NOT EXAMINE');

    cy.get('#natureOfBusiness').type('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ');

    cy.get('#additionalInformation').type('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ');
    
});

Cypress.Commands.add("completeNR", () => {
    
        cy.get('input[name="cardHolderName').type('TEST');

        cy.get('input[name="phoneNumber"]').type('5555555555');

        cy.get('#agree1').click();

        cy.get('#publicPay').click();

        cy.get('input[name="trnCardNumber"]').type(Cypress.env('TEST_CC'));

        cy.get('input[name="trnCardCvd"]').type(Cypress.env('TEST_CC_CVD'));

        cy.get('input[name="submitButton"]').click();

        cy.get('h3').contains('Payment Approved');

});