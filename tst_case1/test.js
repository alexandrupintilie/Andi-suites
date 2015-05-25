function main() {
    startApplication("WowApp -noupdate");
    mouseClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), 192, 20, 0, Qt.LeftButton);
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "forcet2000");
    type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_2"), "<Return>");
    mouseClick(waitForObject(":plcata2001 a.acceptButton_Button"), 36, 6, Qt.LeftButton);
  
    snooze(3);
    
    try {
      var retValue;

      findObject(":plcata2001 a.ctDockButton_IconButton_3");
      findObject(":plcata2001 a.ctDockButton_IconButton_2");
      findObject(":plcata2001 a.ctDockButton_IconButton_1");
      findObject(":plcata2001 a.ctDockButton_IconButton");
      retValue=true;
  } catch (err) {
      retValue=false;
 }


  snooze(3);
  
  do {
      mouseClick("{container=':plcata2001 a_ChatWindow' objectName='ctDockButton' type='IconButton' visible='true'}");
}
    while (retValue == true);
  
  snooze(3);

}

    



    

