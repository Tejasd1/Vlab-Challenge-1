class CubeNumber{
    option: any;
    inputtext: HTMLInputElement;
    textbox: HTMLInputElement;
    submit: HTMLButtonElement;
    reset: HTMLButtonElement;
    cubevalues: Array<Float64Array>;
    tbody:HTMLTableElement;
    cnt:number;

    constructor(a){
        this.option = a;
        this.inputtext = document.querySelector(".inputtext");
        this.textbox = document.querySelector(".textbox");
        this.submit = document.querySelector(".calc");
        this.reset = document.querySelector(".re");
        this.tbody = document.querySelector(".tablebody");
        this.cnt = 0;
    }

    getcube(n){
        let sum = n;

        for(let i = 0; i < 2; i++){
            sum *= n;
        }

        return sum;
    }

    resettable(){
        this.tbody.innerHTML = `
        <tr>
            <td><input type="text" id= "inputid0" class="inputtext"></input></td>
            <td><input type="text" id="textboxid0" class="textbox"></input></td>
        </tr>
        `
        this.cnt = 1;
    }

    calculate(){
        for(let i = 0; i < this.cnt; i++){
            let value = `#inputid${i}`
            let cube = `#textboxid${i}`
            let temp: HTMLInputElement = document.querySelector(value);
            if(temp.value == ""){
                prompt("It shuold Contain Floating point number");
                break;
            }
            let temp2: HTMLInputElement = document.querySelector(cube);
            temp2.value = this.getcube(parseFloat(temp.value));
        }
    }

    addrow(){
        for(let i = 0; i < this.option; i++){
           // let num:Number = this.inputtext.value;
            this.tbody.innerHTML += `
                <tr>
                    <td><input type="text" id="inputid${i}" class="inputtext"></input></td>
                    <td><input type="text" id="textboxid${i}" class="textbox"></input></td>
                </tr>
            `
            this.cnt++;
        }
        this.reset.onclick = () => this.resettable();
        this.submit.onclick = () => this.calculate();        
    }
}

function show(a){
    let cn: CubeNumber = new CubeNumber(a);
    cn.addrow();
}