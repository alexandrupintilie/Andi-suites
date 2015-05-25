source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_private/private.feature");

var client1 = startApplication("WowApp -noupdate");
var client2 = startApplication("WowApp -noupdate", "10.13.13.173", 4322);


// Scenario 1
var scenario1 = feature.addScenario("Send PM request to a contact");

scenario1.Given("I am logged in with account A", function () {
    this.scenario.application = new Application();
    setApplicationContext(client2);
    this.scenario.application.enterCredentialsPM2("pl.cata2001", "forcet2001");
    setApplicationContext(client1);
    this.scenario.application.enterCredentialsPM1("pl.cata2000", "forcet2000");
    this.scenario.application.loginWasSuccessfull();
    snooze(3);
 
});

scenario1.When("I open a single chat window with contact B", function () {
    setApplicationContext(client1);
    this.scenario.application.openChatPM();
    snooze(5);
    this.scenario.application.openChatPMwasSuccessfull();
    
});

scenario1.And("I press the PM button", function () {
    this.scenario.application.clickPMbutton();
    
});

scenario1.And("a PM request is sent", function () {
    this.scenario.application.clickPMbuttonwasSuccessfull();
    snooze(3);
    
});

scenario1.Then("the PM request is received by contact B", function () {
    setApplicationContext(client2);
    this.scenario.application.PMinvitationIsReceived();
    snooze(5);
    
});

// Scenario 2
var scenario2 = feature.addScenario("Cancel a PM request");

scenario2.Given("the PM pop-up is available on screen", function () {
    this.scenario.application = new Application();
    setApplicationContext(client2);
    this.scenario.application.PMinvitationIsReceived();
    
});

scenario2.When("I click Cancel", function () {
    this.scenario.application.cancelPMrequest();
    snooze(4);
    
});

scenario2.Then("the invitation is dismissed for both users", function () {
    this.scenario.application.PMinvitationIsCanceled();
    snooze(4);
    setApplicationContext(client2);
    this.scenario.application.PMinvitationIsCanceledB();
    
});

// Scenario 3
var scenario3 = feature.addScenario("Accept a PM request");

scenario3.Given("I am logged in with account A", function () {
    this.scenario.application = new Application();
    this.scenario.application.inRosterCheck();
    
});

scenario3.When("I receive a PM request pop-up from contact B", function () {
    setApplicationContext(client2);
    this.scenario.application.BopensChat();
    snooze(4);
    this.scenario.application.receivePMinvite();
    setApplicationContext(client1);
    this.scenario.application.PMinvitationIsReceivedA(); 

    
});

scenario3.And("I click Accept", function () {
    snooze(4);
    this.scenario.application.acceptMac();
    
});

scenario3.Then("the PM is initialized", function () {
    this.scenario.application.PMisInitialized();
    
});

// Scenario 4
var scenario4 = feature.addScenario("Exit Private mode");

scenario4.Given("I am in Private mode with contact B", function () {
    this.scenario.application = new Application();
    this.scenario.application.PMisInitialized();
    
});

scenario4.When("I click the PM button", function () {
    this.scenario.application.exitPMbutton();
    snooze(3);
    
});

scenario4.And("the pop-up appears", function () {
    this.scenario.application.exitPMdialog();
    
});

scenario4.And("I click OK", function () {
    this.scenario.application.confirmExitPMbutton();
    snooze(4);
    
});

scenario4.Then("I exit Private mode", function () {
    this.scenario.application.exitPMCompare();
    this.scenario.application.quitMac();
    setApplicationContext(client2)
    this.scenario.application.Quit();
    
});

function main() {
   feature.execute();
}
