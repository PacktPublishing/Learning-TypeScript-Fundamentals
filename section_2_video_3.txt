const widget = (name: string): void => {
    console.log(name, ' widget');
};

const withLoader = (component) => {
    return (isLoading: boolean, ...rest: any[]) => {
        return isLoading
            ? console.log('LOADING')
            : component(...rest)
    }
};

const menuWidget = widget('menu');
const menuWidgetWithLoader = withLoader(widget)(false, 'menu');

