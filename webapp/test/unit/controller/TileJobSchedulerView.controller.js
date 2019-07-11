/*global QUnit*/

sap.ui.define([
	"TileJobScheduler/TileJobScheduler/controller/TileJobSchedulerView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileJobSchedulerView Controller");

	QUnit.test("I should test the TileJobSchedulerView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});