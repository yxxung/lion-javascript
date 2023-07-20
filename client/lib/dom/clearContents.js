import { getNode } from "./getNode.js";

export function clearContents(node) {
  if(typeof node === 'string') node = getNode(node);
  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = '';
    return;
  }
  return node.textContent = '';
}