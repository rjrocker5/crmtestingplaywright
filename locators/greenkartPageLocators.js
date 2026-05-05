export const GREENKART_LOCATORS = {
  // Product selectors
  productNamePattern: (productName) => `//h4[text()='${productName}']/parent::div/div[@class="product-action"]/button`,
  
  // Cart and checkout
  cartIcon: '//a[@class="cart-icon"]',
  proceedToCheckout: '//button[text()="PROCEED TO CHECKOUT"]',
  placeOrder: '//button[text()="Place Order"]',
  countrySelect: '//select[@style="width: 200px;"]',
  termsCheckbox: '//input[@type="checkbox"]',
  proceedButton: '//button[text()="Proceed"]'
};
