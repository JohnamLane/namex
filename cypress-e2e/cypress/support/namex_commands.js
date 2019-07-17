Cypress.Commands.add('getSessionToken', () => {
    cy.visit('https://namex-dev.pathfinder.gov.bc.ca');

    cy.request({
        method: 'POST',
        url: Cypress.env('KEYCLOAK_AUTH_URL'),
        body: Cypress.env('KEYCLOAK_AUTH_BODY'),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        expect(response.body).to.have.property('access_token');
        cy.setCookie('KEYCLOAK_IDENTITY', response.body.access_token);
    });

    cy.visit('https://namex-dev.pathfinder.gov.bc.ca');
    cy.get('a[href="/signin"]').click();

});