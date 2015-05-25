Feature: Chat

Scenario: A sends C to B from main app window
	Given I start the application
	And I enter credentials
	And I am logged in with account A
	And I am a member of a GroupChat B
	When I send a contact card to the GroupChat
	Then the shared contact is the one i chose
