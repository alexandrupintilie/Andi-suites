source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_HIHVissues/HIHVissues.feature");

var client1 = startApplication("WowApp -noupdate");
var client2 = startApplication("WowApp -noupdate", "10.13.13.173", 4322);
var client3 = startApplication("WowApp -noupdate", "10.13.13.97", 4322);

// Scenario 1
var scenario1 = feature.addScenario("Private Mode in Group Chats - TDT-3367");

scenario1.Given("I am logged in", function () {
    this.scenario.application = new Application();
    setApplicationContext(client3);
    this.scenario.application.enterCredentialsPM3("pl.cata2002", "forcet2002");
    setApplicationContext(client2);
    this.scenario.application.enterCredentialsPM2("pl.cata2001", "forcet2001");
    setApplicationContext(client1);
    this.scenario.application.enterCredentialsPM1("pl.cata2000", "forcet2000");
    this.scenario.application.loginWasSuccessfull();
    snooze(3);
    
});

scenario1.When("I open a single chat from roster", function () {
    setApplicationContext(client1);
    this.scenario.application.openChatPM();
    snooze(5);
    
});

scenario1.And("I add a contact to create a Group Chat", function () {
    this.scenario.application.addContactWindow();
    snooze(3);
    this.scenario.application.addContact();
    snooze(3);
    this.scenario.application.addContactCheck();
    snooze(3);
});

scenario1.Then("the Private Mode option is not available anymore", function () {
    this.scenario.application.noPMbuttonCheck();
    snooze(5);
    this.scenario.application.closeGC1();
    
});

// Scenario 2
var scenario2 = feature.addScenario("Sending PM invitations to users with Last seen - TDT-3537");

scenario2.Given("I am logged in", function () {
    this.scenario.application = new Application();
    this.scenario.application.loginWasSuccessfull();
    
});

scenario2.When("I open a chat window with an user that is Last seen", function () {
    this.scenario.application.openChatLastSeen();
    snooze(3);
    
});

scenario2.And("I click the PM button",function() {
    this.scenario.application.clickPMbuttonLastSeen();
    snooze(3);
    
});

scenario2.Then("the PM invitation is not sent", function () {
    this.scenario.application.checkPMLastSeen();
    snooze(3);
    this.scenario.application.closeLastSeen();
    snooze(3);
});

// Scenario 3
var scenario3 = feature.addScenario("Sending PM invitations to users with Offline - TDT-3537");

scenario3.Given("I am logged in", function () {
    test.log("Implement me!");
});

scenario3.When("I open a chat window with an user that is Offline", function () {
    test.log("Implement me!");
});

scenario3.Then("the PM button is disabled", function () {
    test.log("Implement me!");
});

// Scenario 4
var scenario4 = feature.addScenario("Chat window UI after closing it with PM invitation active - TDT-3482");

scenario4.Given("I am logged in", function () {
    test.log("Implement me!");
});

scenario4.When("I open a chat window with a contact", function () {
    test.log("Implement me!");
});

scenario4.And("I send him a PM invite", function () {
    test.log("Implement me!");
});

scenario4.And("I close the window before he accepts", function () {
    test.log("Implement me!");
});

scenario4.And("I reopen the window", function () {
    test.log("Implement me!");
});

scenario4.Then("the chat UI is free of issues", function () {
    test.log("Implement me!");
});

// Scenario 5
var scenario5 = feature.addScenario("Chat tray notifications for PM are ambiguous - TDT-3431");

scenario5.Given("I am in PM with a contact", function () {
    test.log("Implement me!");
});

scenario5.When("I minimize the chat window", function () {
    test.log("Implement me!");
});

scenario5.And("I receive a message", function () {
    test.log("Implement me!");
});

scenario5.Then("the tray notification is ambiguous", function () {
    test.log("Implement me!");
});

// Scenario 6
var scenario6 = feature.addScenario("MDL screen for PM invitation - TDT- 3486");

scenario6.Given("I am logged in with the same account on two resources", function () {
    test.log("Implement me!");
});

scenario6.When("I receive a PM invite from a contact", function () {
    test.log("Implement me!");
});

scenario6.And("I accept the invitation on one resource", function () {
    test.log("Implement me!");
});

scenario6.Then("the other resource shows a specific MDL screen for PM", function () {
    test.log("Implement me!");
});

// Scenario 7
var scenario7 = feature.addScenario("Load more messages button in PM chat - TDT-3408");

scenario7.Given("I am logged in", function () {
    test.log("Implement me!");
});

scenario7.When("I open a chat window with a contact with previous activity", function () {
    test.log("Implement me!");
});

scenario7.And("I send a PM invite", function () {
    test.log("Implement me!");
});

scenario7.And("he accepts", function () {
    test.log("Implement me!");
});

scenario7.And("the PM session is initialized", function () {
    test.log("Implement me!");
});

scenario7.Then("the Load more messages button is not present", function () {
    test.log("Implement me!");
});

// Scenario 8
var scenario8 = feature.addScenario("Send user to Roster once a PM session ends - TDT-3442");

scenario8.Given("I am in PM with a contact", function () {
    test.log("Implement me!");
});

scenario8.When("I end the PM session", function () {
    test.log("Implement me!");
});

scenario8.Then("I am sent to the Roster", function () {
    test.log("Implement me!");
});

// Scenario 9
var scenario9 = feature.addScenario("Delete files from local storage after the PM session ends - TDT-3535");

scenario9.Given("I am in PM with a contact", function () {
    test.log("Implement me!");
});

scenario9.When("he sends me a file", function () {
    test.log("Implement me!");
});

scenario9.And("I receive it successfully", function () {
    test.log("Implement me!");
});

scenario9.And("I end the PM session", function () {
    test.log("Implement me!");
});

scenario9.Then("the file cannot be found locally", function () {
    test.log("Implement me!");
});

// Scenario 10
var scenario10 = feature.addScenario("Ambiguous tray notifications for received files - TDT-3533");

scenario10.Given("I am in PM with a contact", function () {
    test.log("Implement me!");
});

scenario10.When("I minimize the chat window", function () {
    test.log("Implement me!");
});

scenario10.And("I enable the “File received” notification from Preferences", function () {
    test.log("Implement me!");
});

scenario10.And("he sends me a file", function () {
    test.log("Implement me!");
});

scenario10.Then("the tray notification message is ambiguous", function () {
    test.log("Implement me!");
});

// Scenario 11
var scenario11 = feature.addScenario("Log-out while PM is active - TDT-3543");

scenario11.Given("I am in PM chat with a contact", function () {
    test.log("Implement me!");
});

scenario11.When("I log out from the app", function () {
    test.log("Implement me!");
});

scenario11.Then("the PM session is closed for the contact", function () {
    test.log("Implement me!");
});

function main() {
   feature.execute();
}
