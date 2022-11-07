const buildChildren = (currentNode, flattenNodes, level = 0) => {
  let children;
  const key = currentNode.id + level;
  const node = { ...currentNode, key };
  if (node.children.length > 0) {
    children = flattenNodes
      .filter((n) => n.parents.some((number) => node.children.includes(number)))
      .map((childNode) => buildChildren(childNode, flattenNodes, level + 1));

    children =
      children.length === node.children.length ? children : node.children;

    return { ...node, children };
  }
  return { ...node, children: null };
};

const buildTreeService = (flattenNodes) =>
  flattenNodes
    .filter((node) => node.parents.length === 0)
    .map((rootNode) => buildChildren(rootNode, flattenNodes));

export default buildTreeService;
