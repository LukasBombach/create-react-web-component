export default function(contents) {
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = contents;
  } else {
    style.appendChild(document.createTextNode(contents));
  }
  return style;
}
