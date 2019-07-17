describe('Namex extractor test steps', function () {
    beforeEach(function () {
        cy.getSessionToken();
        cy.get('a[href="/find"]').click();
        cy.fixture('name-choices').as('names');
    });

    it('Verifies that the firm NR was extracted', function () {
        
        cy.get('#search-filter-company').type(this.names.firmname);    
        cy.get('#search-filter-submittedDate').select('Today');
        cy.server();
        cy.route('**/requests**').as('FindNR');      
        cy.get('#search-filter-state').select('DRAFT');
        cy.wait('@FindNR');        
        
        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
            .contains(this.names.firmname);
    
    });

    it('Verifies that the NWPTA NR was extracted', function () {
                
        cy.get('#search-filter-company').type(this.names.NWPTAname);    
        cy.get('#search-filter-submittedDate').select('Today');
        cy.server();
        cy.route('**/requests**').as('FindNR');
        cy.get('#search-filter-state').select('DRAFT');
        cy.wait('@FindNR');        

        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
            .contains(this.names.NWPTAname);

    });

    it('Verifies that the extraprovincial NR was extracted', function () {
                
        cy.get('#search-filter-company').type(this.names.EPname);    
        cy.get('#search-filter-submittedDate').select('Today');
        cy.server();
        cy.route('**/requests**').as('FindNR');
        cy.get('#search-filter-state').select('DRAFT');
        cy.wait('@FindNR');
        
        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
            .contains(this.names.EPname);
    });
    
    it('Verifies that the LLP NR was extracted', function () {
                
        cy.get('#search-filter-company').type(this.names.LLPname);    
        cy.get('#search-filter-submittedDate').select('Today');
        cy.server();
        cy.route('**/requests**').as('FindNR');
        cy.get('#search-filter-state').select('DRAFT');
        cy.wait('@FindNR');
        
        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
            .contains(this.names.LLPname);
    });
});