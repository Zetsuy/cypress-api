/// <reference types="cypress" />
context('API Testing', () => {
    it('should test cars properties - GET /cars', () => {
        // Alias
        cy.request('GET', '/cars').as('cars');
        cy.get('@cars').should((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach(car => {
                expect(car).to.have.all.keys(
                    'id', 'brand', 'model',
                    'color', 'year'
                );
            });
        });
    });
}); 