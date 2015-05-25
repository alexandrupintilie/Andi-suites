this.messageReceived = function() {
        snooze(4);
        type(waitForObject("{container=':roster 10 roster 10_ChatWindow' objectName='cvtaTextEditor' type='TextEditor' visible='true'}"), "<Ctrl+Alt+Shift+S>");
        type(waitForObject("{container=':roster 10 roster 10_ChatWindow' objectName='cvtaTextEditor' type='TextEditor' visible='true'}"), "<Return>");
        snooze(6);
        
        
        this.succesfull = function() {
            snooze(6);
            if(Search(testString, logFile) == true)
            {
                test.pass("Found "+testString+" in log file");
            }
            else
            {
                test.fail("Could not find "+testString+" in log file");
            }
            type(waitForObject("{container=':roster 10 roster 10_ChatWindow' objectName='cvtaTextEditor' type='TextEditor' visible='true'}"), "<Esc>");
          }  