@echo off
set "GIT=C:\Program Files\Git\cmd\git.exe"
set "NODE=C:\Program Files\nodejs\node.exe"
set "VERCEL=%APPDATA%\npm\node_modules\vercel\dist\index.js"
set "PROJECT=C:\Users\rskrn\Desktop\Global Edge Strategies Chengdu Huanqiao\gesedge"

cd /d "%PROJECT%"

echo === Git Add ===
"%GIT%" add -A

echo === Git Status ===
"%GIT%" status

echo === Git Commit ===
"%GIT%" commit -m "v3 redesign: Clash Display + Satoshi fonts, Midnight Sapphire palette, enhanced particle hero, banned pattern cleanup"

echo === Vercel Deploy ===
"%NODE%" "%VERCEL%" --prod --yes

echo === Done ===
pause
