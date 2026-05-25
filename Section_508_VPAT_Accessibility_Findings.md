# Accessibility Conformance Report

WCAG Edition  
Based on VPAT Version 2.5

## Product Information

Name of Product / Version: Demo Web Shop - Playwright POM Accessibility Assessment  
Report Date: May 21, 2026  
Product URL Evaluated: `https://demowebshop.tricentis.com/`  
Contact Information: Project QA / Accessibility Test Owner  
Report Type: Draft Accessibility Conformance Report based on automated test findings

## Notes

This Accessibility Conformance Report is prepared in the VPAT 2.5 WCAG Edition style. The assessment was limited to automated Playwright tests using `@axe-core/playwright` and axe WCAG 2.0 A / AA rule tags. Manual testing with screen readers, keyboard-only navigation, browser zoom/reflow, voice control, and cognitive accessibility checks was not performed.

Because the tested site is an external demo application, this report documents observed conformance issues and remediation recommendations. It should not be treated as a final vendor VPAT certification.

## Evaluation Methods Used

| Method | Details |
| --- | --- |
| Automated testing | Playwright accessibility spec using `@axe-core/playwright` |
| Test command | `npm run test:a11y` |
| Browser project | `chromium` |
| Blocking impacts | axe `critical` and `serious` |
| Pages / flows tested | Homepage, Login, Register, Product Search, Cart, Checkout |
| Output artifacts | `results.xml`, `playwright-report/`, `allure-results/`, `allure-report/` |
| Test result | 6 failed / 6 executed |

## Applicable Standards / Guidelines

| Standard / Guideline | Included in Report |
| --- | --- |
| Web Content Accessibility Guidelines 2.0 Level A | Yes |
| Web Content Accessibility Guidelines 2.0 Level AA | Yes |
| Revised Section 508 | Referenced through WCAG A / AA mapping |

## Terms

| Term | Definition Used in This Report |
| --- | --- |
| Supports | The tested functionality has no known defect for the criterion based on available evidence. |
| Partially Supports | Some functionality meets the criterion, but one or more tested areas have defects. |
| Does Not Support | The majority of tested functionality related to the criterion does not meet the requirement. |
| Not Applicable | The criterion is not relevant to the evaluated product or tested scope. |
| Not Evaluated | The criterion was not evaluated in this automated-only assessment. |

## Executive Summary

The automated accessibility suite found critical or serious violations on every tested page. The evaluated site currently does not support several WCAG Level A and Level AA criteria that are relevant to Revised Section 508 conformance.

Primary blocking issues:

| Issue | Impact | Affected Pages |
| --- | --- | --- |
| Missing page language | Serious | Homepage, Login, Register, Product Search, Cart, Checkout |
| Form controls without accessible labels | Critical | Homepage, Login, Register, Product Search, Cart, Checkout |
| Select controls without accessible names | Critical | Product Search |
| Image without alternative text | Critical | Homepage |
| Link without discernible text | Serious | Homepage |
| Insufficient text contrast | Serious | Checkout |

