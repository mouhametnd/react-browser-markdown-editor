import store from '../store/store';

const downloadFIle = () => {
  const { content, selectedDocument } = store.getState();
  const blob = new Blob([content.md], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const $a = document.getElementById('download-a') as HTMLAnchorElement;
  $a.href = url;
  $a.download = `${selectedDocument.name}.md`;
  $a.click();
};

export default downloadFIle;
