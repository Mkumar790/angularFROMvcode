  $('#submit_schedule').on('click', function(e){
               e.preventDefault();
               var url = "https://quanutritiondemo1.herokuapp.com/schedule_call/"
                var name = $('#schedule_form #form_name').val();
                var phone = $('#schedule_form #form_phone').val();
                var code =  $('#submit_schedule').parent().parent().parent().parent().find('.selected-dial-code').text()

                if(name == "" || phone == ""){
                    alert("Required fields should be filled!")
                }
                else{
                    $('.load_container').show();
                    $('.dark').addClass('no_scroll');
                var form_data = $("#schedule_form").serialize()+'&'+$.param({ 'code': code });
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
                          $('.modal').on('hidden.bs.modal', function(){
                             $(this).find('form')[0].reset();
                          });
                      }else{
                        alert(result.msg)
                      }
                  }
                });
              }
            });