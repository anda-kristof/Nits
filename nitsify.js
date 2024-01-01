let video = document.querySelector(".video")
let title = document.querySelector(".videotext")
let larrow = document.querySelector(".leftarrow")
let rarrow = document.querySelector(".rightarrow")
let videolist = ["https://drive.google.com/file/d/102TFT1u0nO0fbzeqZU9yJC1lfHcum9vk/preview", "https://drive.google.com/file/d/1OLX-stkYBMagoXGzPxlPq0fpN1fdEQ5x/preview","https://drive.google.com/file/d/1p1UFMf4agf5YIPa8wrdEgoPI4Jpy_0XP/preview","https://drive.google.com/file/d/1TWFJx6isq1zhiUB9UEKcPYNZyfFdGgBd/preview","https://drive.google.com/file/d/1kN8SRnSWqmPk4dxQW4Afkefu8bXdc3RA/preview","https://drive.google.com/file/d/1rRSHd6PFPgnWDR56TdPgxTjgKFB5J4GX/preview", "https://drive.google.com/file/d/1KYI71ZRPWK0dY4I__fmz0-l1II-0hBRx/preview", "https://drive.google.com/file/d/10imj9jhJw7klpWaPyy0N3k1RbApkoLyo/preview", "https://drive.google.com/file/d/1H3vcF5-syyhSmxLsd6A42Qxj04vnvSIv/preview"];
let titlelist = ["Nits Laci - Égig emel", "Nits Laci - Hullik", "A Nagy DUETT - Nits Laci x MAHIANO ROSZALLO", "Nits Laci - Lacimackó",  "Nits Laci - Regular Normal Guy","Nits Laci - Csepereg az eső", "Nits Laci - Bagira", "Nits Laci - Mind1", "Nits Laci - One More Light"]
let aktivvideo = videolist[0];
let aktivtitle = titlelist[0];

function videoChange(num){
    let aindex = 0;
    for(let i = 0; i < videolist.length; i++){
        if (videolist[i] == aktivvideo){
            aindex = i;
        }
    }
    aindex += num;
    if(aindex < 0){
        aindex = 0;
    }
    else if(aindex > 8){
        aindex -= 9;
    }

    aktivvideo = videolist[aindex];
    video.src = aktivvideo;
    aktivtitle = titlelist[aindex];
    title.innerHTML = aktivtitle;
    

}
