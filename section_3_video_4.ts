namespace Header {
    export const getContent = (): void => {
        console.log('header');
    };

    export namespace HeaderContent {
        export const getContent = (): void => {
            console.log('header content');
        };
    }
}

namespace Footer {
    export const getContent = (): void => {
        console.log('footer');
    };
}

Header.getContent();
Footer.getContent();
Header.HeaderContent.getContent();