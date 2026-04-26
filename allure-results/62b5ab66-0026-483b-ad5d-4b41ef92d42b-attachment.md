# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> 4.5 Shopping Cart >> TC-CART-03: Update item quantity in cart
- Location: tests\cart.spec.ts:36:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.qty-input').first()

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
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { url } from '../tests/config/testConfig';
  3  | 
  4  | export class CartPage {
  5  |   readonly page: Page;
  6  |   readonly cartItems: Locator;
  7  |   readonly cartQty: Locator;
  8  |   readonly qtyInputs: Locator;
  9  |   readonly updateCartButton: Locator;
  10 |   readonly removeCheckboxes: Locator;
  11 |   readonly orderSubtotal: Locator;
  12 |   readonly itemSubtotals: Locator;
  13 |   readonly unitPrices: Locator;
  14 |   readonly productNames: Locator;
  15 |   readonly emptyCartMessage: Locator;
  16 |   readonly continueShoppingButton: Locator;
  17 |   readonly successNotification: Locator;
  18 | 
  19 |   constructor(page: Page) {
  20 |     this.page = page;
  21 |     this.cartItems = page.locator('.cart tbody tr');
  22 |     this.cartQty = page.locator('.cart-qty');
  23 |     this.qtyInputs = page.locator('.qty-input');
  24 |     this.updateCartButton = page.locator('input[name="updatecart"]');
  25 |     this.removeCheckboxes = page.locator('input[name="removefromcart"]');
  26 |     this.orderSubtotal = page.locator('.cart-total-right span').first();
  27 |     this.itemSubtotals = page.locator('td.subtotal .product-subtotal');
  28 |     this.unitPrices = page.locator('td.unit-price .product-unit-price');
  29 |     this.productNames = page.locator('td.product .product-name a');
  30 |     this.emptyCartMessage = page.locator('.no-data');
  31 |     this.continueShoppingButton = page.locator('input[name="continueshopping"]');
  32 |     this.successNotification = page.locator('.bar-notification.success');
  33 |   }
  34 | 
  35 |   async navigate() {
  36 |     await this.page.goto(url('/cart'));
  37 |   }
  38 | 
  39 |   async updateQuantity(itemIndex: number, qty: number) {
> 40 |     await this.qtyInputs.nth(itemIndex).fill(String(qty));
     |                                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  41 |     await this.updateCartButton.click();
  42 |   }
  43 | 
  44 |   async removeItem(itemIndex: number) {
  45 |     await this.removeCheckboxes.nth(itemIndex).check();
  46 |     await this.updateCartButton.click();
  47 |   }
  48 | 
  49 |   async removeAllItems() {
  50 |     const count = await this.removeCheckboxes.count();
  51 |     for (let i = 0; i < count; i++) {
  52 |       await this.removeCheckboxes.nth(i).check();
  53 |     }
  54 |     await this.updateCartButton.click();
  55 |   }
  56 | 
  57 |   async getItemCount(): Promise<number> {
  58 |     return await this.cartItems.count();
  59 |   }
  60 | 
  61 |   async getPricesAsNumbers(locator: Locator): Promise<number[]> {
  62 |     const texts = await locator.allInnerTexts();
  63 |     return texts.map(t => parseFloat(t.replace(/[^0-9.]/g, '')));
  64 |   }
  65 | 
  66 |   async getQuantities(): Promise<number[]> {
  67 |     const values = await this.qtyInputs.evaluateAll(
  68 |       (inputs) => inputs.map(el => parseFloat((el as HTMLInputElement).value))
  69 |     );
  70 |     return values;
  71 |   }
  72 | }
  73 | 
```