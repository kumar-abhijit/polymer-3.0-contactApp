import {LitElement, html} from '/js/lit-element.js?module';

export default class SideMenu extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
  }

static get properties(){
  return {
    total: Object,
    togglePopup: Function
  }
}

_firstRendered() {

}

  _render ({color, background, fontWeight}) {
    return html`
    <style>
      @import '/css/global.css';
      #side-menu {
        width: 200px;
        background: #323759;
        height: 100vh;
        padding: 50px 25px;
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        width: 50px;
      }
      .title {
        font-weight: 700;
        color: #ccced7;
        margin-bottom: 10px;
      }
      #side-menu nav a {
        color: #ccced7;
        text-decoration: none;
        text-transform: capitalize;
        display: block;
        padding: 10px 10px 10px 0;
      }
      #side-menu nav a span.icon {
        padding: 7px 7px 7px 7px;
        background: green;
        border-radius: 2px;
        display: inline-block;
      }

    </style>
      <section id="side-menu">
        <div class="logo">
          <img src="https://www.codeofaninja.com/wp-content/uploads/2014/03/code-of-a-ninja-logo-200x200.png"></img>
        </div>
        <div class="menu">
          <div class="title">Contacts</div>
          <nav>
            <a href="#" on-click="${this.togglePopup}"><span class="icon"> + </span> Add Contact</a>
          </nav>
        </div>
      </section>
    `;
  }
}
customElements.define('side-menu', SideMenu);
