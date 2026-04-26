# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> 4.5 Shopping Cart >> TC-CART-05: Cart persists after page refresh
- Location: tests\cart.spec.ts:65:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('td.product .product-name a').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('td.product .product-name a').first()

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
          - link "Shopping cart (1)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (1)
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
    - generic [ref=e45]:
      - heading "Shopping cart" [level=1] [ref=e47]
      - generic [ref=e50]:
        - table [ref=e51]:
          - rowgroup [ref=e59]:
            - row "Remove Product(s) Price Qty. Total" [ref=e60]:
              - columnheader "Remove" [ref=e61]
              - columnheader [ref=e62]
              - columnheader "Product(s)" [ref=e63]
              - columnheader "Price" [ref=e64]
              - columnheader "Qty." [ref=e65]
              - columnheader "Total" [ref=e66]
          - rowgroup [ref=e67]:
            - row "Picture of Blue Jeans Blue Jeans 1.00 1 1.00" [ref=e68]:
              - cell [ref=e69]:
                - checkbox [ref=e70]
              - cell "Picture of Blue Jeans" [ref=e71]:
                - img "Picture of Blue Jeans" [ref=e72]
              - cell "Blue Jeans" [ref=e73]:
                - link "Blue Jeans" [ref=e74] [cursor=pointer]:
                  - /url: /blue-jeans
              - cell "1.00" [ref=e75]
              - cell "1" [ref=e76]:
                - textbox [ref=e77]: "1"
              - cell "1.00" [ref=e78]
        - generic [ref=e80]:
          - button "Update shopping cart" [ref=e81] [cursor=pointer]
          - button "Continue shopping" [ref=e82] [cursor=pointer]
        - generic [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]:
              - generic [ref=e86]:
                - strong [ref=e88]: Discount Code
                - generic [ref=e89]: Enter your coupon here
                - generic [ref=e90]:
                  - textbox [ref=e91]
                  - button "Apply coupon" [ref=e92] [cursor=pointer]
              - generic [ref=e93]:
                - strong [ref=e95]: Gift Cards
                - generic [ref=e96]: Enter gift card code
                - generic [ref=e97]:
                  - textbox [ref=e98]
                  - button "Add gift card" [ref=e99] [cursor=pointer]
            - generic [ref=e101]:
              - strong [ref=e103]: Estimate shipping
              - generic [ref=e104]: Enter your destination to get a shipping estimate
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - generic [ref=e107]: "Country:"
                  - combobox "Country:" [ref=e108]:
                    - option "Select country" [selected]
                    - option "United States"
                    - option "Canada"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Australia"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Bosnia and Herzegowina"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "British Indian Ocean Territory"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Central African Republic"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Cocos (Keeling) Islands"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D'Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Falkland Islands (Malvinas)"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "French Southern Territories"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guinea"
                    - option "Guinea-bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Heard and Mc Donald Islands"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India"
                    - option "Indonesia"
                    - option "Iran (Islamic Republic of)"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Korea"
                    - option "Korea, Democratic People's Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Lao People's Democratic Republic"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Libyan Arab Jamahiriya"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Macedonia"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Micronesia"
                    - option "Moldova"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montenegro"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "Northern Mariana Islands"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico"
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russia"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Saint Vincent and the Grenadines"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Serbia"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovakia (Slovak Republic)"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "South Georgia & South Sandwich Islands"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Helena"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Svalbard and Jan Mayen Islands"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Tanzania"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "United States minor outlying islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Vatican City State (Holy See)"
                    - option "Venezuela"
                    - option "Viet Nam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Zambia"
                    - option "Zimbabwe"
                  - text: "*"
                - generic [ref=e109]:
                  - generic [ref=e110]: "State / province:"
                  - combobox "State / province:" [ref=e111]:
                    - option "Other (Non US)" [selected]
                - generic [ref=e112]:
                  - generic [ref=e113]: "Zip / postal code:"
                  - textbox "Zip / postal code:" [ref=e114]
                - button "Estimate shipping" [ref=e116] [cursor=pointer]
          - generic [ref=e117]:
            - table [ref=e119]:
              - rowgroup [ref=e120]:
                - 'row "Sub-Total: 1.00" [ref=e121]':
                  - cell "Sub-Total:" [ref=e122]
                  - cell "1.00" [ref=e123]:
                    - generic [ref=e124]: "1.00"
                - 'row "Shipping: Calculated during checkout" [ref=e125]':
                  - cell "Shipping:" [ref=e126]
                  - cell "Calculated during checkout" [ref=e127]:
                    - generic [ref=e128]: Calculated during checkout
                - 'row "Tax: 0.00" [ref=e129]':
                  - cell "Tax:" [ref=e130]
                  - cell "0.00" [ref=e131]:
                    - generic [ref=e132]: "0.00"
                - 'row "Total: Calculated during checkout" [ref=e133]':
                  - cell "Total:" [ref=e134]
                  - cell "Calculated during checkout" [ref=e135]:
                    - generic [ref=e136]: Calculated during checkout
            - generic [ref=e137]:
              - checkbox [ref=e138]
              - text: I agree with the terms of service and I adhere to them unconditionally (read)
            - button "Checkout" [ref=e140] [cursor=pointer]
  - generic [ref=e142]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - heading "Information" [level=3] [ref=e145]
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "Sitemap" [ref=e148] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e149]:
            - link "Shipping & Returns" [ref=e150] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e151]:
            - link "Privacy Notice" [ref=e152] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e153]:
            - link "Conditions of Use" [ref=e154] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e155]:
            - link "About us" [ref=e156] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e157]:
            - link "Contact us" [ref=e158] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e159]:
        - heading "Customer service" [level=3] [ref=e160]
        - list [ref=e161]:
          - listitem [ref=e162]:
            - link "Search" [ref=e163] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e164]:
            - link "News" [ref=e165] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e166]:
            - link "Blog" [ref=e167] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e168]:
            - link "Recently viewed products" [ref=e169] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e170]:
            - link "Compare products list" [ref=e171] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e172]:
            - link "New products" [ref=e173] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e174]:
        - heading "My account" [level=3] [ref=e175]
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link "My account" [ref=e178] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e179]:
            - link "Orders" [ref=e180] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e181]:
            - link "Addresses" [ref=e182] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e183]:
            - link "Shopping cart" [ref=e184] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e185]:
            - link "Wishlist" [ref=e186] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e187]:
        - heading "Follow us" [level=3] [ref=e188]
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Facebook" [ref=e191] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e192]:
            - link "Twitter" [ref=e193] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e194]:
            - link "RSS" [ref=e195] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e196]:
            - link "YouTube" [ref=e197] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e198]:
            - link "Google+" [ref=e199] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e200]:
      - text: Powered by
      - link "nopCommerce" [ref=e201] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e202]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  9   |   await page.locator('input[value="Add to cart"]').click();
  10  | }
  11  | 
  12  | test.describe('4.5 Shopping Cart', () => {
  13  | 
  14  |   test('TC-CART-01: Add single item to cart @smoke', async ({ page }) => {
  15  |     const cartPage = new CartPage(page);
  16  | 
  17  |     await addProductToCart(page, 'Blue Jeans');
  18  | 
  19  |     await expect(cartPage.successNotification).toBeVisible();
  20  |     await expect(cartPage.cartQty).not.toHaveText('(0)');
  21  |   });
  22  | 
  23  |   test('TC-CART-02: Add multiple different items', async ({ page }) => {
  24  |     const cartPage = new CartPage(page);
  25  | 
  26  |     await addProductToCart(page, 'Blue Jeans');
  27  |     await addProductToCart(page, 'laptop');
  28  | 
  29  |     await cartPage.navigate();
  30  | 
  31  |     const itemCount = await cartPage.getItemCount();
  32  |     expect(itemCount).toBe(2);
  33  |     await expect(cartPage.cartQty).toContainText('2');
  34  |   });
  35  | 
  36  |   test('TC-CART-03: Update item quantity in cart', async ({ page }) => {
  37  |     const cartPage = new CartPage(page);
  38  | 
  39  |     await addProductToCart(page, 'Blue Jeans');
  40  |     await cartPage.navigate();
  41  | 
  42  |     await cartPage.updateQuantity(0, 3);
  43  | 
  44  |     await expect(cartPage.qtyInputs.nth(0)).toHaveValue('3');
  45  | 
  46  |     const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
  47  |     const subtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);
  48  |     expect(subtotals[0]).toBeCloseTo(unitPrices[0] * 3, 1);
  49  |   });
  50  | 
  51  |   test('TC-CART-04: Remove item from cart', async ({ page }) => {
  52  |     const cartPage = new CartPage(page);
  53  | 
  54  |     await addProductToCart(page, 'Blue Jeans');
  55  |     await cartPage.navigate();
  56  | 
  57  |     await cartPage.removeItem(0);
  58  | 
  59  |     await expect(
  60  |       cartPage.emptyCartMessage.or(cartPage.cartItems.first())
  61  |     ).toBeVisible();
  62  |     expect(await cartPage.getItemCount()).toBe(0);
  63  |   });
  64  | 
  65  |   test('TC-CART-05: Cart persists after page refresh', async ({ page }) => {
  66  |     const cartPage = new CartPage(page);
  67  | 
  68  |     await addProductToCart(page, 'Blue Jeans');
  69  |     await cartPage.navigate();
  70  | 
  71  |     await page.reload();
  72  | 
  73  |     const itemCount = await cartPage.getItemCount();
  74  |     expect(itemCount).toBeGreaterThan(0);
> 75  |     await expect(cartPage.productNames.first()).toBeVisible();
      |                                                 ^ Error: expect(locator).toBeVisible() failed
  76  |   });
  77  | 
  78  |   test('TC-CART-06: Empty cart message', async ({ page }) => {
  79  |     const cartPage = new CartPage(page);
  80  | 
  81  |     await addProductToCart(page, 'Blue Jeans');
  82  |     await cartPage.navigate();
  83  | 
  84  |     await cartPage.removeAllItems();
  85  | 
  86  |     await expect(cartPage.emptyCartMessage).toBeVisible();
  87  |     await expect(cartPage.emptyCartMessage).toContainText('Your Shopping Cart is empty');
  88  |   });
  89  | 
  90  |   test('TC-CART-07: Cart total calculation', async ({ page }) => {
  91  |     const cartPage = new CartPage(page);
  92  | 
  93  |     await addProductToCart(page, 'Blue Jeans');
  94  |     await cartPage.navigate();
  95  | 
  96  |     const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
  97  |     const quantities = await cartPage.getQuantities();
  98  |     const itemSubtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);
  99  | 
  100 |     // Each item's subtotal must equal unit price × quantity
  101 |     for (let i = 0; i < unitPrices.length; i++) {
  102 |       expect(itemSubtotals[i]).toBeCloseTo(unitPrices[i] * quantities[i], 1);
  103 |     }
  104 | 
  105 |     // Order subtotal must equal sum of all item subtotals
  106 |     const expectedTotal = itemSubtotals.reduce((sum, s) => sum + s, 0);
  107 |     const displayedSubtotalText = await cartPage.orderSubtotal.innerText();
  108 |     const displayedSubtotal = parseFloat(displayedSubtotalText.replace(/[^0-9.]/g, ''));
  109 |     expect(displayedSubtotal).toBeCloseTo(expectedTotal, 1);
  110 |   });
  111 | 
  112 |   test('TC-CART-08: Continue shopping from cart', async ({ page }) => {
  113 |     const cartPage = new CartPage(page);
  114 | 
  115 |     await addProductToCart(page, 'Blue Jeans');
  116 |     await cartPage.navigate();
  117 | 
  118 |     await cartPage.continueShoppingButton.click();
  119 | 
  120 |     await expect(page).not.toHaveURL(/\/cart/);
  121 |   });
  122 | 
  123 | });
  124 | 
```