
function main()
{
    startApplication("WowApp -noupdate");
    
    clickButton(waitForObject(":WowApp.Activity_TabRadioButton"));
    snooze(2)
    openItemContextMenu(waitForObject(":activityScrollArea.activityTreeView_ActivityTreeView"), "TODAY.B", 81, 11, 0);
    activateItem(waitForObjectItem(":WowApp_QMenu", "Delete entire conversation"));
    sendEvent("QMoveEvent", waitForObject(":Delete entire conversation_WoowMessageBox"), 531, 291, 861, 408);
    clickButton(waitForObject(":Delete entire conversation.Delete_CustomFocusButton"));
    mouseClick(waitForObject(":cvtaTextEditor.edit_TextEdit"), 66, 28, Qt.LeftButton);
    type(waitForObject(":cvtaTextEditor.edit_TextEdit"), "test");
    type(waitForObject(":cvtaTextEditor.edit_TextEdit"), "<Return>");
    snooze(2.0);
    closeWindow(":B_ChatWindow");
    snooze(3);
    nativeMouseClick(140,10,MouseButton.LeftButton);
    snooze(2);
    nativeMouseClick(140,130,MouseButton.LeftButton);
    snooze(2);
    mouseClick(waitForObject("{text='Sign Out' type='CustomFocusButton' unnamed='1' visible='1' window=':WoowMessageBox_WoowMessageBox'}"));

}