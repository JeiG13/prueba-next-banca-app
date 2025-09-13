async function copyToClipboard(stringToCopy: string) {
	if (navigator.clipboard && window.isSecureContext) {
		await navigator.clipboard.writeText(stringToCopy);
	}
}

export default copyToClipboard;
