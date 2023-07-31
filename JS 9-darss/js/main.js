let user = [
    {
        id: "00001",
        login: "MDK91",
        password: "12345",
        userName: "John Doe"
    }
]
$(document).ready(function (){
    $("#startModal").modal("show");
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password !=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    if (password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide");
                    }
                }
            })
        }else{
            alert("Login va parol qatorlarini to'ldiring!")
        }
    })
})