echo off

FOR /R "%~dp0" %%G in (.) DO (
 Pushd %%G

 del "*.bbl" del "*.blg" del "*.log" del "*.out" del "*.toc" del "*.aux" del "*.lox" del "*.tps" del "*.nlo" del "*.synctex.gz" del "*.synctex.gz(busy)"

 Popd )