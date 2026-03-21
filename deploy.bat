@echo off
cd /d "C:\Users\rskrn\Desktop\Global Edge Strategies Chengdu Huanqiao\gesedge"
echo === INIT ===
"C:\Program Files\Git\cmd\git.exe" init
echo === BRANCH ===
"C:\Program Files\Git\cmd\git.exe" branch -M main
echo === ADD ===
"C:\Program Files\Git\cmd\git.exe" add -A
echo === STATUS ===
"C:\Program Files\Git\cmd\git.exe" status
echo === COMMIT ===
"C:\Program Files\Git\cmd\git.exe" commit -m "Initial commit: gesedge.com - Custom AI-Powered Business Systems"
echo === CREATE REPO ===
"C:\Users\rskrn\scoop\shims\gh.exe" repo create rskrny/gesedge --public --source=. --remote=origin --push
echo === DONE ===
