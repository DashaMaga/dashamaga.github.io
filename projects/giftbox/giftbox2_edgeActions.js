
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5273,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button}","click",function(sym,e){sym.play('start');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'button'
(function(symbolName){})("button");
//Edge symbol end:'button'
})(jQuery,AdobeEdge,"EDGE-22959766");