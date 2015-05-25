source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_chatgender/chatgender.feature");

// Scenario 1
var scenario1 = feature.addScenario("A sends C to B from main app window");

scenario1.Given("I am logged in with account A", function () {
    test.compare(this.scenario.application.LoginWasSuccesfull(), true);
    this.scenario.application.Quit();
//    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
//    if (":LoginWasSuccesfull()", true);
//    // do nothing
//    else {
//        alert("not logged in")
//    }
});

scenario1.And("I am a member of a GroupChat B", function () {
    test.log("Implement me!");
});

scenario1.When("I send a contact card to the GroupChat from main app window", function () {
    test.log("Implement me!");
});

scenario1.Then("the gender should be displayed correctly in the contact card for both sender and receiver", function () {
    test.log("Implement me!");
});

function main() {
   feature.execute();
}
