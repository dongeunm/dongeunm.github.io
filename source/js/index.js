$(function(){init();set_to_noip();set_recent_read()});function init(){if(localStorage.is_first_come!="0"){localStorage.setItem("is_first_come","0");localStorage.recent_read_one="none";localStorage.recent_read_two="none";localStorage.recent_read_three="none";localStorage.recent_read_one_url="none";localStorage.recent_read_two_url="none";localStorage.recent_read_three_url="none"}}function set_to_noip(){var date=new Date;var noip="2018/11/09 10:00:00";var to_noip=Math.floor((new Date(noip).getTime()-date.getTime())/(24*3600*1000));$("#to_noip").append(to_noip)}function set_recent_read(){if(localStorage.recent_read_one=="none"){$("#recent_read").append("最近暂时没有读什么哟~")}else{var read_1="<p id='recent_read_1' class='recent_read_list'>1.<a href='blog?p="+localStorage.recent_read_one_url+"'>"+localStorage.recent_read_one+"</a></p>";var read_2="<p id='recent_read_2' class='recent_read_list'>2.<a href='"+((localStorage.recent_read_two_url=="none")?"#":("blog?p="+localStorage.recent_read_two_url))+"'>"+localStorage.recent_read_two+"</a></p>";var read_3="<p id='recent_read_3' class='recent_read_list'>3.<a href='"+((localStorage.recent_read_three_url=="none")?"#":("blog?p="+localStorage.recent_read_three_url))+"'>"+localStorage.recent_read_three+"</a></p>";$("#recent_read").append(read_1,read_2,read_3)}};