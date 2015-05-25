source(findFile("scripts", "Feature.js"));

var feature = new Feature("../tst_smoke/smoke.feature");
source(findFile("scripts", "Application_smoke.js"));

var client1 = startApplication("WowApp -noupdate", "172.17.4.74", 4322);
var client2 = startApplication("WowApp -noupdate");
var logFile = new String ( "C:\\Users\\ioan.enescu\\AppData\\Local\\WowApp\\WowApp\\logs\\woowtrace.log" );

// Scenario 1
var scenario1 = feature.addScenario("Login in application with valid credentials");

scenario1.Given("I start the application", function () {
    this.scenario.application = new Application();
});

scenario1.When("I enter valid credentials", function () {
    setApplicationContext(client2);
    this.scenario.application.enterCredentials("pl.lv.roster10","123456");
});

scenario1.And("I press sign in", function () {
    this.scenario.application.pressSignIn();
    });

scenario1.Then("I login in the application", function () {
    test.compare(this.scenario.application.loginWasSuccesfull(),true);
    this.scenario.application.signOut();
});

// Scenario 2
var scenario2 = feature.addScenario("Inserting an incorrect password");

scenario2.Given("I start the application", function () {
    this.scenario.application = new Application();
});

scenario2.And("I enter an incorrect password", function () {
    this.scenario.application.enterCredentials("pl.lv.roster10","1234567");
});

scenario2.When("I press sign in", function () {
    this.scenario.application.pressSignIn();
});

scenario2.Then("I receive error", function () {
    test.compare(this.scenario.application.badLogin(), true);
});

// Scenario 3
var scenario3 = feature.addScenario("Sign out of the application");

scenario3.Given("I start the application", function () {
    this.scenario.application = new Application();
});

scenario3.And("I enter credentials and press sign in", function () {
    this.scenario.application.enterCredentials("pl.lv.roster10","123456");
    this.scenario.application.pressSignIn();
});

scenario3.And("I login in the application", function () {
    this.scenario.application.menuBar();
});

scenario3.When("I press the Sign out button", function () {
    this.scenario.application.pressSignOut();
});

scenario3.Then("I am returned to the login screen", function () {
    test.compare(this.scenario.application.Logo(), true);
});

// Scenario 4
var scenario4 = feature.addScenario("Add a contact to the roster");

scenario4.Given("I am in the roster", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.enterCredentials("pl.lv.roster13","123456");
    this.scenario.application.pressSignIn();
    setApplicationContext(client2);
    this.scenario.application.enterCredentials("pl.lv.roster12","123456");
    this.scenario.application.pressSignIn();
});

scenario4.And("I search for a contact on WowApp", function () {
    setApplicationContext(client1);
    this.scenario.application.searchWowApp();
});

scenario4.And("I send a friend request", function () {
    setApplicationContext(client1);
    this.scenario.application.sendFriendRequest();
});

scenario4.When("the contact accepts the friend request", function () {
    setApplicationContext(client2);
    this.scenario.application.acceptFriendRequest();
});

scenario4.Then("the user is added to the roster", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.isInRoster("roster12 roster12"), true);
});

// Scenario 5
var scenario5 = feature.addScenario("Remove a contact from the roster");

scenario5.Given("I am in the roster", function () {
    this.scenario.application = new Application();
});

scenario5.And("I select for a contact from the roster", function () {
    setApplicationContext(client1);
    this.scenario.application.removeNewContactFromRoster("roster12 roster12");
});

scenario5.When("I select remove contact from the right click menu", function () {
    setApplicationContext(client2);
    this.scenario.application.removeNewContactFromRoster("roster13 roster13");
});

scenario5.Then("the contact is removed from the roster", function () {
    test.compare(this.scenario.application.isInRoster("roster12 roster12"), false);
    setApplicationContext(client2);
    this.scenario.application.signOut();
    setApplicationContext(client1);
    this.scenario.application.signOutMac();
 });

//Scenario 6
var scenario6 = feature.addScenario("Delete entire conversation from single chat");

scenario6.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.enterCredentials("pl.lv.roster10","123456");
    this.scenario.application.pressSignIn();
    this.scenario.application.openChat("roster2 roster2");
    setApplicationContext(client2);
    this.scenario.application.enterCredentials("pl.lv.roster2","123456");
    this.scenario.application.pressSignIn();
    this.scenario.application.openChat("roster 10 roster 10");
});

