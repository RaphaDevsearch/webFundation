class Button {
    constructor(name='button', type = 'button', onClick = null) {
        this.name = name;
        this.color = 'default'; // default color
        this.size = 'medium';   // default size
        this.type = type;
        this.onClick = onClick;
    }

    // set name
    setName(name) {this.name = name;}

    // set color
    setColor(color) {this.color = color;}
    
    // set size
    setSize(size) {this.size = size;}

    // set type
    setType(type) {this.type = type;}

    // set onClick handler
    render(parent){
        const btn = document.createElement('button');

        btn.innerText   = this.name;
        btn.type        = this.type;
        btn.id          = 'btn';
        btn.style.backgroundColor = this.color;
        if(this.onClick) btn.addEventListener('click', this.onClick);
        parent.appendChild(btn);
    }
}

const b1 = new Button()
const b2 = new Button('Button 2', 'submit', () => alert('Button 2 clicked!'));
const div = document.getElementById('div');

b1.setName('Click Me');

b1.render(div);
b2.render(div);