export const SUBMIT_ACTION2 ='SUBMIT_ACTION2'
export const SUBMIT_ACTION1 ='SUBMIT_ACTION1'
export function submitAction2(input1) {
  return{
    type: SUBMIT_ACTION2,
    input1
  }
}
export function submitAction1(input){
  return{
    type:SUBMIT_ACTION1,
    input
  }
}
