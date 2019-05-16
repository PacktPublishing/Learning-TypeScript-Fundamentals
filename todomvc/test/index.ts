import {expect}  from 'chai'
import TodoModel from '../src/todoModel'
import TodoCollection from '../src/todoCollection'

describe('Todo Model', () => {
    it('should return an object that contains following fields: id, title, completed', () => {
        const newTodo = TodoModel(0, 'create app');
        expect(newTodo).to.eql({
            id: 0,
            title: 'create app',
            completed: false
        });
    });
});

describe('Todo Collection', () => {
    it('should return an array of 3 items', () => {
        const newTodoCollection = TodoCollection('create app', 'react', 'gym');
        expect(newTodoCollection.get().length).to.equal(3);
    });


    it('should return correct todo model', () => {
        const newTodoCollection = TodoCollection('create app', 'react', 'gym');
        expect(newTodoCollection.get()[1]).to.eql({
            id: 1,
            title: 'react',
            completed: false
        });
    });

    it('should add todo model', () => {
        const newTodoCollection = TodoCollection();
        newTodoCollection.add('learn new technology');

        expect(newTodoCollection.get()[0]).to.eql({
            id: 0,
            title: 'learn new technology',
            completed: false
        });
    });

    it('should remove todo model', () => {
        const newTodoCollection = TodoCollection('create app');
        newTodoCollection.remove(0);

        expect(newTodoCollection.get().length).to.equal(0);
    });

    it('should toggle todo model', () => {
        const newTodoCollection = TodoCollection('create app');
        newTodoCollection.toggleCompleted(0);

        expect(newTodoCollection.get()[0]).to.eql({
            id: 0,
            title: 'create app',
            completed: true
        });
    });
});
