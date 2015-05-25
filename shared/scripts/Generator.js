source(findFile("scripts", "Parser.js"));

// TODO: do escaping in generated string literals
function generateSkeleton(feature, fileName)
{
    var code = 'source(findFile("scripts", "Feature.js"));\n\n';

    code += 'var feature = new Feature("' + feature.fileName + '");\n\n';
    
    for (var i in feature.scenarios) {
        var scenario = feature.scenarios[i];
        var number = Number(i) + 1;
        var scenarioVar = "scenario" + number;
        code += "// Scenario " + number + "\n";
        code += 'var ' + scenarioVar + ' = feature.addScenario(\"' + scenario.description + '");\n\n';
        for (var j in scenario.steps) {
            var step = scenario.steps[j];
            code += scenarioVar + '.' + step.type + '("' + step.description + '", function () {\n';
            code += '    test.log("Implement me!");\n';
            code += '});\n\n';   
        }
    }
    
    code += "function main() {\n";
    code += "   feature.execute();\n";
    code += "}\n";

    var f = File.open(fileName, "w");
    f.write(code);
    f.close();
}

var Generator = {
    generate: function(input, output) {
        if (File.exists(output)) {
            throw "Output file '" + output + "' already there. " +
                "Too scared to overwrite it.";
        }
        var feature = Parser.readFile(input);    

/*    
        // verbose
        test.log("Result:");
        test.log("Feature description: " + feature.description);
        for (var i in feature.scenarios) {
            var scenario = feature.scenarios[i];
            test.log("Scenario description: " + scenario.description);
            for (var j in scenario.steps) {
                var step = scenario.steps[j];
                test.log("Step type: " + step.type + ". Step description: " + step.description);
            }
        }
*/
    
        generateSkeleton(feature, output);
    }
}

