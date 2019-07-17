describe('Namex extractor test steps', function () {
    beforeEach(function () {
        cy.getSessionToken();
        cy.get('a[href="/find"]').click();
    });

    it('Verifies that the firm NR was extracted', function () {
        cy.fixture('name-choices').then((json) => {
            cy.get('#search-filter-company').type(json.firmname);
        });

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.fixture('name-choices').then((json) => {
            cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
                .contains(json.firmname);
        });
    });

    it('Verifies that the NWPTA NR was extracted', function () {
        cy.fixture('name-choices').then((json) => {
            cy.get('#search-filter-company').type(json.NWPTAname);
        });

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.fixture('name-choices').then((json) => {
            cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
                .contains(json.NWPTAname);
        });
    });

    it('Verifies that the extraprovincial NR was extracted', function () {
        cy.fixture('name-choices').then((json) => {
            cy.get('#search-filter-company').type(json.EPname);
        });

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.fixture('name-choices').then((json) => {
            cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
                .contains(json.EPname);
        });
    });

    
    it('Verifies that the LLP NR was extracted', function () {
        cy.fixture('name-choices').then((json) => {
            cy.get('#search-filter-company').type(json.LLPname);
        });

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.fixture('name-choices').then((json) => {
            cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)')
                .contains(json.LLPname);
        });
    });
});