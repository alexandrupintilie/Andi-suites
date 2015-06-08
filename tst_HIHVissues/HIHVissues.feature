Feature: HI-HV issues for PM

Scenario: Private Mode in Group Chats - TDT-3367
Given I am logged in
When I open a single chat from roster
And I add a contact to create a Group Chat
Then the Private Mode option is not available anymore

Scenario: Sending PM invitations to users with Last seen - TDT-3537
Given I am logged in
When I open a chat window with an user that is Last seen
And I click the PM button
Then the PM invitation is not sent

Scenario: Sending PM invitations to users with Offline - TDT-3537
Given I am logged in
When I open a chat window with an user that is Offline
And I click the PM button
Then the PM invitation is not sent

Scenario: Chat window UI after closing it with PM invitation active - TDT-3482
Given I am logged in
When I open a chat window with a contact
And I send him a PM invite
And I close the window before he accepts
And I reopen the window
Then the chat window UI is not blank

Scenario: Chat tray notifications for PM are ambiguous - TDT-3431
Given I am in PM with a contact
When I minimize the chat window
And I receive a message
Then the tray notification is ambiguous

Scenario: MDL screen for PM invitation - TDT- 3486
Given I am logged in with the same account on two resources
When I receive a PM invite from a contact
And I accept the invitation on one resource
Then the other resource shows a specific MDL screen for PM

Scenario: Load more messages button in PM chat - TDT-3408
Given I am logged in
When I open a chat window with a contact with previous activity
And I send a PM invite
And he accepts
And the PM session is initialized
Then the Load more messages button is not present

Scenario: Send user to Roster once a PM session ends - TDT-3442
Given I am in PM with a contact
When I end the PM session
Then I am sent to the Roster

Scenario: Delete files from local storage after the PM session ends - TDT-3535
Given I am in PM with a contact
When he sends me a file
And I receive it successfully
And I end the PM session
Then the file cannot be found locally

Scenario: Ambiguous tray notifications for received files - TDT-3533
Given I am in PM with a contact
When I minimize the chat window
And I enable the “File received” notification from Preferences
And he sends me a file
Then the tray notification message is ambiguous

Scenario: Log-out while PM is active - TDT-3543
Given I am in PM chat with a contact
When I log out from the app
Then the PM session is closed for the contact











