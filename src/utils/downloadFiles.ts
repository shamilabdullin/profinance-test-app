export const downloadFile = async (file: BlobPart,fileName: string) => {

  const fileBlob = new Blob([file as BlobPart]);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(fileBlob);
  link.download = fileName

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};