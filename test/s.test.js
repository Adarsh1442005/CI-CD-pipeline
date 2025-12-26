import {sum} from 'C:/Users/BIT/CI-CD-pipeline/sum.js';
const tes=()=>{
  const res= expect(sum(2,3));
  res.toBe(5);

}
test("sum of 2+3",tes);