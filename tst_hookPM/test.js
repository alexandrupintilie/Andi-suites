source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_private/private.feature");


snooze(3);


function main()
{   
    var client2 = startApplication("WowApp -noupdate", "10.13.13.173", 4322);

    var client1 = startApplication("WowApp -noupdate");
    
    setApplicationContext(client2);
    snooze(5);
    activateItem(":WowApp.menubar_WowMenuBar", "WowApp");
    activateItem(":WowApp.WowApp_QMenu", "Sign Out");
    clickButton(waitForObject(":WoowMessageBox.Sign Out_CustomFocusButton"));
    setApplicationContext(client1);
    nativeMouseClick(1350,68,MouseButton.LeftButton);
    snooze(2);
    nativeMouseClick(140,10,MouseButton.LeftButton);
    snooze(2);
    nativeMouseClick(140,130,MouseButton.LeftButton);
    snooze(2);
    mouseClick(waitForObject("{text='Sign Out' type='CustomFocusButton' unnamed='1' visible='1' window=':WoowMessageBox_WoowMessageBox'}"));
    snooze(2);

}