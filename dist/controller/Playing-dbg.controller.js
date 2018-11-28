sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
	"use strict";

	return Controller.extend("a.abc.controller.Playing", {
	onInit: function () {
			var oViewModel = new JSONModel({});
			this.getView().setModel(oViewModel, "view");
				var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("Playing").attachPatternMatched(this._onRouteMatched, this);
		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
		
			if (sPreviousHash) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("Playlist", {}, true);
			}
		},
	
		_onRouteMatched: function (oEvent) {
			this.getView().bindElement({
				path: oEvent.getParameter("arguments").songPath.replace(/%2F/g, "/"),
				model: "Songs"
			});
		} 
	
		
	});

});