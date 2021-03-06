function Scenario(description) {
    this.description = description;
    this.steps = [];
    this.given = function(msg, func) { this.steps.push({ type: "Given", message: msg, callback: func }); }
    this.when = function(msg, func) { this.steps.push({ type: "When", message: msg, callback: func }); }
    this.then = function(msg, func) { this.steps.push({ type: "Then", message: msg, callback: func }); }
    this.and = function(msg, func) { this.steps.push({ type: "And", message: msg, callback: func }); }  
    this.run = function() {
        test.log("Executing scenario '" + this.description + "'");
        for (var i in this.steps) {
            var step = this.steps[i];
            // TODO: grab screenshot
            test.log("Executing step: " + step.type + " " + step.message);
            step.scenario = this;
            step.callback(this);
        }
    }
}
