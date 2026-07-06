@register
Feature: Registreing into the TutorialsNinja Page 

Scenario: Registering with credentials in tutorials Ninja 

Given the user is on register page
When the user enters personal details
  | firstname | lastname | email          | telephone |
  | samiha  | M        | samihasami205@gmail.com | 9671567825|
And the user enters password details
  | password     | confirmPassword |
  | Samiha@2005 | Samiha@2005   |
And clicks the continue button
Then the user should be redirected to the page successfully