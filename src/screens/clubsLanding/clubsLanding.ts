import userInfo, {Attribute} from '../../components/userInfo/userInfo';
import '../../components/navBar/navBar';
import {dataUsers } from '../../data/dataUsers';

class ClubsLanding extends HTMLElement {
    user: userInfo[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

        dataUsers.forEach(dataUser => {
            const userCard = this.ownerDocument.createElement('user-info') as userInfo;
            userCard.setAttribute('background', dataUser.background);
            userCard.setAttribute('userPic', dataUser.userPic);
            userCard.setAttribute('name', dataUser.name);
            userCard.setAttribute('at', dataUser.at);
            this.shadowRoot?.appendChild(userCard);
        });
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
            this.user.forEach((user) => {
                this.shadowRoot?.appendChild(user);
            })
        }
    }    
}

customElements.define('clubs-landing', ClubsLanding);
export default ClubsLanding;