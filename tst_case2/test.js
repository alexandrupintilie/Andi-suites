function main() {
    startApplication("WowApp -noupdate");
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 142, 21, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 130, 17, 0, Qt.LeftButton);
}

