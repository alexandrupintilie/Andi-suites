function main() {
    startApplication("WowApp -noupdate");
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 82, 9, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 114, 29, 0, Qt.LeftButton);
    mouseClick(waitForObject(":plcata2001 a.Accept_Text"), 38, 7, Qt.LeftButton);
}

