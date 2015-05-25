source(findFile("scripts", "Parser.js"));

function Scenario(description) {
    this.description = description;
    this.steps = [];
    this.Given = function(descr, func) { this.steps.push({ type: "Given", description: descr, callback: func }); }
    this.When = function(descr, func) { this.steps.push({ type: "When", description: descr, callback: func }); }
    this.Then = function(descr, func) { this.steps.push({ type: "Then", description: descr, callback: func }); }
    this.And = function(descr, func) { this.steps.push({ type: "And", description: descr, callback: func }); } 
    
    this.run = function(original) {
        test.log("Executing scenario '" + this.description + "'"); 
        if (this.steps.length != original.steps.length) {
            // TODO: more details
            test.warning("Inconsistent number of steps. Skipping.");
            return;
        }
        for (var i in this.steps) {
            var step = this.steps[i];
            var originalStep = original.steps[i];
            if (step.type != originalStep.type ||
                step.description != originalStep.description) {
                // TODO: more details
                test.log(step.type + step.description + originalStep.type + originalStep.description);
                test.warning("Inconsistent step " + i + ". Aborting test");
                return;
            }
            // TODO: grab screenshot
            test.log("Executing step: " + step.type + " " + step.description);

            step.scenario = this;
            step.callback(this);
        }
    }
}

function Feature(fileName) {
    this.fileName = fileName;
    this.scenarios = [];
    this.addScenario = function(description) {
        var scenario = new Scenario(description);
        this.scenarios.push(scenario);
        return scenario;
    }
    this.execute = function() {
        var originalFeature = Parser.readFile(this.fileName);
        if (originalFeature.scenarios.length != this.scenarios.length) {
            test.fatal("Odd. Mismatching number of scenarios between " +
                       fileName + " and test implementation.");
            return;
        }
        test.log("Executing " + this.scenarios.length + " test(s) for '" +
                 this.fileName + "'");
        for (var i in this.scenarios) {
            var scenario = this.scenarios[i];
            var originalScenario = originalFeature.scenarios[i];
            scenario.run(originalScenario);
        }
    }
}
