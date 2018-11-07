'use strict';

scriptExtension.importPreset("RuleSupport");
scriptExtension.importPreset("RuleSimple");

var sRule = new SimpleRule() {
    execute: function( module, input) {
        print("Hello World!' from a Javascript rule.");
    }
};

sRule.setTriggers([
    TriggerBuilder.create()
        .withId("aTimerTrigger")
        .withTypeUID("timer.GenericCronTrigger")
        .withConfiguration(
            new Configuration({
                "cronExpression": "0 * * * * ?"
            })).build()
    ]);

automationManager.addRule(sRule);
