const convertImageUrl = (origin) => {
  const regex = /\/d\/(.*)\/view/gm;
  const id = regex.exec(origin)[1];
  
  return `https://drive.google.com/uc?export=view&id=${id}`
};
