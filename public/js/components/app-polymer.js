import {LitElement, html} from '/js/lit-element.js?module';
import SideMenu from '/js/components/SideMenu.js';
import ContentArea from '/js/components/ContentArea.js'

class CounterComp extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
    this.popupOpen = false;
    this.togglePopup = this.togglePopup.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.allContacts = [];
  }

  static get properties(){
    return {
      total: Object,
      popupOpen: Boolean,
      allContacts: Array
    }
  }

  _firstRendered() {

  }

  togglePopup() {
    this.popupOpen = !this.popupOpen;
    console.log('clicked button');
    console.log(this.popupOpen);
  }

  saveContact(contact) {
    console.log('saved contact');
    console.log('contact', contact);
    function immutablePush(arr, newEntry) {
      return [...arr, newEntry ];
    }
    let newArray = immutablePush(this.allContacts, contact);
    this.allContacts = newArray;
    this.togglePopup();
    console.log('=============================');
    console.log('new contact', this.allContacts);
  }

  deleteContact(contact) {
    function immutableDelete(arr, index) {
      return arr.slice(0,index).concat(arr.slice(index+1));
    }
    let newArray = immutableDelete(this.allContacts, contact);
    this.allContacts = newArray;
    console.log(contact);
  }

  _render ({color, background, fontWeight}) {
    return html`
    <style>
    .main-page {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
    </style>
    <div class="main-page">
      <side-menu togglePopup="${this.togglePopup}"></side-menu>
      <content-area popupOpen="${this.popupOpen}" togglePopup="${this.togglePopup}" saveContact="${this.saveContact}"
        allContacts="${this.allContacts}" deleteContact="${this.deleteContact}">
      </content-area>
    </div>
    `;
  }
}
customElements.define('counter-comp', CounterComp);
