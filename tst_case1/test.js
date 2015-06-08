function main() {
    startApplication("WowApp -noupdate");
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 176, 2, 0, Qt.LeftButton);
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 149, 9, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
    doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 119, 18, 0, Qt.LeftButton);
    
    {container=':listView.delegateLoader_Loader_8' id='itemContent' radius='0' type='Rectangle' unnamed='1' visible='true'}
    {container=':listView.delegateLoader_Loader_8' id='nameText' text='cata100 ionut100' type='Text' unnamed='1' visible='true'}
}

