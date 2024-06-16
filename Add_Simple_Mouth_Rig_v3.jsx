
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var Comp, MainLayer, InnerLayers, my_variable, my_effect, index, persent, j;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('Iq@RrP]Gg-cfcW4R1jo~');\nComp = ($._extAutomationBlocks.AeComp.getActiveComp());\n$._extAutomationBlocks.all.messageAboutExecuteBlock(']xp1QY?lWs^Zt_gqODM@');\nMainLayer = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"PrecompLayer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('[6f`Q`E8^IXWQuQ1Kb4n');\nif (MainLayer.length == 1) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('8Q*j~k:qphDJA~|%7;b{');\n  InnerLayers = ($._extAutomationBlocks.AeLayer.getLayers(MainLayer, {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('eqNtUp+5/YN5D}Wh1m9%');\n  if (InnerLayers.length > 0) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('q%|iVKVC:_tSaWiuy$|?');\n    my_variable = $._extAutomationBlocks.AeLayer.addEffect(MainLayer,'ADBE Slider Control',{customValues: {'ADBE Slider Control-0001':419952}});\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('=N{I|y-:_gmPWq#Ah(5d');\n    var my_effect_list = $._extAutomationBlocks.AeProperty.getEffects(MainLayer, {direction:\"BACKWARD\",resultType:\"ITEM\"});\n    for (var my_effect_index =0; my_effect_index< my_effect_list.length;my_effect_index++) {\n      try { my_effect = $._extAutomationBlocks.AeUtility.toPath(my_effect_list[my_effect_index]);}\n    \t\tcatch(e) {\n    \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n    \t\t\tcontinue;\n    \t\t}\n    \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('9f^Ya0H/AWN`|9,a@O25');\n      if (($._extAutomationBlocks.AeProperty.getAttribute(my_effect, 'NAME')) == 'Slider Control' && ($._extAutomationBlocks.AeProperty.getAttribute((String(my_variable) + '/ADBE Slider Control-0001'), 'VALUE')) == 419952) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('a5.y*:XY6Hrbv=i)6%^;');\n        $._extAutomationBlocks.AeProperty.setAttribute(my_effect, 'NAME', 'Mouth Index');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('[Iill68X}Y={tm$g[{Qj');\n        $._extAutomationBlocks.AeProperty.setAttribute((String(my_variable) + '/ADBE Slider Control-0001'), 'VALUE', ('99'));\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('t7u@$J8GNn~3d|QCKQ$]');\n        index = 0;\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('r749=X0|).jZ=fw5FdDX');\n        persent = Math.ceil(100 / InnerLayers.length);\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('2z{91}G_3Uhb)C@Me8e5');\n        for (var j_index =0; j_index< InnerLayers.length;j_index++) {\n          try { j = InnerLayers[j_index];}\n        \t\tcatch(e) {\n        \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n        \t\t\tcontinue;\n        \t\t}\n        \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('GK~3ELbXOUOso~EuI;L_');\n          $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(j) + '/' + 'ADBE Transform Group/ADBE Opacity'), 'EXPRESSION', (['/*== Based on Duik: Connector ==*/ var ctrlLayer = comp(\"',$._extAutomationBlocks.AeComp.getAttribute(Comp, 'NAME'),'\").layer(thisComp.name); var fx = ctrlLayer.effect(\"Mouth Index\"); var result = 0; if (fx(1).value >= ',index * persent,' && fx(1).value < ',(index + 1) * persent,') result = value; result;'].join('')));\n          $._extAutomationBlocks.all.messageAboutExecuteBlock('nJn]Xy{;92mbjdatCqMJ');\n          index = (typeof index == 'number' ? index : 0) + 1;\n          $._extAutomationBlocks.all.messageAboutExecuteBlock('2z{91}G_3Uhb)C@Me8e5');\n        }\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('L]jN//RLff#EoQmqwReT');\n        $._extAutomationBlocks.AeProperty.setAttribute((String(my_variable) + '/ADBE Slider Control-0001'), 'EXPRESSION', (['//@',InnerLayers.length,'$' + '\\n' +\n        'clamp(value,0,99)'].join('')));\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('=N{I|y-:_gmPWq#Ah(5d');\n    }\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('G8ErmYOStSQctKK8f8Ry');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString((String('Select Layers inside compositon' + '\\n' +\n    '') + String($._extAutomationBlocks.AeComp.getAttribute(MainLayer, 'NAME'))));\n    \t\t\talert(message);\n    \t\t\tthrow new Error(message)\n    \t})();\n  }\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('mV:{!T7UBjPIRaZKLhxU');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('Select Composition');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n}\n")});
		}
		catch(err){
			myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
		}
		finally {
			app.endUndoGroup();
			try{
			$._extAutomationBlocks.all.abDestructor.notifyEndPointReached("main script");
			}
			catch(err){
				myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
			}
		}
		return myResult;
	})(this)
	