scenario6.And("I open the conversation menu", function () {
    setApplicationContext(client1);
    this.scenario.application.openConversationMenuMac();
    setApplicationContext(client2);
    this.scenario.application.openConversationMenuWin();
});

scenario6.When("I select Delete entire conversation", function () {
    setApplicationContext(client1);
    this.scenario.application.clickDelete();
    setApplicationContext(client2);
    this.scenario.application.clickDelete();
});

scenario6.Then("the history from the chat window is deleted", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.shareContactReceived(), false);  
    setApplicationContext(client2);
    test.compare(this.scenario.application.shareContactReceived(), false); 
});

// Scenario 7
var scenario7 = feature.addScenario("Message sent is received by contact");

    scenario7.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.openChat("roster2 roster2");
    setApplicationContext(client2);
    this.scenario.application.openChat("roster 10 roster 10");
});

scenario7.When("I type a message", function () {
    setApplicationContext(client1);
    this.scenario.application.typeMessageToContact();
});

scenario7.And("I send the message", function () {
    this.scenario.application.sendMessage();
});

scenario7.Then("the message is received by the contact", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceived();
    this.scenario.application.succesfull();
});

//Scenario 8
var scenario8 = feature.addScenario("Edited message is received by contact");

    scenario8.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
});

scenario8.And("I type a message and I send the message", function () {
    setApplicationContext(client1);
    this.scenario.application.sendMessageEdit();
});
    
scenario8.When("I edit the message", function () {
    setApplicationContext(client1);
    this.scenario.application.editMessage();
});

scenario8.Then("the message will appear edited for the contact also", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceived();
    this.scenario.application.succesfullEdit();
    this.scenario.application.searchingEditedMessage();
});

//Scenario 9
var scenario9 = feature.addScenario("Remove message from single chat");

    scenario9.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
});

scenario9.And("I type a message and I send the message", function () {
    setApplicationContext(client1);
    this.scenario.application.sendMessageRemove();
});
    
scenario9.When("I remove the message", function () {
    setApplicationContext(client1);
    this.scenario.application.removeMessage();
});

scenario9.Then("the message will be removed from the chat window", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceived();
    this.scenario.application.succesfullRemove();
});

// Scenario 10
var scenario10 = feature.addScenario("All emoticons sent are received by contact");

scenario10.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
});

scenario10.When("I select and send a emoticon", function () {
    setApplicationContext(client1);
    this.scenario.application.openChat("roster2 roster2");
    setApplicationContext(client2);
    this.scenario.application.openChat("roster 10 roster 10");
});

scenario10.Then("the emoticon is received by the contact", function () {
    setApplicationContext(client1);
    this.scenario.application.selectEmoticon();
});

// Scenario 11
var scenario11 = feature.addScenario("All stickers sent are received by contact");

scenario11.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
    setApplicationContext(client2);
    this.scenario.application.openChat("roster 10 roster 10");
});

scenario11.When("I select and sticker a emoticon", function () {
    setApplicationContext(client1);
    this.scenario.application.openChat("roster2 roster2");
});

scenario11.Then("the sticker is received by the contact", function () {
    this.scenario.application.selectStickers();
    setApplicationContext(client1);
    this.scenario.application.closeChat("roster2 roster2"); 
});

// Scenario 12
var scenario12 = feature.addScenario("Start p2p call ");

scenario12.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
    setApplicationContext(client2);
    this.scenario.application.openChat("roster 10 roster 10");
    setApplicationContext(client1);
    this.scenario.application.openChat("roster2 roster2");
});

scenario12.And("I press the Call button", function () {
    setApplicationContext(client1);
    this.scenario.application.pressCallButton();
});

scenario12.When("the contact answers the call", function () {
    setApplicationContext(client2);
    this.scenario.application.pressAnswerButton();
});

scenario12.Then("the p2p call will start", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.callStarts(), true);
    this.scenario.application.endCall();
});

// Scenario 13
var scenario13 = feature.addScenario("Create group chat ");

scenario13.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
});

scenario13.And("I press the Add contacts button", function () {
    setApplicationContext(client2);
    this.scenario.application.pressAddButton();
});

scenario13.And("I select a contact from the picker", function () {
    setApplicationContext(client2);
    this.scenario.application.selectPicker();    
});

