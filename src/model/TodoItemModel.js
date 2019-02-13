// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
  /**
   * @param {string} title Todoアイテムのタイトル
   * @param {boolean} completed Todoアイテムが完了済ならばtrue, そうでない場合はfalse
   */
  constructor({ title, completed }) {
    // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}
