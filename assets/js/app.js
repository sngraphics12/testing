$(document).ready(function () {

    function loadPage(page) {
        $.ajax({
            url: page + '.html',
            success: function (data) {
                $("#content").html(data)

                if(page === 'home'){
                   dataFetching()
                }
            }
        })
    }

    $("#home").click(function (e) {
        e.preventDefault();
        loadPage('home')
    })


    $("#about").click(function (e) {
        e.preventDefault();
        loadPage('about')
    })


    $("#contact").click(function (e) {
        e.preventDefault();
        loadPage('contact')
    })

    $("#services").click(function (e) {
        e.preventDefault();
        loadPage('service')
    })

    $("#gallery").click(function (e) {
        e.preventDefault();
        loadPage('gallery')
    })


    loadPage('home')


    // data fetching 

    function dataFetching() {
        $.ajax({
            url: 'data.json',
            type: 'get',
            success: function (user) {

                let myhtml = ""
                user.forEach(users => {

                    myhtml += `
                     <div class="col-3">
                <div class="card" style="width: 18rem;">
  <img src="${users.p_image}" alt="..."  height="350px">
  <div class="card-body">
    <h5 class="card-title">${users.p_name}</h5>
    <h5 class="card-title">${users.p_price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary view" data-id="${users.id}">View Details</a>
  </div>
</div>
            </div>
                    `

                })

                $("#myrow").html(myhtml)

            }

        })
    }

    dataFetching()

    $(".dropdown-menu a").on('click', function(e){
        e.preventDefault()
        loadPage(this.id)
        $(".dropdown-menu").removeClass('show')
    })


})

