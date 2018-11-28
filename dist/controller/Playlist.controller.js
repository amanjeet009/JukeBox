sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/table/library"
], function (Controller, JSONModel, History) {
	"use strict";
	return Controller.extend("a.abc.controller.Playlist", {
		onInit: function () {
	
		},

		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			//
			if (sPreviousHash) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("Homepage", {}, true);
			}
		},
		onPressRow:function(oEvent){
            	var oItem = oEvent.getSource();
            	var sSongPath = oItem.getBindingContext("Songs").getPath().replace(/\//g,"%2F");
		        var oRouter = this.getOwnerComponent().getRouter();
		        oRouter.navTo("Playing",{
		        	songPath:sSongPath
            });	

            } 
	
	});
});