scenario13.When("I press the Add to conference button", function () {
    setApplicationContext(client2);
    this.scenario.application.createConf();      
});

scenario13.Then("the group chat is created", function () {
    setApplicationContext(client2);
    test.compare(this.scenario.application.groupChat(), true); 
});

// Scenario 14
var scenario14 = feature.addScenario("Create conference call ");

scenario14.Given("I open a group chat window ", function () {
    this.scenario.application = new Application();
});

scenario14.And("I press the Free call button", function () {
    setApplicationContext(client2);
    this.scenario.application.pressConfCallButton();    
});

scenario14.When("the participants answer the call ", function () {
    setApplicationContext(client1);
    this.scenario.application.answerConfCall(); 
});

scenario14.Then("the conference call is started", function () {
    setApplicationContext(client2);
    test.compare(this.scenario.application.confCallStarts(), true);
    this.scenario.application.endConfCall();     
});

//Scenario 15
var scenario15 = feature.addScenario("Send message in group chat");

scenario15.Given("I open a group chat window ", function () {
    this.scenario.application = new Application();
});

scenario15.When("I type a message", function () {
    setApplicationContext(client1);
    this.scenario.application.typeMessageToParticipants();
});

scenario15.And("I send the message", function () {
    this.scenario.application.sendMessageToParticipants();   
});

scenario15.Then("the message is received by the participants", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceivedInGC();
    this.scenario.application.succesfullGC();   
});

//Scenario 16
var scenario16 = feature.addScenario("Edit message in group chat");

scenario16.Given("I open a group chat window ", function () {
    this.scenario.application = new Application();
});

scenario16.And("I type a message and I send the message", function () {
    setApplicationContext(client1);
    this.scenario.application.typeMessageToParticipantsEdit();
});

scenario16.When("I edit the message", function () {
    this.scenario.application.editMessageToParticipants();  
});

scenario16.Then("the message will appear edited for the participants also", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceivedInGC();    
    this.scenario.application.succesfullEditGC();
    this.scenario.application.searchingEditedMessageGC(); 
});

//Scenario 17
var scenario17 = feature.addScenario("Remove message in group chat");

scenario17.Given("I open a group chat window ", function () {
    this.scenario.application = new Application();
});

scenario17.And("I type a message and I send the message", function () {
    setApplicationContext(client1);
    this.scenario.application.typeMessageToParticipantsRemove();
});

scenario17.When("I remove the message", function () {
    this.scenario.application.removeMessageFromGroupChat();  
});

scenario17.Then("the message will be removed from the group chat", function () {
    setApplicationContext(client2);
    this.scenario.application.messageReceivedInGC(); 
    this.scenario.application.succesfullRemoveGC();
});

//Scenario 18
var scenario18 = feature.addScenario("All emoticons sent in GC are received by participants");

scenario18.Given("I open a group chat", function () {
    this.scenario.application = new Application();
});

scenario18.When("I select and send a emoticon", function () {
});

scenario18.Then("the emoticon is received by the participants", function () {
    this.scenario.application.selectEmoticonGC(); 
});

//Scenario 19
var scenario19 = feature.addScenario("All stickers sent are received by participant");

scenario19.Given("I open a group chat", function () {
    this.scenario.application = new Application();
});

scenario19.When("I select and send a sticker", function () {
});

scenario19.Then("the sticker is received by the contact", function () {
    this.scenario.application.selectStickersGC();
});

//Scenario 20
var scenario20 = feature.addScenario("Send file in GC");

scenario20.Given("I open a group chat", function () {
    this.scenario.application = new Application();
});

scenario20.When("I send a file in the GC", function () {
    setApplicationContext(client2);
    this.scenario.application.dropDownGC(); 
    this.scenario.application.sendFileWindows(); 
});

scenario20.Then("the file is received by the participant", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.fileReceivedGC(), true);
});

//Scenario 21
var scenario21 = feature.addScenario("Share contact in GC");

scenario21.Given("I open a group chat", function () {
    this.scenario.application = new Application();
});

scenario21.When("I a share contact in the GC", function () {
    setApplicationContext(client2);
    this.scenario.application.shareContactGC(); 
});

scenario21.Then("the shared contact is received by the participants", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.shareContactReceivedGC(), true);
    this.scenario.application.closeChat("roster12 roster12, roster2 roster2"); 
});

