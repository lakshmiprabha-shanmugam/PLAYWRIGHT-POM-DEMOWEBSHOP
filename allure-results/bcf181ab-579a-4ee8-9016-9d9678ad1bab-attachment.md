# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> 4.7 Checkout Flow >> TC-CHK-06: Order confirmation details
- Location: tests\checkout.spec.ts:149:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#ShipToSameAddress')

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
          - link "testcheckout+1777172855120@gmail.com" [ref=e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=e13]:
          - link "Log out" [ref=e14] [cursor=pointer]:
            - /url: /logout
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
      - heading "Checkout" [level=1] [ref=e47]
      - list [ref=e49]:
        - listitem [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]: "1"
            - heading "Billing address" [level=2] [ref=e53]
            - text: .
          - generic [ref=e54]:
            - generic [ref=e61]:
              - generic [ref=e62]:
                - generic [ref=e63]: "First name:"
                - textbox "First name:" [ref=e64]: Test
                - text: "*"
              - generic [ref=e65]:
                - generic [ref=e66]: "Last name:"
                - textbox "Last name:" [ref=e67]: User
                - text: "*"
              - generic [ref=e68]:
                - generic [ref=e69]: "Email:"
                - textbox "Email:" [ref=e70]: testcheckout+1777172855120@gmail.com
                - text: "*"
              - generic [ref=e71]:
                - generic [ref=e72]: "Company:"
                - textbox "Company:" [ref=e73]
              - generic [ref=e74]:
                - generic [ref=e75]: "Country:"
                - combobox "Country:" [ref=e76]:
                  - option "Select country"
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
                  - option "United Kingdom" [selected]
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
              - generic [ref=e77]:
                - generic [ref=e78]: "State / province:"
                - combobox "State / province:" [ref=e79]:
                  - option "Other (Non US)" [selected]
              - generic [ref=e80]:
                - generic [ref=e81]: "City:"
                - textbox "City:" [ref=e82]: London
                - text: "*"
              - generic [ref=e83]:
                - generic [ref=e84]: "Address 1:"
                - textbox "Address 1:" [ref=e85]: 123 Test Street
                - text: "*"
              - generic [ref=e86]:
                - generic [ref=e87]: "Address 2:"
                - textbox "Address 2:" [ref=e88]
              - generic [ref=e89]:
                - generic [ref=e90]: "Zip / postal code:"
                - textbox "Zip / postal code:" [ref=e91]: SW1A 1AA
                - text: "*"
              - generic [ref=e92]:
                - generic [ref=e93]: "Phone number:"
                - textbox "Phone number:" [active] [ref=e94]: "02079460868"
                - text: "*"
              - generic [ref=e95]:
                - generic [ref=e96]: "Fax number:"
                - textbox "Fax number:" [ref=e97]
            - button "Continue" [ref=e99] [cursor=pointer]
        - listitem [ref=e100]:
          - generic [ref=e101]:
            - generic [ref=e102]: "2"
            - heading "Shipping address" [level=2] [ref=e103]
            - text: .
        - listitem [ref=e104]:
          - generic [ref=e105]:
            - generic [ref=e106]: "3"
            - heading "Shipping method" [level=2] [ref=e107]
            - text: .
        - listitem [ref=e108]:
          - generic [ref=e109]:
            - generic [ref=e110]: "4"
            - heading "Payment method" [level=2] [ref=e111]
            - text: .
        - listitem [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]: "5"
            - heading "Payment information" [level=2] [ref=e115]
            - text: .
        - listitem [ref=e116]:
          - generic [ref=e117]:
            - generic [ref=e118]: "6"
            - heading "Confirm order" [level=2] [ref=e119]
            - text: .
  - generic [ref=e120]:
    - generic [ref=e121]:
      - generic [ref=e122]:
        - heading "Information" [level=3] [ref=e123]
        - list [ref=e124]:
          - listitem [ref=e125]:
            - link "Sitemap" [ref=e126] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e127]:
            - link "Shipping & Returns" [ref=e128] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e129]:
            - link "Privacy Notice" [ref=e130] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e131]:
            - link "Conditions of Use" [ref=e132] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e133]:
            - link "About us" [ref=e134] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e135]:
            - link "Contact us" [ref=e136] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e137]:
        - heading "Customer service" [level=3] [ref=e138]
        - list [ref=e139]:
          - listitem [ref=e140]:
            - link "Search" [ref=e141] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e142]:
            - link "News" [ref=e143] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e144]:
            - link "Blog" [ref=e145] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e146]:
            - link "Recently viewed products" [ref=e147] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e148]:
            - link "Compare products list" [ref=e149] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e150]:
            - link "New products" [ref=e151] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e152]:
        - heading "My account" [level=3] [ref=e153]
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "My account" [ref=e156] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e157]:
            - link "Orders" [ref=e158] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e159]:
            - link "Addresses" [ref=e160] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e161]:
            - link "Shopping cart" [ref=e162] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e163]:
            - link "Wishlist" [ref=e164] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e165]:
        - heading "Follow us" [level=3] [ref=e166]
        - list [ref=e167]:
          - listitem [ref=e168]:
            - link "Facebook" [ref=e169] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e170]:
            - link "Twitter" [ref=e171] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e172]:
            - link "RSS" [ref=e173] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e174]:
            - link "YouTube" [ref=e175] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e176]:
            - link "Google+" [ref=e177] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e178]:
      - text: Powered by
      - link "nopCommerce" [ref=e179] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e180]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  31  | 
  32  |   // Payment info — Credit Card
  33  |   readonly cardholderName: Locator;
  34  |   readonly cardNumber: Locator;
  35  |   readonly cardExpireMonth: Locator;
  36  |   readonly cardExpireYear: Locator;
  37  |   readonly cardCode: Locator;
  38  |   readonly paymentInfoContinue: Locator;
  39  | 
  40  |   // Confirm
  41  |   readonly confirmOrderButton: Locator;
  42  | 
  43  |   // Order completion page
  44  |   readonly thankYouMessage: Locator;
  45  |   readonly orderNumber: Locator;
  46  |   readonly orderSummarySection: Locator;
  47  | 
  48  |   // Validation
  49  |   readonly validationErrors: Locator;
  50  | 
  51  |   constructor(page: Page) {
  52  |     this.page = page;
  53  | 
  54  |     this.billingAddressSelect = page.locator('#billing-address-select');
  55  |     this.billingFirstName = page.locator('#BillingNewAddress_FirstName');
  56  |     this.billingLastName = page.locator('#BillingNewAddress_LastName');
  57  |     this.billingEmail = page.locator('#BillingNewAddress_Email');
  58  |     this.billingCountry = page.locator('#BillingNewAddress_CountryId');
  59  |     this.billingCity = page.locator('#BillingNewAddress_City');
  60  |     this.billingAddress1 = page.locator('#BillingNewAddress_Address1');
  61  |     this.billingZip = page.locator('#BillingNewAddress_ZipPostalCode');
  62  |     this.billingPhone = page.locator('#BillingNewAddress_PhoneNumber');
  63  |     this.shipToSameAddressCheckbox = page.locator('#ShipToSameAddress');
  64  |     this.billingContinue = page.locator('#billing-buttons-container input[value="Continue"]');
  65  | 
  66  |     this.shippingAddressStep = page.locator('#checkout-step-shipping');
  67  | 
  68  |     this.shippingMethodContinue = page.locator(
  69  |       '#shipping-method-buttons-container input[value="Continue"]'
  70  |     );
  71  | 
  72  |     this.paymentMethodContinue = page.locator(
  73  |       '#payment-method-buttons-container input[value="Continue"]'
  74  |     );
  75  | 
  76  |     this.poNumberInput = page.locator('#PurchaseOrderNumber');
  77  |     this.cardholderName = page.locator('#CardholderName');
  78  |     this.cardNumber = page.locator('#CardNumber');
  79  |     this.cardExpireMonth = page.locator('#ExpireMonth');
  80  |     this.cardExpireYear = page.locator('#ExpireYear');
  81  |     this.cardCode = page.locator('#CardCode');
  82  |     this.paymentInfoContinue = page.locator(
  83  |       '#payment-info-buttons-container input[value="Continue"]'
  84  |     );
  85  | 
  86  |     this.confirmOrderButton = page.locator(
  87  |       '#confirm-order-buttons-container input[value="Confirm"]'
  88  |     );
  89  | 
  90  |     this.thankYouMessage = page.locator('.title strong');
  91  |     this.orderNumber = page.locator('.order-number strong');
  92  |     this.orderSummarySection = page.locator('.order-details-area');
  93  | 
  94  |     this.validationErrors = page.locator('.field-validation-error');
  95  |   }
  96  | 
  97  |   async navigate() {
  98  |     await this.page.goto(url('/checkout/onepagecheckout'));
  99  |   }
  100 | 
  101 |   // If user has saved addresses, force 'New Address' so the form fields appear
  102 |   async selectNewBillingAddress() {
  103 |     if (await this.billingAddressSelect.isVisible()) {
  104 |       await this.billingAddressSelect.selectOption('0');
  105 |       await this.billingFirstName.waitFor({ state: 'visible' });
  106 |     }
  107 |   }
  108 | 
  109 |   async fillBillingAddress(data: {
  110 |     firstName: string;
  111 |     lastName: string;
  112 |     email: string;
  113 |     country: string;
  114 |     city: string;
  115 |     address: string;
  116 |     zip: string;
  117 |     phone: string;
  118 |     shipToSameAddress?: boolean;
  119 |   }) {
  120 |     await this.selectNewBillingAddress();
  121 |     await this.billingFirstName.fill(data.firstName);
  122 |     await this.billingLastName.fill(data.lastName);
  123 |     await this.billingEmail.fill(data.email);
  124 |     await this.billingCountry.selectOption({ label: data.country });
  125 |     await this.billingCity.fill(data.city);
  126 |     await this.billingAddress1.fill(data.address);
  127 |     await this.billingZip.fill(data.zip);
  128 |     await this.billingPhone.fill(data.phone);
  129 | 
  130 |     if (data.shipToSameAddress !== false) {
> 131 |       await this.shipToSameAddressCheckbox.check();
      |                                            ^ Error: locator.check: Test timeout of 30000ms exceeded.
  132 |     } else {
  133 |       await this.shipToSameAddressCheckbox.uncheck();
  134 |     }
  135 | 
  136 |     await this.billingContinue.click();
  137 |   }
  138 | 
  139 |   async selectShippingMethod(methodLabel: string) {
  140 |     await this.page.getByLabel(methodLabel, { exact: false }).check();
  141 |     await this.shippingMethodContinue.click();
  142 |   }
  143 | 
  144 |   async selectDefaultShippingMethod() {
  145 |     await this.shippingMethodContinue.click();
  146 |   }
  147 | 
  148 |   async selectPaymentMethod(methodLabel: string) {
  149 |     await this.page.getByLabel(methodLabel, { exact: false }).check();
  150 |     await this.paymentMethodContinue.click();
  151 |   }
  152 | 
  153 |   async fillPurchaseOrderInfo(poNumber: string = 'PO-TEST-001') {
  154 |     if (await this.poNumberInput.isVisible()) {
  155 |       await this.poNumberInput.fill(poNumber);
  156 |     }
  157 |     await this.paymentInfoContinue.click();
  158 |   }
  159 | 
  160 |   async fillCreditCardInfo(data: {
  161 |     name: string;
  162 |     number: string;
  163 |     expireMonth: string;
  164 |     expireYear: string;
  165 |     cvv: string;
  166 |   }) {
  167 |     await this.cardholderName.fill(data.name);
  168 |     await this.cardNumber.fill(data.number);
  169 |     await this.cardExpireMonth.selectOption({ value: data.expireMonth });
  170 |     await this.cardExpireYear.selectOption({ value: data.expireYear });
  171 |     await this.cardCode.fill(data.cvv);
  172 |     await this.paymentInfoContinue.click();
  173 |   }
  174 | 
  175 |   async confirmOrder() {
  176 |     await this.confirmOrderButton.click();
  177 |   }
  178 | }
  179 | 
```