import { element } from './html-util';
import { TodoItemView } from './TodoItemView';

export class TodoListView {
  /**
   * `todoItems`に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id: String, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id: String})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;
    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, { onUpdateTodo, onDeleteTodo });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}
