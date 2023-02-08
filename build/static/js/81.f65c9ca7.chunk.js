"use strict";(self.webpackChunkionic_geocow_uni=self.webpackChunkionic_geocow_uni||[]).push([[81],{2081:function(e,t,r){r.r(t),r.d(t,{FilesystemWeb:function(){return f}});var n=r(7762),a=r(2982),i=r(4165),s=r(5861),c=r(5671),o=r(3144),u=r(136),p=r(9388);function h(e){var t=e.split("/").filter((function(e){return"."!==e})),r=[];return t.forEach((function(e){".."===e&&r.length>0&&".."!==r[r.length-1]?r.pop():r.push(e)})),r.join("/")}function d(e,t){e=h(e),t=h(t);var r=e.split("/"),n=t.split("/");return e!==t&&r.every((function(e,t){return e===n[t]}))}var f=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return(0,o.Z)(r,[{key:"initDb",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._db){e.next=2;break}return e.abrupt("return",this._db);case 2:if("indexedDB"in window){e.next=4;break}throw this.unavailable("This browser doesn't support IndexedDB");case 4:return e.abrupt("return",new Promise((function(e,n){var a=indexedDB.open(t.DB_NAME,t.DB_VERSION);a.onupgradeneeded=r.doUpgrade,a.onsuccess=function(){t._db=a.result,e(a.result)},a.onerror=function(){return n(a.error)},a.onblocked=function(){console.warn("db blocked")}})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dbRequest",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(i,s){var c=e.transaction(["FileStorage"],n).objectStore("FileStorage"),o=c[t].apply(c,(0,a.Z)(r));o.onsuccess=function(){return i(o.result)},o.onerror=function(){return s(o.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"dbIndexRequest",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r,n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=-1!==this._writeCmds.indexOf(r)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(i,c){var o=e.transaction(["FileStorage"],s).objectStore("FileStorage").index(t),u=o[r].apply(o,(0,a.Z)(n));u.onsuccess=function(){return i(u.result)},u.onerror=function(){return c(u.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getPath",value:function(e,t){var r=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",n="";return void 0!==e&&(n+="/"+e),""!==t&&(n+="/"+r),n}},{key:"clear",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:t=e.sent,r=t.transaction(["FileStorage"],"readwrite"),r.objectStore("FileStorage").clear();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"readFile",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=6;break}throw Error("File does not exist.");case 6:return e.abrupt("return",{data:n.content?n.content:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeFile",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,a,s,c,o,u,p,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=t.encoding,s=t.recursive,e.next=6,this.dbRequest("get",[r]);case 6:if(!(c=e.sent)||"directory"!==c.type){e.next=9;break}throw Error("The supplied path is a directory.");case 9:return o=r.substr(0,r.lastIndexOf("/")),e.next=12,this.dbRequest("get",[o]);case 12:if(void 0!==e.sent){e.next=19;break}if(-1===(u=o.indexOf("/",1))){e.next=19;break}return p=o.substr(u),e.next=19,this.mkdir({path:p,directory:t.directory,recursive:s});case 19:if(a){e.next=23;break}if(n=n.indexOf(",")>=0?n.split(",")[1]:n,this.isBase64String(n)){e.next=23;break}throw Error("The supplied data is not valid base64 content.");case 23:return h=Date.now(),d={path:r,folder:o,type:"file",size:n.length,ctime:h,mtime:h,content:n},e.next=27,this.dbRequest("put",[d]);case 27:return e.abrupt("return",{uri:d.path});case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"appendFile",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,a,s,c,o,u,p,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=t.encoding,s=r.substr(0,r.lastIndexOf("/")),c=Date.now(),o=c,e.next=8,this.dbRequest("get",[r]);case 8:if(!(u=e.sent)||"directory"!==u.type){e.next=11;break}throw Error("The supplied path is a directory.");case 11:return e.next=13,this.dbRequest("get",[s]);case 13:if(void 0!==e.sent){e.next=20;break}if(-1===(p=s.indexOf("/",1))){e.next=20;break}return h=s.substr(p),e.next=20,this.mkdir({path:h,directory:t.directory,recursive:!0});case 20:if(a||this.isBase64String(n)){e.next=22;break}throw Error("The supplied data is not valid base64 content.");case 22:return void 0!==u&&(n=void 0===u.content||a?u.content+n:btoa(atob(u.content)+atob(n)),o=u.ctime),d={path:r,folder:s,type:"file",size:n.length,ctime:o,mtime:c,content:n},e.next=26,this.dbRequest("put",[d]);case 26:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==e.sent){e.next=6;break}throw Error("File does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:if(0===e.sent.length){e.next=11;break}throw Error("Folder is not empty.");case 11:return e.next=13,this.dbRequest("delete",[r]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mkdir",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,a,s,c,o,u,p,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.recursive,a=r.substr(0,r.lastIndexOf("/")),s=(r.match(/\//g)||[]).length,e.next=6,this.dbRequest("get",[a]);case 6:return c=e.sent,e.next=9,this.dbRequest("get",[r]);case 9:if(o=e.sent,1!==s){e.next=12;break}throw Error("Cannot create Root directory");case 12:if(void 0===o){e.next=14;break}throw Error("Current directory does already exist.");case 14:if(n||2===s||void 0!==c){e.next=16;break}throw Error("Parent directory must exist");case 16:if(!n||2===s||void 0!==c){e.next=20;break}return u=a.substr(a.indexOf("/",1)),e.next=20,this.mkdir({path:u,directory:t.directory,recursive:n});case 20:return p=Date.now(),h={path:r,folder:a,type:"directory",size:0,ctime:p,mtime:p},e.next=24,this.dbRequest("put",[h]);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rmdir",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,a,s,c,o,u,p,h,d,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.directory,s=t.recursive,c=this.getPath(a,r),e.next=4,this.dbRequest("get",[c]);case 4:if(void 0!==(o=e.sent)){e.next=7;break}throw Error("Folder does not exist.");case 7:if("directory"===o.type){e.next=9;break}throw Error("Requested path is not a directory");case 9:return e.next=11,this.readdir({path:r,directory:a});case 11:if(0===(u=e.sent).files.length||s){e.next=14;break}throw Error("Folder is not empty");case 14:p=(0,n.Z)(u.files),e.prev=15,p.s();case 17:if((h=p.n()).done){e.next=32;break}return d=h.value,f="".concat(r,"/").concat(d.name),e.next=22,this.stat({path:f,directory:a});case 22:if("file"!==e.sent.type){e.next=28;break}return e.next=26,this.deleteFile({path:f,directory:a});case 26:e.next=30;break;case 28:return e.next=30,this.rmdir({path:f,directory:a,recursive:s});case 30:e.next=17;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(15),p.e(e.t0);case 37:return e.prev=37,p.f(),e.finish(37);case 40:return e.next=42,this.dbRequest("delete",[c]);case 42:case"end":return e.stop()}}),e,this,[[15,34,37,40]])})));return function(t){return e.apply(this,arguments)}}()},{key:"readdir",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,a,c,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,""===t.path||void 0!==n){e.next=6;break}throw Error("Folder does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:return a=e.sent,e.next=11,Promise.all(a.map(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dbRequest("get",[t]);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.next=6,o.dbRequest("get",[t+"/"]);case 6:n=e.sent;case 7:return e.abrupt("return",{name:t.substring(r.length+1),type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:return c=e.sent,e.abrupt("return",{files:c});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUri",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:return e.abrupt("return",{uri:(null===n||void 0===n?void 0:n.path)||r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:if(void 0!==n){e.next=10;break}throw Error("Entry does not exist.");case 10:return e.abrupt("return",{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rename",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._copy(t,!0);case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"copy",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!1));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestPermissions",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkPermissions",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_copy",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,a,c,o,u,p,h,f,l,x,v,b,y,k,w,m,g,Z,R,q=this,E=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=E.length>1&&void 0!==E[1]&&E[1],a=t.toDirectory,c=t.to,o=t.from,u=t.directory,c&&o){e.next=5;break}throw Error("Both to and from must be provided");case 5:if(a||(a=u),p=this.getPath(u,o),h=this.getPath(a,c),p!==h){e.next=10;break}return e.abrupt("return",{uri:h});case 10:if(!d(p,h)){e.next=12;break}throw Error("To path cannot contain the from path");case 12:return e.prev=12,e.next=15,this.stat({path:c,directory:a});case 15:f=e.sent,e.next=29;break;case 18:if(e.prev=18,e.t0=e.catch(12),(l=c.split("/")).pop(),x=l.join("/"),!(l.length>0)){e.next=29;break}return e.next=26,this.stat({path:x,directory:a});case 26:if("directory"===e.sent.type){e.next=29;break}throw new Error("Parent directory of the to path is a file");case 29:if(!f||"directory"!==f.type){e.next=31;break}throw new Error("Cannot overwrite a directory with a file");case 31:return e.next=33,this.stat({path:o,directory:u});case 33:v=e.sent,b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r,n){var s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=q.getPath(a,t),e.next=3,q.dbRequest("get",[s]);case 3:return(c=e.sent).ctime=r,c.mtime=n,e.next=8,q.dbRequest("put",[c]);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=v.ctime?v.ctime:Date.now(),e.t1=v.type,e.next="file"===e.t1?39:"directory"===e.t1?52:87;break;case 39:return e.next=41,this.readFile({path:o,directory:u});case 41:if(k=e.sent,!r){e.next=45;break}return e.next=45,this.deleteFile({path:o,directory:u});case 45:return e.next=47,this.writeFile({path:c,directory:a,data:k.data});case 47:if(w=e.sent,!r){e.next=51;break}return e.next=51,b(c,y,v.mtime);case 51:return e.abrupt("return",w);case 52:if(!f){e.next=54;break}throw Error("Cannot move a directory over an existing object");case 54:return e.prev=54,e.next=57,this.mkdir({path:c,directory:a,recursive:!1});case 57:if(!r){e.next=60;break}return e.next=60,b(c,y,v.mtime);case 60:e.next=64;break;case 62:e.prev=62,e.t2=e.catch(54);case 64:return e.next=66,this.readdir({path:o,directory:u});case 66:m=e.sent.files,g=(0,n.Z)(m),e.prev=68,g.s();case 70:if((Z=g.n()).done){e.next=76;break}return R=Z.value,e.next=74,this._copy({from:"".concat(o,"/").concat(R),to:"".concat(c,"/").concat(R),directory:u,toDirectory:a},r);case 74:e.next=70;break;case 76:e.next=81;break;case 78:e.prev=78,e.t3=e.catch(68),g.e(e.t3);case 81:return e.prev=81,g.f(),e.finish(81);case 84:if(!r){e.next=87;break}return e.next=87,this.rmdir({path:o,directory:u});case 87:return e.abrupt("return",{uri:h});case 88:case"end":return e.stop()}}),e,this,[[12,18],[54,62],[68,78,81,84]])})));return function(t){return e.apply(this,arguments)}}()},{key:"isBase64String",value:function(e){try{return btoa(atob(e))==e}catch(t){return!1}}}],[{key:"doUpgrade",value:function(e){var t=e.target.result;e.oldVersion,t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}]),r}(r(7991).Uw);f._debug=!0}}]);
//# sourceMappingURL=81.f65c9ca7.chunk.js.map