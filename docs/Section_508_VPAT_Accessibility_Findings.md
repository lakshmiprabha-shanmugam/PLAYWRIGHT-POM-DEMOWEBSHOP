# Section 508 / VPAT Accessibility Findings

Product: Demo Web Shop test target  
Assessment date: May 21, 2026  
Assessment method: Playwright accessibility suite with `@axe-core/playwright`  
Test command: `npm run test:a11y`  
Browser project: `chromium`  
Ruleset tested: axe WCAG 2.0 A and WCAG 2.0 AA tags  
Blocking threshold: critical and serious axe violations  
Target URL: `https://demowebshop.tricentis.com/`

## Executive Summary

The accessibility test run completed with 6 failed checks out of 6. Each tested page contains at least one critical or serious accessibility violation. Based on this automated evidence, the evaluated Demo Web Shop flows do not currently support a Section 508 conformance claim for the tested criteria.

This document is a findings report and VPAT-style support summary based on automated axe results. It is not a full VPAT certification because manual assistive technology, keyboard-only, zoom/reflow, and cognitive accessibility validation were not performed.

## Test Scope

| Test ID | Page / Flow | Result |
| --- | --- | --- |
| AXE-HOME-01 | Homepage | Failed |
| AXE-LOGIN-01 | Login page | Failed |
| AXE-REGISTER-01 | Register page | Failed |
| AXE-SEARCH-01 | Product search page | Failed |
| AXE-CART-01 | Cart page | Failed |
| AXE-CHECKOUT-01 | Checkout page | Failed |

## Overall Findings

| Rule ID | Impact | Finding | Affected Pages |
| --- | --- | --- | --- |
| `html-has-lang` | Serious | The `<html>` element does not define a page language. | Homepage, Login, Register, Product search, Cart, Checkout |
| `label` | Critical | Form controls do not have accessible labels. | Homepage, Login, Register, Product search, Cart, Checkout |
| `select-name` | Critical | Product listing select controls do not have accessible names. | Product search |
| `image-alt` | Critical | Homepage hero image is missing alternative text. | Homepage |
| `link-name` | Serious | Homepage slider image link does not have discernible link text. | Homepage |
| `color-contrast` | Serious | Checkout accordion headings do not meet minimum contrast requirements. | Checkout |

## Page Findings

### Homepage

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `html-has-lang` | Serious | 1 | `html` |
| `image-alt` | Critical | 1 | `.nivo-main-image` |
| `label` | Critical | 2 | `#small-searchterms`, `#newsletter-email` |
| `link-name` | Serious | 1 | `.nivo-imageLink:nth-child(1)` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/46eb1628-4452-4a99-92e8-40aa558d468a-attachment.json` |
| Axe summary JSON | `allure-results/17f76fc9-724d-45bf-8e21-020462ac2a31-attachment.json` |
| Screenshot | `allure-results/cca61fd2-4326-4341-8707-3ad93babe3ea-attachment.png` |

### Login Page

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `html-has-lang` | Serious | 1 | `html` |
| `label` | Critical | 2 | `#small-searchterms`, `#newsletter-email` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/dd50cd8d-0bad-467c-913b-fe7bb1e51a5b-attachment.json` |
| Axe summary JSON | `allure-results/c2bb8801-a159-42d8-a9ec-f1b3a35ec528-attachment.json` |
| Screenshot | `allure-results/8ffc8e58-0f9e-4961-908f-be2c9ca276ea-attachment.png` |

