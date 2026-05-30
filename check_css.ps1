Get-ChildItem "c:\Users\anbua\Desktop\wedding planner\src" -Recurse -Filter "*.css" | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  $open = ([regex]::Matches($content, '\{')).Count
  $close = ([regex]::Matches($content, '\}')).Count
  if ($open -ne $close) {
    Write-Host "MISMATCH: $($_.Name) open=$open close=$close diff=$($open - $close)"
  }
}
