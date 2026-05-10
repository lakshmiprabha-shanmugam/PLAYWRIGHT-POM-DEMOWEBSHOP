# Test Coverage Matrix

This matrix tracks functional coverage across positive, negative, boundary, and edge-case scenarios. Test implementation uses Playwright with page objects from `pages/`.

## Coverage Summary

| Area | Positive | Negative | Boundary | Edge |
| --- | --- | --- | --- | --- |
| Registration | Covered | Covered | Covered | Covered |
| Login and logout | Covered | Covered | Covered | Covered |
| Homepage and navigation | Covered | Limited | Covered | Covered |
| Product search | Covered | Covered | Covered | Covered |
| Shopping cart | Covered | Covered | Covered | Covered |
| Wishlist | Covered | Covered | Covered | Covered |
| Checkout | Covered | Covered | Covered | Covered |
| Accessibility | Covered | Covered | N/A | Covered |

## Scenario Mapping

| Area | Scenario Type | Test IDs |
| --- | --- | --- |
| Registration | Positive | `TC-REG-01`, data-driven success cases |
| Registration | Negative | `TC-REG-02`, `TC-REG-03`, `TC-REG-04`, `TC-REG-05`, `TC-REG-06`, data-driven failure cases |
| Registration | Boundary | `TC-REG-06`, `TC-REG-07` |
| Registration | Edge | JSON, CSV, and Excel data-driven registration specs |
| Login and logout | Positive | `TC-AUTH-01`, `TC-AUTH-05` |
| Login and logout | Negative | `TC-AUTH-02`, `TC-AUTH-03`, `TC-AUTH-04`, `TC-AUTH-06` |
| Login and logout | Boundary | Empty credential validation in `TC-AUTH-04` |
| Login and logout | Edge | Protected page redirect in `TC-AUTH-06` |
| Homepage and navigation | Positive | `TC-HOME-01`, `TC-HOME-02`, `TC-HOME-03`, `TC-HOME-04`, `TC-HOME-05` |
| Homepage and navigation | Negative | Limited because this area is mostly display/navigation validation |
| Homepage and navigation | Boundary | Header and left-nav category count comparison |
| Homepage and navigation | Edge | Iterative category navigation and footer visibility checks |
| Product search | Positive | `TC-SRCH-01`, `TC-SRCH-04`, `TC-SRCH-05`, `TC-SRCH-06` |
| Product search | Negative | `TC-SRCH-02`, `TC-SRCH-03` |
| Product search | Boundary | Empty keyword and broad keyword pagination checks |
| Product search | Edge | Case-insensitive search, sorting, and conditional pagination |
| Shopping cart | Positive | `TC-CART-01`, `TC-CART-02`, `TC-CART-03`, `TC-CART-05`, `TC-CART-07`, `TC-CART-08` |
| Shopping cart | Negative | `TC-CART-04`, `TC-CART-06` |
| Shopping cart | Boundary | `TC-CART-09` quantity zero behavior |
| Shopping cart | Edge | Refresh persistence and total recalculation |
| Wishlist | Positive | `TC-WISH-01`, `TC-WISH-02`, `TC-WISH-03`, `TC-WISH-05` |
| Wishlist | Negative | `TC-WISH-04`, `TC-WISH-06` |
| Wishlist | Boundary | Empty wishlist validation in `TC-WISH-06` |
| Wishlist | Edge | Guest wishlist behavior in `TC-WISH-05` |
| Checkout | Positive | `TC-CHK-01`, `TC-CHK-02`, `TC-CHK-04`, `TC-CHK-05`, `TC-CHK-06`, `TC-CHK-08` |
| Checkout | Negative | `TC-CHK-03`, `TC-CHK-07`, `TC-CHK-09` |
| Checkout | Boundary | Empty cart and missing terms validation |
| Checkout | Edge | Different shipping method, same-as-billing flow, order history check |
| Accessibility | Positive | `AXE-HOME-01`, `AXE-LOGIN-01`, `AXE-REGISTER-01`, `AXE-SEARCH-01`, `AXE-CART-01`, `AXE-CHECKOUT-01` |
| Accessibility | Negative | Blocks on critical or serious axe violations |
| Accessibility | Edge | Anonymous, authenticated, cart, and checkout states |

## Remaining Improvement Opportunities

- Add explicit browser-back and direct URL access tests for authenticated-only account pages.
- Add invalid credit-card field validation if the application exposes deterministic validation messages.
- Add search tests for special characters and whitespace once expected application behavior is confirmed.
- Add visual or screenshot assertions only if UI regression coverage becomes a goal.
