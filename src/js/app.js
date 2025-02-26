export default class CollapsibleRender {
    constructor(collapseSelector, entrySelector) {
        this.collapseSelector = collapseSelector || '.collapse';
        this.entrySelector = entrySelector || '.entry';
    }

    render() {
        const bottom = document.querySelector(this.collapseSelector);

        if (!bottom) {
            console.error(`Element with selector ${this.collapseSelector} not found.`);
            return;
        }

        bottom.addEventListener('click', () => {
            const entry = document.querySelector(this.entrySelector);
            if (entry) {
                entry.classList.toggle('active');
            } else {
                console.error(`Element with selector ${this.entrySelector} not found.`);
            }
        });
    }
}
