import { HTML_TAG } from "./shared-const.js";

export function makeElement({
  tag = HTML_TAG.DIV,
  border,
  classList,
  innerHTML,
  id,
  dataset,
}) {
  const newElement = document.createElement(tag);
  if (border) newElement.border = border;
  if (innerHTML) newElement.innerHTML = innerHTML;
  if (classList) newElement.classList.add(...classList);
  if (id) newElement.id = id;
  if (dataset) newElement.setAttribute(`data-${dataset[0]}`, dataset[1]);
  return newElement;
}
