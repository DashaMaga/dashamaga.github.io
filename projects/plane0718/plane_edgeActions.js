
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("loop")});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'pl'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("loop");});
//Edge binding end
})("pl");
//Edge symbol end:'pl'
})(jQuery,AdobeEdge,"EDGE-4255486");