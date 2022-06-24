/* fonction jQuery qui se lance à la fin du chargement de la page */
jQuery(function($){
    $('#getPropValue').click( () => {
        $('#resGetPropValue').html( $('#getPropValue').css('color') );
    });

    $('#setPropValueRed').click( () => {
        $('#resSetPropValue').css('color', 'red');
    });

    $('#setPropValueBlack').click( () => {
        $('#resSetPropValue').css('color', 'black');
    });

    // animer les blocs rouges
    $('#animation01').click( () => {
        $('#blocAnimate01').animate( 
            {
                //propriétés css a modifier
                width: '250px',
                fontSize: ['2rem', 'linear']
            },
            'slow', //vitesse
            'swing', // type d'animation, swing par défaut
            () => {
                console.log('animation01 en swing finie'); //complete
            }
        );

        $('#blocAnimate02').animate( 
            {
                //propriétés css a modifier
                width: '250px',
                fontSize: '2rem'
            },
            'slow', //vitesse
            'linear', // type d'animation, swing par défaut
            () => {
                console.log('animation02 en linear finie'); //complete
            }
        );
    });

    // faire un reset de l'animation des blocs rouges
    $('#anim01Reset').click( () => {
        $('#blocAnimate01').animate( 
            {
                //propriétés css a modifier
                width: '50px',
                fontSize: ['1rem', 'linear']
            },
            'slow', //vitesse
            'swing', // type d'animation, swing par défaut
            () => {
                $('#blocAnimate01').removeAttr('style');
                console.log('reset animation01 en swing finie'); //complete
            }
        );

        $('#blocAnimate02').animate( 
            {
                //propriétés css a modifier
                width: '50px',
                fontSize: '1rem'
            },
            'slow', //vitesse
            'linear', // type d'animation, swing par défaut
            () => {
                $('#blocAnimate02').removeAttr('style');
                console.log('reset animation02 en linear finie'); //complete
            }
        );
    } );

    $('#hide01').click( ()=>{
        $('#threeStates').animate(
            {
                width: 'hide'
            }
        );
    });

    $('#show01').click( ()=>{
        $('#threeStates').animate(
            {
                width: 'show'
            }
        );
    });

    $('#toggle01').click( ()=>{
        $('#threeStates').animate(
            {
                width: 'toggle'
            }
        );
    });

});