// Scenario 22
var scenario22 = feature.addScenario("Start paid call ");

scenario22.Given("I am in the roster", function () {
    this.scenario.application = new Application();
});

scenario22.And("I select the Keypad tab", function () {
    setApplicationContext(client1);
    this.scenario.application.keyPad(); 
});

scenario22.And("I enter valid phone number", function () {
    setApplicationContext(client1);
    this.scenario.application.enterPhonenumber();
});

scenario22.When("I press the Call button", function () {
    setApplicationContext(client1);
    this.scenario.application.keyPadCall();
});

scenario22.Then("the paid call will start", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.paidCallStarts(), true);
    this.scenario.application.endPaidCall();   
});

// Scenario 23
var scenario23 = feature.addScenario("Send file to contact");

scenario23.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
    setApplicationContext(client1);
    this.scenario.application.inRoster();
    this.scenario.application.openChat("roster2 roster2");
    setApplicationContext(client2);
    this.scenario.application.openChat("roster 10 roster 10");
});

scenario23.When("I send a file to the contact", function () {
    this.scenario.application.dropDown();   
    this.scenario.application.sendFileWindows();  
});

scenario23.Then("the file is received by the contact", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.fileReceived(), true);
});

// Scenario 24
var scenario24 = feature.addScenario("Share contact to friend");

scenario24.Given("I open a chat window with an online contact", function () {
    this.scenario.application = new Application();
});

scenario24.When("I send a share contact", function () {
    setApplicationContext(client2);
    this.scenario.application.shareContact();
});

scenario24.Then("the share contact is received by the contact", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.shareContactReceived(), true); 
    this.scenario.application.closeChat("roster2 roster2");
});

//Scenario 25
var scenario25 = feature.addScenario("Change avatar and reset profile picture");

scenario25.Given("I am in the roster", function () {
    this.scenario.application = new Application();
});

scenario25.And("I open the change profile picture dialog", function () {
    setApplicationContext(client2);
    this.scenario.application.openAvatarWindowBrowse();
});

scenario25.When("I change the avatar", function () {
    setApplicationContext(client2);    
    this.scenario.application.searchForAvatar();
    this.scenario.application.saveAvatar();
});

scenario25.Then("the contacts will see the new avatar ", function () {
    setApplicationContext(client1);
    test.vp("ContactsAvatar");
    setApplicationContext(client2);
    this.scenario.application.openAvatarWindow();
    this.scenario.application.resetAvatar();
});

//Scenario 26
var scenario26 = feature.addScenario("Change first and last name in My profile");

scenario26.Given("I start the application", function () {
    this.scenario.application = new Application();
});

scenario26.And("I open Profile window", function () {
    setApplicationContext(client2);
    this.scenario.application.openProfile();  
});

scenario26.When("I change first and last name in profile", function () {
    setApplicationContext(client2);
    this.scenario.application.changeFirstLastName();   
});

scenario26.Then("the contacts will see the new first and last name in the Contact profile", function () {
    setApplicationContext(client1);
    this.scenario.application.openChatWindow("Jenkins Hudson");
    this.scenario.application.openContextMenu("Jenkins Hudson");
    this.scenario.application.viewProfile();
    test.compare(this.scenario.application.contactProfileFirstLast(), true);
    setApplicationContext(client2);
    this.scenario.application.resetFirstLastName();
    this.scenario.application.closeProfile();
});

//Scenario 27
var scenario27 = feature.addScenario("Add status message in My profile");

scenario27.Given("I am in the roster", function () {
    this.scenario.application = new Application();
});

scenario27.And("I open Profile window", function () {
    setApplicationContext(client2);
    this.scenario.application.openProfile();
});

scenario27.When("I add a status message", function () {
    setApplicationContext(client2);
    this.scenario.application.addStatusMessage();
    test.compare(this.scenario.application.statusUpdateProfile(), true);
});

scenario27.Then("the contact will see the status message in the Contact profile", function () {
    setApplicationContext(client1);
    test.compare(this.scenario.application.statusUpdateContactProfile(), true);
    this.scenario.application.closeContacProfile();
    this.scenario.application.dismissEarningsOverlay();
    this.scenario.application.quitMac();
    setApplicationContext(client2);
    this.scenario.application.resetStatusMessage();  
    this.scenario.application.closeProfile();
    this.scenario.application.Quit();
});

function main() {
   feature.execute();
}
