# Fortnite Crosshair

Desktop crosshair overlay for Fortnite.

## How it works
- The EXE opens the crosshair immediately, even when Fortnite is not running, so you can verify that it works.
- The crosshair is centered on the primary monitor with a default horizontal offset of +3 px.
- Change `OFFSET_X` and `OFFSET_Y` in `main.js` to fine-tune the position.
- The overlay is click-through and does not read FPS, ping, game memory, or network telemetry.
- It does not inject into or modify Fortnite files.
- Press `Ctrl+Shift+X` to close the overlay.

## Windows EXE
GitHub Actions builds the Windows installer automatically on pushes to `main`. Download the `fortnite-crosshair-windows` artifact from the successful workflow run and unzip it to get the installer.

## Presets
See `presets.html` for the preset gallery.
