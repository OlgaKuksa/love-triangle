/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 const relationships=preferences.filter((el, index)=>index==(preferences[[preferences[el-1]-1]]-1)&&index!=el-1);
 return relationships.length/3;
};
