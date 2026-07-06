@login
Feature: Tutorials Ninja Login Page

  @ValidCredentials
  Scenario: Logging into the site
    Given the user is on Login page of Tutorials Ninja
    When the user enters the mail and password
    And clicks the login button in the site
    Then the user should be loggedIn successfully

  @InvalidCredentials
  Scenario Outline: Logging into the site with invalid credentials
    Given the user is on Login page of Tutorials Ninja
    When user enters email as "<email>" and "<password>"
    And user clicks the login button
    Then popup "<errorMessage>" should be displayed successfully

    Examples:
      | email                   | password    | errorMessage                                          |
      | invaliduser@gmail.com   | Samiha@2005 | Warning: No match for E-Mail Address and/or Password. |
      | samihasami205@gmail.com | Wrong@123   | Warning: No match for E-Mail Address and/or Password. |