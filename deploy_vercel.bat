@echo off
set "NODE=C:\Program Files\nodejs\node.exe"
set "VERCEL=%APPDATA%\npm\node_modules\vercel\dist\index.js"
set "PROJECT=C:\Users\rskrn\Desktop\Global Edge Strategies Chengdu Huanqiao\gesedge"
cd /d "%PROJECT%"
echo === Deploying to Vercel ===
"%NODE%" "%VERCEL%" --prod --yes
echo === DONE ===
