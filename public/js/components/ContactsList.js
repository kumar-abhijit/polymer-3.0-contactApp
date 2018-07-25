import {LitElement, html} from '/js/lit-element.js?module';

export default class ContactsList extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
    this.displayAllContacts = this.displayAllContacts.bind(this);
  }

  static get properties(){
    return {
      total: Object,
      allContacts: Array,
      deleteContact: Function
    }
  }

  _firstRendered() {

  }


  displayAllContacts(){
    return this.allContacts.map((contact, index) => {
      return html`
        <div class="contact">
          <div class="user-img"></div>
          <div class="fullname">
            <span class="text">${contact.first_name} ${contact.last_name}</span>
            <span class="sub">Full name</span>
          </div>
          <div class="number">
            <span class="text">${contact.phone_number}</span>
            <span class="sub">Phone Number</span>
          </div>
          <div class="state">
            <span class="text">${contact.state}</span>
            <span class="sub">State</span>
          </div>
          <div class="category">
            <span class="text">${contact.category}</span>
            <span class="sub">Category</span>
          </div>
          <div class="delete-btn" on-click="${this.deleteContact.bind(null, index)}">
            Delete
          </div>
        </div>`
    })

  }


  _render ({color, background, fontWeight}) {

    return html`
    <style>
      @import '/css/global.css';
      .contacts {
        max-width: 800px;
      }
      h2{
        color: #3e4162;
        font-weight: 300;
      }
      .contact {
        width: 100%;
        display: grid;
        color: #3d4060;
        grid-template-columns: 1fr 2fr 3fr 1fr 3fr;
        padding: 20px;
        border-radius: 10px;
        transition: all .4s ease-in-out;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .contact:hover {
        -webkit-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        -moz-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
      }
      .contact .user-img {
        background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/tomaslau/128.jpg');
        height: 40px;
        width: 40px;
        background-size: cover;
        background-position: center center;
        border-radius: 10px;
      }
      .contact .fullname {
        font-weight: 700;
        text-transform: capitalize;
      }
      .number {
        font-weight: 500;
      }
      .text {
        display: block;
        text-align: center;
      }
      .sub {
          display: block;
          font-weight: 300;
          font-size: .8rem;
          color: #b4b5c4;
          text-align: center;
          margin: 5px 0;
      }
      .fullname, .user-img, .category, .state, .number {
        font-size: 1.4rem;
      }
      .delete-btn {
        position: absolute;
        right: 0;
        height: 100%;
        padding: 20px;
        color: white;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-border-top-right-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
        -moz-border-radius-topright: 10px;
        -moz-border-radius-bottomright: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        transform: translate3d(100%, 0, 0);
        transition: all .4s ease-in-out;
      }
      .contact:hover .delete-btn {
        transform: translate3d(0, 0, 0);
      }
    </style>
      <section class="contacts">
        <h2>Contacts</h2>
          ${this.displayAllContacts()}
      </section>
    `;
  }
}
customElements.define('contacts-list', ContactsList);
