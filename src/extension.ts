import * as vscode from 'vscode';
import { OUTPUT_FORMATS } from './output-formats';

export function activate(context: vscode.ExtensionContext) {
    const copyFullPathWithLines = vscode.commands.registerCommand('pluck.copyFullPathWithLines', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showErrorMessage('No text selected');
            return;
        }

        const filePath = editor.document.uri.fsPath;
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        const selectedText = editor.document.getText(selection);

        const output = OUTPUT_FORMATS.fullPathWithLines(filePath, startLine, endLine);

        vscode.env.clipboard.writeText(output).then(() => {
            vscode.window.showInformationMessage('Full path with selected lines copied to clipboard');
        });
    });

    const copyRelativePathWithLines = vscode.commands.registerCommand('pluck.copyRelativePathWithLines', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showErrorMessage('No text selected');
            return;
        }

        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder found');
            return;
        }

        const fullPath = editor.document.uri.fsPath;
        const workspacePath = workspaceFolders[0].uri.fsPath;
        const relativePath = fullPath.replace(workspacePath + '/', '');

        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        const selectedText = editor.document.getText(selection);

        const output = OUTPUT_FORMATS.relativePathWithLines(relativePath, startLine, endLine);

        vscode.env.clipboard.writeText(output).then(() => {
            vscode.window.showInformationMessage('Relative path with selected lines copied to clipboard');
        });
    });

    context.subscriptions.push(copyFullPathWithLines, copyRelativePathWithLines);
}

export function deactivate() {}