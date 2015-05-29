function main() {
    startApplication("WowApp -noupdate");
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 178, 20, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000", 156, 20, 0, Qt.LeftButton);
    mouseClick(waitForObject(":pl cata1000.Go Private_IconButton"), 59, 18, Qt.LeftButton);
    mouseClick(waitForObject(":pl cata1000.OK_Text"), 14, 9, Qt.LeftButton);
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 178, 20, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000", 156, 20, 0, Qt.LeftButton);
    mouseClick(waitForObject(":pl cata1000.Go Private_IconButton"), 59, 18, Qt.LeftButton);
    mouseClick(waitForObject(":pl cata1000.OK_Text"), 14, 9, Qt.LeftButton);
}

