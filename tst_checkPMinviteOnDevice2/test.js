source(findFile("scripts", "Feature.js"));
source(findFile("scripts", "Application.js"));

var feature = new Feature("../tst_private/private.feature");
var client2 = startApplication("WowApp -noupdate", "10.13.13.173", 4322);


this.PMinvitationIsReceived = function() {
    var retValue;
    try {
        waitForObject("{name='WoowMessageBox' type='WoowMessageBox' visible='1'}");
        retValue=false;
    } catch (err) {
        retValue=true;
    }
    return retValue;
}


function main()
{   
    
    snooze(10);
    setApplicationContext(client2);
    test.compare(this.PMinvitationIsReceived(), true);
    
    
}

