const copyToClipBoard = () => {
  const $textarea = document.getElementById('textarea-editor') as HTMLTextAreaElement | null;
  if (!$textarea) return;

  $textarea.classList.add('coping');
  $textarea.select();
  document.execCommand('copy');
  window.getSelection()?.removeAllRanges();
  $textarea.classList.remove('coping');
};

export default copyToClipBoard;
