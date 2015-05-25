Feature: Smoke test

Scenario: Login in application with valid credentials
Given I start the application
When I enter valid credentials
And I press sign in
Then I login in the application

Scenario: Inserting an incorrect password
Given I start the application
And I enter an incorrect password
When I press sign in
Then I receive error

Scenario: Sign out of the application
Given I start the application
And I enter credentials and press sign in
And I login in the application
When I press the Sign out button
Then I am returned to the login screen

Scenario: Add a contact to the roster
Given I am in the roster
And I search for a contact on WowApp
And I send a friend request
When the contact accepts the friend request
Then the user is added to the roster

Scenario: Remove a contact from the roster
Given I am in the roster
And I select for a contact from the roster
When I select remove contact from the right click menu
Then the contact is removed from the roster

Scenario: Delete entire conversation from single chat
Given I open a chat window with an online contact
And I open the conversation menu
When I select Delete entire conversation
Then the history from the chat window is deleted

Scenario: Message sent is received by contact
Given I open a chat window with an online contact
When I type a message
And I send the message
Then the message is received by the contact

Scenario: Edited message is received by contact
Given I open a chat window with an online contact
And I type a message and I send the message
When I edit the message
Then the message will appear edited for the contact also

Scenario: Remove message from single chat
Given I open a chat window with an online contact
And I type a message and I send the message
When I remove the message
Then the message will be removed from the chat window

Scenario: All emoticons sent are received by contact
Given I open a chat window with an online contact
When I select and send a emoticon
Then the emoticon is received by the contact

Scenario: All stickers sent are received by contact
Given I open a chat window with an online contact
When I select and sticker a emoticon
Then the sticker is received by the contact

Scenario: Start p2p call 
Given I open a chat window with an online contact
And I press the Call button
When the contact answers the call
Then the p2p call will start

Scenario: Create group chat 
Given I open a chat window with an online contact
And I press the Add contacts button
And I select a contact from the picker
When I press the Add to conference button
Then the group chat is created

Scenario: Create conference call 
Given I open a group chat window 
And I press the Free call button
When the participants answer the call 
Then the conference call is started

Scenario: Send message in group chat
Given I open a group chat window 
When I type a message
And I send the message
Then the message is received by the participants

Scenario: Edit message in group chat
Given I open a group chat window 
And I type a message and I send the message
When I edit the message
Then the message will appear edited for the participants also

Scenario: Remove message in group chat
Given I open a group chat window 
And I type a message and I send the message
When I remove the message
Then the message will be removed from the group chat

Scenario: All emoticons sent in GC are received by participants
Given I open a group chat
When I select and send a emoticon
Then the emoticon is received by the participants

Scenario: All stickers sent are received by participant
Given I open a group chat
When I select and send a sticker
Then the sticker is received by the contact

Scenario: Send file in GC
Given I open a group chat
When I send a file in the GC
Then the file is received by the participant

Scenario: Share contact in GC
Given I open a group chat
When I a share contact in the GC
Then the shared contact is received by the participants

Scenario: Start paid call
Given I am in the roster
And I select the Keypad tab
And I enter valid phone number
When I press the Call button
Then the paid call will start

Scenario: Send file to contact
Given I open a chat window with an online contact
When I send a file to the contact
Then the file is received by the contact

Scenario: Share contact to friend
Given I open a chat window with an online contact
When I send a share contact
Then the share contact is received by the contact

Scenario: Change avatar and reset profile picture
Given I am in the roster
And I open the change profile picture dialog
When I change the avatar
Then the contacts will see the new avatar 

Scenario: Change first and last name in My profile
Given I start the application
And I open Profile window
When I change first and last name in profile
Then the contacts will see the new first and last name in the Contact profile

Scenario: Add status message in My profile
Given I am in the roster
And I open Profile window
When I add a status message
Then the contact will see the status message in the Contact profile
