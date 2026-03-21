@echo off
set "GIT=C:\Program Files\Git\cmd\git.exe"
set "PROJECT=C:\Users\rskrn\Desktop\Global Edge Strategies Chengdu Huanqiao\gesedge"
cd /d "%PROJECT%"
echo === Git Add ===
"%GIT%" add -A
echo === Git Commit ===
"%GIT%" commit -m "v3.1: asymmetric layouts, real imagery, psychology-driven content placement"
echo === Git Status ===
"%GIT%" status
echo === DONE GIT ===
