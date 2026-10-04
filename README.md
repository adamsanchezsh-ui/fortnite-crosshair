# Fortnite Crosshair

Desktop crosshair overlay for Fortnite.

## How it works
- Shows a crosshair in the center of the primary monitor.
- Adds a small default horizontal offset of +3 px.
- The offset can be changed in `main.js` using `OFFSET_X` and `OFFSET_Y`.
- In the packaged EXE, the overlay is visible only while Fortnite is running.
- When launched during development, the overlay can be previewed even without Fortnite.
- The overlay is click-through and does not read FPS, ping, game memory, or network telemetry.
- It does not inject into or modify Fortnite files.

## Windows EXE
GitHub Actions builds the Windows installer automatically on pushes to `main`. Download the `fortnite-crosshair-windows` artifact from the successful workflow run and unzip it to get the installer.

## Presets
See `presets.html` for the preset gallery.
