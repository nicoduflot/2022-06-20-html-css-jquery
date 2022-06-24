
function jsonToPost(posts){
    let html = '';
    for(post of posts){
        html += `<div class="post" id="${post.id}">`;
        html += `<h2>${post.title}</h2>`;
        html += `<p>${post.body}</p>`;
        html += `</div>`;
    }
    return html;
}

function jsonToUsers(users){
    let html = '';
    html += `
<table>
    <thead>
        <tr>
            <th>name</th><th>username</th><th>email</th><th>Address</th>
        </tr>
    </thead>
    <tbody>
    `;
    for(user of users){
        html += `<tr>`;
        html += `<td>${user.name}</td>`;
        html += `<td>${user.username}</td>>`;
        html += `<td>${user.email}</td>>`;
        html += `<td>
        ${user.address.street}<br />
        ${user.address.suite}<br />
        ${user.address.city}<br />
        ${user.address.zipcode}<br />
        </td>`;
        html += `</tr>`;
    }

    html += `
    </tbody>
</table>
    `;
    return html;
}

jQuery( function($){

    $('#showAllPosts').click( () => {
        $.ajax( {
            //url: 'https://jsonplaceholder.typicode.com/posts',
            url: './ressources/posts.json',
            type: 'GET',
            dataType: 'json'
        } )
        .done( (response) => {
            // gestion de la réponse
            $('#allPosts').html( jsonToPost(response) );
        })
        .fail( (error) => {
            // traitement de l'erreur
            console.log(`La requête s'est terminée en erreur : ${error.responseText}`);
            $('#allPosts').html( `<tr><td>${error.responseText}</td></tr>` );
        })
        .always( () => {
            // traitement à faire à la fin deu .ajax()
            console.log('Requête terminée');
        });
    });

    $('#showAllUsers').click( () => {
        $.get(
            "./ressources/users.json", // chemin vers la ressource appelée
            function(data){ // fonction a effectuer sur les données reçues de la ressource grâce à .get
                $('#allUsers').html( jsonToUsers(data) );
            },
            'json' // le type de données reçues par le .get
        )
        .fail( (error) => {
            // gestion de l'erreur
            (error) => {
                $('#allUsers').html( error.responseText);
            }
        })
        .always( () => {
            console.log('requête .get terminée');
        });
    });

} );