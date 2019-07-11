sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileJobScheduler.TileJobScheduler.controller.TileJobSchedulerView", {
		onInit: function () {
			window.location.replace("https://flpnwc-m9a44f3468.dispatcher.hana.ondemand.com/sites/espediasimplemaintenance#Shell-home ");
			window.open("https://jobscheduler-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});