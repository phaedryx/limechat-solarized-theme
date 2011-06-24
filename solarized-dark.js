/*-----------------------------------------------------------------------------
  A limechat theme by Tad Thorley
  The solarized color scheme is by Ethan Schoonover
-----------------------------------------------------------------------------*/

function markDuplicateTimestamp(node) {
  var prev_time_node = node.previousSibling.firstChild;
  var curr_time_node = node.firstChild;
  if(prev_time_node.innerHTML == curr_time_node.innerHTML)
    curr_time_node.className += " duptime";
}

function processNode(ev) {
  var inserted_node = ev.target;
  if(document.body.className.includes("normal")) {
    markDuplicateTimestamp(inserted_node);
  }
}

document.addEventListener("DOMNodeInserted", processNode, false);