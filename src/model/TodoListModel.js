import { EventEmitter } from '../EventEmitter';

export class TodoListModel extends EventEmitter {
  /**
   * @param {TodoItemModel[]} items 初期アイテム一覧（デフォルトは空の配列）
   */
  constructor(items = []) {
    super();
    this.items = items;
  }

  /**
   * TodoItemsの合計数を返す
   * @returns {number}
   */
  get totalCount() {
    return this.items.length;
  }

  /**
   * 表示できるTodoItemsの配列を返す
   * @returns {TodoItemModel[]}
   */
  getTodoItems() {
    return this.items;
  }

  /**
   * TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
   * @param {Function} listener
   */
  onChange(listener) {
    this.addEventListener('change', listener);
  }

  /**
   * 状態が変更されたときに呼ぶ。登録済のリスナー関数を呼び出す
   */
  emitChange() {
    this.emit('change');
  }

  /**
   * TodoItemを追加する
   * @param {TodoItemModel} todoItem
   */
  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }

  /**
   * 指定したidのTodoItemのcompletedを更新する
   * @param {{ id:number, completed:boolean }}
   */
  updateTodo({ id, completed }) {
    // `id`が一致するTodoアイテムを見つけ、あるなら完了状態の値を更新する
    const todoItem = this.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }
}
