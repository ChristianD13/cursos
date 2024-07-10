export class CardRabbit extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title','subtitle', 'parrafo', 'img','precio'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
               <div class="img-card">
                    <img src="${this.img}" alt="Card image cap">
                </div>
                <div class="text-card">
                    <h1>${this.title}</h1>
                    <h3>${this.subtitle}</h3>
                    <p>${this.parrafo}</p>
                    <div class="content-precio">
                        <div class="precio">${this.precio}</div>
                        <button class="btn-buy">COMPRAR</button>
                    </div>
                </div>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
        :host{
            max-width: 680px;
            width: 100%;
            height: 400px;
            border-radius: 12px;
            display: flex;
            flex-direction: row;
            background: white;
            margin: 0 auto;
            font-family: arial;
            --primary-img: #47559f;
            --primary-btn: #47559f;
        }
        .img-card{
            width: 50%;
            background: var(--primary-img);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 12px 0px 0px 12px;
            content: "NIKE";
        }
        .img-card::before {
            content: "NIKE";
            color: #00000061;
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
            font-size: 66px;
            font-weight: bold;
        }
        .img-card img{
            width: 150%;
            rotate: 332deg;
            position: absolute;
            right: -10%;
        }
        .text-card {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .text-card h1 {
            padding: 0 20px;
            margin: 0;
        }
        .text-card h3 {
            padding: 0 20px;
            margin: 0;
            color: #6e6e6e;
        }
        .text-card p {
            font-size: 14px;
            text-align: justify;
            padding: 0 20px 0 50px;
        }
        .content-precio{
            display: flex;
            flex-direction: row;
            padding: 0 20px;
            justify-content: space-between;
        }
        .precio {
            font-size: 24px;
            font-weight: bold;
            color: #6e6e6e;
        }
        button.btn-buy {
            padding: 10px;
            border-radius: 20px;
            background: var(--primary-btn);
            color: white;
            font-weight: bold;
            border-style: none;
        }
        @media screen and (max-width:1000px) {
            :host{
                display: flex;
                flex-direction: column;
                height: 580px;
            }
            .text-card p {
                padding: 0 20px;
            }
            .img-card, .text-card{
                width: 100%;
                height: 50%;
            }
            .img-card {
                border-radius: 12px 12px 0px 0px;
            }
            .img-card img {
                width: 80%;
                rotate: 0deg;
                right: auto;
                bottom: -20%;
            }
        }
        </style>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = ''; // Clear the shadow DOM
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('card-rabbit', CardRabbit);
