import TodoCollection from './todoCollection'
import TodoView from './todoView'

const todosView = ($el, ...titleArr: string[]) => {
    let todoCollection = TodoCollection(...titleArr);

    const action = (type: string, ...params: any[]): void => {
        todoCollection[type](...params);
        render();
    };

    const render = (): void => {
        const $list = todoCollection.get().map((todoModel) => {
            return TodoView(todoModel).render();
        }).join('');

        $el.innerHTML = `<ul>${$list}</ul>`;
        attachEvents();
    };

    const attachEvents = (): void => {
        const $todos = $el.querySelectorAll('.list-group-item');

        $todos.forEach(($todo) => {
            const id = parseInt($todo.getAttribute('data-id'));
            const $checkbox = $todo.querySelector('.toggleCompleted');
            const $removeBtn = $todo.querySelector('.remove');

            $checkbox.addEventListener('click', () => {
                action('toggleCompleted', id);
            });

            $removeBtn.addEventListener('click', () => {
                action('remove', id);
            });
        });
    };

    return {
        render,
        action
    }
};

export default todosView;
