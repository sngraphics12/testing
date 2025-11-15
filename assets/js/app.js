$(document).ready(function () {

    // SPA Single page application with jQuery start

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

    // SPA Single page application with jQuery end


    //  dynamic data fetching using ajax start 

    function dataFetching() {
        $.ajax({
            url: 'data.json',
            type: 'get',
            success: function (user) {

                let myhtml = ""
                user.forEach(users => {

                    myhtml += `
                     <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center mb-5">
                <div class="card" style="width: 18rem;">
  <img src="${users.image}" alt="..."  height="350px">
  <div class="card-body">
    <h5 class="card-title">${users.name}</h5>
    <h5 class="card-title">${users.price}</h5>
    <p class="card-text">Some quick example text to build on the card title </p>
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

    // dynamic data fetching using ajax end



    // product filtration start

    $(document).on('click', '.filter', function(){

        let category = $(this).data('category')
        $.ajax({
            url :'data.json',
            success : function(data){
                let filterData = data

                if(category !== 'all'){
                    filterData = data.filter(item =>
                        item.name.toLowerCase().includes(category.toLowerCase())
                    )
                }
                
                let html= ""
                filterData.forEach(users => {

                    html += `
                     <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center mb-5">
                <div class="card" style="width: 18rem;">
  <img src="${users.image}" alt="..."  height="350px">
  <div class="card-body">
    <h5 class="card-title">${users.name}</h5>
    <h5 class="card-title">${users.price}</h5>
    <p class="card-text">Some quick example text to build on the card title </p>
    <a href="#" class="btn btn-primary view" data-id="${users.id}">View Details</a>
  </div>
</div>
            </div>
                    ` 

                })

                $("#myrow").html(html)


            }
        })


    })


    // product filtration end





    // dynamic product detail display in modal start

    $(document).on("click", '.view', function(e){
        e.preventDefault()
        let myid = $(this).data('id');

        $.ajax({
            url : 'data.json',
            success : function(mydata){
                let p = mydata.find(item => item.id == myid)

                $("#m-image").attr('src', p.image)
                $("#m-name").html(p.name)
                $("#m-price").html(p.price)

                let mymodal = new bootstrap.Modal(document.getElementById("mymodal")).show()
                
            }
            
        })

    })

     // dynamic product detail display in modal start


})

