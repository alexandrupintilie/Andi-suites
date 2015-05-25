
source(findFile("scripts", "Generator.js"));

function generate(feature)
{
    if (!feature) {
        throw "FEATURE variable not set";
    }
    var featureFile = "../tst_" + feature + "/" + feature + ".feature";
    var scriptFile = "../tst_" + feature + "/test.js";
    Generator.generate(featureFile, scriptFile);
}


function main()
{
    generate(OS.getenv("FEATURE"));
  //  generate("login");
}
