@echo off
setlocal

set "ROOT=%~dp0"
set "MOBILE=%ROOT%bko-eats-expo"
set "NODE_DIR="

for /f "delims=" %%D in ('dir /b /ad /o-n "%ROOT%.tools\node-*-win-x64" 2^>nul') do (
  set "NODE_DIR=%ROOT%.tools\%%D"
  goto found_node
)

:found_node
if defined NODE_DIR (
  set "PATH=%NODE_DIR%;%PATH%"
)

if not exist "%MOBILE%\package.json" (
  echo Dossier mobile introuvable: %MOBILE%
  pause
  exit /b 1
)

cd /d "%MOBILE%"

echo.
echo ================================
echo  Bko Eats - Build iPhone
echo ================================
echo.
echo iPhone ne peut pas installer de APK.
echo Expo va creer une build iOS via Apple.
echo Il faut un compte Apple Developer pour l'installer sur un vrai iPhone.
echo.

call npx eas-cli@latest whoami >nul 2>nul
if errorlevel 1 (
  call npx eas-cli@latest login
  if errorlevel 1 (
    echo Connexion Expo annulee ou echouee.
    pause
    exit /b 1
  )
)

if not exist ".eas\project.json" (
  call npx eas-cli@latest init
  if errorlevel 1 (
    echo Initialisation EAS echouee.
    pause
    exit /b 1
  )
)

call npx eas-cli@latest build --platform ios --profile preview

echo.
echo Si Expo demande ton compte Apple, connecte ton Apple Developer.
echo Pour une publication officielle, il faudra ensuite passer par TestFlight / App Store Connect.
pause
