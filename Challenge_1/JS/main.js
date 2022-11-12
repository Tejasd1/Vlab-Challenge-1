var CubeNumber = /** @class */ (function () {
    function CubeNumber(a) {
        this.option = a;
        this.inputtext = document.querySelector(".inputtext");
        this.textbox = document.querySelector(".textbox");
        this.submit = document.querySelector(".calc");
        this.reset = document.querySelector(".re");
        this.tbody = document.querySelector(".tablebody");
        this.cnt = 0;
    }
    CubeNumber.prototype.getcube = function (n) {
        var sum = n;
        for (var i = 0; i < 2; i++) {
            sum *= n;
        }
        return sum;
    };
    CubeNumber.prototype.resettable = function () {
        this.tbody.innerHTML = "\n        <tr>\n            <td><input type=\"text\" id= \"inputid0\" class=\"inputtext\"></input></td>\n            <td><input type=\"text\" id=\"textboxid0\" class=\"textbox\"></input></td>\n        </tr>\n        ";
        this.cnt = 1;
    };
    CubeNumber.prototype.calculate = function () {
        for (var i = 0; i < this.cnt; i++) {
            var value = "#inputid".concat(i);
            var cube = "#textboxid".concat(i);
            var temp = document.querySelector(value);
            if (temp.value == "") {
                alert("It shuold Contain Floating point number");
                break;
            }
            var temp2 = document.querySelector(cube);
            temp2.value = this.getcube(parseFloat(temp.value));
        }
    };
    CubeNumber.prototype.addrow = function () {
        var _this = this;
        for (var i = 0; i < this.option; i++) {
            // let num:Number = this.inputtext.value;
            this.tbody.innerHTML += "\n                <tr>\n                    <td><input type=\"text\" id=\"inputid".concat(i, "\" class=\"inputtext\"></input></td>\n                    <td><input type=\"text\" id=\"textboxid").concat(i, "\" class=\"textbox\"></input></td>\n                </tr>\n            ");
            this.cnt++;
        }
        this.reset.onclick = function () { return _this.resettable(); };
        this.submit.onclick = function () { return _this.calculate(); };
    };
    return CubeNumber;
}());
function show(a) {
    var cn = new CubeNumber(a);
    cn.addrow();
}
