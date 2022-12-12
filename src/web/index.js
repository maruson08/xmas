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
                    'style': `margin:30%;margin-top:0;margin-bottom:10px;padding: 10px;height:12px;overflow: hidden; background-color:${color};color:white`
                });
                div.append(`${data[key].artist} - ${key}<br><br>${data[key].discribe}`);
                $('#main').append(div);
                if(color == 'red'){
                    color = 'green';
                }else{
                    color = 'red';
                }
            }
        })
    }else if(id == 'calendar'){
        $('#main').append('Calendar');
    }else{
        $('#main').append('Icons');
    }
})