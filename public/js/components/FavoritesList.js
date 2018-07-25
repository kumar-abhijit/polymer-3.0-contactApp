import {LitElement, html} from '/js/lit-element.js?module';

export default class FavoritesList extends LitElement {

  constructor(){
    super();
    this.total = {
      number: 0
    }
    this.displayAllFavorites = this.displayAllFavorites.bind(this);
  }

  static get properties(){
    return {
      total: Object,
      allContacts: Array
    }
  }

  displayAllFavorites() {
      return this.allContacts.map((contact) => {
        if(contact.favorites === 'yes') {
          return html`
            <div class="card">
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
            </div>`
        }
      })
  }

  _firstRendered() {

  }

  _render ({color, background, fontWeight}) {

    return html`
    <style>
      @import '/css/global.css';
      .favorites {
        max-width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
      }
      h2 {
        color: #3e4162;
        font-weight: 300;
        grid-column: 1/4;
      }
      .card {
        width: 100%;
        display: grid;
        color: #3d4060;
        grid-template-columns: 1fr 1fr;
        padding: 15px 0 0;
        border-radius: 10px;
        transition: all .4s ease-in-out;
        cursor: pointer;
        -webkit-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        -moz-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
      }
      .card:hover {
        -webkit-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        -moz-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
        box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
      }
      .user-img {
        background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/tomaslau/128.jpg');
        height: 80px;
        width: 80px;
        background-size: cover;
        background-position: center center;
        border-radius: 50%;
        grid-column: 1/3;
        align-self: center;
        justify-self: center;
      }
      .fullname {
        font-weight: 700;
        text-transform: capitalize;
        grid-column: 1/3;
        padding: 20px;
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
      .number {
        font-weight: 500;
        grid-column: 1/3;
        padding: 20px;
        border-bottom: 1px solid rgba(0,0,0,.1);
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
      .category {
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
      .fullname, .user-img, .category, .state, .number {
        font-size: 1.4rem;
        font-weight: 500;
        padding: 15px;
      }
    </style>
      <section class="favorites">
        <h2>Favorites</h2>
        ${this.displayAllFavorites()}
      </section>
    `;
  }
}
customElements.define('favorites-list', FavoritesList);
