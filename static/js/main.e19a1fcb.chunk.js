(this.webpackJsonporcs=this.webpackJsonporcs||[]).push([[0],{347:function(e,t,n){},348:function(e,t,n){},351:function(e,t){},353:function(e,t){},369:function(e,t){},370:function(e,t){},456:function(e,t){},458:function(e,t){},472:function(e,t){},476:function(e,t){},478:function(e,t){},488:function(e,t){},490:function(e,t){},517:function(e,t){},519:function(e,t){},524:function(e,t){},526:function(e,t){},533:function(e,t){},545:function(e,t){},548:function(e,t){},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r=n(25),o=new r.d.PublicKey("29UUqjwkTRqVMQ51GNjn9soSouXiC7vPvUMZJKaZ286f"),c=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),a=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")},560:function(e,t){},561:function(e,t,n){"use strict";n.r(t);var r,o,c,a,i=n(1),s=n.n(i),u=n(27),l=n.n(u),f=(n(347),n(348),n(15)),d=n(2),b=n.n(d),m=n(3),p=n(12),g=n(131),j=n(132),O=n(305),x=n(588),v=n(593),y=n(597),h=n(596),w=n(6),P=n(50),S=n(169),k=n(93),R=n(36),A=Object(j.a)(S.a)(r||(r=Object(g.a)([""]))),T=j.a.span(o||(o=Object(g.a)([""]))),_=j.a.div(c||(c=Object(g.a)([""]))),K=Object(j.a)(x.a)(a||(a=Object(g.a)([""]))),E=function(e){e.days;var t=e.hours,n=e.minutes,r=e.seconds;e.completed;return Object(R.jsxs)(T,{children:[t," hours, ",n," minutes, ",r," seconds"]})},L=function(e){var t=Object(i.useState)(),n=Object(p.a)(t,2),r=n[0],o=n[1],c=Object(i.useState)(!1),a=Object(p.a)(c,2),s=a[0],u=a[1],l=Object(i.useState)(!1),d=Object(p.a)(l,2),g=d[0],j=d[1],x=Object(i.useState)(!1),S=Object(p.a)(x,2),T=S[0],L=S[1],D=Object(i.useState)(0),B=Object(p.a)(D,2),C=B[0],M=B[1],I=Object(i.useState)({open:!1,message:"",severity:void 0}),U=Object(p.a)(I,2),W=U[0],N=U[1],G=Object(i.useState)(),Y=Object(p.a)(G,2),J=Y[0],V=Y[1],X=Object(P.c)(),F=Object(i.useState)(),Z=Object(p.a)(F,2),H=Z[0],q=Z[1],z=Object(i.useState)(),Q=Object(p.a)(z,2),$=Q[0],ee=Q[1],te=Object(i.useState)(),ne=Object(p.a)(te,2),re=ne[0],oe=ne[1],ce=function(){var t=Object(m.a)(b.a.mark((function t(){var n,r,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,L(!0),!(X&&(null===H||void 0===H?void 0:H.program)&&(null===re||void 0===re?void 0:re.config))){t.next=12;break}return console.log("About to mint one token!"),t.next=6,Object(k.e)(re,X.publicKey,e.treasury);case 6:return n=t.sent,console.log("got mint tx id ".concat(n)),t.next=10,Object(k.b)(n,e.txTimeout,e.connection,"singleGossip",!1);case 10:(null===(r=t.sent)||void 0===r?void 0:r.err)?N({open:!0,message:"Mint failed! Please try again!",severity:"error"}):N({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 12:t.next=20;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",j(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),N({open:!0,message:c,severity:"error"});case 20:if(t.prev=20,!X){t.next=26;break}return t.next=24,e.connection.getBalance(X.publicKey);case 24:a=t.sent,o(a/w.LAMPORTS_PER_SOL);case 26:return L(!1),t.finish(20);case 28:case"end":return t.stop()}}),t,null,[[0,14,20,28]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(m.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!X){t.next=5;break}return t.next=3,e.connection.getBalance(X.publicKey);case 3:n=t.sent,o(n/w.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[X,e.connection]),Object(i.useEffect)((function(){Object(m.a)(b.a.mark((function t(){var n,r,o,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(X){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(k.c)(X,e.orcsId,e.connection);case 4:return n=t.sent,t.next=7,Object(k.d)(X.publicKey,n);case 7:return r=t.sent[0],t.next=10,n.orcs.connection.getAccountInfo(r);case 10:return o=t.sent,oe(n),j(0===n.itemsRemaining),q(n.orcs),M(n.itemsRemaining),t.next=17,n.orcs.connection.getAccountInfo(k.a);case 17:if(!(c=t.sent)){t.next=33;break}if(a=n.orcs.program.coder.accounts.decode("Orcs",c.data),!o){t.next=27;break}return t.next=23,n.orcs.program.account.whitelistPdaUser.fetch(r);case 23:t.sent.data.isTeamMember?(ee(0),V(n.teamWhitelistGoLiveDate),N({open:!0,message:"Recognized as team member",severity:"success"})):(ee(a.data.whitelistedPrice/w.LAMPORTS_PER_SOL),V(n.whitelistGoLiveDate),N({open:!0,message:"Recognized as whitelisted user",severity:"success"})),t.next=29;break;case 27:ee(a.data.price/w.LAMPORTS_PER_SOL),V(n.goLiveDate);case 29:console.log("Got go live date ".concat(n.goLiveDate)),console.log("Got state program ".concat(n.orcs.program.programId.toBase58())),console.log("Got state id ".concat(n.orcs.id.toBase58())),console.log("Got state connection ".concat(n.orcs.connection));case 33:case"end":return t.stop()}}),t)})))()}),[X,e.orcsId,e.connection]),Object(R.jsxs)("main",{children:[X&&Object(R.jsxs)("p",{children:["Address: ",Object(k.f)(X.publicKey.toBase58()||"")]}),X&&Object(R.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),Object(R.jsx)(_,{children:X?Object(R.jsx)(K,{disabled:g||T||!s,onClick:ce,variant:"contained",children:g?"SOLD OUT":s?T?Object(R.jsx)(v.a,{}):"MINT for ".concat($," SOL (").concat(C," remaining)"):Object(R.jsx)(O.a,{date:J,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:E})}):Object(R.jsx)(A,{children:"Connect Wallet"})}),Object(R.jsx)(y.a,{open:W.open,autoHideDuration:6e3,onClose:function(){return N(Object(f.a)(Object(f.a)({},W),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return N(Object(f.a)(Object(f.a)({},W),{},{open:!1}))},severity:W.severity,children:W.message})})]})},D=n(25),B=n(114),C=n(334),M=n(594),I=new D.d.PublicKey("6i21TLXPGjwrAi8GEjUutNnkkJa3tFJr6KBAVbxToMH9"),U=new D.d.PublicKey("DjZWBoyLzDRTkkdZXijfKJjgKQSWFRhPXycfjYYMwgXt"),W="testnet",N=new D.d.Connection("https://api.testnet.solana.com"),G=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ORCS_DATA_ACCOUNT_ID:"DjZWBoyLzDRTkkdZXijfKJjgKQSWFRhPXycfjYYMwgXt",REACT_APP_ORCS_PROGRAM_ID:"29UUqjwkTRqVMQ51GNjn9soSouXiC7vPvUMZJKaZ286f",REACT_APP_TREASURY_ADDRESS:"6i21TLXPGjwrAi8GEjUutNnkkJa3tFJr6KBAVbxToMH9",REACT_APP_SOLANA_NETWORK:"testnet",REACT_APP_SOLANA_RPC_HOST:"https://api.testnet.solana.com"}).REACT_APP_ORCS_START_DATE,10),Y=Object(C.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),J=function(){var e=Object(i.useMemo)((function(){return Object(w.clusterApiUrl)(W)}),[]),t=Object(i.useMemo)((function(){return[Object(B.a)(),Object(B.b)(),Object(B.c)(),Object(B.e)({network:W}),Object(B.d)({network:W})]}),[]);return Object(R.jsx)(M.a,{theme:Y,children:Object(R.jsx)(P.a,{endpoint:e,children:Object(R.jsx)(P.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(S.b,{children:Object(R.jsx)(L,{orcsId:U,connection:N,startDate:G,treasury:I,txTimeout:3e6})})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,598)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};l.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(J,{})}),document.getElementById("root")),V()},93:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return x}));var r=n(2),o=n.n(r),c=n(3),a=n(25),i=n(52),s=n(55),u=n(6),l=new a.d.PublicKey("DjZWBoyLzDRTkkdZXijfKJjgKQSWFRhPXycfjYYMwgXt"),f=function(){var e=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,s,u,l,f=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]?f[3]:"recent",i=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(o.a.mark((function e(f,d){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),a)}catch(b){s=!0,console.error("WS error in setup",t,b)}case 2:if(s||!i){e.next=8;break}return Object(c.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:if(u=e.sent,!r._signatureSubscriptions[l]){e.next=11;break}return e.next=11,r.removeSignatureListener(l);case 11:return s=!0,console.log("Returning status",u),e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,o){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:o,isSigner:!1,isWritable:!1},{pubkey:a.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:a.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new a.d.TransactionInstruction({keys:c,programId:s.b,data:e.from([])})},b=function(){var e=Object(c.a)(o.a.mark((function e(t,n,r){var c,i,u,f,d,b,m,p,g,j,O,x,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new a.b(r,t,{preflightCommitment:"recent"}),e.t0=JSON,e.next=4,fetch("idl/orcs.json").then((function(e){return e.text()}));case 4:return e.t1=e.sent,i=e.t0.parse.call(e.t0,e.t1),u=new a.a(i,s.a,c),f={id:n,connection:r,program:u},e.next=10,u.account.orcs.fetch(l);case 10:return d=e.sent,b=d.data.itemsAvailable.toNumber(),m=d.itemsRedeemed.toNumber(),p=d.config,g=d.data.uuid,j=b-m,O=d.data.goLiveDate.toNumber(),O=new Date(1e3*O),x=new Date(1e3*d.data.whitelistGoLiveDate.toNumber()),v=new Date(1e3*d.data.teamWhitelistGoLiveDate.toNumber()),e.abrupt("return",{orcs:f,itemsAvailable:b,itemsRedeemed:m,itemsRemaining:j,goLiveDate:O,whitelistGoLiveDate:x,teamWhitelistGoLiveDate:v,config:p,uuid:g});case 21:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),s.c.toBuffer(),n.toBuffer(),e.from("edition")],s.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),s.c.toBuffer(),n.toBuffer()],s.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(o.a.mark((function t(n,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.PublicKey.findProgramAddress([e.from("orcs"),r.config.toBuffer(),e.from(r.uuid),n.toBuffer()],s.a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],s.b);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var O=function(){var e=Object(c.a)(o.a.mark((function e(t,n,r){var c,u,l,f,b,O,x,v,y,h,w,P,S,k,R;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.orcs,u=a.d.Keypair.generate(),e.next=4,j(n,u.publicKey);case 4:return l=e.sent,f=c.connection,b=c.program,e.next=9,p(u.publicKey);case 9:return O=e.sent,e.next=12,m(u.publicKey);case 12:return x=e.sent,e.next=15,f.getMinimumBalanceForRentExemption(i.a.span);case 15:return v=e.sent,e.next=18,f.getAccountInfo(new a.d.PublicKey(c.id));case 18:if(!(y=e.sent)){e.next=66;break}return h=b.coder.accounts.decode("Orcs",y.data),w=new a.d.PublicKey(h.config),console.log("PROGRAM ".concat(b)),console.log("about to mint nft w/ config ".concat(w)),console.log("about to mint nft w/ orcs ".concat(c.id)),console.log("about to mint nft w/ payer ".concat(n)),console.log("about to mint nft w/ wallet ".concat(r)),console.log("about to mint nft w/ metadata ".concat(O)),console.log("about to mint nft w/ mint ".concat(u.publicKey)),console.log("about to mint nft w/ mintAuthority ".concat(n)),console.log("about to mint nft w/ updateAuthority ".concat(n)),console.log("about to mint nft w/ masterEdition ".concat(x)),console.log("about to mint nft w/ tokenMetadataProgram ".concat(s.c)),console.log("about to mint nft w/ tokenProgram ".concat(i.b)),console.log("about to mint nft w/ systemProgram ".concat(a.d.SystemProgram.programId)),console.log("about to mint nft w/ rent ".concat(a.d.SYSVAR_RENT_PUBKEY)),console.log("about to mint nft w/ clock ".concat(a.d.SYSVAR_CLOCK_PUBKEY)),console.log("Got state:",t),e.next=40,g(n,t);case 40:return P=e.sent[0],console.log("Got whitelistPDA",P.toBase58()),e.next=44,c.connection.getAccountInfo(P);case 44:if(S=e.sent,k=[a.d.SystemProgram.createAccount({fromPubkey:n,newAccountPubkey:u.publicKey,space:i.a.span,lamports:v,programId:i.b}),i.c.createInitMintInstruction(i.b,u.publicKey,0,n,n),d(l,n,n,u.publicKey),i.c.createMintToInstruction(i.b,u.publicKey,l,n,[],1)],!S){e.next=52;break}return e.next=49,b.account.whitelistPdaUser.fetch(P);case 49:e.t0=e.sent,e.next=53;break;case 52:e.t0=null;case 53:if((R=e.t0)?(console.log("Whitelist PDA got owner"),console.log("n redeemed:",R.data.nRedeemed.toNumber()),console.log("n redeemable:",R.data.nRedeemable.toNumber()),console.log("whitelistedPubkey:",R.data.whitelistedPubkey.toBase58()),console.log("config",R.config.toBase58(),"with UUID",R.data.uuid)):console.log("Whitelist PDA account info was null"),!(S&&R&&R.data.nRedeemed<R.data.nRedeemable)){e.next=61;break}return e.next=58,b.rpc.mintNftWhitelisted({accounts:{config:w,orcs:c.id,whitelistedUser:P,payer:n,wallet:r,metadata:O,mint:u.publicKey,mintAuthority:n,updateAuthority:n,masterEdition:x,tokenMetadataProgram:s.c,tokenProgram:i.b,systemProgram:a.d.SystemProgram.programId,rent:a.d.SYSVAR_RENT_PUBKEY,clock:a.d.SYSVAR_CLOCK_PUBKEY},signers:[u],instructions:k});case 58:return e.abrupt("return",e.sent);case 61:return e.next=63,b.rpc.mintNft({accounts:{config:w,orcs:c.id,payer:n,wallet:r,metadata:O,mint:u.publicKey,mintAuthority:n,updateAuthority:n,masterEdition:x,tokenMetadataProgram:s.c,tokenProgram:i.b,systemProgram:a.d.SystemProgram.programId,rent:a.d.SYSVAR_RENT_PUBKEY,clock:a.d.SYSVAR_CLOCK_PUBKEY},signers:[u],instructions:k});case 63:return e.abrupt("return",e.sent);case 64:e.next=67;break;case 66:throw new Error("Could not get account info for orcs program id.");case 67:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(8).Buffer)}},[[561,1,2]]]);
//# sourceMappingURL=main.e19a1fcb.chunk.js.map