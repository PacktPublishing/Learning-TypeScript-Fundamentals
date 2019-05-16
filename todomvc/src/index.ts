import TodosView from './todosView'

namespace app {
    export const init = () => {
        const $todos = document.getElementById('todos');
        const $input = document.getElementById('todo-input');
        const $addBtn = document.getElementById('add-todo');

        const todosView = TodosView($todos, 'create app', 'learn new technology');
        todosView.render();

        $input.addEventListener('keypress', (event) => {
            if (event['keyCode'] == 13) {
                todosView.action('add', $input['value']);
                $input['value'] = '';
            }
        });

        $addBtn.addEventListener('click', () => {
            todosView.action('add', $input['value']);
            $input['value'] = '';
        });
    }
}

app.init();
