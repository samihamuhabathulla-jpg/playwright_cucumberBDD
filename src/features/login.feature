Feature: Tutorials Ninja Login Page 

@ValidCredentials
Scenario Outline: Logging into the site 
Given the user is on Login page of Tutorials Ninja
When the user enters the mail and password
And clicks the login button in the site
Then the user should be loggedIn successfully