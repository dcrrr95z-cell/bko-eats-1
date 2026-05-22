@echo off
setlocal
cd /d "%~dp0bko-eats-expo"

for /d %%D in ("%~dp0.tools\node-*-win-x64") do set "NODE_DIR=%%~fD"

if not exist "%NODE_DIR%\npx.cmd" (
  echo Node portable introuvable. Relance Codex pour recreer l'environnement Expo.
  pause
  exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"
echo Demarrage de Bko Eats pour Expo Go en mode tunnel...
echo.
echo Utilise ce mode si ton iPhone ne voit pas le serveur en Wi-Fi.
echo.
"%NODE_DIR%\npx.cmd" expo start --go --tunnel --clear
pause
