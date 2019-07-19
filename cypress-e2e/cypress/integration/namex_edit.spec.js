describe('Edit NR details steps', function () {
    beforeEach(function () {
        cy.visit('https://namex-dev.pathfinder.gov.bc.ca');   
        cy.get('a[href="/signin"]').click();
        cy.get('#username').type(Cypress.env('KEYCLOAK_USER'));
        cy.get('#password').type(Cypress.env('KEYCLOAK_PASS'));
        cy.get('input[name="login"]').click();
        cy.get('a[href="/find"]').should('be.visible').click();

        cy.fixture('name-choices').as('names');
    });

    it('Edits firm name choice one, confirms auto-comments happen', function () {
        
        cy.get('#search-filter-company').type(this.names.firmname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');
        cy.server();
        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.firmname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('img[src="/static/images/buttons/edit-req.png"]').click();
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('0 Comments');

        cy.get('#compName1').type(' EDITED');
        
        cy.route('**/requests/**').as('SolrSearch');
        cy.route('**/corporations/**').as('COLINapi');

        cy.get('img[src="static/images/buttons/save-edits.png"]').click();
        cy.wait(20000,['@SolrSearch','@COLINapi']);
        
        cy.get('#name1').contains('EDITED');      
        
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('1 Comments');

    });

    it('Edits NWPTA name choice one, confirms auto-comments happen', function () {
        
        cy.get('#search-filter-company').type(this.names.NWPTAname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');
        cy.server();
        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.NWPTAname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('img[src="/static/images/buttons/edit-req.png"]').click();
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('0 Comments');

        cy.get('#compName1').type(' EDITED');
        
        cy.route('**/requests/**').as('SolrSearch');
        cy.route('**/corporations/**').as('COLINapi');

        cy.get('img[src="static/images/buttons/save-edits.png"]').click();
        cy.wait(20000,['@SolrSearch','@COLINapi']);
        
        cy.get('#name1').contains('EDITED');      
        
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('1 Comments');

    });

    it('Edits extraprovincial name choice one, confirms auto-comments happen', function () {
        
        cy.get('#search-filter-company').type(this.names.EPname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');
        cy.server();
        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.EPname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('img[src="/static/images/buttons/edit-req.png"]').click();
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('0 Comments');

        cy.get('#compName1').type(' EDITED');
        
        cy.route('**/requests/**').as('SolrSearch');
        cy.route('**/corporations/**').as('COLINapi');

        cy.get('img[src="static/images/buttons/save-edits.png"]').click();
        cy.wait(20000,['@SolrSearch','@COLINapi']);
        
        cy.get('#name1').contains('EDITED');      
        
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('1 Comments');

    });


    it('Edits LLP name choice one, confirms auto-comments happen', function () {
        
        cy.get('#search-filter-company').type(this.names.LLPname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');
        cy.server();
        cy.get('#search-table > tbody > tr:nth-child(1) > td:nth-child(4)').contains(this.names.LLPname);
        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('img[src="/static/images/buttons/edit-req.png"]').click();
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('0 Comments');

        cy.get('#compName1').type(' EDITED');
        
        cy.route('**/requests/**').as('SolrSearch');
        cy.route('**/corporations/**').as('COLINapi');

        cy.get('img[src="static/images/buttons/save-edits.png"]').click();
        cy.wait(20000,['@SolrSearch','@COLINapi']);
        
        cy.get('#name1').contains('EDITED');      
        
        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('1 Comments');

    });

    it('Edits NWPTA applicant details', function(){
        cy.get('#search-filter-company').type(this.names.NWPTAname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('img[src="/static/images/buttons/edit-req.png"]').click();

        cy.get('#applicant-form-container > form > div > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type(' APPEDIT');

        cy.server();
        cy.route('**/requests/**').as('SolrSearch');
        cy.route('**/corporations/**').as('COLINapi');

        cy.get('img[src="static/images/buttons/save-edits.png"]').click();
        cy.wait(20000,['@SolrSearch','@COLINapi']);

        cy.get('#header-info-banner > div > div.flex.ma-0.pa-0.fs-15.ma-0.pr-2 > div > div > div > div.layout.column.ma-0.pa-0 > div > div > div > div > div:nth-child(4)').contains(' APPEDIT');
    });

    it('Adds a comment to EP name', function(){
        cy.get('#search-filter-company').type(this.names.EPname);

        cy.get('#search-filter-submittedDate').select('Today');
        cy.get('#search-filter-state').select('DRAFT');

        cy.get('#search-table > tbody > tr:nth-child(1) > td.text-center.link > a').click();

        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > i').click();

        cy.get('#app > div:nth-child(2) > div.expanded-info.v-card.v-card--flat.v-sheet.theme--light > div > div:nth-child(2) > div > div > div > div.v-input__slot > div > textarea').type('Sample comment');

        cy.server();
        cy.route('**/comments').as('commentsCall');
        cy.get('#comments-save-button').click();
        cy.wait(10000,['@commentsCall']);

        cy.get('#app > div:nth-child(2) > div.expanded-info.v-card.v-card--flat.v-sheet.theme--light > div > div.layout.mt-4 > div.flex.lg4.text-right > button').click();

        cy.get('#header-info-banner > div > div.flex.fs-15.shrink.ml-3 > div > div:nth-child(3) > b').contains('2 Comments');
    });


});