(this["webpackJsonpproject-tiles"]=this["webpackJsonpproject-tiles"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/PrehistoricIcon_44_b.e7dba318.png"},42:function(e,t,a){e.exports=a.p+"static/media/gems_add_152_b.0f20a41d.PNG"},43:function(e,t,a){e.exports=a.p+"static/media/SGI_86.f386ff8a.png"},49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),c=a.n(r),o=(a(54),a(12)),l=a(74),s=a(79),u=a(78),p=(a(59),a(36)),f=a.n(p),m=Object(l.a)((function(e){return{tileImage:function(e){return{display:"flex",maxWidth:"100%",maxHeight:"100%",overflow:"auto",borderRadius:"20px",outline:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"}}}}));var g={flipTile:function(e){return{type:"game_flipTile",tileId:e}}},d=Object(o.b)((function(e){return{phase:e.game.phase}}),g)((function(e){var t=e.tile,a=function(e){var t="matching"===e.phase.type&&!!e.phase.selectedTiles[e.tile.id];return e.tile.facingUp||t}(e)?t.image:f.a,n=m({facingUp:t.facingUp});return i.a.createElement("input",{type:"image",src:a,alt:"tile",onClick:function(){t.facingUp||e.flipTile(t.id)},className:n.tileImage})})),h=Object(l.a)((function(e){return Object(s.a)({rootContainer:function(e){return{height:"100vh",width:"".concat(e.xyRatio,"vh"),paddingBottom:"50px"}},gridY:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"10px 0 15px 0"},gridX:{maxHeight:"100%",overflow:"auto",flexWrap:"nowrap",display:"flex",flexDirection:"row",justifyContent:"center"},gridItem:{display:"flex",width:"100%",padding:"8px",justifyContent:"center"}})})),b=Object(o.b)((function(e){return e}),{})((function(e){var t=h({xyRatio:e.game.tileY[0].length/e.game.tileY.length*100});return i.a.createElement(u.a,{maxWidth:"lg",className:t.rootContainer},i.a.createElement("div",{className:t.gridY},e.game.tileY.map((function(a,n){return i.a.createElement("div",{className:t.gridX},a.map((function(a){return i.a.createElement("div",{className:t.gridItem,key:a},i.a.createElement(d,{tile:e.game.tiles[a]}))})))}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(10),j=a(3),v={paletteType:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}("paletteType")||"dark"};var O=a(40),x=a(45),w=a(41),I=a(46),T=a(7),E=a(30),C=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},_=a(42),k=a.n(_),A=a(43),N=a.n(A);function U(e,t){return Array.from(Array(t),(function(){return e}))}var W=a(31),Y=Object(j.a)({phase:{type:"matching",selectedTiles:{}}},function(){var e={xCount:4,yCount:6,tileImages:[].concat(Object(E.a)(U(k.a,12)),Object(E.a)(U(N.a,12)))},t={};return{tileY:Array.from(Array(e.yCount)).map((function(a,n){return Array.from(Array(e.xCount)).map((function(a,i){var r=C(0,e.tileImages.length),c=e.tileImages[r];e.tileImages.splice(r,1);var o={id:"".concat(i,"/").concat(n),image:c,facingUp:!1};return t=Object(j.a)({},t,Object(T.a)({},o.id,o)),o.id}))})),tiles:t}}());function M(e,t){if("matching"!==e.phase.type)throw new S(t,e.phase.type);return e.phase}var S=function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(e,n){return Object(O.a)(this,a),t.call(this,"Incorrect phase of ".concat(n," for ").concat(e))}return a}(Object(I.a)(Error)),R=Object(y.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app_unit":return e;case"app_updatePaletteType":return Object(j.a)({},e,{paletteType:t.paletteType});default:return e}},game:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(console.log("gameReducer: previous state",t),a.type){case"game_unit":return t;case"game_flipTile":var n=M(t,a.type),i=W.a.size(n.selectedTiles)<2?Object(j.a)({},n.selectedTiles,Object(T.a)({},a.tileId,!0)):Object(T.a)({},a.tileId,!0),r=W.a.keys(i),c=!!r[0]&&!!r[1]&&t.tiles[r[0]].image===t.tiles[r[1]].image;return Object(j.a)({},t,{tiles:Object(j.a)({},t.tiles,(e={},Object(T.a)(e,r[0],Object(j.a)({},t.tiles[r[0]],{facingUp:c})),Object(T.a)(e,r[1],Object(j.a)({},t.tiles[r[1]],{facingUp:c})),e)),phase:Object(j.a)({},n,{selectedTiles:i})});default:return t}}}),B=a(77),H=a(76),J=a(25),P=a(44),D={primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:J.a.A400}},G="#fafafa",X="#303030",z=Object(y.c)(R),$=function(){return i.a.createElement(o.a,{store:z},i.a.createElement(i.a.StrictMode,null,i.a.createElement(H.a,{theme:(e=z.getState().app.paletteType,Object(P.a)({palette:Object(j.a)({type:e},D,{background:{default:"light"===e?G:X}})}))},i.a.createElement(B.a,null),i.a.createElement(b,null))));var e};c.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.11fabcb5.chunk.js.map