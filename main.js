'use strict';
{
    const tasks = []; //入力したタスクを格納する配列
    const inputTask = (name, status = '作業中') => {
        // tasks配列の末尾に、タスクオブジェクトをプッシュする
        const newtask = {
            id:  tasks.length,
            name:  name,
            status: status,
        }; 
        tasks.push(newtask);    
    }

    // HTML要素に、クラス名＆テキストを追加する。関数
    const addClassAndText = (element, text, className) => {
        element.classList.add(className);
        element.textContent = text;
    }

    // テーブルに記載のタスクをすべて削除する関数 
    const deleteTaskTable = () => {
        document.getElementById('tbody').textContent='';
    }

    // ステータスボタンを生成する関数
    const createStatusBtn = (task, tr) => {
        // ボタン作成
        const button = document.createElement('button');
        addClassAndText(button, task.status, 'statusButton');
        // td取得＆ボタン追加
        const td = tr.getElementsByClassName('status')[0]
        td.appendChild(button);
        //todo: 課題3-3でここに、ステータスボタンをクリックすると作業中⇔完了とするイベント追加
    }

    // 削除ボタンを生成する関数
    const createDeleteBtn = (tr) => {
        // ボタン作成
        const button = document.createElement('button');
        addClassAndText(button, '削除', 'deleteButton');
        // td取得＆ボタン追加
        const td = tr.getElementsByClassName('status')[0]
        td.appendChild(button);
        //todo: 課題3-2でここに、削除ボタンをクリックするとタスクを削除するイベント追加
    }

    // ブラウザに表示されているタスクを一旦削除してから再描画する関数
    const refleshTable = () => {
        // HTMLのtbodyの中身を空にして、ブラウザ上のタスクを消す。
        const tbody = document.getElementById('tbody');
        deleteTaskTable(tbody);

        tasks.forEach((value) => {
            // trの作成
            const tr = document.createElement('tr');
            // tdの作成
            const id = document.createElement('td');
            const name = document.createElement('td');
            const status = document.createElement('td');
            // 各HTML要素に、テキストとクラス名を追加
            addClassAndText(id, value.id, 'id');
            addClassAndText(name, value.name, 'taskName' );
            addClassAndText(status, '', 'status');
            // trの中にtdを追加
            tr.appendChild(id);
            tr.appendChild(name);
            tr.appendChild(status);
            // 状態列にボタンをそれぞれ追加
            createStatusBtn(value, tr);
            createDeleteBtn(tr);
            // テーブルにtrを追加
            tbody.appendChild(tr);
        });
    }

    // 新しいタスクを追加する関数: tasksに、新しいタスクを追加して表示する 
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