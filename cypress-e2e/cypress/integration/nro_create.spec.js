describe('Creates NRs in NRO', function () {
    beforeEach(function () {
        Cypress.Cookies.defaults({
            whitelist: 'JSESSIONID'
        });
        
    });

    it('creates a firm registration NR', function () {
        cy.enterApplicantDetails();
        cy.get('img[alt="Next"]').click();

        cy.get('#requestType1').click();
        cy.get('img[alt="Next"]').click();
        cy.fixture('name-choices').then((json) => {
            cy.get('input[name="nameOneText"]').type(json.firmname);
        });
        
        cy.fillInOtherNameChoices();
        cy.get('img[alt="Next"]').click();
    });

    it('creates a BC Corporation incorporation NR with NWPTA numbers', function () {
        var aWeekFromNow = Cypress.moment().add(1, 'week').format('DD-MM-YYYY');
        
        cy.enterApplicantDetails();
        cy.get('img[alt="Next"]').click();

        cy.get('#requestType3').click();
        cy.get('img[alt="Next"]').click();
        cy.get('#abPartner1').click();
        cy.get('#skPartner1').click();
        cy.get('#abChargeFee').click();
        cy.get('input[name="abNameSystem.nameNumber"]').type('1234567');
        cy.get('#abDatepicker').type(aWeekFromNow);
        cy.get('#skChargeFee').click();
        cy.get('input[name="skNameSystem.nameNumber"]').type('123456-7');
        cy.get('#skDatepicker').type(aWeekFromNow);
        cy.get('img[alt="Next"]').click();
        cy.fixture('name-choices').then((json) => {
            cy.get('input[name="nameOneText"]').type(json.NWPTAname);
        });
        cy.get('select[name="nameOneDesignation"]').select('LIMITED');
        cy.get('select[name="nameTwoDesignation"]').select('LIMITED');
        cy.get('select[name="nameThreeDesignation"]').select('LIMITED');
        
        cy.fillInOtherNameChoices();
        cy.get('img[alt="Next"]').click();
    });

    it('creates an extraprovincial corporation incorporation NR', function () {
        cy.enterApplicantDetails();
        cy.get('img[alt="Next"]').as('NextButton')
            .click();

        cy.get('#requestType11').click();
        cy.get('@NextButton').click();
        cy.fixture('name-choices').then((json) => {
            cy.get('#nameOneText').type(json.EPname);
        });
        cy.get('#nameOfJurisdiction').select('NEW BRUNSWICK');
        cy.get('#natureOfBusiness').type('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ');
        cy.get('#additionalInformation').type('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ');
        cy.get('#defaultButton').should('be.visible')
            .click();
    });

    it('creates an LLP incorporation NR', function(){
        cy.enterApplicantDetails();
        cy.get('img[alt="Next"]').as('NextButton')
            .click();

        cy.get('#requestType7').click();
        cy.get('@NextButton').click();
        cy.fixture('name-choices').then((json) => {
            cy.get('input[name="nameOneText"]').type(json.LLPname);
        });
        cy.fillInOtherNameChoices();

        cy.get('select[name="nameOneDesignation"]').select('LLP');
        cy.get('select[name="nameTwoDesignation"]').select('LLP');
        cy.get('select[name="nameThreeDesignation"]').select('LLP');
        
        cy.get('img[alt="Next"]').click();
    });

    afterEach(function () {
        cy.completeNR();
    });

});