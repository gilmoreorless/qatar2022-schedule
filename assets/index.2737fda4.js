(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function P(){}function ct(t){return t()}function nt(){return Object.create(null)}function G(t){t.forEach(ct)}function ut(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function N(){return $(" ")}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let tt;function L(t){tt=t}const H=[],lt=[],q=[],st=[],Rt=Promise.resolve();let V=!1;function St(){V||(V=!0,Rt.then(ht))}function Z(t){q.push(t)}const z=new Set;let Q=0;function ht(){const t=tt;do{for(;Q<H.length;){const e=H[Q];Q++,L(e),Nt(e.$$)}for(L(null),H.length=0,Q=0;lt.length;)lt.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];z.has(n)||(z.add(n),n())}q.length=0}while(H.length);for(;st.length;)st.pop()();V=!1,z.clear(),L(t)}function Nt(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}const J=new Set;let C;function mt(){C={r:0,c:[],p:C}}function pt(){C.r||G(C.c),C=C.p}function y(t,e){t&&t.i&&(J.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(J.has(t))return;J.add(t),C.c.push(()=>{J.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function yt(t){t&&t.c()}function gt(t,e,n,s){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),s||Z(()=>{const u=t.$$.on_mount.map(ct).filter(ut);t.$$.on_destroy?t.$$.on_destroy.push(...u):G(u),t.$$.on_mount=[]}),r.forEach(Z)}function _t(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){t.$$.dirty[0]===-1&&(H.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,s,o,r,u,i=[-1]){const l=tt;L(t);const a=t.$$={fragment:null,ctx:[],props:r,update:P,not_equal:o,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:nt(),dirty:i,skip_bound:!1,root:e.target||l.$$.root};u&&u(a.root);let c=!1;if(a.ctx=n?n(t,e.props||{},(f,d,...g)=>{const R=g.length?g[0]:d;return a.ctx&&o(a.ctx[f],a.ctx[f]=R)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](R),c&&$t(t,f)),d}):[],a.update(),c=!0,G(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const f=Et(e.target);a.fragment&&a.fragment.l(f),f.forEach(X)}else a.fragment&&a.fragment.c();e.intro&&y(t.$$.fragment),gt(t,e.target,e.anchor,e.customElement),ht()}L(l)}class At{$destroy(){_t(this,1),this.$destroy=P}$on(e,n){if(!ut(n))return P;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct=`1	A	2022-11-20T19:00+03:00	QAT	ECU
3	B	2022-11-21T16:00+03:00	ENG	IRN
2	A	2022-11-21T19:00+03:00	SEN	NED
4	B	2022-11-21T22:00+03:00	USA	WAL
5	C	2022-11-22T13:00+03:00	ARG	KSA
6	D	2022-11-22T16:00+03:00	DEN	TUN
7	C	2022-11-22T19:00+03:00	MEX	POL
8	D	2022-11-22T22:00+03:00	FRA	AUS
9	F	2022-11-23T13:00+03:00	MAR	CRO
10	E	2022-11-23T16:00+03:00	DEU	JPN
11	F	2022-11-23T19:00+03:00	ESP	CRC
12	E	2022-11-23T22:00+03:00	BEL	CAN
13	G	2022-11-24T13:00+03:00	SUI	CMR
14	H	2022-11-24T16:00+03:00	URY	KOR
15	H	2022-11-24T19:00+03:00	POR	GHA
16	G	2022-11-24T22:00+03:00	BRA	SRB
17	B	2022-11-25T13:00+03:00	WAL	IRN
18	A	2022-11-25T16:00+03:00	QAT	SEN
19	A	2022-11-25T19:00+03:00	NED	ECU
20	B	2022-11-25T22:00+03:00	ENG	USA
21	D	2022-11-26T13:00+03:00	TUN	AUS
22	C	2022-11-26T16:00+03:00	POL	KSA
23	D	2022-11-26T19:00+03:00	FRA	DEN
24	C	2022-11-26T22:00+03:00	ARG	MEX
25	E	2022-11-27T13:00+03:00	JPN	CRC
26	F	2022-11-27T16:00+03:00	BEL	MAR
27	F	2022-11-27T19:00+03:00	CRO	CAN
28	E	2022-11-27T22:00+03:00	ESP	DEU
29	G	2022-11-28T13:00+03:00	CMR	SRB
30	H	2022-11-28T16:00+03:00	KOR	GHA
31	G	2022-11-28T19:00+03:00	BRA	SUI
32	H	2022-11-28T22:00+03:00	POR	URY
33	A	2022-11-29T18:00+03:00	ECU	SEN
34	A	2022-11-29T18:00+03:00	NED	QAT
35	B	2022-11-29T22:00+03:00	WAL	ENG
36	B	2022-11-29T22:00+03:00	IRN	USA
37	D	2022-11-30T18:00+03:00	AUS	DEN
38	D	2022-11-30T18:00+03:00	TUN	FRA
39	C	2022-11-30T22:00+03:00	POL	ARG
40	C	2022-11-30T22:00+03:00	KSA	MEX
41	F	2022-12-01T18:00+03:00	CRO	BEL
42	F	2022-12-01T18:00+03:00	CAN	MAR
43	E	2022-12-01T22:00+03:00	JPN	ESP
44	E	2022-12-01T22:00+03:00	CRC	DEU
45	H	2022-12-02T18:00+03:00	GHA	URY
46	H	2022-12-02T18:00+03:00	KOR	POR
47	G	2022-12-02T22:00+03:00	SRB	SUI
48	G	2022-12-02T22:00+03:00	CMR	BRA
49	16	2022-12-03T18:00+03:00	1A	2B
50	16	2022-12-03T22:00+03:00	1C	2D
52	16	2022-12-04T18:00+03:00	1D	2C
51	16	2022-12-04T22:00+03:00	1B	2A
53	16	2022-12-05T18:00+03:00	1E	2F
54	16	2022-12-05T22:00+03:00	1G	2H
55	16	2022-12-06T18:00+03:00	1F	2E
56	16	2022-12-06T22:00+03:00	1H	2G
58	QF	2022-12-09T18:00+03:00	W53	W54
57	QF	2022-12-09T22:00+03:00	W49	W50
60	QF	2022-12-10T18:00+03:00	W55	W56
59	QF	2022-12-10T22:00+03:00	W51	W52
61	SF	2022-12-13T22:00+03:00	W57	W58
62	SF	2022-12-14T22:00+03:00	W59	W60
63	3P	2022-12-17T22:00+03:00	L61	L62
64	GF	2022-12-18T22:00+03:00	W61	W62
`,j={ARG:"ar",AUS:"au",BEL:"be",BRA:"br",CAN:"ca",CMR:"cm",CRC:"cr",CRO:"hr",DEN:"dk",DEU:"de",ECU:"ec",ENG:"gb-eng",ESP:"es",FRA:"fr",GHA:"gh",IRN:"ir",JPN:"jp",KOR:"kr",KSA:"sa",MAR:"ma",MEX:"mx",NED:"nl",POL:"pl",POR:"pt",QAT:"qa",SEN:"sn",SRB:"rs",SUI:"ch",TUN:"tn",URY:"uy",USA:"us",WAL:"gb-wls"};function Dt(t){let e,n,s,o,r=t[0].matchNum+"",u,i,l,a=t[0].date.toLocaleString("en",{hour:"numeric",hour12:!1,minute:"2-digit"})+"",c,f,d,g,R=t[0].round+"",U,m,A,v,S,M,D=t[0].team1+"",B,W,O,k,I,et,K=t[0].team2+"",Y;return{c(){e=T("div"),n=T("span"),s=T("span"),o=$("Match "),u=$(r),i=N(),l=T("time"),c=$(a),d=N(),g=T("span"),U=$(R),m=N(),A=T("span"),v=T("span"),M=N(),B=$(D),W=N(),O=T("span"),k=T("span"),et=N(),Y=$(K),p(s,"class","svelte-1d85v09"),p(n,"class","num svelte-1d85v09"),p(l,"class","time svelte-1d85v09"),p(l,"datetime",f=t[0].date.toISOString()),p(g,"class","round svelte-1d85v09"),p(v,"class",S="fi fi-"+j[t[0].team1]+" svelte-1d85v09"),p(A,"class","team team1 svelte-1d85v09"),p(k,"class",I="fi fi-"+j[t[0].team2]+" svelte-1d85v09"),p(O,"class","team team2 svelte-1d85v09"),p(e,"class","match svelte-1d85v09"),b(e,"grid-column",t[1]+" / "+(t[1]+2)),b(e,"grid-row",t[0].isDoubleTime?2:1)},m(_,E){x(_,e,E),h(e,n),h(n,s),h(s,o),h(s,u),h(e,i),h(e,l),h(l,c),h(e,d),h(e,g),h(g,U),h(e,m),h(e,A),h(A,v),h(A,M),h(A,B),h(e,W),h(e,O),h(O,k),h(O,et),h(O,Y)},p(_,[E]){E&1&&r!==(r=_[0].matchNum+"")&&w(u,r),E&1&&a!==(a=_[0].date.toLocaleString("en",{hour:"numeric",hour12:!1,minute:"2-digit"})+"")&&w(c,a),E&1&&f!==(f=_[0].date.toISOString())&&p(l,"datetime",f),E&1&&R!==(R=_[0].round+"")&&w(U,R),E&1&&S!==(S="fi fi-"+j[_[0].team1]+" svelte-1d85v09")&&p(v,"class",S),E&1&&D!==(D=_[0].team1+"")&&w(B,D),E&1&&I!==(I="fi fi-"+j[_[0].team2]+" svelte-1d85v09")&&p(k,"class",I),E&1&&K!==(K=_[0].team2+"")&&w(Y,K),E&1&&b(e,"grid-row",_[0].isDoubleTime?2:1)},i:P,o:P,d(_){_&&X(e)}}}function Ot(t,e,n){var i;let{match:s={}}=e,{colOffset:o=0}=e;const u=(((i=s.date)==null?void 0:i.getHours())||0)+2-o;return t.$$set=l=>{"match"in l&&n(0,s=l.match),"colOffset"in l&&n(2,o=l.colOffset)},[s,u,o]}class bt extends At{constructor(e){super(),Tt(this,e,Ot,Dt,ft,{match:0,colOffset:2})}}function rt(t,e,n){const s=t.slice();return s[13]=e[n],s}function ot(t,e,n){const s=t.slice();return s[16]=e[n],s}function at(t){let e,n;return e=new bt({props:{match:t[16],colOffset:t[16].date.getHours()>=t[2]?t[1]:0}}),{c(){yt(e.$$.fragment)},m(s,o){gt(e,s,o),n=!0},p(s,o){const r={};o&6&&(r.colOffset=s[16].date.getHours()>=s[2]?s[1]:0),e.$set(r)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){_t(e,s)}}}function it(t){let e,n,s=t[4](t[13].matches[0].date)+"",o,r,u,i=t[13].matches,l=[];for(let c=0;c<i.length;c+=1)l[c]=at(ot(t,i,c));const a=c=>F(l[c],1,1,()=>{l[c]=null});return{c(){e=T("div"),n=T("span"),o=N();for(let c=0;c<l.length;c+=1)l[c].c();r=N(),p(n,"class","date svelte-i40qko"),b(n,"grid-row","span "+(t[13].hasDoubles?2:1)),p(e,"class","row svelte-i40qko")},m(c,f){x(c,e,f),h(e,n),n.innerHTML=s,h(e,o);for(let d=0;d<l.length;d+=1)l[d].m(e,null);h(e,r),u=!0},p(c,f){if(f&14){i=c[13].matches;let d;for(d=0;d<i.length;d+=1){const g=ot(c,i,d);l[d]?(l[d].p(g,f),y(l[d],1)):(l[d]=at(g),l[d].c(),y(l[d],1),l[d].m(e,r))}for(mt(),d=i.length;d<l.length;d+=1)a(d);pt()}},i(c){if(!u){for(let f=0;f<i.length;f+=1)y(l[f]);u=!0}},o(c){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)F(l[f]);u=!1},d(c){c&&X(e),dt(l,c)}}}function Ut(t){let e,n,s,o=t[3],r=[];for(let i=0;i<o.length;i+=1)r[i]=it(rt(t,o,i));const u=i=>F(r[i],1,1,()=>{r[i]=null});return{c(){e=T("main"),n=T("div");for(let i=0;i<r.length;i+=1)r[i].c();p(n,"class","container svelte-i40qko"),b(n,"grid-template-columns","5em repeat("+t[0]+", 1fr)")},m(i,l){x(i,e,l),h(e,n);for(let a=0;a<r.length;a+=1)r[a].m(n,null);s=!0},p(i,[l]){if(l&30){o=i[3];let a;for(a=0;a<o.length;a+=1){const c=rt(i,o,a);r[a]?(r[a].p(c,l),y(r[a],1)):(r[a]=it(c),r[a].c(),y(r[a],1),r[a].m(n,null))}for(mt(),a=o.length;a<r.length;a+=1)u(a);pt()}(!s||l&1)&&b(n,"grid-template-columns","5em repeat("+i[0]+", 1fr)")},i(i){if(!s){for(let l=0;l<o.length;l+=1)y(r[l]);s=!0}},o(i){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)F(r[l]);s=!1},d(i){i&&X(e),dt(r,i)}}}function Bt(t,e,n){const s=new Set,o=Ct.split(`
`).filter(m=>m.length>1).map(m=>{const[A,v,S,M,D]=m.split("	"),B=s.has(S);s.add(S);const W=new Date(S);return{matchNum:+A,round:v,date:W,team1:M,team2:D,isDoubleTime:B}}),r=[];let u={hasDoubles:!1,matches:[]},i=0;for(let m of o)u.matches.length&&m.date.getDate()!==u.matches[0].date.getDate()&&(r.push(u),u={hasDoubles:!1,matches:[]}),u.matches.push(m),m.isDoubleTime&&(u.hasDoubles=!0),m.date.getHours()>i&&(i=m.date.getHours());r.push(u);let l=24,a=0,c=0;const f=o[4].date.getHours(),d=o[7].date.getHours(),g=d<f;if(g){const m=d+4;a=f-2-m,c=m,l-=a,i===23&&(l+=1)}else a=f,l=l-a-(24-d-2);console.log({cols:l,colOffset:a,colOffsetStart:c,shouldShrinkMiddle:g});const R=new Intl.DateTimeFormat("en",{month:"short",day:"numeric",weekday:"short"});function U(m){const A=R.formatToParts(m);for(const v of A)v.type==="literal"&&v.value===", "&&(v.value=",<br>");return A.map(v=>v.value).join("")}return[l,a,c,r,U]}class wt extends At{constructor(e){super(),Tt(this,e,Bt,Ut,ft,{})}}new wt({target:document.getElementById("app")});