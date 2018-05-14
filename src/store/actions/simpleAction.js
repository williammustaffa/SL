/**
 * add task
 * @param {task} task item 
 */
export default function simpleAction(payload) {
  return {
    type: 'SIMPLE_ACTION',
    payload,
  }
}