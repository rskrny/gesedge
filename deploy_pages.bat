@echo off
set "GIT=C:\Program Files\Git\cmd\git.exe"
set "PROJECT=C:\Users\rskrn\Desktop\Global Edge Strategies Chengdu Huanqiao\gesedge"
cd /d "%PROJECT%"
"%GIT%" add -A
"%GIT%" commit -m "Redesign all pages with asymmetric layouts and real imagery"
"%GIT%" push
echo DONE
pause