## Table 1: Success Criteria, Level A

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 1.1.1 Non-text Content | Does Not Support | Homepage fails axe `image-alt` for `.nivo-main-image`. Informative images require meaningful alternative text; decorative images require empty `alt=""`. |
| 1.2.1 Audio-only and Video-only (Prerecorded) | Not Applicable | No audio-only or video-only content was included in the tested e-commerce pages. |
| 1.2.2 Captions (Prerecorded) | Not Applicable | No prerecorded video with audio was included in the tested pages. |
| 1.2.3 Audio Description or Media Alternative (Prerecorded) | Not Applicable | No prerecorded video content was included in the tested pages. |
| 1.3.1 Info and Relationships | Not Evaluated | Automated findings did not include this criterion. Manual review of headings, lists, form groups, tables, and relationships is required. |
| 1.3.2 Meaningful Sequence | Not Evaluated | Manual keyboard and screen reader reading order validation is required. |
| 1.3.3 Sensory Characteristics | Not Evaluated | Manual review is required to confirm instructions do not depend only on shape, size, position, orientation, or sound. |
| 1.4.1 Use of Color | Not Evaluated | Manual review is required to confirm color is not the only means of conveying information. |
| 1.4.2 Audio Control | Not Applicable | No auto-playing audio was observed in the automated test scope. |
| 2.1.1 Keyboard | Not Evaluated | Manual keyboard-only testing is required for all page flows. |
| 2.1.2 No Keyboard Trap | Not Evaluated | Manual keyboard-only testing is required to confirm focus can enter and leave all components. |
| 2.1.4 Character Key Shortcuts | Not Evaluated | No shortcut-key review was performed. |
| 2.2.1 Timing Adjustable | Not Evaluated | Timeout and session behavior were not evaluated. |
| 2.2.2 Pause, Stop, Hide | Not Evaluated | Moving slider behavior on the homepage should be manually reviewed for pause, stop, or hide controls. |
| 2.3.1 Three Flashes or Below Threshold | Not Evaluated | Flashing content was not manually evaluated. |
| 2.4.1 Bypass Blocks | Not Evaluated | Skip links, landmarks, and bypass mechanisms were not manually evaluated. |
| 2.4.2 Page Titled | Not Evaluated | Page titles were not included in the automated finding set. Manual review is required. |
| 2.4.3 Focus Order | Not Evaluated | Manual keyboard focus-order testing is required. |
| 2.4.4 Link Purpose (In Context) | Does Not Support | Homepage fails axe `link-name` for `.nivo-imageLink:nth-child(1)`. The slider link needs visible text, hidden accessible text, or an `aria-label` that communicates purpose. |
| 2.5.1 Pointer Gestures | Not Evaluated | Pointer gesture behavior was not manually evaluated. |
| 2.5.2 Pointer Cancellation | Not Evaluated | Pointer cancellation behavior was not manually evaluated. |
| 2.5.3 Label in Name | Not Evaluated | Manual review is required to confirm visible labels are included in accessible names. |
| 2.5.4 Motion Actuation | Not Applicable | No motion-actuated functionality was observed in the automated test scope. |
| 3.1.1 Language of Page | Does Not Support | All tested pages fail axe `html-has-lang`; the root `html` element must include a valid language attribute such as `lang="en"`. |
| 3.2.1 On Focus | Not Evaluated | Manual interaction testing is required to confirm focus does not trigger unexpected context changes. |
| 3.2.2 On Input | Not Evaluated | Manual interaction testing is required to confirm input changes do not trigger unexpected context changes. |
| 3.3.1 Error Identification | Not Evaluated | Error validation flows were not evaluated in the automated accessibility run. |
| 3.3.2 Labels or Instructions | Does Not Support | All tested pages fail axe `label` for one or more form controls. Product Search also fails `select-name` for `#products-viewmode`, `#products-orderby`, and `#products-pagesize`. |
| 4.1.1 Parsing | Supports | WCAG 2.0 / 2.1 errata indicate this criterion is always considered supported unless using older reporting expectations. No automated parsing failure was reported. |
| 4.1.2 Name, Role, Value | Does Not Support | Form controls and selects without accessible names fail axe `label` and `select-name`. The homepage slider link also lacks a discernible accessible name. |

## Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 1.2.4 Captions (Live) | Not Applicable | No live audio or video content was included in the tested scope. |
| 1.2.5 Audio Description (Prerecorded) | Not Applicable | No prerecorded video content was included in the tested scope. |
| 1.3.4 Orientation | Not Evaluated | Orientation behavior was not manually evaluated. |
| 1.3.5 Identify Input Purpose | Not Evaluated | Input purpose and autocomplete attributes were not evaluated manually. |
| 1.4.3 Contrast (Minimum) | Does Not Support | Checkout fails axe `color-contrast` for five checkout step headings: shipping, shipping method, payment method, payment information, and confirm order. |
| 1.4.4 Resize Text | Not Evaluated | Browser zoom and text resize testing were not performed. |
| 1.4.5 Images of Text | Not Evaluated | Manual review is required to confirm images of text are not used or have accessible alternatives. |
| 1.4.10 Reflow | Not Evaluated | Reflow at 320 CSS pixels was not tested. |
| 1.4.11 Non-text Contrast | Not Evaluated | Non-text component contrast was not manually evaluated. |
| 1.4.12 Text Spacing | Not Evaluated | Text spacing override testing was not performed. |
| 1.4.13 Content on Hover or Focus | Not Evaluated | Hover/focus-triggered content was not manually evaluated. |
| 2.4.5 Multiple Ways | Not Evaluated | Multiple navigation methods were not manually evaluated. |
| 2.4.6 Headings and Labels | Partially Supports | No automated heading or label text quality failures were reported, but form labeling failures indicate labels are incomplete across tested pages. Manual review is required. |
| 2.4.7 Focus Visible | Not Evaluated | Focus indicator visibility was not manually tested. |
| 3.1.2 Language of Parts | Not Evaluated | Language changes within page content were not evaluated. |
| 3.2.3 Consistent Navigation | Not Evaluated | Consistent navigation was not manually evaluated. |
| 3.2.4 Consistent Identification | Not Evaluated | Consistent identification of repeated controls was not manually evaluated. |
| 3.3.3 Error Suggestion | Not Evaluated | Error suggestion behavior was not evaluated. |
| 3.3.4 Error Prevention (Legal, Financial, Data) | Not Evaluated | Checkout/order error prevention behavior was not evaluated. |
| 4.1.3 Status Messages | Not Evaluated | Status message behavior was not evaluated with assistive technology. |

