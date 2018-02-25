var jsSHA = require('jssha');

module.exports = {
    dec2hex(s) {
        return (s < 15.5 ? '0' : '') + Math.round(s).toString(16);
    },
    hex2dec(s) {
        return parseInt(s, 16);
    },
    base32tohex(base32) {
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";

        for (var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += this.leftpad(val.toString(2), 5, '0');
        }

        for (var i = 0; i + 4 <= bits.length; i += 4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16);
        }
        return hex;

    },
    leftpad(str, len, pad) {
        if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
        }
        return str;
    },
    genOTP(secretkey){
        if (!secretkey) return false;

        var key = this.base32tohex(secretkey);
        var epoch = Math.round(new Date().getTime() / 1000.0);
        var time = this.leftpad(this.dec2hex(Math.floor(epoch / 30)), 16, '0');

        var shaObj = new jsSHA("SHA-1", "HEX");
        shaObj.setHMACKey(key, "HEX");
        shaObj.update(time);
        var hmac = shaObj.getHMAC("HEX");
        var offset = this.hex2dec(hmac.substring(hmac.length - 1));

        var otp = (this.hex2dec(hmac.substr(offset * 2, 8)) & this.hex2dec('7fffffff')) + '';
        return (otp).substr(otp.length - 6, 6);
    }
}
