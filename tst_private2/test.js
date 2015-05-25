source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_private2/private2.feature");

var client1 = startApplication("WowApp -noupdate");
var client2 = startApplication("WowApp -noupdate", "10.13.13.173", 4322);



// Scenario 1
var scenario1 = feature.addScenario("Send a text message in PM");

scenario1.Given("I am logged in with account A", function () {
    this.scenario.application = new Application();
    setApplicationContext(client2);
    this.scenario.application.enterCredentialsPM2("pl.cata2001", "forcet2001");
    setApplicationContext(client1);
    this.scenario.application.enterCredentialsPM1("pl.cata2000", "forcet2000");
    this.scenario.application.loginWasSuccessfull();
    snooze(3);
});

scenario1.When("I open a chat window with contact B", function () {
    setApplicationContext(client1);
    this.scenario.application.openChatPM();
    snooze(5);
    this.scenario.application.openChatPMwasSuccessfull();
});

scenario1.And("I initiate a PM session", function () {
    this.scenario.application.clickPMbutton();
    setApplicationContext(client2);
    this.scenario.application.acceptPMinviteWin();
    snooze(5);
    
});

scenario1.And("I send a message", function () {
    setApplicationContext(client1);
    this.scenario.application.sendMessageInPM();
    
});

scenario1.Then("the message is received", function () {
    snooze(3);
    setApplicationContext(client2);
    this.scenario.application.messageIsReceived();
    snooze(3);
    this.scenario.application.messageIsReceivedCheck();
    
});

// Scenario 2
var scenario2 = feature.addScenario("Edit a text message in PM");

scenario2.Given("I am in PM with contact B", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.PMisInitialized();
});

scenario2.When("I send a text message", function () {
    this.scenario.application.sendAmessageInPM();
    snooze(5);
});

scenario2.And("I edit the text message", function () {
    this.scenario.application.editMessage();
});

scenario2.Then("the message is successfully edited", function () {
    setApplicationContext(client2);
    this.scenario.application.editMessageOK();
    snooze(3);
    this.scenario.application.editMessageCheck();
    snooze(3);
});

// Scenario 3
var scenario3 = feature.addScenario("PM chat window can be docked");

scenario3.Given("I am in PM with contact B", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.PMisInitialized();
});

scenario3.When("I press the Dock button", function () {
    snooze(5);
    this.scenario.application.dockPM();
    snooze(3);
});

scenario3.Then("the PM chat window is docked", function () {
    this.scenario.application.dockPMcheck();
    snooze(3);
    this.scenario.application.dockPM();
});

// Scenario 4
var scenario4 = feature.addScenario("Send a file in PM");

scenario4.Given("I am in PM with contact B", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.PMisInitialized();
});

scenario4.When("I send a file to contact B", function () {
    this.scenario.application.openSendFile();
    snooze(3);
    this.scenario.application.sendFileinPM();
    snooze(8);
});

scenario4.And("the file is received successfully", function () {
    setApplicationContext(client2);
    this.scenario.application.fileReceivedCheck();
    snooze(3);
    
});
scenario4.Then("the file can be opened", function () {
    setApplicationContext(client2);
    this.scenario.application.openFileCheck();
    snooze(8);

});
// Scenario 5
var scenario5 = feature.addScenario("Share a contact in PM");

scenario5.Given("I am in PM with contact B", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.PMisInitialized();
});

scenario5.When("I open the Share Contact window from the plus menu", function () {
    this.scenario.application.openSendContact();
    snooze(3);

});

scenario5.And("I share a contact", function () {
    this.scenario.application.sendContact();
    snooze(3);
    
});

scenario5.Then("the contact is received successfully", function () {
    this.scenario.application.contactReceivedCheck();
    snooze(3);
    
});

// Scenario 6
var scenario6 = feature.addScenario("Check that no Activity entries exist for PM");

scenario6.Given("I am in PM with contact B", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.PMisInitialized();
    
});

scenario6.When("I receive a message in PM", function () {
    setApplicationContext(client2);
    snooze(3);
    this.scenario.application.receiveMessage();
    
});

scenario6.And("I go to Activity", function () {
    setApplicationContext(client1);
    this.scenario.application.pressActivity();
    
});

scenario6.Then("no entries are generated for PM", function () {
    this.scenario.application.noActivityPM();
    snooze(5);
    this.scenario.application.quitMac();
    setApplicationContext(client2)
    this.scenario.application.Quit();
});

function main() {
   feature.execute();
}
