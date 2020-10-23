(this["webpackJsonpes-legends-search-webapp"]=this["webpackJsonpes-legends-search-webapp"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/search-24px.db5d8122.svg"},23:function(e,t,a){e.exports=a(59)},28:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=(a(28),a(2)),l=a(3),s=a(5),d=a(4),u=a(8),m=a(9),h=a.n(m),f=a(6),p=a.n(f),v=a(7),g=(a(48),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r;return Object(o.a)(this,a),(r=t.call(this,e)).state=(n={imageUrl:e.card.imageUrl,name:e.card.name,rarity:e.card.rarity,setName:e.card.set.name},Object(v.a)(n,"rarity",e.card.rarity),Object(v.a)(n,"type",e.card.type),Object(v.a)(n,"text",e.card.text),n),r}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.imageUrl,alt:"card"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("h2",null,this.state.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Set Name: "),this.state.setName),r.a.createElement("p",null,r.a.createElement("strong",null,"Rarity: ")," ",this.state.rarity),r.a.createElement("p",null,r.a.createElement("strong",null,"Type:")," ",this.state.type),r.a.createElement("p",{className:"text"},r.a.createElement("strong",null,"Text:")," ",this.state.text)))}}]),a}(r.a.Component)),y=a(20),E=a.n(y),b=(a(53),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:n.props.loading},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.loading?"loading":"loading invisible"},r.a.createElement(E.a,{color:"#1EAEDB",loading:this.state.loading}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.loading!==t.loading?{loading:e.loading}:null}}]),a}(r.a.Component)),k=r.a.createContext({cardList:[],keywords:"",updateCardList:function(){}}),w=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleScroll=function(){var e=document.querySelector(".cardList");n.isBottom(e)&&(document.removeEventListener("scroll",n.handleScroll),n.state.isLoading||n.fetchCards())},n.isBottom=function(e){return Math.floor(e.getBoundingClientRect().bottom)<=window.innerHeight&&!n.state.loading},n.state={loading:!0,cardList:[]},n.initialized=!1,n.name=void 0,n.keywords="",n.nextPage="",n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cardList"},r.a.createElement(b,{loading:this.state.loading}),this.state.cardList.map((function(e){return r.a.createElement(g,{key:e.id,card:e})})))}},{key:"componentDidMount",value:function(){var e=this;this.initialized||h.a.get("https://api.elderscrollslegends.io/v1/cards",{params:{pageSize:20}}).then((function(t){console.log(t),e.initialized=!0,e.nextPage=t.data._links.next,e.setState({loading:!1,cardList:t.data.cards}),document.addEventListener("scroll",p.a.throttle(e.handleScroll,200))})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){this.context.keywords!==this.keywords&&(this.keywords=this.context.keywords,this.fetchCards(this.context.keywords))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",p.a.throttle(this.handleScroll,200))}},{key:"fetchCards",value:function(e){var t=this,a={params:{pageSize:20,name:this.name}};if("undefined"!==typeof e&&(a.params.name=e,this.name=e),"undefined"!==typeof e||""!==this.nextPage){var n="undefined"!==typeof e?"https://api.elderscrollslegends.io/v1/cards":this.nextPage;this.setState({loading:!0}),h.a.get(n,a).then((function(a){t.nextPage=a.data._links&&a.data._links.next?a.data._links.next:"",t.setState((function(t){return"undefined"!==typeof e?{cardList:Object(u.a)(a.data.cards)}:{cardList:[].concat(Object(u.a)(t.cardList),Object(u.a)(a.data.cards))}})),t.setState({loading:!1}),document.addEventListener("scroll",p.a.throttle(t.handleScroll,200))})).catch((function(e){console.log(e)}))}}}]),a}(r.a.Component);w.contextType=k;var j=w;a(54);var O=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Elder Scrolls Ledgends"),r.a.createElement("h2",null,"Card Database"))},x=a(22),L=a.n(x),S=(a(55),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setKeyword=function(e){n.setState({keyword:e})},n.state={keyword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k.Consumer,null,(function(t){return r.a.createElement("form",{className:"search-form",onSubmit:function(a){a.preventDefault(),t.updateCardList(e.state.keyword)}},r.a.createElement("input",{name:"search",type:"text",placeholder:"Search via card name",value:e.state.keyword,onChange:function(t){return e.setKeyword(t.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:L.a,alt:"search icon"})))}))}}]),a}(r.a.Component));a(56);var C=function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement(S,null))},N=(a(57),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateCardList=function(e){n.setState({keywords:e})},n.state={keywords:"",updateCardList:n.updateCardList},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(k.Provider,{value:this.state},r.a.createElement(C,null),r.a.createElement(j,null)))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.495045a9.chunk.js.map