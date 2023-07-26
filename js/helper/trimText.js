const trimText = (text, num) => {
  const textArr = text.split(" ");

  const trimmedString =
    textArr.length > num ? textArr.slice(0, num).join(' ') + "...." : text;
  return trimmedString;
};

const limitTextLines = (element, maxLines) => {
  // 获取文本元素
  const text = element.innerHTML.trim();
  const textArr = text.split(" ");
  // 创建一个与文本元素样式一致的隐藏元素，用于计算一行文本的高度
  const clone = element.cloneNode();
  clone.innerHTML = 'test';
  clone.style.visibility = 'hidden';
  element.parentNode.insertBefore(clone, element.nextSibling);
  const lineHeight = clone.offsetHeight;
  clone.parentNode.removeChild(clone);
  
  // 计算文本元素的实际行数
  const height = element.offsetHeight;
  const lines = Math.floor(height / lineHeight);
  
  // 如果实际行数大于要显示的行数，截取文本内容并添加省略号
  if (lines > maxLines) {
    element.innerHTML = textArr.slice(0, maxLines * Math.floor(textArr.length / lines)).join(' ') + '...';
  }
}

const addItalics = (text) => {
  const periodicals = /”.(.*?),/g.exec(text);
  return text.replace(periodicals[1], `<i>${periodicals[1]}</i>`);
}
