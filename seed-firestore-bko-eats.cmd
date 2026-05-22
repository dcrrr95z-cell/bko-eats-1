@echo off
setlocal
cd /d "%~dp0"
".tools\node-v24.15.0-win-x64\node.exe" "scripts\seed-firestore.mjs" %*
pause
