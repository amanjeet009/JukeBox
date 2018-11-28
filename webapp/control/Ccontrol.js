sap.ui.define(["sap/ui/core/Control"], 
function (Control) {
	"use strict";
	return Control.extend("a.abc.control.Ccontrol", 
	{
		metadata:{
				properties:{
						src:{
							type: "string",
							defaultValue: ""
						}
				}
		},
	renderer: function(oRm, oControl)
	{
		var sSrc= oControl.getSrc();
		oRm.write("<audio controls");
		oRm.writeControlData(oControl);
		oRm.write(">");
		oRm.write("<source src=");
		oRm.write(sSrc);
		oRm.write(">");
		oRm.write("preload= metadata");
		oRm.write("</audio>");
	}
	});
});