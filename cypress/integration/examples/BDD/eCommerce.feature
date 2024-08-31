Feature: E2E Ecommerce Validation

 Scenario: Ecommerce products delivery
  Given I open Ecommerce Page and verified homepage elements
  When I add items to cart
  Then I add the shipping details for delivery
  Then I verified the total price for Items and Shipping
  Then I proceed to checkout and verify purchase successful