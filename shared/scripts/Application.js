function generateRandomString()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var textString = new String; 
textString = generateRandomString();


function Application() {
    this.launch = function() {
        snooze(3);
        startApplication("WowApp -noupdate");
       


    }
    
//    //LOGIN
//    this.enterCredentials = function(nume,parola) {
//        doubleClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), 107, 19, 0, Qt.LeftButton);
//        snooze(3);
//        type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "<Backspace>");
//        type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "wooow6");
//        type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Tab>");
//        type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "123456");
//        clickButton(waitForObject(":contentStackedWidget.Sign in_CustomFocusButton"));
//    }
    
    //LOGIN WAS SUCCESSFULL
    
    this.loginWasSuccessfull = function() {
        try {
            waitForObject(":rosterScrollArea.rosterTreeView_RosterTreeView");
            test.pass("Login was successfull");
        } catch (err) {
            test.fail("Login failed");
        }
    }
    
    //IN ROSTER
    this.inRoster = function() {
        snooze(2);
        clickButton(waitForObject("{name='contactsRadioButton' text='Contacts' type='TabRadioButton' visible='1' window=':WowApp_RosterWindow'}"));
    }
      
    //IN ROSTER CHECK (GIVEN I AM LOGGED IN)
    this.inRosterCheck = function() {
        try {
            waitForObject("{name='contactsRadioButton' text='Contacts' type='TabRadioButton' visible='1' window=':WowApp_RosterWindow'}");
            test.pass("You are in Roster")
        } catch (err) {
            test.fail("You are not in Roster")
        }
    }
    
//    //IN ROSTER CHECK (GIVEN I AM LOGGED IN) - OLD CHECK
//    this.inRosterCheck = function() {
//        var retValue;
//        try {
//            waitForObject("{name='contactsRadioButton' text='Contacts' type='TabRadioButton' visible='1' window=':WowApp_RosterWindow'}");
//            retValue=true;
//        } catch (err) {
//            retValue=false;
//        }
//        return retValue;
//    }
    
    //ENTER ACTIVITY
    
    this.pressActivity = function() {
        clickButton(waitForObject(":WowApp.Activity_TabRadioButton"));
    }
        
//    //OPEN GCB
//    this.doubleclickGCB = function(nume) {
//        snooze(2);
//        waitForObjectItem("{column='0' container=':activityTreeView.TODAY_QModelIndex' text='B' type='QModelIndex'}", "TODAY.B");
//        clickItem(":activityScrollArea.activityTreeView_ActivityTreeView", "TODAY.B", 135, 15, 0, Qt.LeftButton);
//        waitForObjectItem("{column='0' container=':activityTreeView.TODAY_QModelIndex' text='B' type='QModelIndex'}", "TODAY.B");
//        doubleClickItem(":activityScrollArea.activityTreeView_ActivityTreeView", "TODAY.B", 135, 15, 0, Qt.LeftButton);
//    }
//    
//    //CHECK FOR GCB
//    this.visibleGCB = function() {
//        var retValue;
//        try {
//            waitForObject("{title='B' type='ChatWindow' unnamed='1' visible='true'}");
//            retValue=true;
//        } catch (err) {
//            retValue=false;
//        }
//        return retValue;
//    }
 
    //SEND CONTACT INFO
    
    this.sendContactInfo = function(nume) {
        mouseClick(waitForObject(":B.ctPlusButton_IconButton"), 21, 16, Qt.LeftButton);
        nativeMouseClick(990,240,MouseButton.LeftButton);
        snooze(2);
        waitForObjectItem(":Choose Contact.contactsList_ContactListView", "wooow22 a");
        clickItem(":Choose Contact.contactsList_ContactListView", "wooow22 a", 92, 17, 0, Qt.LeftButton);
        clickButton(waitForObject(":Choose Contact.Send_CustomFocusButton"));
        snooze(2);
    
    }
    
//    //CHECK IF CONTACT IS VISIBLE
//    
//    this.compareOne = function() {
//        var retValue;
//        try {
//            waitFor("object.exists(':delegateLoader.wooow22 a_Text_2')", 20000);
//            retValue=true;
//        } catch (err) {
//            retValue=false;
//        }
//        return retValue;
//     }
//    
//    //CLOSE CHAT WINDOW B
//     this.closeChat = function() {
//         waitForObject("{title='B' type='ChatWindow' unnamed='1' visible='true'}")
//         type(waitForObject("{title='B' type='ChatWindow' unnamed='1' visible='true'}"), "<Esc>");
//            
//     }
     
     //PRE-LIVE PM FUNCTIONS
     //LOGIN
     
     this.enterCredentialsPM1 = function(nume,parola) {
         doubleClick(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), 107, 19, 0, Qt.LeftButton);
         snooze(3);
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "<Backspace>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "pl.cata2000");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Tab>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "forcet2000");
         clickButton(waitForObject(":contentStackedWidget.Sign in_CustomFocusButton"));
         
     }
     
     this.enterCredentialsPM2 = function(nume,parola) {
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "<Backspace>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "pl.cata2001");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Tab>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "forcet2001");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Return>");
     }
     
     this.enterCredentialsPM3 = function(nume,parola) {
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "<Backspace>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit_3"), "pl.cata2002");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Tab>");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "forcet2002");
         type(waitForObject(":contentStackedWidget.fieldLineEdit_QLineEdit"), "<Return>");
     }
     
     //OPEN CHAT WINDOW WITH CONTACT B
     this.openChatPM = function() {
         waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a");
         doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2001 a", 124, 26, 0, Qt.LeftButton);
        }
  

     //CHAT WINDOW OPENED SUCCESSFULLY
        
        this.openChatPMwasSuccessfull = function() {
            try {
                waitForObject("{container=':plcata2001 a_ChatWindow' objectName='cvtaTextEditor' type='TextEditor' visible='true'}");
                test.pass("Chat window opened successfully")
            } catch (err) {
                test.fail("Chat window failed to open")
            }
        }
        
     //SEND PM INVITATION TO CONTACT B
     
        this.clickPMbutton = function() {
            mouseClick(waitForObject(":plcata2001 a.Go Private_IconButton"), 39, 19, Qt.LeftButton);
        }
        

     //CHECK PM POP-UP
     
        this.clickPMbuttonwasSuccessfull = function() {

            try {
                waitForObject("{container=':plcata2001 a_ChatWindow' id='messageBox' radius='0' type='OverlayMessageBox' unnamed='1' visible='true'}");
                test.pass("Button works")
            } catch (err) {
                test.fail("Button does not work")
            }
        }
        

     //CHECK THAT PM INVITATION IS RECEIVED
        
        this.PMinvitationIsReceived = function() {
            try {
                waitForObject("{container=':plcata2000 a_ChatWindow' id='dialogBox' radius='4' type='Rectangle' unnamed='1' visible='true'}");
                test.pass("PM pop-up received by contact")
            } catch (err) {
                test.fail("PM pop-up not received by contact")
            }
        }
 

     //CHECK THAT PM INVITATION IS RECEIVED FROM USER A
        
        this.PMinvitationIsReceivedA = function() {
            try {
                waitForObject("{container=':plcata2001 a_ChatWindow' id='dialogBox' radius='4' type='Rectangle' unnamed='1' visible='true'}");
                test.pass("PM pop-up on screen")
            } catch (err) {
                test.fail("No PM pop-up found")
            }
        }
        
     //CANCEL PM REQUEST FROM SENDER
        
        this.cancelPMrequest = function() {
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' id='cancelButton' radius='4' type='Button' unnamed='1' visible='true'}"));
        }
        
     //CHECK IF PM REQUEST IS CANCELED
        
        this.PMinvitationIsCanceled = function() {
            try {
                findObject("{container=':plcata2001 a_ChatWindow' id='cancelButton' radius='4' type='Button' unnamed='1' visible='true'}");
                test.fail("PM invitation still active")
            } catch (err) {
                test.pass("PM invitation canceled successfully")
            }
        }
        

     //CHECK IF PM REQUEST IS CANCELED FOR B
        
        this.PMinvitationIsCanceledB = function() {
            try {
                findObject("{container=':plcata2000 a_ChatWindow' id='cancelButton' radius='4' type='Button' unnamed='1' visible='true'}");
                test.fail("PM invitation still active")
            } catch (err) {
                test.pass("PM invitation canceled successfully")
            }
        }
        
        
     //CONTACT B OPENS CHAT WINDOW WITH A
        this.BopensChat = function() {
            waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2000 a");
            doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2000 a", 82, 17, 0, Qt.LeftButton);
           }
        
     //CONTACT B SENDS PM INVITE
         this.receivePMinvite = function() {  
             mouseClick(waitForObject(":plcata2000 a.Go Private_IconButton"), 47, 17, Qt.LeftButton);
             
         }
         
      //ACCEPT INVITE ON WIN (CONTACT B)
         this.acceptPMinviteWin = function() {
             mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}"));
           
         }
         
      //ACCEPT PM INVITE ON MAC
         this.acceptMac = function() {
             mouseClick(waitForObject("{container=':plcata2001 a_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}"));
            
         }
         

      //COMPARE PM IS INITIALIZED
         
        this.PMisInitialized = function() {
            try {
                waitForObject("{container=':plcata2001 a_ChatWindow' objectName='privateButton' text='Private is ON' type='IconButton' visible='true'}");
                test.pass("PM is initialized")
            } catch (err) {
                test.fail("PM failed to initialize")
            }

        }
        
     //EXIT PM BY CLICKING PM BUTTON
        this.exitPMbutton = function() {
            mouseClick(waitForObject("{container=':plcata2001 a_ChatWindow' objectName='privateButton' text='Private is ON' type='IconButton' visible='true'}")); 
        }
      

     //CHECK IF EXIT CONFIRMATION IS SHOWN
        
        this.exitPMdialog = function() {
            try {
                waitForObject("{container=':plcata2001 a_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}");
                test.pass("Exit confirmation shown")
            } catch (err) {
                test.fail("Exit confirmation not shown")
            }
        }
        
     //CONFIRM EXIT PM
        this.confirmExitPMbutton = function() {
            mouseClick(waitForObject("{container=':plcata2001 a_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}"));
        }
        
     //CHECK IF PM IS SUCCESSFULLY CLOSED
        this.exitPMCompare = function() {
            try {
                findObject("{title='plcata2001 a' type='ChatWindow' unnamed='1' visible='true'}");
                  test.fail("You did not exit PM")
            } catch (err) { 
                  test.pass("PM exited successfully");
            }
        }
        
     
     //SEND "test" MESSAGE TO CONTACT B IN PM
        this.sendMessageInPM = function() {
            mouseClick(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), 161, 23, Qt.LeftButton);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "test");
            snooze(3);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Return>");
     }
        
      //SEND "mesaj" MESSAGE TO CONTACT A IN PM
     this.receiveMessage = function() {
         mouseClick(waitForObject("{container=':plcata2000 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), 161, 23, Qt.LeftButton);
         type(waitForObject("{container=':plcata2000 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "mesaj");
         snooze(3);
         type(waitForObject("{container=':plcata2000 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Return>");
  }
        
      //SEND RANDOM MESSAGE TO CONTACT B IN PM
        this.sendAmessageInPM = function() {
            mouseClick(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), 161, 23, Qt.LeftButton);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), textString);
            snooze(3);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Return>");
  }
     
      
     //MESSAGE IS RECEIVED BY CONTACT B
        this.messageIsReceived = function() {
            type(waitForObject("{container=':plcata2000 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Ctrl+F>");
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"));
            type(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"), "test");
            type(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"), "<Return>");
        }
        
        //MESSAGE IS RECEIVED BY CONTACT B CHECK
        this.messageIsReceivedCheck = function() {
            var find = waitForObject("{container=':plcata2000 a_ChatWindow' id='messageLabel' type='TextEdit' unnamed='1' visible='true'}");
                snooze(2);
            if(find.selectedText == "test")
                {
                test.pass("The word was found and highlighted");
                }
            else
              {
              test.fail("Word was not found");
            }
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpCloseButton' type='IconButton' visible='true'}"), 11, 6, Qt.LeftButton);

    }

        //EDIT TEXT MESSAGE
        this.editMessage = function() {
            snooze(5);
            mouseClick(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), 15, 14, Qt.LeftButton);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Return>"); 
            snooze(2);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Up>");
            snooze(2);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Ctrl+A>");
            snooze(2);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Backspace>");
            snooze(2);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "edited");
            snooze(2);
            type(waitForObject("{container=':plcata2001 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Return>");     
         
        }
        
         //EDITED MESSAGE RECEIVED
        
        this.editMessageOK = function() {
            type(waitForObject("{container=':plcata2000 a.cvtaTextEditor_TextEditor' id='edit' type='TextEdit' unnamed='1' visible='true'}"), "<Ctrl+F>");
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"));
            type(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"), textString);
            type(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpTextField' type='TextField' visible='true'}"), "<Return>");
            
        }
        
    //EDITED MESSAGE IS RECEIVED BY CONTACT B CHECK
        
        this.editMessageCheck = function() {
            var find = waitForObject("{container=':plcata2000 a_ChatWindow' id='messageLabel' type='TextEdit' unnamed='1' visible='true'}");
                snooze(2);
            if(find.slectedText == textString)
                {
                test.fail("The word was found");
                }
            else
              {
              test.pass("Original word was not found");
            }     
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='ftpCloseButton' type='IconButton' visible='true'}"), 11, 6, Qt.LeftButton);
    }
        
    //DOCK PM WINDOW WTIH CONTACT B
    this.dockPM = function() {
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
        do {
          mouseClick("{container=':plcata2001 a_ChatWindow' objectName='ctDockButton' type='IconButton' visible='true'}");
      }
          while (retValue == true);
 }
    
    //CHECK IF PM WINDOW CAN BE DOCKED
    this.dockPMcheck = function() {
        try {
            waitForObject("{container=':WowApp.splitter_QSplitter' name='ChatButton' occurrence='2' type='ChatButton' visible='1' windowTitle='Form'}");
            test.pass("PM window docked")
        } catch (err) {
            test.fail("Failed to dock PM window")
        }
    }
    
    //OPEN SEND FILE WINDOW
    this.openSendFile = function() {   
        var button = waitForObject("{container=':plcata2001 a_ChatWindow' objectName='ctPlusButton' type='IconButton' visible='true'}");
        mouseClick(button, 22, 12, Qt.LeftButton);
        snooze(2);
        button.sendFileAction();
       // button.sendContactAction();
        snooze(2);
        //button.createConferenceAction();
    }
    
    //SEND FILE IN PM
    this.sendFileinPM = function() {  
            for(var j=0; j<1; j=j+1)
            {
                snooze(2);
                nativeType("<Command+Shift+g>");
                snooze(2);
                nativeType("/Users/alexandru/Pictures/tree");
                snooze(2);
                nativeType("<Return>");
                snooze(2);
                nativeType("<Command+A");
                snooze(2);
                nativeType("<Return>");
                snooze(2);
            }
        }
    
    //FILE RECEIVED BY CONTACT B CHECK
        this.fileReceivedCheck = function() {
            try {
            waitForObject("{container=':plcata2000 a_ChatWindow' objectName='cfdOpenLocationButton' radius='4' type='Button' visible='true'}");          
            test.pass("File received")
        } catch (err) {
            test.fail("File transfer failed")
        }
    }

    //OPEN FILE CHECK
    this.openFileCheck = function() {
        try {
            mouseClick(waitForObject("{container=':plcata2000 a_ChatWindow' objectName='cfdOpenButton' radius='4' type='Button' visible='true'}"));          
            test.pass("File opened by contact")
    } catch (err) {
            test.fail("File can't be opened")
    }
    snooze(2);
//  nativeType("<Esc>");
}
    
    //OPEN SEND CONTACT WINDOW
    this.openSendContact = function() {   
          var button = waitForObject("{container=':plcata2001 a_ChatWindow' objectName='ctPlusButton' type='IconButton' visible='true'}");
          mouseClick(button, 22, 12, Qt.LeftButton);
          snooze(2);
//        button.sendFileAction();
          button.sendContactAction();
          snooze(2);
        //button.createConferenceAction();
    }
  
    //SEND CONTACT
      this.sendContact = function() {
           waitForObjectItem(":Choose Contact.contactsList_ContactListView", "cata100 ionut100");
           doubleClickItem(":Choose Contact.contactsList_ContactListView", "cata100 ionut100", 113, 40, 0, Qt.LeftButton);
    
    }
      
    //CONTACT RECEIVED CHECK
    this.contactReceivedCheck = function() {
        try {
            waitForObject("{container=':listView.delegateLoader_Loader_8' id='nameText' text='cata100 ionut100' type='Text' unnamed='1' visible='true'}");         
            test.pass("Contact info received by contact")
    } catch (err) {
            test.fail("Contact info not received") 
    }
}
    
    //OPEN ADD CONTACTS WINDOW
    this.addContactWindow = function() {   
        var button = waitForObject("{container=':plcata2001 a_ChatWindow' objectName='ctPlusButton' type='IconButton' visible='true'}");
        snooze(3);
        mouseClick(button, 22, 21, Qt.LeftButton);
//        button.mouseClick;
        snooze(3);
        button.createConferenceAction();
        snooze(3);
    }
    
    //ADD CONTACT TO CREATE GROUP CHAT
    this.addContact = function() {
//        type(waitForObject(":Add to Conference.searchLineEdit_SearchLineEdit"), "plcata2002 a");
//        waitForObjectItem(":Add to Conference.availableContactsList_ContactListView", "plcata2002 a");
//        clickItem(":Add to Conference.availableContactsList_ContactListView", "plcata2002 a", 10, 23, 0, Qt.LeftButton);
//        clickButton(waitForObject(":Add to Conference.Add to Conference_CustomFocusButton"));
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
    //GROUP CHAT CREATED CHECK
    this.addContactCheck = function() {
        try {
            findObject("{container=':plcata2001 a, plcata2002 a_ChatWindow' id='label' text='plcata2001 a, plcata2002 a' type='Text' unnamed='1' visible='true'}");      
            test.pass("Group chat created")
    } catch (err) {
            test.fail("Group chat creation failed") 
    }
}
        
    //CHECK THAT NO PM BUTTON IS AVAILABLE
    this.noPMbuttonCheck = function() {
        try {
            findObject("{container=':plcata2001 a_ChatWindow' objectName='privateButton' text='Private is ON' type='IconButton' visible='true'}");
            test.fail("PM button was found!")
        } catch (err) {
            test.pass("PM button is not available in Group chat")
        }
      
    }
    
    //OPEN CHAT WINDOW WITH CONTACT LAST SEEN
    this.openChatLastSeen = function() {
        waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000");
        doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.pl cata1000", 112, 19, 0, Qt.LeftButton);
    }
    
    //ATTEMPT SENDING PM INVITE TO CONTACT LAST SEEN
    
    this.clickPMbuttonLastSeen = function() {
        var toggle = waitForObject("{container=':pl cata1000_ChatWindow' objectName='privateButton' text='Go Private' type='IconButton' visible='true'}")

        try {
          var retValue
            waitForObject("{container=':pl cata1000_ChatWindow' objectName='privateButton' text='Go Private' type='IconButton' visible='true'}");
            retValue=true;
        } catch(err) {
            retValue=false;
        }
          do {
            mouseClick(toggle, 39, 19, Qt.LeftButton);
            { break; }
        }
          while (retValue == true);      

 } 
      
    //CHECK THAT PM INVITE WAS NO SENT TO LAST SEEN CONTACT
    
    this.checkPMLastSeen = function() {
        try {
            findObject("{container=':pl cata1000_ChatWindow' id='title' text='Contact is offline' type='Text' unnamed='1' visible='true'}");
            test.pass("PM invite could not be sent")
        } catch(err) {
            test.fail("PM invite was sent!")
    }
  }
    
    //CLICK OK PM INVITE LAST SEEN CONTACT
    this.clickOKlastSeen = function() {
        try {
            var retValue;
            findObject(":pl cata1000.OK_Text");
            findObject(":pl cata1000.OK_Text_2");
            findObject(":pl cata1000.OK_Text_3");
            retValue=true;
        } catch (err) {
            retValue=false;
       }
        do {
          mouseClick("{container=':pl cata1000_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}");
      }
          while (retValue == true);
 }
        
    //CLOSE WINDOW WITH LAST SEEN CONTACT (PL CATA1000)
    this.closeLastSeen = function() {
        closeWindow(":pl cata1000_ChatWindow")
    }
    
    //OPEN CHAT WINDOW WITH OFFLINE CONTACT
    this.openOfflineContact = function() {
        waitForObjectItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2004 a");
        doubleClickItem(":rosterScrollArea.rosterTreeView_RosterTreeView", "FRIENDS.plcata2004 a", 137, 24, 0, Qt.LeftButton);
    }
    
    //ATTEMPT SENDING PM INVITE TO OFFLINE CONTACT
    
    this.clickPMbuttonOffline = function() {
        mouseClick(waitForObject(":plcata2004 a.Go Private_IconButton"), 39, 19, Qt.LeftButton);
    }
    
    //CHECK THAT PM INVITE WAS NO SENT TO OFFLINE CONTACT
    
    this.checkPMoffline = function() {
        try {
            findObject("{container=':plcata2004 a_ChatWindow' id='title' text='Contact is offline' type='Text' unnamed='1' visible='true'}");
            test.pass("PM invite could not be sent")
        } catch(err) {
            test.fail("PM invite was sent!")
        }
   }
    
    
    //CLICK OK PM INVITE OFFLINE CONTACT
    this.clickOKoffline = function() {
        try {
            var retValue;
            findObject(":plcata2004 a.OK_Text");
            findObject(":plcata2004 a.OK_Text_2");
            findObject(":plcata2004 a.OK_Text_3");
            retValue=true;
        } catch (err) {
            retValue=false;
       }
        do {
          mouseClick("{container=':plcata2004 a_ChatWindow' id='acceptButton' radius='4' type='Button' unnamed='1' visible='true'}");
      }
          while (retValue == true);
 }
    
    //CHECK THAT CHAT WINDOW IS NOT BLANK
    this.checkChatBlank = function() {
        try {
            waitForObject("{container=':plcata2001 a_ChatWindow' id='textArea' source='qrc:/chat/common/lower_panel_chat_gray_gradient_4x86.png' type='ChatViewTextArea' unnamed='1' visible='true'}");
            test.pass("Chat window is not blank")
        } catch(err) {
            test.fail("Chat window is blank")
        }
    }
    
    //CLOSE WINDOW WITH LAST SEEN CONTACT (PL CATA2004 a)
    this.closeOffline = function() {
        closeWindow(":plcata2004 a_ChatWindow")
    }
    
   //CLOSE WINDOW WITH CONTACT B
   this.closeB = function() {
       closeWindow(":plcata2011 a_ChatWindow")
   }
   
    //CLOSE GROUP CHAT FROM PL.CATA2000
    this.closeGC1 = function() {
        closeWindow(":plcata2001 a, plcata2002 a_ChatWindow");
    }
    
//    //CLOSE GROUP CHAT FROM PL.CATA2001
//    this.closeGC2 = function() {
//        closeWindow("{container=':plcata2000 a, plcata2002 a_ChatWindow' id='label' text='plcata2000 a, plcata2002 a' type='Text' unnamed='1' visible='true'}");
//    }
//    
//    //CLOSE GROUP CHAT FROM PL.CATA2000
//    this.closeGC3 = function() {
//        closeWindow("{container=':plcata2000 a, plcata2001 a_ChatWindow' id='label' text='plcata2000 a, plcata2001 a' type='Text' unnamed='1' visible='true'}");
//    }
    
    //NO ACTIVITY ENTRY FOR PM CHECK
    this.noActivityPM = function() {
        try {
           test.vp("VP1");
           test.fail("New entry in Activity!")
        } catch (err) {
            test.pass("No new entry in Activity for PM")         
        }
    }
      
     //QUIT MAC
         this.quitMac = function() {
             nativeMouseClick(80, 12,MouseButton.LeftButton);
             snooze(2);
             nativeMouseClick(160, 195,MouseButton.LeftButton);
         }
         
     //QUIT WIN
         
         this.Quit = function() {
             activateItem(waitForObjectItem(":WowApp.menubar_WowMenuBar", "WowApp"));
             activateItem(waitForObjectItem(":WowApp.WowApp_QMenu", "Quit"));
         }
         
     }
     


