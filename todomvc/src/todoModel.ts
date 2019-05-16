const todoModel = (id: number, title: string, completed: boolean = false) => {
    return {
        id, title, completed
    }
};

export default todoModel;