## Section 508 Findings Summary

| Revised Section 508 Requirement Area | Conformance Level | Remarks |
| --- | --- | --- |
| 302.1 Without Vision | Partially Supports | Automated findings indicate missing labels, missing language declaration, and missing link/image accessible names that affect screen reader users. |
| 302.2 With Limited Vision | Partially Supports | Checkout contrast failure affects users with low vision. Browser zoom and reflow were not evaluated. |
| 302.3 Without Perception of Color | Not Evaluated | Use of color was not manually evaluated. |
| 302.7 With Limited Manipulation | Not Evaluated | Keyboard and pointer alternatives were not manually evaluated. |
| 302.9 With Limited Language, Cognitive, and Learning Abilities | Not Evaluated | Cognitive accessibility checks were not performed. |
| 502 Interoperability with Assistive Technology | Does Not Support | Missing accessible names and missing page language affect assistive technology interoperability. |

## Detailed Automated Findings

| Test ID | Page / Flow | Result | Blocking Findings |
| --- | --- | --- | --- |
| AXE-HOME-01 | Homepage | Failed | `html-has-lang`, `image-alt`, `label`, `link-name` |
| AXE-LOGIN-01 | Login page | Failed | `html-has-lang`, `label` |
| AXE-REGISTER-01 | Register page | Failed | `html-has-lang`, `label` |
| AXE-SEARCH-01 | Product search page | Failed | `html-has-lang`, `label`, `select-name` |
| AXE-CART-01 | Cart page | Failed | `html-has-lang`, `label` |
| AXE-CHECKOUT-01 | Checkout page | Failed | `color-contrast`, `html-has-lang`, `label` |

## Evidence Attachments

| Page / Flow | Axe Violations JSON | Axe Summary JSON | Screenshot |
| --- | --- | --- | --- |
| Homepage | `allure-results/46eb1628-4452-4a99-92e8-40aa558d468a-attachment.json` | `allure-results/17f76fc9-724d-45bf-8e21-020462ac2a31-attachment.json` | `allure-results/cca61fd2-4326-4341-8707-3ad93babe3ea-attachment.png` |
| Login page | `allure-results/dd50cd8d-0bad-467c-913b-fe7bb1e51a5b-attachment.json` | `allure-results/c2bb8801-a159-42d8-a9ec-f1b3a35ec528-attachment.json` | `allure-results/8ffc8e58-0f9e-4961-908f-be2c9ca276ea-attachment.png` |
| Register page | `allure-results/000b17da-b6f2-46c2-a6e3-942b4e393c90-attachment.json` | `allure-results/e1898876-2a5e-4d75-8947-0c59005d28bb-attachment.json` | `allure-results/fd74743e-2dd3-4ade-857e-d4df9c5e2da1-attachment.png` |
| Product search page | `allure-results/82c150c8-59bf-40d3-b296-9ee3f482b427-attachment.json` | `allure-results/f597646a-5081-4b3e-97e1-ad88e0f8ce5e-attachment.json` | `allure-results/91e1062e-54b5-4d4c-a33b-98b26e12d2aa-attachment.png` |
| Cart page | `allure-results/c2dcfc2c-17bd-4cb7-be9c-ef0b131b5911-attachment.json` | `allure-results/8d909349-1525-4898-af49-f01b46d9524d-attachment.json` | `allure-results/04a1460b-1e6b-41fe-9c60-6ecb2b15ffcb-attachment.png` |
| Checkout page | `allure-results/16b35ace-0c75-43a3-9f20-262dfd13cd28-attachment.json` | `allure-results/389defbd-48c0-4637-bd1b-3e75b594baf5-attachment.json` | `allure-results/3f46fc32-062e-4458-9470-e3b324d5b9b6-attachment.png` |

## Remediation Plan

| Priority | Recommendation | Related Criteria |
| --- | --- | --- |
| High | Add a valid `lang` attribute to the root `html` element on every page. | 3.1.1 |
| High | Add explicit or programmatic labels to all search, newsletter, cart, coupon, gift-card, quantity, remove-from-cart, terms, and product-list select controls. | 3.3.2, 4.1.2 |
| High | Add meaningful alternative text to informative images and empty alt text to decorative images. | 1.1.1 |
| High | Add discernible accessible text to the homepage slider image link. | 2.4.4, 4.1.2 |
| Medium | Update checkout heading foreground/background colors to meet WCAG AA contrast minimums. | 1.4.3 |
| Medium | Perform manual keyboard-only, screen reader, zoom/reflow, focus visible, and error handling validation after automated fixes. | WCAG A / AA manual criteria |

## Final Test Result

Command result: Failed  
Failure count: 6  
Execution date: May 21, 2026  
Generated report: `allure-report/index.html`  
Raw evidence folder: `allure-results/`
