# Pluck VSCode Extension

A VSCode extension that allows you to copy file paths with selected lines for easy sharing in coding tools like opencode.

## Features

- **Copy Full Path with Selected Lines**: Copies the absolute file path with line numbers and selected code
- **Copy Relative Path with Selected Lines**: Copies the relative file path (from workspace root) with line numbers and selected code

## Usage

1. Select lines of code in any editor
2. Right-click and choose either:
   - "Pluck: Copy Full Path with Selected Lines"
   - "Pluck: Copy Relative Path with Selected Lines"
3. Paste into your coding chat tool

The output format is:
```
path/to/file:start-end
```
selected code here
```

## Commands

- `pluck.copyFullPathWithLines`: Copy full path with selected lines
- `pluck.copyRelativePathWithLines`: Copy relative path with selected lines

## Development

### Prerequisites

Install dependencies (vsce is included as a dev dependency):
```bash
npm install
```

### Building

```bash
npm install
npm run compile
```

### Packaging

To create a `.vsix` file for manual installation:
```bash
npm run package
```

This will generate `vscode-plugin-pluck-0.0.1.vsix` which can be installed via:
- Command line: `code --install-extension vscode-plugin-pluck-0.0.1.vsix`
- VSCode Extensions panel: Install from VSIX...

## Testing

Open VSCode with this extension:
1. Press F5 to launch a new Extension Development Host window
2. Open any file and select some lines
3. Right-click and test the commands