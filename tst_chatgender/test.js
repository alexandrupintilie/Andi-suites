source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_chatgender/chatgender.feature");

// Scenario 1
var scenario1 = feature.addScenario("A sends C to B from main app window");

scenario1.Given("I start the application", function () {
    this.scenario.application = new Application();
    this.scenario.application.launch();
    
});

scenario1.And("I enter credentials", function () {
    this.scenario.application.enterCredentials("wooow6","123456");
    
});

scenario1.And("I am logged in with account A", function () {
    test.compare(this.scenario.application.loginWasSuccessfull(), true);
    
});

scenario1.And("I am a member of a GroupChat B", function () {
    this.scenario.application.pressActivity();
//    de refacut
//    this.scenario.application.doubleclickGCB();
//    test.compare(this.scenario.application.visibleGCB("TODAY.B"), true);

});

scenario1.When("I send a contact card to the GroupChat", function () {
    this.scenario.application.sendContactInfo("wooow22 a");

});

scenario1.Then("Then the shared contact is the one i chose", function () {
    test.compare(this.scenario.application.compareOne(), true);
    snooze(2.7);
    this.scenario.application.closeChat();
    this.scenario.application.inRoster();
    
});

function main() {
   feature.execute();
}
