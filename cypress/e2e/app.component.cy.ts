before(() => {
    cy.visit('http://localhost:4200');
  });
describe('App Component', () => {
    it('should load products and display them in a table', () => {
      // Visit the app
      cy.visit('/');
  
      // Check that each product's name is visible
      cy.get('table tbody tr td').first().should('not.be.empty');
    });
  });
  
  describe('Add Product', () => {
    it('should add a product to the list', () => {
      cy.visit('/');
  
      // Fill in the product form
      cy.get('input[name="title"]').type('New Product');
      cy.get('input[name="price"]').type('29.99');
      cy.get('input[name="category"]').type('Electronics');
      cy.get('textarea[name="description"]').type('A brand new product');
      cy.get('input[name="image"]').type('https://via.placeholder.com/150');
  
      // Click the "Add Product" button
      cy.get('button').contains('Add Product').click();
  
    });
  });
  
  describe('Delete Product', () => {
    it('should delete a product from the list', () => {
      cy.visit('/');
  
      // Find and click the delete button for the first product
      cy.get('table tbody tr').first().find('button').contains('Delete').click();
  
      // Verify that the product has been deleted by checking that it no longer exists
      cy.get('table tbody tr').first().should('not.contain', 'New Product');
    });
  });
  describe('Responsiveness Tests', () => {
    it('should display the form container correctly on small screens', () => {
      cy.visit('/');
    
      // Set the viewport size to simulate a small screen
      cy.viewport(320, 480); // Example of mobile screen size
    
      // Check that the form container displays correctly
      cy.get('.form-container').should('be.visible');
    });
    
    it('should adjust table layout on small screens', () => {
      // Set the viewport size to simulate a tablet
      cy.viewport(768, 1024); // Example of tablet screen size
    });
  });
  

  