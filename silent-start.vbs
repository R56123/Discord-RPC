Set WshShell = CreateObject("WScript.Shell")
WshShell.Run """C:\Ramzy-RPC\start-rpc.bat""", 0
Set WshShell = Nothing
' This script runs the start-rpc.bat file in a hidden window.
' Make sure to replace the path with the correct one if your setup is different.
