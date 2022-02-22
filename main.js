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
        return tasks;    
    }

    const last = array => array[array.length - 1];  // 配列を渡すと、配列の最後の値を返す。

    const makeElement = (element, text, className) => {
        /*
        HTML要素に、テキスト＆クラスネームを追加する。
        */
        element.textContent = text;
        element.classList.add(className);

    }

    document.getElementById('btn').addEventListener('click', () => {
        //タスクを追加する場所のHTML要素を取得し格納
        const taskName = document.getElementById('taskName'); 
        const taskTable = document.getElementById('tbody');
        //タグを格納 
        const tr = document.createElement('tr');
        const ID = document.createElement('td');
        const name = document.createElement('td');
        const status = document.createElement('td');
        const btn = document.createElement('button');
        const btnDelete = document.createElement('button');

        // タスクをtasks配列にプッシュ
        const tasks = inputTask(taskName.value);
        
        // 各HTML要素に、テキストとクラス名を追加
        makeElement(ID, last(tasks).id, 'id');
        makeElement(name, last(tasks).name, 'taskName' );
        makeElement(btn, last(tasks).status, 'btnStatus');
        makeElement(btnDelete, '削除', 'btnDelete');
        makeElement(status, '', 'status');
        
        // テーブルに<tr>を追加
        taskTable.appendChild(tr);
        // 追加した<tr>の中に各<td>を追加
        const lastTableRow = taskTable.lastElementChild;
        lastTableRow.appendChild(ID);
        lastTableRow.appendChild(name);
        lastTableRow.appendChild(status);
        
        // 状態列にボタンを追加
        const tDstatus = document.getElementsByClassName('status');
        last(tDstatus).appendChild(btn);
        last(tDstatus).appendChild(btnDelete);
    })
}