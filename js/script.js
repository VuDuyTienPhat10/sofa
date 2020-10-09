function form()
{
    var taikhoan = document.forms["myform"]["taikhoan"].value;
    if(taikhoan==""){
        alert("Vui lòng nhập tên tài khoản của bạn");
        return false;
    }
    var email = document.forms["myform"]["email"].value;
    if(email==""){
        alert("Vui lòng nhập Email của bạn");
        return false;
    }
    var pass = document.forms["myform"]["pass"].value;
    if(pass==""){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
   var password = document.forms["myform"]["password"].value;
   if(password==""){
       alert("Vui lòng nhập lại mật khẩu để kiểm tra");
       return false;
   }
    var hoten = document.forms["myform"]["hoten"].value;
    if(hoten==""){
        alert("Vui lòng nhập họ tên");
        return false;
    }
    var phone = document.forms["myform"]["phone"].value;
    var KTsdt = isNaN(phone);
    if(phone==""){
        alert("Vui lòng nhập số điện thoại");
        return false;
    }
    if(KTsdt==true)
    {
    alert("Số điện thoại phải ở dạng số");
    return false;
    }
    var address = document.forms["myform"]["address"].value;
    if(address==""){
        alert("Vui lòng nhập địa chỉ của bạn");
        return false;
    }
    if(taikhoan !="" && email !="" && pass!="" && password!="" && hoten!="" && phone!="" && address!=""){
        alert("Đăng ký thành công");
        return false;
    }
   
}

function form_dangnhap()
{
    var mail = document.forms["my_form"]["mail"].value;
    if(mail==""){
        alert("Cần nhập email để đăng nhập");
        return false;
    }
    var matkhau = document.forms["my_form"]["matkhau"].value;
    if(matkhau==""){
        alert("Vui lòng nhập mật khẩu của bạn");
        return false;
    }
    if(matkhau !="" && mail !=""){
        alert("Đăng nhập thành công");
        return false;
    }
}