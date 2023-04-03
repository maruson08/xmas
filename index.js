$('.navBtn').click(function(){
    $('#main').html('');
    const id = this.id;
    if (id == 'music'){
        $.getJSON(`/src/data/music.json`, function(data){
            let color = 'red';
            for(key in data){
                const div = $('<div />', {
                    'id': key,
                    'class': 'musicDiv',
                    'style': `background-color:${color};`
                });
                div.append(`${data[key]} - ${key}`);
                $('#main').append(div);
                if(color == 'red'){
                    color = 'green';
                }else{
                    color = 'red';
                }
            }
        })
        const musicDiv = $('.musicDiv');
        for(i=0;i<musicDiv.length;i++){
            if(musicDiv[i].id == now_play_audio){
                musicDiv[i].css('margin-left', '27%');
                musicDiv[i].css('margin-right', '27%');
            }
        }
    }else if(id == 'calendar'){
        $('#main').append('Calendar');
    }else{
        $('#main').append('Icons');
    }
})

// /
// $('.musicDiv').click(function(){
//     const id = this.id;
//     console.log(id);
//     var audio = new Audio(`/music/${id}.mp3`);
//     audio.play();
// })


let now_play_audio;
$(document).on("click", ".musicDiv", function (){
    $('.musicDiv').css('margin-left', '30%');
    $('.musicDiv').css('margin-right', '30%');
    $(this).css('margin-left', '27%');
    $(this).css('margin-right', '27%');

    const id = this.id;
    const audioBar = $('<audio />', {
        'id': `${id}_audioBar`,
        'constrols': 'true'
    });
    const source = $('<source />', {
        'src': `/music/${id}.mp3`
    });

    audioBar.append(source);
    $('#main').append(audioBar)

    if(now_play_audio == undefined){
        now_play_audio = new Audio(`/music/${id}.mp3`);
        now_play_audio.play();
        
    }else{
        now_play_audio.pause();
        now_play_audio = new Audio(`/music/${id}.mp3`);
        now_play_audio.play();
    }
});
