"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[515,5422,9655],{79655:(e,t,i)=>{i.r(t),i.d(t,{FileHandle:()=>a,FolderHandle:()=>o,default:()=>l});var r=i(25422);const{DISALLOWED:n}=r.errors;class s{constructor(e,t){this.writer=e,this.fileEntry=t}async write(e){if("object"===typeof e)if("write"===e.type){if(Number.isInteger(e.position)&&e.position>=0&&(this.writer.seek(e.position),this.writer.position!==e.position&&(await new Promise(((t,i)=>{this.writer.onwriteend=t,this.writer.onerror=i,this.writer.truncate(e.position)})),this.writer.seek(e.position))),!("data"in e))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. write requires a data argument","SyntaxError");e=e.data}else{if("seek"===e.type){if(Number.isInteger(e.position)&&e.position>=0){if(this.writer.seek(e.position),this.writer.position!==e.position)throw new DOMException("seeking position failed","InvalidStateError");return}throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. seek requires a position argument","SyntaxError")}if("truncate"===e.type)return new Promise((t=>{if(!(Number.isInteger(e.size)&&e.size>=0))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. truncate requires a size argument","SyntaxError");this.writer.onwriteend=e=>t(),this.writer.truncate(e.size)}))}await new Promise(((t,i)=>{this.writer.onwriteend=t,this.writer.onerror=i,this.writer.write(new Blob([e]))}))}close(){return new Promise(this.fileEntry.file.bind(this.fileEntry))}}class a{constructor(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.file=e,this.kind="file",this.writable=t,this.readable=!0}get name(){return this.file.name}isSameEntry(e){return this.file.toURL()===e.file.toURL()}getFile(){return new Promise(this.file.file.bind(this.file))}createWritable(e){if(!this.writable)throw new DOMException(...n);return new Promise(((t,i)=>this.file.createWriter((i=>{!1===e.keepExistingData?(i.onwriteend=e=>t(new s(i,this.file)),i.truncate(0)):t(new s(i,this.file))}),i)))}}class o{constructor(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.dir=e,this.writable=t,this.readable=!0,this.kind="directory",this.name=e.name}isSameEntry(e){return this.dir.fullPath===e.dir.fullPath}async*entries(){const e=this.dir.createReader(),t=await new Promise(e.readEntries.bind(e));for(const i of t)yield[i.name,i.isFile?new a(i,this.writable):new o(i,this.writable)]}getDirectoryHandle(e,t){return new Promise(((i,r)=>{this.dir.getDirectory(e,t,(e=>{i(new o(e))}),r)}))}getFileHandle(e,t){return new Promise(((i,r)=>this.dir.getFile(e,t,(e=>i(new a(e))),r)))}async removeEntry(e,t){const i=await this.getDirectoryHandle(e,{create:!1}).catch((t=>"TypeMismatchError"===t.name?this.getFileHandle(e,{create:!1}):t));if(i instanceof Error)throw i;return new Promise(((e,r)=>{i instanceof o?t.recursive?i.dir.removeRecursively((()=>e()),r):i.dir.remove((()=>e()),r):i.file&&i.file.remove((()=>e()),r)}))}}const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(((t,i)=>window.webkitRequestFileSystem(e._persistent,0,(e=>t(new o(e.root))),i)))}},25422:(e,t,i)=>{i.r(t),i.d(t,{config:()=>n,errors:()=>r,fromDataTransfer:()=>s,getDirHandlesFromInput:()=>a,getFileHandlesFromInput:()=>o});const r={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>["Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ".concat(e),"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},n={writable:globalThis.WritableStream};async function s(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");const[t,r,n]=await Promise.all([i.e(258).then(i.bind(i,20258)),i.e(9655).then(i.bind(i,79655)),Promise.resolve().then(i.bind(i,73372))]),s=new t.FolderHandle("",!1);return s._entries=e.map((e=>e.isFile?new r.FileHandle(e,!1):new r.FolderHandle(e,!1))),new n.FileSystemDirectoryHandle(s)}async function a(e){const{FolderHandle:t,FileHandle:r}=await i.e(258).then(i.bind(i,20258)),{FileSystemDirectoryHandle:n}=await Promise.resolve().then(i.bind(i,73372)),s=Array.from(e.files),a=s[0].webkitRelativePath.split("/",1)[0],o=new t(a,!1);return s.forEach((e=>{const i=e.webkitRelativePath.split("/");i.shift();const n=i.pop();i.reduce(((e,i)=>(e._entries[i]||(e._entries[i]=new t(i,!1)),e._entries[i])),o)._entries[n]=new r(e.name,e,!1)})),new n(o)}async function o(e){const{FileHandle:t}=await i.e(258).then(i.bind(i,20258)),{FileSystemFileHandle:r}=await Promise.resolve().then(i.bind(i,64156));return Array.from(e.files).map((e=>new r(new t(e.name,e,!1))))}}}]);
//# sourceMappingURL=515.3ece59f7.chunk.js.map