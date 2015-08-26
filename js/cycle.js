function cycle($item, $cycler){
    setTimeout(cycle, 4000, $item.next(), $cycler);
    
    $item.slideUp(3000,function(){
        $item.appendTo($cycler).show();        
    });

	}
cycle($('#cycler div:first'),  $('#cycler'));