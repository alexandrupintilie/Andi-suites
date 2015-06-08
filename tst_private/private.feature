Feature: private

Scenario: Send PM request to a contact
Given I am logged in with account A
When I open a single chat window with contact B
And I press the PM button
And a PM request is sent
Then the PM request is received by contact B

Scenario: Cancel a PM request
Given the PM pop-up is available on screen
When I click NO
Then the invitation is dismissed for both users

Scenario: Accept a PM request
Given I am logged in with account A
When I receive a PM request pop-up from contact B
And I click YES
Then the PM is initialized

Scenario: Exit Private mode
Given I am in Private mode with contact B
When I click the PM button
And the pop-up appears
And I click OK
Then I exit Private mode





