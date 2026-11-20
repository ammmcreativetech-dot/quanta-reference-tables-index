'use strict';
const {entries}=require('./reference-index.json');
module.exports={entries,getReferenceById:id=>entries.find(x=>x.id===id),getMainTables:()=>entries.filter(x=>x.kind==='main-table'),getSupplements:()=>entries.filter(x=>x.kind==='supplement')};
