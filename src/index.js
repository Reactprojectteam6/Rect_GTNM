import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './Component/App/App';
import $ from 'jquery';
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
/*
$(function(){
  $('.stars-logged').raty({
    number: 10,
    score: function() {
      return $(this).attr('data-score');
    },
    click: function(score) {
      var product_id = $(this).attr('data-product-id');
      $.ajax ({
        url: '/rating',
        type: 'POST',
        data: {
          score: score,
          product_id: product_id
        }
      }).done(function (data){
        window.location.reload();
      });
    },
    path: '/assets/'
  });
});
$(function(){
  $('.stars').raty({
    number: 10,
    score: function() {
      return $(this).attr('data-score');
    },
    path: '/assets/',
    click: function() {
    }
  });
});

$(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=788341004675923";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v5.0&appId=449104735951964&autoLogAppEvents=1"></script>
*/