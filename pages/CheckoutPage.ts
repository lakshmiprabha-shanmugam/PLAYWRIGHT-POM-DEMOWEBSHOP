import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class CheckoutPage {
  readonly page: Page;

  // Billing address
  readonly billingAddressSelect: Locator;
  readonly billingFirstName: Locator;
  readonly billingLastName: Locator;
  readonly billingEmail: Locator;
  readonly billingCountry: Locator;
  readonly billingCity: Locator;
  readonly billingAddress1: Locator;
  readonly billingZip: Locator;
  readonly billingPhone: Locator;
  readonly shipToSameAddressCheckbox: Locator;
  readonly billingContinue: Locator;

  // Shipping address step (to verify skipped)
  readonly shippingAddressStep: Locator;

  // Shipping method
  readonly shippingMethodContinue: Locator;

  // Payment method
  readonly paymentMethodContinue: Locator;

  // Payment info — Purchase Order
  readonly poNumberInput: Locator;

  // Payment info — Credit Card
  readonly cardholderName: Locator;
  readonly cardNumber: Locator;
  readonly cardExpireMonth: Locator;
  readonly cardExpireYear: Locator;
  readonly cardCode: Locator;
  readonly paymentInfoContinue: Locator;

  // Confirm
  readonly confirmOrderButton: Locator;

  // Order completion page
  readonly thankYouMessage: Locator;
  readonly orderNumber: Locator;
  readonly orderSummarySection: Locator;

  // Validation
  readonly validationErrors: Locator;

  constructor(page: Page) {
    this.page = page;

    this.billingAddressSelect = page.locator('#billing-address-select');
    this.billingFirstName = page.locator('#BillingNewAddress_FirstName');
    this.billingLastName = page.locator('#BillingNewAddress_LastName');
    this.billingEmail = page.locator('#BillingNewAddress_Email');
    this.billingCountry = page.locator('#BillingNewAddress_CountryId');
    this.billingCity = page.locator('#BillingNewAddress_City');
    this.billingAddress1 = page.locator('#BillingNewAddress_Address1');
    this.billingZip = page.locator('#BillingNewAddress_ZipPostalCode');
    this.billingPhone = page.locator('#BillingNewAddress_PhoneNumber');
    this.shipToSameAddressCheckbox = page.locator('#ShipToSameAddress');
    this.billingContinue = page.locator('#billing-buttons-container input[value="Continue"]');

    this.shippingAddressStep = page.locator('#checkout-step-shipping');

    this.shippingMethodContinue = page.locator(
      '#shipping-method-buttons-container input[value="Continue"]'
    );

    this.paymentMethodContinue = page.locator(
      '#payment-method-buttons-container input[value="Continue"]'
    );

    this.poNumberInput = page.locator('#PurchaseOrderNumber');
    this.cardholderName = page.locator('#CardholderName');
    this.cardNumber = page.locator('#CardNumber');
    this.cardExpireMonth = page.locator('#ExpireMonth');
    this.cardExpireYear = page.locator('#ExpireYear');
    this.cardCode = page.locator('#CardCode');
    this.paymentInfoContinue = page.locator(
      '#payment-info-buttons-container input[value="Continue"]'
    );

    this.confirmOrderButton = page.locator(
      '#confirm-order-buttons-container input[value="Confirm"]'
    );

    this.thankYouMessage = page.locator('.title strong');
    this.orderNumber = page.locator('.order-number strong');
    this.orderSummarySection = page.locator('.order-details-area');

    this.validationErrors = page.locator('.field-validation-error');
  }

  async navigate() {
    await this.page.goto(url('/checkout/onepagecheckout'));
  }

  // If user has saved addresses, force 'New Address' so the form fields appear
  async selectNewBillingAddress() {
    if (await this.billingAddressSelect.isVisible()) {
      await this.billingAddressSelect.selectOption('0');
      await this.billingFirstName.waitFor({ state: 'visible' });
    }
  }

  async fillBillingAddress(data: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    address: string;
    zip: string;
    phone: string;
    shipToSameAddress?: boolean;
  }) {
    await this.selectNewBillingAddress();
    await this.billingFirstName.fill(data.firstName);
    await this.billingLastName.fill(data.lastName);
    await this.billingEmail.fill(data.email);
    await this.billingCountry.selectOption({ label: data.country });
    await this.billingCity.fill(data.city);
    await this.billingAddress1.fill(data.address);
    await this.billingZip.fill(data.zip);
    await this.billingPhone.fill(data.phone);

    if (data.shipToSameAddress !== false) {
      await this.shipToSameAddressCheckbox.check();
    } else {
      await this.shipToSameAddressCheckbox.uncheck();
    }

    await this.billingContinue.click();
  }

  async selectShippingMethod(methodLabel: string) {
    await this.page.getByLabel(methodLabel, { exact: false }).check();
    await this.shippingMethodContinue.click();
  }

  async selectDefaultShippingMethod() {
    await this.shippingMethodContinue.click();
  }

  async selectPaymentMethod(methodLabel: string) {
    await this.page.getByLabel(methodLabel, { exact: false }).check();
    await this.paymentMethodContinue.click();
  }

  async fillPurchaseOrderInfo(poNumber: string = 'PO-TEST-001') {
    if (await this.poNumberInput.isVisible()) {
      await this.poNumberInput.fill(poNumber);
    }
    await this.paymentInfoContinue.click();
  }

  async fillCreditCardInfo(data: {
    name: string;
    number: string;
    expireMonth: string;
    expireYear: string;
    cvv: string;
  }) {
    await this.cardholderName.fill(data.name);
    await this.cardNumber.fill(data.number);
    await this.cardExpireMonth.selectOption({ value: data.expireMonth });
    await this.cardExpireYear.selectOption({ value: data.expireYear });
    await this.cardCode.fill(data.cvv);
    await this.paymentInfoContinue.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }
}