### Register Page

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `html-has-lang` | Serious | 1 | `html` |
| `label` | Critical | 2 | `#small-searchterms`, `#newsletter-email` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/000b17da-b6f2-46c2-a6e3-942b4e393c90-attachment.json` |
| Axe summary JSON | `allure-results/e1898876-2a5e-4d75-8947-0c59005d28bb-attachment.json` |
| Screenshot | `allure-results/fd74743e-2dd3-4ade-857e-d4df9c5e2da1-attachment.png` |

### Product Search Page

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `html-has-lang` | Serious | 1 | `html` |
| `label` | Critical | 2 | `#small-searchterms`, `#newsletter-email` |
| `select-name` | Critical | 3 | `#products-viewmode`, `#products-orderby`, `#products-pagesize` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/82c150c8-59bf-40d3-b296-9ee3f482b427-attachment.json` |
| Axe summary JSON | `allure-results/f597646a-5081-4b3e-97e1-ad88e0f8ce5e-attachment.json` |
| Screenshot | `allure-results/91e1062e-54b5-4d4c-a33b-98b26e12d2aa-attachment.png` |

### Cart Page

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `html-has-lang` | Serious | 1 | `html` |
| `label` | Critical | 6 | `#small-searchterms`, `input[name="removefromcart"]`, `.qty-input`, `.discount-coupon-code`, `.gift-card-coupon-code`, `#termsofservice` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/c2dcfc2c-17bd-4cb7-be9c-ef0b131b5911-attachment.json` |
| Axe summary JSON | `allure-results/8d909349-1525-4898-af49-f01b46d9524d-attachment.json` |
| Screenshot | `allure-results/04a1460b-1e6b-41fe-9c60-6ecb2b15ffcb-attachment.png` |

### Checkout Page

Status: Does not support

| Rule ID | Impact | Nodes | Affected Targets |
| --- | --- | ---: | --- |
| `color-contrast` | Serious | 5 | `#opc-shipping > .step-title > h2`, `#opc-shipping_method > .step-title > h2`, `#opc-payment_method > .step-title > h2`, `#opc-payment_info > .step-title > h2`, `#opc-confirm_order > .step-title > h2` |
| `html-has-lang` | Serious | 1 | `html` |
| `label` | Critical | 1 | `#small-searchterms` |

Evidence attachments:

| Artifact | Location |
| --- | --- |
| Axe violations JSON | `allure-results/16b35ace-0c75-43a3-9f20-262dfd13cd28-attachment.json` |
| Axe summary JSON | `allure-results/389defbd-48c0-4637-bd1b-3e75b594baf5-attachment.json` |
| Screenshot | `allure-results/3f46fc32-062e-4458-9470-e3b324d5b9b6-attachment.png` |

## Section 508 / WCAG Support Summary

| Standard / Criteria Area | Support Level | Evidence |
| --- | --- | --- |
| Page language | Does not support | All tested pages fail `html-has-lang`; likely maps to WCAG 2.0 SC 3.1.1 Language of Page. |
| Text alternatives | Does not support | Homepage fails `image-alt`; likely maps to WCAG 2.0 SC 1.1.1 Non-text Content. |
| Labels or instructions | Does not support | All tested pages fail `label`; product search also fails `select-name`; likely maps to WCAG 2.0 SC 3.3.2 Labels or Instructions and 4.1.2 Name, Role, Value. |
| Link purpose / accessible name | Does not support | Homepage fails `link-name`; likely maps to WCAG 2.0 SC 2.4.4 Link Purpose and 4.1.2 Name, Role, Value. |
| Color contrast | Does not support | Checkout fails `color-contrast`; likely maps to WCAG 2.0 SC 1.4.3 Contrast Minimum. |

## Recommended Remediation

1. Add a valid language attribute to the root element, such as `<html lang="en">`.
2. Add programmatic labels for search, newsletter, cart quantity, coupon, gift card, terms of service, remove-from-cart, and product listing select controls.
3. Add meaningful `alt` text for informative images. Use empty `alt=""` only for decorative images.
4. Add discernible text or `aria-label` values to slider image links.
5. Increase checkout heading foreground/background color contrast to meet at least 4.5:1 for normal text or 3:1 for large text.
6. Rerun `npm run test:a11y` after remediation and attach the updated Playwright or Allure report to the compliance package.

## Test Result

Command result: failed  
Failure count: 6  
Run timestamp: May 21, 2026, approximately 11:29 AM America/New_York  
JUnit output: `results.xml`  
Playwright output: `playwright-report/`  
Allure result output: `allure-results/`
