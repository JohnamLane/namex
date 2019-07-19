describe('Namex clean up test steps', function () {
    beforeEach(function () {
        cy.visit('https://namex-dev.pathfinder.gov.bc.ca');   
        cy.get('a[href="/signin"]').click();
        cy.get('#username').type(Cypress.env('KEYCLOAK_USER'));
        cy.get('#password').type(Cypress.env('KEYCLOAK_PASS'));
        cy.get('input[name="login"]').click();
        cy.get('a[href="/find"]').should('be.visible').click();

        cy.fixture('name-choices').as('names');

        cy.server();
        cy.route('**/exact-match**').as('exact-match');
        cy.route('**/synonymbucket/**').as('synonymbucket');
        cy.route('**/cobrsphonetics/**').as('cobrsphonetics');
        cy.route('**/phonetics/**').as('phonetics');
        cy.route('POST', '**/documents:trademarks').as('trademarks');
        cy.route('POST', '**/documents:restricted_words').as('restricted_words');
        cy.route('POST', '**/documents:histories').as('histories');
        cy.route('PATCH', '**/requests/NR**').as('cancelation_patch');
        cy.route('GET', '**/requests/NR**').as('after_cancel_get');
    });

    it('Cancels the firm NR', function () {
        
        cy.get('#search-filter-company').type(this.names.firmname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#loading-overlay > div').should('not.be.visible');
        
        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.firmname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();
        cy.wait(['@exact-match', '@synonymbucket', '@cobrsphonetics', '@phonetics','@trademarks', '@restricted_words', '@histories']);

        cy.get('#examine-cancel-button').click();
        cy.get('#cancel-comment-text').type('Cancellation Comment');

        cy.get('#cancel-nr-after-comment-button').click();
        cy.wait(['@cancelation_patch', '@after_cancel_get']);

        cy.get('#nrStatusText').contains('CANCELLED');

    });

    it('Cancels the NWPTA NR', function () {
        
        cy.get('#search-filter-company').type(this.names.NWPTAname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.NWPTAname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();
        cy.wait(['@exact-match', '@synonymbucket', '@cobrsphonetics', '@phonetics','@trademarks', '@restricted_words', '@histories']);

        cy.get('#examine-cancel-button').click();
        cy.get('#cancel-comment-text').type('Cancellation Comment');

        cy.get('#cancel-nr-after-comment-button').click();
        cy.wait(['@cancelation_patch', '@after_cancel_get']);

        cy.get('#nrStatusText').contains('CANCELLED');

    });

    it('Cancels the Extraprovincial NR', function () {
        
        cy.get('#search-filter-company').type(this.names.EPname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.EPname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();
        cy.wait(['@exact-match', '@synonymbucket', '@cobrsphonetics', '@phonetics','@trademarks', '@restricted_words', '@histories']);

        cy.get('#examine-cancel-button').click();
        cy.get('#cancel-comment-text').type('Cancellation Comment');

        cy.get('#cancel-nr-after-comment-button').click();
        cy.wait(['@cancelation_patch', '@after_cancel_get']);

        cy.get('#nrStatusText').contains('CANCELLED');

    });

    it('Cancels the LLP NR', function () {
        
        cy.get('#search-filter-company').type(this.names.LLPname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#loading-overlay > div').should('not.be.visible');

        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.LLPname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();
        cy.wait(['@exact-match', '@synonymbucket', '@cobrsphonetics', '@phonetics','@trademarks', '@restricted_words', '@histories']);

        cy.get('#examine-cancel-button').click();
        cy.get('#cancel-comment-text').type('Cancellation Comment');

        cy.get('#cancel-nr-after-comment-button').click();
        cy.wait(['@cancelation_patch', '@after_cancel_get']);

        cy.get('#nrStatusText').contains('CANCELLED');

    });
});