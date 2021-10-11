             $('#quick_submit').on('click', function(e){
                e.preventDefault();

                var url = "https://quanutritiondemo1.herokuapp.com/quickcontact/"
                var name = $('#form_name').val();
                var phone = $('#form_phone').val();
                var code =  $('#quick_submit').parent().parent().parent().parent().find('.selected-dial-code').text()

                if(name == "" || phone == ""){
                    alert("Required fields should be filled!")
                }
                else{
                    $('.load_container').show();
                    $('.dark').addClass('no_scroll');
                var form_data = $("#contact_form").serialize()+'&'+$.param({ 'code': code });
                $.ajax({
                  type:"POST",
                  data:form_data,
                  url:url,
                  crossDomain: true,
                  success:function(result){
                      $('.load_container').hide();
                      $('.dark').removeClass('no_scroll');
                      if(result.status == 'ok'){
                          alert(result.msg);
                      }else{
                        alert(result.msg)
                      }
                  }
                });
              }
                  
          });