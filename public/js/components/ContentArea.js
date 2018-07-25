import {LitElement, html} from '/js/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';
import FormPopup from '/js/components/FormPopup.js';

export default class ContentArea extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
  }

static get properties(){
  return {
    total: Object,
    popupOpen: Boolean,
    togglePopup: Function,
    saveContact: Function,
    deleteContact: Function,
    allContacts: Array
  }
}

_firstRendered() {

}

  _render ({color, background, fontWeight}) {
    return html`
    <style>
      @import '/css/global.css';
      #content-area{
        background: #fcfdff;
        padding: 50px 80px;
      }
    </style>
    <section id="content-area">
      <form-popup popupOpen="${this.popupOpen}" togglePopup="${this.togglePopup}" saveContact="${this.saveContact}"></form-popup>
      <favorites-list allContacts="${this.allContacts}"></favorites-list>
      <contacts-list allContacts="${this.allContacts}" deleteContact="${this.deleteContact}"></contacts-list>
    </section>
    `;
  }
}
customElements.define('content-area', ContentArea);
