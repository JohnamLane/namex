describe('Log into NRO Staff and verify edits and cancellations', function(){
    beforeEach(function(){
        cy.visit('https://dev.bcregistryallservices.gov.bc.ca/sofi/login/login.htm');
        cy.get('#user').type(Cypress.env('IDIR_USER'));
        cy.get('#password').type(Cypress.env('IDIR_PASS'));
        cy.get('input[value="Continue"]').click();

        cy.get('#tabContainer_tablist_dijit_layout_ContentPane_0 > span.tabLabel').contains('NRO').click();
        cy.get('a[href="https://dev.bcregistrynames.gov.bc.ca/nro/login/nro.htm?_flowId=authenticated-flow&targetEvent=status"]').click();
        cy.get('#searchTypeName').click();
        cy.fixture('name-choices').as('names');
    });
    
    it('verifies the firm name', function(){
        cy.get('#requestedName').type(this.names.firmname);
        cy.get('img[alt="Get Name Requests"]').click();

        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains(this.names.firmname);
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains('EDITED');
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(4)').contains('Cancelled');
    });
        
    it('verifies the NWPTA name', function(){
        cy.get('#requestedName').type(this.names.NWPTAname);
        cy.get('img[alt="Get Name Requests"]').click();

        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains(this.names.NWPTAname);
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains('EDITED');
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(4)').contains('Cancelled');
    });
        
    it('verifies the Extraprovincial name', function(){
        cy.get('#requestedName').type(this.names.EPname);
        cy.get('img[alt="Get Name Requests"]').click();

        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains(this.names.EPname);
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains('EDITED');
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(4)').contains('Cancelled');
    });
        
    it('verifies the LLP name', function(){
        cy.get('#requestedName').type(this.names.LLPname);
        cy.get('img[alt="Get Name Requests"]').click();

        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains(this.names.LLPname);
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(3)').contains('EDITED');
        cy.get('#result > tbody > tr:nth-child(1) > td:nth-child(4)').contains('Cancelled');
    });
});