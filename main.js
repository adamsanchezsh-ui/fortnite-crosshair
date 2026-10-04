const {app,BrowserWindow,screen}=require('electron');
const {exec}=require('child_process');

let win;
const OFFSET_X=3;
const OFFSET_Y=0;

function fortniteRunning(){return new Promise(resolve=>{exec('tasklist /FI "IMAGENAME eq FortniteClient-Win64-Shipping.exe" /NH',(e,out)=>resolve(!e&&/FortniteClient-Win64-Shipping\\.exe/i.test(out)));});}
function position(){
  if(!win)return;
  const b=screen.getPrimaryDisplay().bounds;
  const s=120;
  win.setBounds({x:Math.round(b.x+(b.width-s)/2)+OFFSET_X,y:Math.round(b.y+(b.height-s)/2)+OFFSET_Y,width:s,height:s},false);
}
async function sync(){
  if(!win)return;
  win.setIgnoreMouseEvents(true,{forward:true});
  const active=await fortniteRunning();
  if(active||!app.isPackaged){position();win.showInactive();}else win.hide();
}
app.whenReady().then(()=>{
  win=new BrowserWindow({width:120,height:120,transparent:true,frame:false,resizable:false,show:false,alwaysOnTop:true,skipTaskbar:true,focusable:false,hasShadow:false});
  win.setAlwaysOnTop(true,'screen-saver');
  win.loadFile('overlay.html');
  setInterval(sync,1000);
  screen.on('display-metrics-changed',position);
  sync();
});
app.on('window-all-closed',()=>{});