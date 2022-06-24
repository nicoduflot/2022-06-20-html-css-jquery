function jsonToTableObject(data){
    let thead = '';
    let tbody = '';
    let firstRound = true;

    // parcourir data
    thead += '<tr>';
    data.forEach( user => {
        // on va parcourir chaque attribut de l'utilisateur en cour7// préparation du tHead
        tbody += '<tr>';
        for(key in user){
            //console.log(key);
            if(firstRound){
                thead += `<th>${key}</th>`;
            }
            // il faut vérifier que lla propriété soit propre au json et non une propriété héritée du type objet
            if(user.hasOwnProperty(key)){
                // remplir les info user
                if('object' !== typeof(user[key])){
                    tbody += `<td>${user[key]}</td>`;
                }else{
                    let elements = '';
                    for(item in user[key]){
                        if(user[key].hasOwnProperty(item)){
                            if('object' !== typeof(user[key][item])){
                                elements += `${user[key][item]} <br />`
                            }
                        }
                    }
                    tbody += `<td>${elements}</td>`;
                }
            }
                
        }
        tbody += '/<tr>';
        firstRound = false;
    });

    thead += '</tr>';
    return [thead, tbody];
}