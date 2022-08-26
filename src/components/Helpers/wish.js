

  function wish () {
    document.ready(function(){
        document.querySelectorAll(".wish-icon i").click(function(){
            this.toggleClass("fa-heart fa-heart-o");
        });
    });
  }  

  export default wish;