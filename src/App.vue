<template>
  <router-view> </router-view>
</template>
<style>
@import "./assets/css/line-awesome.min.css";
</style>
<style>
  /* Global */
  @font-face {
    font-family: 'avenir_book';
    src: url('./assets/fonts/avenir_book/avenir_book.eot');
    src: local('☺'), url('./assets/fonts/avenir_book/avenir_book.woff') format('woff'), url('./assets/fonts/avenir_book/avenir_book.ttf') format('truetype'), url('./assets/fonts/avenir_book/avenir_book.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'avenir_regular';
    src: url('./assets/fonts/avenir_regular/avenir_regular.eot');
    src: local('☺'), url('./assets/fonts/avenir_regular/avenir_regular.woff') format('woff'), url('./assets/fonts/avenir_regular/avenir_regular.ttf') format('truetype'), url('./assets/fonts/avenir_regular/avenir_regular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'avenir_medium';
    src: url('./assets/fonts/avenir_medium/avenir_medium.eot');
    src: local('☺'), url('./assets/fonts/avenir_medium/avenir_medium.woff') format('woff'), url('./assets/fonts/avenir_medium/avenir_medium.ttf') format('truetype'), url('./assets/fonts/avenir_medium/avenir_medium.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'avenir_bold';
    src: url('./assets/fonts/avenir_bold/avenir_bold.eot');
    src: local('☺'), url('./assets/fonts/avenir_bold/avenir_bold.woff') format('woff'), url('./assets/fonts/avenir_bold/avenir_bold.ttf') format('truetype'), url('./assets/fonts/avenir_bold/avenir_bold.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  h1 {
    font-family: 'avenir_bold';
  }
  p,
  nav li,
  button,div {
    font-family: 'avenir_regular';
  }
  h2,
  h3,
  h4,
  .feature-list li {
    font-family: 'avenir_bold';
  }
  span {
    font-family: 'avenir_book';
  }
  body{
    margin: 0;
  }
  html , body , #app{
    height: 100%;
  }
  .hei_100{
    height: 100%;
  }
  /* Hide Arrow */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
/* .Hide Arrow */
/* Form */

.form-control-bx {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
}
.form-control-bx label {
    font-size: 16px;
    padding: 0 0 5px 0;

}
.form-control-bx input.form-input {
    border: 2px solid #3333;
    padding: 10px 20px;
    border-radius: 4px;
}
.form-input-txt-area{
    height: 80px;
    border: 2px solid #3333;
    padding: 10px 20px;
    border-radius: 4px;
    resize: none;
}
input.submit_btn {
    border: 2px solid #333;
    padding: 15px 20px;
    border-radius: 4px;
    background: #fff;
    color: #333;
    font-size: 16px;
}
input.submit_btn:hover {
    background: #333;
    color: #fff;
    cursor: pointer;
    transition: .5s all ease;
}
.div_2 {
    width: 50%;
    float: left;
    box-sizing: border-box;
    min-height: 1px;

}
.error_txt_form{
    background: #dc0707;
    color: #fff;
    text-align: center;
    padding: 10px 15px;
    border-radius: 4px;
    margin: 0 0 20px 0;
}
/* .Form */
/* Navbar */
  nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        border-bottom: 1px solid #3333;
    }

    .nav-brand img {
        width: 120px;
    }

    .usericon img {
        width: 40px;
        margin-right: 7px;
    }

    .usericon {
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 12px 0;
    }

    .logout-div i {
        font-size: 24px;
        padding-right: 10px;
    }

    .logout-div {
        text-align: right;
        display: flex;
        align-items: center;
        background: #fff;
        justify-content: space-between;
        box-shadow: 0px 0px 10px -2px #3333;
        padding: 14px 15px 14px 0px;
        border-radius: 4px;
        min-width: 100px;
        position: absolute;
        top: 50px;
        display: none;
        right: -10px;
        cursor: pointer;
        padding: 14px 15px 14px 15px;
    }

    .logout-div {
        background: #f4f4f4;
    }

    .nav-action {
        position: relative;
    }

    .usericon:hover+.logout-div,
    .logout-div:hover {
        display: flex;
    }
 .jobs-header {
        background: url('~@/assets/img/jobs_head.jpg');
        min-height: 200px;
        background-size: cover;
        background-position: right center;
        display: flex;
        align-items: center;

    }

    .jobs-header h2 {
        margin: 0;
        color: #000;
        font-size: 40px;
        padding: 0 0 0 40px;
    }
 .primary_btn {
        border: 2px solid #333;
        color: #333;
        padding: 10px 15px;
        background: #fff;
        border-radius: 4px;
        font-size: 15px;
    }

    .primary_btn:hover {
        background: #333;
        color: #fff;
        transform: .5s all ease;
        cursor: pointer;
    }
/* .navbar */
  /*.Global */
</style>