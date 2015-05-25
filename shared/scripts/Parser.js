var Parser = {
    readFile: function(fileName)
    {
        var feature = { fileName: fileName, description: "", scenarios: [] };

        const State = {
            Start: 0,
            Feature: 1,
            Scenario: 2,
            Steps: 3
        };
        
        var state = State.Start;
    
        var f = File.open(fileName);
        while ((line = f.readln()) != null) { // TODO: trim leading and trailing whitespace
            if (line.match(/^\s*$/))
                continue;
            switch (state) {
            case State.Start:
                if (line.match(/^\s*Feature:\s*(.*)$/)) {
                    feature.description = RegExp.$1;
                    state = State.Feature;
                } else {
                    throw "Unexpected line '" + line + "' in Feature section";
                }
                break;
            case State.Feature:
                if (line.match(/^\s*Scenario:\s*(.*)$/)) {
                    feature.scenarios.push({description: RegExp.$1, steps: []});
                    state = State.Steps;
                } else {
                    feature.description += " " + line;
                }
                break;
            case State.Steps:
                var scenario = feature.scenarios[feature.scenarios.length-1]; 
                if (line.match(/^\s*Given \s*(.*)$/)) {
                    scenario.steps.push({type: "Given", description: RegExp.$1});
                } else if (line.match(/^\s*When \s*(.*)$/)) {
                    scenario.steps.push({type: "When", description: RegExp.$1});
                } else if (line.match(/^\s*Then \s*(.*)$/)) {
                    scenario.steps.push({type: "Then", description: RegExp.$1});
                } else if (line.match(/^\s*And \s*(.*)$/)) {
                    scenario.steps.push({type: "And", description: RegExp.$1});
                } else if (line.match(/^\s*Scenario:\s*(.*)$/)) {
                    feature.scenarios.push({description: RegExp.$1, steps: []});
                } else {
                    throw "Unhandled line '" + line + "' in steps section";
                }
                
            }
        }
    
        return feature;
    }
}
