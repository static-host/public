jQuery(document).ready(function(t){var e=!1,a=!0,o=!1,s=999,i="comments.geeke.net",n=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=(Math.max(document.documentElement.clientHeight,window.innerHeight||0),[]),l=([location.protocol,"//",location.host].join(""),t(".no-bookmarks").html());u(),t.cookieBubble({buttonText:"知道了",iconColor:"rgba(255, 255, 255, 1)",iconVisibility:!0,cookiePolicyButtonText:"阅读 Cookie 政策",cookiePolicyButtonUrl:"http://allaboutcookies.org",cookiePolicyButtonTarget:"_blank",messageText:"此网站使用 Cookies 进行分析，以改善您的体验并显示您可能喜欢的内容。"});var d=t("html");t(".dark-light").on("click",function(){"dark"===d.attr("data-theme")?(d.attr("data-theme","light"),localStorage.setItem("selected-theme","light")):(d.attr("data-theme","dark"),localStorage.setItem("selected-theme","dark"))}),"undefined"!=typeof Storage&&("light"==localStorage.getItem("selected-theme")?document.documentElement.setAttribute("data-theme","light"):"dark"==localStorage.getItem("selected-theme")&&document.documentElement.setAttribute("data-theme","dark")),t(document).ready(function(){new Clipboard("#copy").on("success",function(t){alert("微信号复制成功",1500),window.location.href="weixin://",t.clearSelection()})}),t('[data-toggle="tooltip"]').tooltip({trigger:"hover"}),t(".go-up").on("click",function(e){e.preventDefault(),t("body,html").animate({scrollTop:0},500)}),t(this).scrollTop()>0?t("body").addClass("scroll"):t("body").removeClass("scroll"),t(window).on("scroll",function(e){t(this).scrollTop()>0?t("body").addClass("scroll"):t("body").removeClass("scroll"),t(".post-template").length&&function(){var e=t(".post").offset().top,a=t(".editor-content").height();if(t(window).scrollTop()>e&&t(window).scrollTop()<e+a){var o=t(window).scrollTop()-e,s=100*o/a;t(".progress").css({width:s+"%"}),t(".progress").parent().addClass("visible"),t(".progress").attr("data-original-title",parseInt(s)+"%"),t(".progress").attr("aria-describedby")&&t("#"+t(".progress").attr("aria-describedby")).find(".tooltip-inner").text(parseInt(s)+"%")}else t(window).scrollTop()<e?(t(".progress").css({width:"0%"}),t(".progress").parent().removeClass("visible")):(t(".progress").css({width:"100%"}),t(".progress").attr("data-original-title","100%"),t(".progress").attr("aria-describedby")&&t("#"+t(".progress").attr("aria-describedby")).find(".tooltip-inner").text("100%"))}(),t(".zoom").fluidbox("close")}),void 0!==Cookies.get("ge-read-later")&&(r=JSON.parse(Cookies.get("ge-read-later"))),r=c(t("#content .loop"),r),t(".drawer-trigger").on("click",function(e){e.preventDefault(),t(".drawer").toggleClass("active")}),t("body").on("click",".modal-backdrop",function(e){e.preventDefault(),t(".modal.show .close").click()}),t(window).on("load",function(e){var i=1,n=window.location.pathname,l=(t(".post"),0);if(n=n.replace(/#(.*)$/g,"").replace("///g","/"),t("body").hasClass("paged")&&(i=parseInt(n.replace(/[^0-9]/gi,""))),a&&"undefined"!=typeof maxPages){if(1==maxPages)return void t("#load-posts").addClass("hidden");t("#load-posts").addClass("visible").removeClass("hidden"),t("#load-posts").on("click",function(e){if(e.preventDefault(),i!=maxPages){var a=t(this);i++,t("body").hasClass("paged")&&(n="/");var o=n+"page/"+i+"/";a.hasClass("step")&&setTimeout(function(){a.removeClass("step"),l=0},1e3),t.ajax({url:o,xhrFields:{withCredentials:!0},beforeSend:function(){t("#load-posts").text("正在加载"),t("#load-posts").addClass("loading")}}).done(function(e){l++;var a=t(e).find(".post").addClass("opacity");t("#load-posts").text("查看更多"),t("#load-posts").removeClass("loading"),t("#content .loop").append(a),t.each(a,function(e,a){t(this)}),t('[data-toggle="tooltip"]').tooltip({trigger:"hover"}),r=c(t("#content .opacity"),r),i==maxPages&&t("#load-posts").addClass("hidden")})}else t("#load-posts").addClass("hidden")})}else t("#load-posts").removeClass("visible").addClass("hidden");if(o&&a){var d="on";t("#load-posts").length>0&&t(window).on("scroll",function(e){var a,o,i,n;a="#load-posts",o=t(window).scrollTop(),i=o+t(window).height(),(n=t(a).offset().top)+t(a).height()<=i&&n>=o&&"on"==d&&l<s&&(t("#load-posts").click(),d="off",setTimeout(function(){d="on",l==s&&t("#load-posts").addClass("step")},1e3))})}u()});new GhostSearch({input:"#search-field",results:"#results",template:function(t){var e=[location.protocol,"//",location.host].join(""),a=moment(t.published_at).fromNow(),o="";return t.primary_tag&&(o='<span class="tags"><a href="/tag/'+t.primary_tag.slug+'">'+t.primary_tag.name+"</a></span>"),'            <div class="item">              <article>                <div class="post-inner-content">                    <p>                      <a href="'+e+"/"+t.slug+'" class="post-title" title="'+t.title+'"><strong>'+t.title+'</strong></a>                    </p>                </div>                <div class="post-meta">                     '+o+'<time datetime="'+t.published_at+'">'+a+'</time>                    <div class="inner">                        <a href="#" class="read-later" data-id="'+t.id+'"><i class="far fa-bookmark"></i></a>                    </div>                </div>              </article>             </div>'},api:{resource:"posts",parameters:{fields:["title","slug","published_at","id"],include:"tags"}},on:{afterDisplay:function(e){r=c(t("#results"),r)}}});function c(e,a){return void 0!==Cookies.get("ge-read-later")&&(t.each(a,function(e,a){t('.read-later[data-id="'+a+'"]').addClass("active")}),p(a)),t(e).find(".read-later").each(function(e,o){t(this).on("click",function(e){e.preventDefault();var o=t(this).attr("data-id");t(this).hasClass("active")?h(a,o):a.push(o),t('.read-later[data-id="'+o+'"]').each(function(e,a){t(this).toggleClass("active")}),t("header .counter").addClass("shake"),setTimeout(function(){t("header .counter").removeClass("shake")},300),Cookies.set("ge-read-later",a,{expires:365}),p(a)})}),a}function p(e){if(t(".bookmark-container").empty(),e.length){[location.protocol,"//",location.host].join("");t("header .counter").removeClass("hidden").text(e.length),t(".bookmark-container").removeClass("no-bookmarks");var a=e.toString();a="id:["+a+"]",t.get(ghost.url.api("posts",{filter:a,include:"tags"})).done(function(a){t(".bookmark-container").empty(),t.each(a.posts,function(e,a){var o,s=moment(a.published_at).fromNow();a.tags.length&&(o='<span class="tags"><a href="/tag/'+a.tags[0].slug+'">'+a.tags[0].name+"</a></span>"),t(".bookmark-container").append('                     <div class="item">                       <article class="{{post_class}}" data-id={{comment_id}}>                         <div class="post-inner-content">                             <p>                               <a href="'+a.url+'" class="post-title" title="'+a.title+'"><strong>'+a.title+'</strong></a>                             </p>                         </div>                         <div class="post-meta">                             '+o+'<time datetime="'+a.published_at+'">'+s+'</time>                             <div class="inner">                               <a href="#" class="read-later active" data-id="'+a.id+'"><i class="far fa-bookmark"></i></a>                             </div>                         </div>                       </article>                      </div>                     ')}),t(".bookmark-container").find(".read-later").each(function(a,o){t(this).on("click",function(a){a.preventDefault();var o=t(this).attr("data-id");t(this).hasClass("active")?h(e,o):e.push(o),t('.read-later[data-id="'+o+'"]').each(function(e,a){t(this).toggleClass("active")}),Cookies.set("ge-read-later",e,{expires:365}),p(e)})}),a.posts.length?t("header .counter").removeClass("hidden").text(a.posts.length):(t("header .counter").addClass("hidden"),t(".bookmark-container").append('<p class="no-bookmarks"></p>'),t(".no-bookmarks").html(l))})}else t("header .counter").addClass("hidden"),t(".bookmark-container").append('<p class="no-bookmarks"></p>'),t(".no-bookmarks").html(l)}function h(t){for(var e,a,o=arguments,s=o.length;s>1&&t.length;)for(e=o[--s];-1!==(a=t.indexOf(e));)t.splice(a,1);return t}if(t("#search-field").on("click",function(e){t("#drawer").addClass("search-focus")}),t(".close-search").on("click",function(e){e.preventDefault(),t("#drawer").removeClass("search-focus")}),t(".modal").on("mouseup",function(e){var a=t(".widget");a.is(e.target)||0!==a.has(e.target).length||t("#drawer").removeClass("search-focus")}),t("pre code").each(function(t,e){hljs.highlightBlock(e)}),t("#content").attr("data-id")&&""!=i&&t(".comments .btn").on("click",function(e){e.preventDefault(),t(this).addClass("hidden"),t(".comments").append('<div id="commento"></div>');[location.protocol,"//",location.host,location.pathname].join("");var a,o,s=[location.protocol,"//",location.host,"/assets"].join("");a=document,(o=a.createElement("script")).type="text/javascript",o.src="//"+i+"/js/commento.js",o.setAttribute("defer","defer"),o.setAttribute("data-page-id",t("#content").attr("data-id")),o.setAttribute("data-auto-init",!0),o.setAttribute("data-no-fonts",!0),o.setAttribute("data-css-override",s+"/css/comment-ge.css"),(a.head||a.body).appendChild(o)}),e&&shareSelectedText(".post-template .editor-content",{sanitize:!0,buttons:["twitter"],tooltipTimeout:250}),t(".tweets").length){var m=t(".tweets").attr("data-twitter").substr(1);t(".tweets").append('<a class="twitter-timeline" data-width="100%" data-height="800" data-tweet-limit="3" data-chrome="noborders noheader nofooter transparent" href="https://twitter.com/'+m+'?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>')}function u(){t(".kg-gallery-image img").each(function(e,a){var o=t(this).closest(".kg-gallery-image"),s=t(this)[0].naturalWidth/t(this)[0].naturalHeight;o.attr("style","flex: "+s+" 1 0%")})}function g(e){e<767?t("header .nav").appendTo("#drawer .widget-menu"):(t("#drawer .widget-menu .nav").appendTo("header .navigation"),t("#drawer").modal("hide"))}t(".subscribe-email").each(function(e,a){t(this).validate({rules:{email:{required:!0,email:!0}},submitHandler:function(e){t(e).submit()}})}),t(".kg-gallery-image img").each(function(e,a){t("<a href='"+t(this).attr("src")+"' class='zoom'></a>").insertAfter(t(this)),t(this).appendTo(t(this).next("a"))}),t(".zoom").fluidbox(),t(".zoom").on("openstart.fluidbox",function(e){t(".kg-gallery-container").attr("style","z-index: 10")}).on("closeend.fluidbox",function(e){t(".kg-gallery-container").attr("style","z-index: 2")}),g(n),t(window).on("resize",function(t){g(n=Math.max(document.documentElement.clientWidth,window.innerWidth||0))})});
