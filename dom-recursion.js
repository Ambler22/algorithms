// var rootEl = document.documentElement;

// for (let rootChild of rootEl.children) {
//     console.log(rootChild);
//     for (let subChild of rootChild) {
//         console.log(subChild);
//         for (let subSubChild of subChild) {
//             console.log(subSubChild);
//         }
//     }
// }

// depth first traversal
function visitDOMNode(node) {
    if (node.matches(selector)) {
        return node;
    }
    console.log(node);
    for (let childNode of node.children) {
        visitDOMNode(childNode);
    }
}

visitDOMNode(document.documentElement);


viusitDomNode(moya stranita)
visitDomNode(title)
visitDomNode(head)
visitDOMNode(html);
visitDOMNode(document);
