(window.webpackJsonpevernote=window.webpackJsonpevernote||[]).push([[0],{215:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(15),i=n.n(r),s=(n(94),n(12)),c=n.n(s),l=n(27),d=n(28),u=n(17),p=n(10),h=n(18),b=n(19),f=n(21),N=(n(96),n(6)),m=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#29487d",color:"white","&:hover":{backgroundColor:"#88a2ce"}},sidebarContainer:{marginTop:"0px",width:"300px",height:"100%",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{width:"100%",margin:"0px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{width:"100%",backgroundColor:"#28787c",borderRadius:"0px",color:"white"}}},x=n(234),v=n(233),w=n(235),g=function(e){return{listItem:{cursor:"pointer"},textSection:{maxWidth:"85%"},deleteIcon:{position:"absolute",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},y=n(232),k=n(236),I=n(82),O=n.n(I);var j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).selectNote=function(e,t){return n.props.selectNote(e,t)},n.deleteNote=function(e){window.confirm("Are you sure you want to delete note: ".concat(e.title))&&n.props.deleteNote(e)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n._index,r=n._note,i=n.classes,s=n.selectedNoteIndex;return a.a.createElement("div",{key:o},a.a.createElement(y.a,{className:i.listItem,selected:s===o,alignItems:"flex-start"},a.a.createElement("div",{className:i.textSection,onClick:function(){return t.selectNote(r,o)}},a.a.createElement(k.a,{primary:r.title,secondary:(e=r.body.substring(0,30)+"...",e.replace(/<[^>]*>?/gm,""))})),a.a.createElement(O.a,{onClick:function(){return t.deleteNote(r)},className:i.deleteIcon})))}}]),t}(o.Component),S=Object(N.a)(g)(j),E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).newNoteBtnClick=function(){e.setState({title:null,addingNote:!e.state.addingNote})},e.updateTitle=function(t){e.setState({title:t})},e.newNote=function(){e.props.newNote(e.state.title),e.setState({title:null,addingNote:!1})},e.selectNote=function(t,n){return e.props.selectNote(t,n)},e.deleteNote=function(t){return e.props.deleteNote(t)},e.state={addingNote:!1,title:null},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.notes,o=t.classes,r=t.selectedNoteIndex;return n?a.a.createElement("div",{className:o.sidebarContainer},a.a.createElement(v.a,{onClick:this.newNoteBtnClick,className:o.newNoteBtn},this.state.addingNote?"Cancel":"New Note"),this.state.addingNote?a.a.createElement("div",null,a.a.createElement("input",{type:"text",className:o.newNoteInput,placeholder:"Enter note title",onKeyUp:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(v.a,{className:o.newNoteSubmitBtn,onClick:this.newNote},"SubmitNote")):null,a.a.createElement(x.a,null,n.map(function(t,n){return a.a.createElement("div",{key:n},a.a.createElement(S,{_note:t,_index:n,selectedNoteIndex:r,selectNote:e.selectNote,deleteNote:e.deleteNote}),a.a.createElement(w.a,null))}))):a.a.createElement("div",null)}}]),t}(o.Component),C=Object(N.a)(m)(E),B=n(83),T=n.n(B),U=n(84),z=n.n(U),_=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},titleInput:{height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",width:"calc(100% - 300px)",backgroundColor:"#29487d",color:"white",paddingLeft:"50px"},editIcon:{position:"absolute",left:"310px",top:"12px",color:"white",width:"10",height:"10"},editorContainer:{height:"100%",boxSizing:"border-box"}}},A=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).componentDidMount=function(){e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.componentDidUpdate=function(){e.props.selectedNote.id!==e.state.id&&e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.update=function(e,t,n){var o,a;return function(){function r(){o=null,n||(a=e.apply(i,s))}var i=this,s=arguments;return clearTimeout(o),o=setTimeout(r,t),n&&!o&&(a=e.apply(i,s)),a}}(function(){e.props.noteUpdate(e.state.id,{title:e.state.title,body:e.state.text})},1500),e.updateBody=function(){var t=Object(d.a)(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({text:n});case 2:e.update();case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.updateTitle=function(){var t=Object(d.a)(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({title:n});case 2:e.update();case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={text:"",title:"",id:""},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement("div",{className:t.editorContainer},a.a.createElement(z.a,{className:t.editIcon}),a.a.createElement("input",{className:t.titleInput,placeholder:"Note title...",value:this.state.title?this.state.title:"",onChange:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(T.a,{value:this.state.text,onChange:this.updateBody}))}}]),t}(o.Component),D=Object(N.a)(_)(A),R=n(78),W=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).componentDidMount=function(){R.firestore().collection("notes").onSnapshot(function(t){var n=t.docs.map(function(e){var t=e.data();return t.id=e.id,t});console.log(n),e.setState({notes:n})})},e.selectNote=function(t,n){return e.setState({selectedNoteIndex:n,selectedNote:t})},e.noteUpdate=function(e,t){R.firestore().collection("notes").doc(e).update({title:t.title,body:t.body,timestamp:R.firestore.FieldValue.serverTimestamp()})},e.newNote=function(){var t=Object(d.a)(c.a.mark(function t(n){var o,a,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={title:n,body:""},t.next=3,R.firestore().collection("notes").add({title:o.title,body:o.body,timestamp:R.firestore.FieldValue.serverTimestamp()});case 3:return a=t.sent,r=a.id,t.next=7,e.setState({notes:[].concat(Object(l.a)(e.state.notes),[o])});case 7:i=e.state.notes.indexOf(e.state.notes.filter(function(e){return e.id=r})[0]),e.setState({selectedNote:e.state.notes[i],selectedNodeIndex:i});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.deleteNote=function(){var t=Object(d.a)(c.a.mark(function t(n){var o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.nodes.indexOf(n),t.next=3,e.setState({notes:e.state.notes.filter(function(e){return e!==n})});case 3:e.state.selectedNodeIndex===o?e.setState({selectedNodeIndex:null,selectedNote:null}):e.state.notes.length>1?e.selectNote(e.state.notes[e.state.selectedNodeIndex-1],e.state.selectedNodeIndex-1):e.setState({selectedNodeIndex:null,selectedNote:null}),R.firestore().collection("notes").doc(n.id).delete();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={selectedNodeIndex:null,selectedNote:null,notes:null},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement(C,{selectedNodeIndex:this.state.selectedNodeIndex,notes:this.state.notes,deleteNote:this.deleteNote,selectNote:this.selectNote,newNote:this.newNote}),this.state.selectedNote?a.a.createElement(D,{selectedNote:this.state.selectedNote,selectedNodeIndex:this.state.selectedNodeIndex,notes:this.state.notes,noteUpdate:this.noteUpdate}):null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(78);n(214);K.initializeApp({apiKey:"AIzaSyDyVfAOtwHX68ZFW7K__lUuKyx5xgoWR98",authDomain:"evernote-bbb60.firebaseapp.com",databaseURL:"https://evernote-bbb60.firebaseio.com",projectId:"evernote-bbb60",storageBucket:"evernote-bbb60.appspot.com",messagingSenderId:"371498432839",appId:"1:371498432839:web:90a07317b5d16d7e"}),i.a.render(a.a.createElement(W,null),document.getElementById("evernote-container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n(215)},94:function(e,t,n){},96:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.670a9511.chunk.js.map