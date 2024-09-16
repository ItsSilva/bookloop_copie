import NavBar, { Attribute } from '../../components/navBar/navBar';

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
            this.shadowRoot.innerHTML = `<nav-bar 
                icon="BookLoop"
                img="./src/assets/medium_logo.png"
                input="Search"
            ></nav-bar>`;
        }
    }
}

customElements.define('clubs-landing', ClubsLanding);
export default ClubsLanding;