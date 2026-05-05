import { test } from '@playwright/test';
import { GreenkartPage } from '../pages/greenkartPage';
import { waitForTimeout } from '../utils/waitUtils';
import { logSection, logInfo, logPass, logExecutionTime } from '../utils/loggingUtils';

test('to purchase products from greenkart store', async ({ page }) => {
  const startTime = Date.now();
  logSection('GREENKART PURCHASE TEST');

  const greenkartPage = new GreenkartPage(page);

  try {
    // Navigate to store
    logInfo('Navigating to Greenkart store');
    await greenkartPage.navigateToStore();
    logPass('Successfully navigated to store');

    // Add multiple products to cart
    const productsToAdd = [
      'Brocolli - 1 Kg',
      'Cucumber - 1 Kg',
      'Beetroot - 1 Kg',
      'Carrot - 1 Kg',
      'Beans - 1 Kg',
      'Tomato - 1 Kg'
    ];
    
    logInfo(`Adding ${productsToAdd.length} products to cart`);
    await greenkartPage.addMultipleProductsToCart(productsToAdd);
    logPass(`Successfully added all ${productsToAdd.length} products`);

    // Go to cart and checkout
    logInfo('Proceeding to cart');
    await greenkartPage.goToCart();
    logPass('Cart page loaded');

    logInfo('Starting checkout flow');
    await greenkartPage.completeCheckoutFlow('India');
    logPass('Checkout completed successfully');

    // Wait for order completion
    logInfo('Waiting for order completion');
    await waitForTimeout(6000);
    logPass('Order placement completed');

  } catch (error) {
    logInfo(`Test failed with error: ${error.message}`);
    throw error;
  } finally {
    logExecutionTime('Greenkart Purchase Test', startTime);
  }
});
