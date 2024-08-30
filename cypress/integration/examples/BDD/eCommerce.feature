Feature: E2E Ecommerce Validation

 Scenario: Ecommerce products delivery
  Given I open Ecommerce Page and verified homepage elements
  When I add items to cart
  Then I add the shipping details for delivery
  Then I verified the total price for Items and Shipping
  Then I proceed to checkout and verify purchase successful




 # @Regression
 # Scenario: Ecommerce products delivery
 #  Given I open Ecommerce Page
 #  When I add items to Cart
 #  And I validate the total prices
 #  Then I add the shipping details and verify purchase successful

 # @Smoke
 # Scenario: Filling the Home Page Form
 #  Given I open Ecommerce Page
 #  When I fill the form details
 #  | name | gender | email               |
 #  | Vinc | Male   | test@automation.com |
 #  Then I validate the forms behaviour
 #  And I finally select the Shop Page

  