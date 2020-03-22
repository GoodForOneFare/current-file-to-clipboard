import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.copyWorkspaceRelativePath', () => {
		const fullPath = vscode.window.activeTextEditor?.document.fileName;
		if (fullPath) {
			const relativePath = vscode.workspace.asRelativePath(fullPath);
			vscode.env.clipboard.writeText(relativePath);
		}
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
