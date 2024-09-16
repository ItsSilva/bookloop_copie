export enum Attribute {
    'icon' = 'icon',
    'img' = 'img',
    'input' = 'input',
};

class NavBar extends HTMLElement {
    icon?: string;
    img?: string;
    input?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(Attribute) as Array<Attribute>; // Asegúrate de que TypeScript reconozca el tipo
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue; // icon, img, input
        this.render(); // Llama a render cada vez que un atributo cambia
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./src/components/navBar/navBar.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                <section>
                    <h1>${this.icon || 'No Icon'}</h1>
                    <img src="${this.img || 'No Image'}" alt="BookLoop Logo">
                    <div>
                        <i class="fa-solid fa-magnifying-glass" style="color: #f1e8e3;"></i>
                        <input type="text" placeholder="${this.input || 'Search'}">
                    </div>
                </section>
            `;
        }
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar;