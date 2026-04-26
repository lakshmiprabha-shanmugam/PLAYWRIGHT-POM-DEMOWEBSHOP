# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> 4.5 Shopping Cart >> TC-CART-04: Remove item from cart
- Location: tests\cart.spec.ts:55:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.no-data').or(locator('.cart tbody tr').first())
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.no-data').or(locator('.cart tbody tr').first())

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=e44]:
      - list [ref=e46]:
        - listitem [ref=e47]:
          - link "Cart" [ref=e48] [cursor=pointer]:
            - /url: /cart
        - listitem [ref=e49]: Address
        - listitem [ref=e50]: Shipping
        - listitem [ref=e51]: Payment
        - listitem [ref=e52]: Confirm
        - listitem [ref=e53]: Complete
      - generic [ref=e54]:
        - heading "Shopping cart" [level=1] [ref=e56]
        - generic [ref=e58]: Your Shopping Cart is empty!
  - generic [ref=e59]:
    - generic [ref=e60]:
      - generic [ref=e61]:
        - heading "Information" [level=3] [ref=e62]
        - list [ref=e63]:
          - listitem [ref=e64]:
            - link "Sitemap" [ref=e65] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e66]:
            - link "Shipping & Returns" [ref=e67] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e68]:
            - link "Privacy Notice" [ref=e69] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e70]:
            - link "Conditions of Use" [ref=e71] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e72]:
            - link "About us" [ref=e73] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e74]:
            - link "Contact us" [ref=e75] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e76]:
        - heading "Customer service" [level=3] [ref=e77]
        - list [ref=e78]:
          - listitem [ref=e79]:
            - link "Search" [ref=e80] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e81]:
            - link "News" [ref=e82] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e83]:
            - link "Blog" [ref=e84] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e85]:
            - link "Recently viewed products" [ref=e86] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e87]:
            - link "Compare products list" [ref=e88] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e89]:
            - link "New products" [ref=e90] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e91]:
        - heading "My account" [level=3] [ref=e92]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "My account" [ref=e95] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e96]:
            - link "Orders" [ref=e97] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e98]:
            - link "Addresses" [ref=e99] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e100]:
            - link "Shopping cart" [ref=e101] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e102]:
            - link "Wishlist" [ref=e103] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e104]:
        - heading "Follow us" [level=3] [ref=e105]
        - list [ref=e106]:
          - listitem [ref=e107]:
            - link "Facebook" [ref=e108] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e109]:
            - link "Twitter" [ref=e110] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e111]:
            - link "RSS" [ref=e112] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e113]:
            - link "YouTube" [ref=e114] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e115]:
            - link "Google+" [ref=e116] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e117]:
      - text: Powered by
      - link "nopCommerce" [ref=e118] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e119]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { test, expect, Page } from '@playwright/test';
  2   | import { CartPage } from '../pages/CartPage';
  3   | import { url } from './config/testConfig';
  4   | 
  5   | // Searches for a product and adds the first result to cart
  6   | async function addProductToCart(page: Page, searchTerm: string): Promise<void> {
  7   |   await page.goto(url(`/search?q=${encodeURIComponent(searchTerm)}`));
  8   |   await page.locator('.product-title a').first().click();
  9   |   const cartResponse = page.waitForResponse(
  10  |     resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
  11  |   );
  12  |   await page.locator('input[value="Add to cart"]').click();
  13  |   await cartResponse;
  14  | }
  15  | 
  16  | test.describe('4.5 Shopping Cart', () => {
  17  | 
  18  |   test('TC-CART-01: Add single item to cart @smoke', async ({ page }) => {
  19  |     const cartPage = new CartPage(page);
  20  | 
  21  |     await addProductToCart(page, 'Blue Jeans');
  22  | 
  23  |     await expect(cartPage.successNotification).toBeVisible();
  24  |     await expect(cartPage.cartQty).not.toHaveText('(0)');
  25  |   });
  26  | 
  27  |   test('TC-CART-02: Add multiple different items', async ({ page }) => {
  28  |     const cartPage = new CartPage(page);
  29  | 
  30  |     await addProductToCart(page, 'Blue Jeans');
  31  |     await addProductToCart(page, 'laptop');
  32  | 
  33  |     await cartPage.navigate();
  34  | 
  35  |     const itemCount = await cartPage.getItemCount();
  36  |     expect(itemCount).toBe(2);
  37  |     await expect(cartPage.cartQty).toContainText('2');
  38  |   });
  39  | 
  40  |   test('TC-CART-03: Update item quantity in cart', async ({ page }) => {
  41  |     const cartPage = new CartPage(page);
  42  | 
  43  |     await addProductToCart(page, 'Blue Jeans');
  44  |     await cartPage.navigate();
  45  | 
  46  |     await cartPage.updateQuantity(0, 3);
  47  | 
  48  |     await expect(cartPage.qtyInputs.nth(0)).toHaveValue('3');
  49  | 
  50  |     const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
  51  |     const subtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);
  52  |     expect(subtotals[0]).toBeCloseTo(unitPrices[0] * 3, 1);
  53  |   });
  54  | 
  55  |   test('TC-CART-04: Remove item from cart', async ({ page }) => {
  56  |     const cartPage = new CartPage(page);
  57  | 
  58  |     await addProductToCart(page, 'Blue Jeans');
  59  |     await cartPage.navigate();
  60  | 
  61  |     await cartPage.removeItem(0);
  62  | 
  63  |     await expect(
  64  |       cartPage.emptyCartMessage.or(cartPage.cartItems.first())
> 65  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  66  |     expect(await cartPage.getItemCount()).toBe(0);
  67  |   });
  68  | 
  69  |   test('TC-CART-05: Cart persists after page refresh', async ({ page }) => {
  70  |     const cartPage = new CartPage(page);
  71  | 
  72  |     await addProductToCart(page, 'Blue Jeans');
  73  |     await cartPage.navigate();
  74  | 
  75  |     await page.reload();
  76  | 
  77  |     const itemCount = await cartPage.getItemCount();
  78  |     expect(itemCount).toBeGreaterThan(0);
  79  |     await expect(cartPage.productNames.first()).toBeVisible();
  80  |   });
  81  | 
  82  |   test('TC-CART-06: Empty cart message', async ({ page }) => {
  83  |     const cartPage = new CartPage(page);
  84  | 
  85  |     await addProductToCart(page, 'Blue Jeans');
  86  |     await cartPage.navigate();
  87  | 
  88  |     await cartPage.removeAllItems();
  89  | 
  90  |     await expect(cartPage.emptyCartMessage).toBeVisible();
  91  |     await expect(cartPage.emptyCartMessage).toContainText('Your Shopping Cart is empty');
  92  |   });
  93  | 
  94  |   test('TC-CART-07: Cart total calculation', async ({ page }) => {
  95  |     const cartPage = new CartPage(page);
  96  | 
  97  |     await addProductToCart(page, 'Blue Jeans');
  98  |     await cartPage.navigate();
  99  | 
  100 |     const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
  101 |     const quantities = await cartPage.getQuantities();
  102 |     const itemSubtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);
  103 | 
  104 |     // Each item's subtotal must equal unit price × quantity
  105 |     for (let i = 0; i < unitPrices.length; i++) {
  106 |       expect(itemSubtotals[i]).toBeCloseTo(unitPrices[i] * quantities[i], 1);
  107 |     }
  108 | 
  109 |     // Order subtotal must equal sum of all item subtotals
  110 |     const expectedTotal = itemSubtotals.reduce((sum, s) => sum + s, 0);
  111 |     const displayedSubtotalText = await cartPage.orderSubtotal.innerText();
  112 |     const displayedSubtotal = parseFloat(displayedSubtotalText.replace(/[^0-9.]/g, ''));
  113 |     expect(displayedSubtotal).toBeCloseTo(expectedTotal, 1);
  114 |   });
  115 | 
  116 |   test('TC-CART-08: Continue shopping from cart', async ({ page }) => {
  117 |     const cartPage = new CartPage(page);
  118 | 
  119 |     await addProductToCart(page, 'Blue Jeans');
  120 |     await cartPage.navigate();
  121 | 
  122 |     await cartPage.continueShoppingButton.click();
  123 | 
  124 |     await expect(page).not.toHaveURL(/\/cart/);
  125 |   });
  126 | 
  127 | });
  128 | 
```