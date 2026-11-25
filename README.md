# pMap — Map. Edit. Visualize.

A plasmid map and sequence editor with **Primer Forge** built in, in a single web page.
Everything runs in your browser: your sequences are not uploaded anywhere (only the Import window
fetches records from NCBI, ENA, Addgene or a URL when you ask it to).

**Open pMap:** https://YOUR-USERNAME.github.io/pmap/

## Install it on your PC
1. Open the link above in **Microsoft Edge** or **Google Chrome**.
2. Click the **Install** icon at the right end of the address bar
   (Edge: *⋯ → More tools → Apps → Install this site as an app*; Chrome: *⋮ → Cast, save, and share → Install page as app…*).
3. pMap now has its own window, a Start-menu entry and a taskbar icon, and it **opens without internet**.
4. Optional: right-click a `.dna`, `.gb`, `.fasta` or `.ab1` file → **Open with** → **pMap**.

Uninstall: Edge → go to `edge://apps` → *Details* → *Uninstall*; Chrome → open pMap → *⋮* → *Uninstall pMap*.

## Use it without installing
Download `index.html` and double-click it. It works offline in any modern browser.

## Files
| File | What it is |
|---|---|
| `index.html` | pMap itself (the whole app) |
| `manifest.webmanifest` | name, icons and file types for installing |
| `sw.js` | keeps a copy so the installed app opens offline; fetches updates when online |
| `icons/` | app icons |
| `.nojekyll` | tells GitHub Pages to publish the files as they are |

## Updating
Replace `index.html` with the new version (rename `pMap.html` to `index.html`) and commit.
Installed copies pick up the new version the next time they are opened online.
