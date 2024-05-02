const data = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 }
];

function createNode(id, data){
  const childData = data.filter(({parentId}) => parentId === id);
  const node = {
    id,
    children: childData.reduce((acc, cur) =>{
      acc.push(createNode(cur.id, data));
      return acc;
    },[])
  }
  return node;
}

function getTree(data){
  const rootNodeData = data.find(({parentId}) => parentId === null);
  if(!rootNodeData){
    throw new Error('数据中找不到根的节点')
  }
  return createNode(rootNodeData.id, data);
}

console.log(JSON.stringify(getTree(data)));
