Feature: PM2

Scenario: Send a text message in PM
Given I am logged in with account A
When I open a chat window with contact B
And I initiate a PM session
And I send a message
Then the message is received

Scenario: Edit a text message in PM
Given I am in PM with contact B
When I send a text message
And I edit the text message
Then the message is successfully edited

Scenario: PM chat window can be docked
Given I am in PM with contact B
When I press the Dock button
Then the PM chat window is docked

Scenario: Send a file in PM
Given I am in PM with contact B
When I send a file to contact B
And the file is received successfully
Then the file can be opened

Scenario: Share a contact in PM
Given I am in PM with contact B
When I open the Share Contact window from the plus menu
And I share a contact
Then the contact is received successfully

Scenario: Check that no Activity entries exist for PM
Given I am in PM with contact B
When I receive a message in PM
And I go to Activity
Then no entries are generated for PM

