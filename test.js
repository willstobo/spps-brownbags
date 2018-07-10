'use strict';
// ----------------------------------------------------------------------------------------------------------------------
// Require needed libs
var common = require('../../common');
// ----------------------------------------------------------------------------------------------------------------------
// Handler
exports.handler = (event, context, callback) => {
    var intentName = event.currentIntent.name;
    common.getJsonFromS3("responses",function(err, data) {
        if (err) common.logAndExit(err,"getJsonFromS3",null,"Someone has deleted my responses.",callback);
        else {
            var responseFile = JSON.parse(data.Body);
            if (intentName == "infrabotChina"){
                var chinaResponses = responseFile["China"];
                common.logAndExit(null,null,"Intent: "+intentName+" triggered.",chinaResponses[Math.floor(Math.random()*chinaResponses.length)],callback);
            } else if (intentName == "infrabotTrump"){
                var trumpResponses = responseFile["Trump"];
                common.logAndExit(null,null,"Intent: "+intentName+" triggered.",trumpResponses[Math.floor(Math.random()*trumpResponses.length)],callback);
            } else if (intentName == "infrabotGoodBot"){
                var goodBotResponses = responseFile["GoodBot"];
                common.logAndExit(null,null,"Intent: "+intentName+" triggered.",goodBotResponses[Math.floor(Math.random()*goodBotResponses.length)],callback); 
            } else if (intentName == "infrabotNorthKorea"){
                var northKoreaResponses = responseFile["NorthKorea"];
                common.logAndExit(null,null,"Intent: "+intentName+" triggered.",northKoreaResponses[Math.floor(Math.random()*northKoreaResponses.length)],callback); 
            } else if (intentName == "infrabotTacos"){
                var tacoResponses = responseFile["Tacos"];
                common.logAndExit(null,null,"Intent: "+intentName+" triggered.",northKoreaResponses[Math.floor(Math.random()*tacoResponses.length)],callback); 
            } else if (intentName == "infrabotHelp"){
                var helpResponse = responseFile["Help"];
                var numb = Math.floor((Math.random()*10)+1);
                if (numb !== 7) common.logAndExit(null,null,"Intent: "+intentName+" triggered.",helpResponse,callback);
                else    common.logAndExit(null,null,"Intent: "+intentName+" triggered.","No.",callback); 
            }
        }
    });
};