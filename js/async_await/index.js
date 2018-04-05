import {load} from "./load";

let bbb;

async function test() {
    bbb = await load().then(res => {
        return res;
    });
}

// set time out loop bbb
const timeout = function () {
    return setTimeout(function () {
        console.log(bbb);
        timeout();
    }, 100);
};

//timeout(bbb)

bbb = test();
