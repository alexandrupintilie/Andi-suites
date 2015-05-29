
function main() {
    startApplication("WowApp -noupdate");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "<Backspace>");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "pl.cata2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Tab>");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "forcet2000");
    clickButton(waitForObject(":contentStackedWidget.Sign in_CustomFocusButton"));
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 122, 34, 0, Qt.LeftButton);
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
    clickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 122, 34, 0, Qt.LeftButton);
    snooze(3);
    
      var button = waitForObject("{container=':plcata2001 a_ChatWindow' objectName='ctPlusButton' type='IconButton' visible='true'}");
    mouseClick(button, 22, 12, Qt.LeftButton);
    snooze(2);
    button.createConferenceAction();
    snooze(3);
    waitForObjectItem(":Add to Conference.availableContactsList_ContactListView", "plcata2002 a");
    
      var toggle = clickItem(":Add to Conference.availableContactsList_ContactListView", "plcata2002 a", 12, 27, 0, Qt.LeftButton);

    try {
      var retValue
        toggle.waitForObject("{container=':Add to Conference.availableContactsList_ContactListView' text='plcata2002 a' type='QModelIndex'}");
        retValue=true;
    } catch(err) {
        retValue=false;
    }
      do {
        mouseClick(waitForObject(":Add to Conference.Add to Conference_CustomFocusButton"));
    }
      while (retValue == true);      
    
}

