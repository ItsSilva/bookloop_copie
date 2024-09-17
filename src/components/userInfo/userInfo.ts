export enum Attribute {
    'background' = 'background',
    'userPic' = 'userPic',
    'name' = 'name',
    'at' = 'at',
};

class userInfo extends HTMLElement {
    background?: string;
    userPic?: string;
    name?: string;
    at?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(Attribute) as Array<Attribute>;
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue; // background, userPic, name, at
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/userInfo/userInfo.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <section class='container'>
                <div class='container-background'>
                    <img src="${this.background || 'No Image'}" alt="Background">
                        <div>
                            <img src="${this.userPic || 'No Image'}" alt="User Picture">
                        </div>
                        <div>
                            <h2>${this.name || 'No Name'}</h2>
                            <p>${this.at || 'No At'}</p>
                        </div>
                </div>
            </section>
            `;
        }
    }
}

customElements.define('user-info', userInfo);
export default userInfo;