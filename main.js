'use strict';
{
    const tasks = []; //入力したタスクを格納する配列
    const inputTask = (name, status = '作業中') => {
        /*
        tasks配列の末尾に、タスクオブジェクトをプッシュする
        tasks配列を返す。
        */
        const newtask = {
            id:  tasks.length,
            name:  name,
            status: status,
        }; 
        tasks.push(newtask);    
    }

    // HTML要素に、テキスト＆クラスネームを追加する。関数
    const custumTdElement = (element, text, className) => {
        element.textContent = text;
        element.classList.add(className);
    }

    // テーブルに記載のタスクをすべて削除する関数 
    const deleteTaskTable = (element) => {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    // 対象がテーブルの何行目かを確認する関数
    const serchTargetRow = (id) => {
        const tr = document.getElementById('tbody').getElementsByTagName('tr');
        let result
        Array.prototype.forEach.call(tr, (value, index)=> {
            if (id === Number(value.firstChild.textContent)) {
                result = index;
            }
        })
        return result;
    }
    
    // ステータスボタンを生成する関数
    const createStatusBtn = (task) => {
        const btn = document.createElement('button');
        custumTdElement(btn, task.status, 'statusBtn');
        const tr = document.getElementById('tbody').getElementsByTagName('tr');
        tr[serchTargetRow(task.id)].getElementsByClassName('status')[0].appendChild(btn);
    }

    // 削除ボタンを生成する関数
    const createDeleteBtn = (task) => {
        const btn = document.createElement('button');
        custumTdElement(btn, '削除', 'deleteBtn');
        const tr = document.getElementById('tbody').getElementsByTagName('tr');
        tr[serchTargetRow(task.id)].getElementsByClassName('status')[0].appendChild(btn);

        // TODO: 課題3-2では、ここに削除ボタンをクリックしたら、タスクが消えるイベントを追加
    }

    // ブラウザに表示されているタスクを一旦削除してから再描画する関数
    const refleshTable = () => {

        const taskTable = document.getElementById('tbody');
        deleteTaskTable(taskTable);

        tasks.forEach((value) => {
            const tr = document.createElement('tr');
            const ID = document.createElement('td');
            const name = document.createElement('td');
            const status = document.createElement('td');
            
            // 各HTML要素に、テキストとクラス名を追加
            custumTdElement(ID, value.id, 'id');
            custumTdElement(name, value.name, 'taskName' );
            custumTdElement(status, '', 'status');
            // テーブルに<tr>を追加
            taskTable.appendChild(tr);
            // 追加した<tr>の中に<td>を追加
            const lastTableRow = taskTable.lastElementChild;
            lastTableRow.appendChild(ID);
            lastTableRow.appendChild(name);
            lastTableRow.appendChild(status);
            
            // 状態列にボタンを追加
            createStatusBtn(value);
            createDeleteBtn(value);
        });
    }

    /**
    * 新しいタスクを追加する関数
    * tasksに、新しいタスクを追加して表示する 
    */ 
    const addTask = (taskName) => {
        const tasks = inputTask(taskName);
        refleshTable();
    }
    
    // 追加ボタンをクリックすると発生するイベント
    document.getElementById('btn').addEventListener('click', () => {
        const taskName = document.getElementById('taskName').value; 
        addTask(taskName);
    })
    
}