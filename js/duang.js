$(function() {
   $('svg[data-src]').each(function(index, svg){
        var src = $(svg).data('src');

       $.ajax({
           url : src,
           dataType : 'xml',
           success:function(svgDocument){
               var $svg = $(svgDocument.documentElement);
               $svg.attr({
                   'width' : $('svg').attr('width'),
                   'height': $('svg').attr('height')
               })
                $(svg).after($svg).remove();
           }
       })
   });
});