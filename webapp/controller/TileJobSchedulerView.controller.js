sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileJobScheduler.TileJobScheduler.controller.TileJobSchedulerView", {
		onInit: function () {
			history.back();
			window.open("https://jobscheduler-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});