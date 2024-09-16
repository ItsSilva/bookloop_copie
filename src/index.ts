import * as components from './components/index';
import ClubsLanding from './screens/clubsLanding/clubsLanding';
import NavBar, { Attribute } from '../src/components/navBar/navBar';

class AppContainer extends HTMLElement {
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
            <clubs-landing></clubs-landing>
            `;
        }
    }
}

customElements.define('app-container', AppContainer);
