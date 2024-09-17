import '../../components/navBar/navBar';

class ClubsLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <nav-bar 
                    icon="../src/assets/logos/big_logo.png"
                    img="../src/assets/logos/medium_logo.png"
                    input="Search"
                ></nav-bar>
            `;
        }
    }    
}

customElements.define('clubs-landing', ClubsLanding);
export default ClubsLanding;