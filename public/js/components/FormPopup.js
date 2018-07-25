import {LitElement, html} from '/js/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';

export default class FormPopup extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
    this.formData = {};
    this.change = this.change.bind(this);
    // To avoid bind error: this.saveContact is not a function
    this.submitForm = this.submitForm.bind(this);
  }

  static get properties(){
    return {
      total: Object,
      popupOpen: Boolean,
      formData: Object
    }
  }

  _firstRendered() {

  }

  submitForm(event) {
    event.preventDefault();
    console.log('all input', this._root.querySelectorAll("input"));
    var elements = this._root.querySelectorAll("input");
    for (var i=0; i < elements.length; i++) {
      if(elements[i].type === "text") {
        elements[i].value = "";
      }
    }
    this.saveContact(this.formData);
    this.formData = {};
  }

  change(event) {
    let formData = {};
    let name = event.target.name;
    let value = (event.target.type ==='checkbox') ? event.target.checked : event.target.value;

    formData[name] = value;
    this.formData = Object.assign(this.formData, formData);

    console.log('formData', this.formData);
  }

  _render ({color, background, fontWeight}) {

    return html`
    <style>
      @import '/css/global.css';
      .form-popup {
        background: #2b304c;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        visibility: hidden;
        transition: all .4s ease-in-out;
      }
      .form-popup.active {
        visibility: visible;
      }
      form {
        width: 600px;
        background: white;
        padding: 20px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
      }
      h2  {
        font-size: 1.4rem;
        font-weight: 500;
        grid-column: 1/5;
      }
      .form-group {
        padding: 0;
        position: relative;
      }
      label {
        font-size: .7rem;
        background: white;
        position: absolute;
        top: -5px;
        display: inline-block;
      }
      input[type="text"]{
        padding: 10px;
        display: block;
        width: 100%;
      }
      .first-name {
        grid-column: 1/3;
      }
      .last-name {
        grid-column: 3/5;
      }
      .address-1 {
        grid-column: 1/5;
      }
      .address-2 {
        grid-column: 1/5;
      }
      .city {
        grid-column: 1/3;
      }
      .button {
        justify-self: end;
        grid-column: 4/5;
      }
      .button button {
        cursor: pointer;
        padding: 10px 25px;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 5px;
        text-shadow: 0px 1px 2px rgba(0,0,0,1);
        color: white;
        background: #1e5799; /* Old browsers */
        background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 50%, #7db9e8 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 50%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 50%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
      .closing-btn {
        position: absolute;
        z-index: 3;
        right: 20px;
        top: 0;
        font-size: 2rem;
        color: white;
        padding: 20px;
      }
      .closing-btn svg{
        width: 24px;
        height: 24px;
        fill: white;
      }
    </style>
    <section className="form-popup ${(this.popupOpen) ? 'active' : ''}">
      <form on-submit="${this.submitForm}">
        <div class="closing-btn" on-click="${this.togglePopup}">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512">
            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
          </svg>
        </div>
        <h2>Add a new contact</h2>
        <div class="form-group first-name">
          <label for="first_name">First Name</label>
          <input type="text" name="first_name" on-keyup="${this.change}">
        </div>

        <div class="form-group last-name">
          <label for="last_name">Last Name</label>
          <input type="text" name="last_name" on-keyup="${this.change}">
        </div>

        <div class="form-group address-1">
          <label for="address_1">Address #1</label>
          <input type="text" name="address_1" on-keyup="${this.change}">
        </div>

        <div class="form-group address-2">
          <label for="address_2">Address #2</label>
          <input type="text" name="address_2" on-keyup="${this.change}">
        </div>

        <div class="form-group city">
          <label for="city">City</label>
          <input type="text" name="city" on-keyup="${this.change}">
        </div>

        <div class="form-group state">
          <label for="state">State</label>
          <input type="text" name="state" on-keyup="${this.change}">
        </div>

        <div class="form-group zipcode">
          <label for="zipcode">Zipcode</label>
          <input type="text" name="zipcode" on-keyup="${this.change}">
        </div>

        <div class="form-group phone_number">
          <label for="phone_number">Phone Number</label>
          <input type="text" name="phone_number" on-keyup="${this.change}">
        </div>

        <div class="form-group category">
          <label for="zipcode">Category</label>
          <input type="text" name="category" on-keyup="${this.change}">
        </div>

        <div class="form-group favorites">
          <label for="favorites">Favorites</label>
          <input type="text" name="favorites" on-keyup="${this.change}">
        </div>

        <div class="form-group button">
          <button type="submit">Add</button>
        </div>

      </form>

    </section>
    `;
  }
}
customElements.define('form-popup', FormPopup);
