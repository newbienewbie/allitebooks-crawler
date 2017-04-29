const assert=require('assert');
const {Parser}=require('../../../lib/crawler/detail-crawler/parser');


describe('', function () {
    it('', function () {
        const html = `<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>Foundation HTML5 with CSS3 - pdf - Free IT eBooks Download</title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="http://www.allitebooks.com/xmlrpc.php">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- This site is optimized with the Yoast WordPress SEO plugin v2.1.1 - https://yoast.com/wordpress/plugins/seo/ -->
<meta name="description" content="If you want to get into developing web sites, the most important thing you&#039;ll need is a solid understanding of Hypertext Markup Language, or HTML—the most"/>
<link rel="canonical" href="http://www.allitebooks.com/foundation-html5-with-css3/" />
<script type='application/ld+json'>{"@context":"http:\/\/schema.org","@type":"WebSite","url":"http:\/\/www.allitebooks.com\/","name":"All IT eBooks"}</script>
<!-- / Yoast WordPress SEO plugin. -->

<link rel="alternate" type="application/rss+xml" title="All IT eBooks &raquo; Feed" href="http://www.allitebooks.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="All IT eBooks &raquo; Comments Feed" href="http://www.allitebooks.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="All IT eBooks &raquo; Foundation HTML5 with CSS3 Comments Feed" href="http://www.allitebooks.com/foundation-html5-with-css3/feed/" />
<link rel='stylesheet' id='wpt-twitter-feed-css'  href='http://www.allitebooks.com/wp-content/plugins/wp-to-twitter/css/twitter-feed.css?ver=4.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-style-css'  href='http://www.allitebooks.com/wp-content/themes/allitebooks/css/bootstrap.css?ver=4.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='fontawesome-style-css'  href='http://www.allitebooks.com/wp-content/themes/allitebooks/css/font-awesome.min.css?ver=4.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='classPlus-style-css'  href='http://www.allitebooks.com/wp-content/themes/allitebooks/style.css?ver=4.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='custom-css-css'  href='http://www.allitebooks.com/wp-content/themes/allitebooks/css/custom.css.php?ver=4.1.1' type='text/css' media='all' />
<script type='text/javascript' src='http://www.allitebooks.com/wp-includes/js/jquery/jquery.js?ver=1.11.1'></script>
<script type='text/javascript' src='http://www.allitebooks.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<script type='text/javascript' src='http://www.allitebooks.com/wp-content/themes/allitebooks/js/superfish.js?ver=4.1.1'></script>
<script type='text/javascript' src='http://www.allitebooks.com/wp-content/themes/allitebooks/js/bootstrap.min.js?ver=4.1.1'></script>
<script type='text/javascript' src='http://www.allitebooks.com/wp-content/themes/allitebooks/js/jquery.autosize.js?ver=4.1.1'></script>
<script type="text/javascript">
	window._wp_rp_static_base_url = 'https://wprp.zemanta.com/static/';
	window._wp_rp_wp_ajax_url = "http://www.allitebooks.com/wp-admin/admin-ajax.php";
	window._wp_rp_plugin_version = '3.5.4';
	window._wp_rp_post_id = '117';
	window._wp_rp_num_rel_posts = '4';
	window._wp_rp_thumbnails = true;
	window._wp_rp_post_title = 'Foundation+HTML5+with+CSS3';
	window._wp_rp_post_tags = ['html5', 'css3', 'html%2C+html5+%26amp%3B+css', 'compact', 'languag', 'web', 'engin', 'css3', 'tabl', 'foundat', 'write', 'book', 'featur', 'style', 'disabl', 'code', 'html5', 'cascad'];
	window._wp_rp_promoted_content = true;
</script>
<script type="text/javascript" src="https://wprp.zemanta.com/static/js/loader.js?version=3.5.4" async></script>
<link id="site-favicon" href="http://www.allitebooks.com/wp-content/themes/allitebooks/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<!-- Mobile Specific Meta -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
	</head>
<!-- END head -->
<body class="single single-post postid-117 single-format-standard">
	<div id="page" class="hfeed site">
				<header id="masthead" class="site-header" role="banner">
			<div class="nav-inner">
				<nav id="site-navigation" class="main-navigation clearfix" role="navigation">
					<ul id="menu-allitebooks-com" class="site-nav"><li id="menu-item-4" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4"><a title="All IT eBooks" href="/">All IT eBooks</a></li>
<li id="menu-item-65" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-65"><a title="All Categories">Categories</a>
<ul class="sub-menu">
	<li id="menu-item-104" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-has-children menu-item-104"><a href="http://www.allitebooks.com/web-development/">Web Development</a>
	<ul class="sub-menu">
		<li id="menu-item-105" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-105"><a href="http://www.allitebooks.com/web-development/asp-net/">ASP.NET</a></li>
		<li id="menu-item-2944" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2944"><a href="http://www.allitebooks.com/web-development/cms/">CMS</a></li>
		<li id="menu-item-106" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-106"><a href="http://www.allitebooks.com/web-development/html-html5-css/">HTML, HTML5 &#038; CSS</a></li>
		<li id="menu-item-107" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-107"><a href="http://www.allitebooks.com/web-development/javascript/">JavaScript</a></li>
		<li id="menu-item-108" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-108"><a href="http://www.allitebooks.com/web-development/jsp/">JSP</a></li>
		<li id="menu-item-109" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109"><a href="http://www.allitebooks.com/web-development/php/">PHP</a></li>
		<li id="menu-item-110" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-110"><a href="http://www.allitebooks.com/web-development/python/">Python</a></li>
		<li id="menu-item-111" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111"><a href="http://www.allitebooks.com/web-development/ruby/">Ruby</a></li>
		<li id="menu-item-12477" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12477"><a href="http://www.allitebooks.com/web-development/rails/">Rails</a></li>
		<li id="menu-item-12471" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12471"><a href="http://www.allitebooks.com/web-development/xml/">XML</a></li>
		<li id="menu-item-12478" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12478"><a href="http://www.allitebooks.com/web-development/services-apis/">Services &#038; APIs</a></li>
		<li id="menu-item-12476" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12476"><a href="http://www.allitebooks.com/web-development/other-web-development/">Other</a></li>
	</ul>
</li>
	<li id="menu-item-95" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-95"><a href="http://www.allitebooks.com/programming/">Programming</a>
	<ul class="sub-menu">
		<li id="menu-item-97" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-97"><a href="http://www.allitebooks.com/programming/c/">C &#038; C++</a></li>
		<li id="menu-item-98" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-98"><a href="http://www.allitebooks.com/programming/c-programming/">C#</a></li>
		<li id="menu-item-99" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-99"><a href="http://www.allitebooks.com/programming/delphi/">Delphi</a></li>
		<li id="menu-item-100" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-100"><a href="http://www.allitebooks.com/programming/java/">Java</a></li>
		<li id="menu-item-96" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-96"><a href="http://www.allitebooks.com/programming/net/">.NET</a></li>
		<li id="menu-item-12461" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12461"><a href="http://www.allitebooks.com/programming/objective-c/">Objective-C</a></li>
		<li id="menu-item-12462" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12462"><a href="http://www.allitebooks.com/programming/opencl/">OpenCL</a></li>
		<li id="menu-item-12463" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12463"><a href="http://www.allitebooks.com/programming/perl/">Perl</a></li>
		<li id="menu-item-12464" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12464"><a href="http://www.allitebooks.com/programming/powershell/">PowerShell</a></li>
		<li id="menu-item-12465" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12465"><a href="http://www.allitebooks.com/programming/scala/">Scala</a></li>
		<li id="menu-item-12466" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12466"><a href="http://www.allitebooks.com/programming/swift/">Swift</a></li>
		<li id="menu-item-101" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-101"><a href="http://www.allitebooks.com/programming/visual-basic/">Visual Basic</a></li>
	</ul>
</li>
	<li id="menu-item-66" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-66"><a href="http://www.allitebooks.com/datebases/">Datebases</a>
	<ul class="sub-menu">
		<li id="menu-item-12450" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12450"><a href="http://www.allitebooks.com/datebases/big-data/">Big Data</a></li>
		<li id="menu-item-12451" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12451"><a href="http://www.allitebooks.com/datebases/data-analysis/">Data Analysis</a></li>
		<li id="menu-item-68" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-68"><a href="http://www.allitebooks.com/datebases/mongodb/">MongoDB</a></li>
		<li id="menu-item-69" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-69"><a href="http://www.allitebooks.com/datebases/mysql/">MySQL</a></li>
		<li id="menu-item-5750" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5750"><a href="http://www.allitebooks.com/datebases/nosql/">NoSQL</a></li>
		<li id="menu-item-5751" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5751"><a href="http://www.allitebooks.com/datebases/postgresql/">PostgreSQL</a></li>
		<li id="menu-item-70" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-70"><a href="http://www.allitebooks.com/datebases/oracle/">Oracle</a></li>
		<li id="menu-item-71" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-71"><a href="http://www.allitebooks.com/datebases/sql/">SQL</a></li>
	</ul>
</li>
	<li id="menu-item-12521" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12521"><a href="http://www.allitebooks.com/game-programming/">Game Programming</a></li>
	<li id="menu-item-72" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-72"><a href="http://www.allitebooks.com/graphics-design/">Graphics &#038; Design</a>
	<ul class="sub-menu">
		<li id="menu-item-73" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-73"><a href="http://www.allitebooks.com/graphics-design/3d-max/">3D MAX</a></li>
		<li id="menu-item-74" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-74"><a href="http://www.allitebooks.com/graphics-design/cad/">CAD</a></li>
		<li id="menu-item-75" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-75"><a href="http://www.allitebooks.com/graphics-design/coreldraw/">Coreldraw</a></li>
		<li id="menu-item-76" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-76"><a href="http://www.allitebooks.com/graphics-design/dreamweaver/">Dreamweaver</a></li>
		<li id="menu-item-77" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-77"><a href="http://www.allitebooks.com/graphics-design/flash/">Flash</a></li>
		<li id="menu-item-78" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-78"><a href="http://www.allitebooks.com/graphics-design/illustrator/">Illustrator</a></li>
		<li id="menu-item-79" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-79"><a href="http://www.allitebooks.com/graphics-design/maya/">Maya</a></li>
		<li id="menu-item-80" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-80"><a href="http://www.allitebooks.com/graphics-design/photoshop/">Photoshop</a></li>
		<li id="menu-item-81" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-81"><a href="http://www.allitebooks.com/graphics-design/premiere/">Premiere</a></li>
	</ul>
</li>
	<li id="menu-item-89" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-89"><a href="http://www.allitebooks.com/operating-systems/">Operating Systems</a>
	<ul class="sub-menu">
		<li id="menu-item-94" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-94"><a href="http://www.allitebooks.com/operating-systems/windows/">Windows</a></li>
		<li id="menu-item-91" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-91"><a href="http://www.allitebooks.com/operating-systems/linux-unix/">Linux &#038; Unix</a></li>
		<li id="menu-item-92" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-92"><a href="http://www.allitebooks.com/operating-systems/macintosh/">Macintosh</a></li>
		<li id="menu-item-90" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-90"><a href="http://www.allitebooks.com/operating-systems/android/">Android</a></li>
		<li id="menu-item-4995" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4995"><a href="http://www.allitebooks.com/operating-systems/ios/">iOS</a></li>
		<li id="menu-item-4994" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4994"><a href="http://www.allitebooks.com/operating-systems/windows-phone/">Windows Phone</a></li>
	</ul>
</li>
	<li id="menu-item-83" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-83"><a href="http://www.allitebooks.com/networking-cloud-computing/">Networking &amp; Cloud Computing</a>
	<ul class="sub-menu">
		<li id="menu-item-84" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-84"><a href="http://www.allitebooks.com/networking-cloud-computing/cloud-computing/">Cloud Computing</a></li>
		<li id="menu-item-85" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-85"><a href="http://www.allitebooks.com/networking-cloud-computing/network-administration/">Network Administration</a></li>
		<li id="menu-item-86" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-86"><a href="http://www.allitebooks.com/networking-cloud-computing/network-security/">Network Security</a></li>
		<li id="menu-item-87" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-87"><a href="http://www.allitebooks.com/networking-cloud-computing/networks-protocols-apis/">Networks, Protocols &#038; APIs</a></li>
		<li id="menu-item-88" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-88"><a href="http://www.allitebooks.com/networking-cloud-computing/wireless-networks/">Wireless Networks</a></li>
	</ul>
</li>
	<li id="menu-item-12452" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-12452"><a href="http://www.allitebooks.com/administration/">Administration</a>
	<ul class="sub-menu">
		<li id="menu-item-12453" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12453"><a href="http://www.allitebooks.com/administration/cloud-virtualization/">Cloud &#038; Virtualization</a></li>
		<li id="menu-item-12454" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12454"><a href="http://www.allitebooks.com/administration/infrastructure/">Infrastructure</a></li>
		<li id="menu-item-12479" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12479"><a href="http://www.allitebooks.com/administration/mail-servers/">Mail Servers</a></li>
		<li id="menu-item-12480" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12480"><a href="http://www.allitebooks.com/administration/microsoft-platform/">Microsoft Platform</a></li>
		<li id="menu-item-12481" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12481"><a href="http://www.allitebooks.com/administration/monitoring/">Monitoring</a></li>
		<li id="menu-item-12483" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12483"><a href="http://www.allitebooks.com/administration/task-automation/">Task Automation</a></li>
		<li id="menu-item-12484" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12484"><a href="http://www.allitebooks.com/administration/web-servers/">Web Servers</a></li>
		<li id="menu-item-12482" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12482"><a href="http://www.allitebooks.com/administration/other/">Other</a></li>
	</ul>
</li>
	<li id="menu-item-12448" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-12448"><a href="http://www.allitebooks.com/computers-technology/">Computers &#038; Technology</a>
	<ul class="sub-menu">
		<li id="menu-item-12449" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12449"><a href="http://www.allitebooks.com/computers-technology/computer-science/">Computer Science</a></li>
	</ul>
</li>
	<li id="menu-item-12455" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12455"><a href="http://www.allitebooks.com/certification/">Certification</a></li>
	<li id="menu-item-12456" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-12456"><a href="http://www.allitebooks.com/enterprise/">Enterprise</a>
	<ul class="sub-menu">
		<li id="menu-item-12457" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12457"><a href="http://www.allitebooks.com/enterprise/business-applications/">Business Applications</a></li>
		<li id="menu-item-12458" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12458"><a href="http://www.allitebooks.com/enterprise/communications/">Communications</a></li>
		<li id="menu-item-12459" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12459"><a href="http://www.allitebooks.com/enterprise/erp-crm/">ERP &#038; CRM</a></li>
	</ul>
</li>
	<li id="menu-item-12460" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12460"><a href="http://www.allitebooks.com/marketing-seo/">Marketing &#038; SEO</a></li>
	<li id="menu-item-82" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-82"><a href="http://www.allitebooks.com/hardware/">Hardware &#038; DIY</a></li>
	<li id="menu-item-102" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-102"><a href="http://www.allitebooks.com/security/">Security</a></li>
	<li id="menu-item-103" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-103"><a href="http://www.allitebooks.com/software/">Software</a>
	<ul class="sub-menu">
		<li id="menu-item-12468" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12468"><a href="http://www.allitebooks.com/software/mac/">Mac</a></li>
		<li id="menu-item-12469" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12469"><a href="http://www.allitebooks.com/software/office/">Office</a></li>
		<li id="menu-item-12470" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12470"><a href="http://www.allitebooks.com/software/windows-pc/">Windows &#038; PC</a></li>
	</ul>
</li>
</ul>
</li>
</ul>				</nav>
				<!-- END #site-navigation -->
				<div class="site-search">
					<form role="search" method="get" id="searchform" class="searchform" action="http://www.allitebooks.com/">
						<input type="text" value="" name="s" id="s">
						<span class="search-icon"><i class="fa fa-search"></i></span>
						<input type="submit" id="searchsubmit" value="">
					</form>
				</div>
				<!-- END .search-form -->
			</div>
			<!-- END .nav-inner -->
		</header>
<div id="content" class="top-content clearfix">
                <div class="it-top">
					 <script id="mNCC" language="javascript">
   medianet_width = "728";
   medianet_height = "90";
   medianet_crid = "360799726";
   medianet_versionId = "111299";
   (function() {
       var isSSL = 'https:' == document.location.protocol;
       var mnSrc = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/nmedianet.js?cid=8CUD60GLP' + (isSSL ? '&https=1' : '');
       document.write('<scr' + 'ipt type="text/javascript" id="mNSC" src="' + mnSrc + '"></scr' + 'ipt>');
   })();
</script></div>
</div>
                   
<div id="content_single" class="site-content clearfix">
	<section id="primary" class="content-area">
		<div id="side-content">
			<ul id="menu-categories" class="list-categories clearfix"><li id="menu-item-53" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-53"><a href="http://www.allitebooks.com/web-development/">Web Development</a></li>
<li id="menu-item-45" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-45"><a href="http://www.allitebooks.com/programming/">Programming</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22"><a href="http://www.allitebooks.com/datebases/">Datebases</a></li>
<li id="menu-item-27" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27"><a href="http://www.allitebooks.com/graphics-design/">Graphics &#038; Design</a></li>
<li id="menu-item-39" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-39"><a href="http://www.allitebooks.com/operating-systems/">Operating Systems</a></li>
<li id="menu-item-34" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-34"><a href="http://www.allitebooks.com/networking-cloud-computing/">Networking &#038; Cloud Computing</a></li>
<li id="menu-item-12516" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12516"><a href="http://www.allitebooks.com/administration/">Administration</a></li>
<li id="menu-item-8592" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8592"><a href="http://www.allitebooks.com/certification/">Certification</a></li>
<li id="menu-item-179" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-179"><a href="http://www.allitebooks.com/computers-technology/">Computers &#038; Technology</a></li>
<li id="menu-item-12485" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12485"><a href="http://www.allitebooks.com/enterprise/">Enterprise</a></li>
<li id="menu-item-158" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-158"><a href="http://www.allitebooks.com/game-programming/">Game Programming</a></li>
<li id="menu-item-12520" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12520"><a href="http://www.allitebooks.com/hardware/">Hardware &#038; DIY</a></li>
<li id="menu-item-12517" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12517"><a href="http://www.allitebooks.com/marketing-seo/">Marketing &#038; SEO</a></li>
<li id="menu-item-12518" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12518"><a href="http://www.allitebooks.com/security/">Security</a></li>
<li id="menu-item-12519" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12519"><a href="http://www.allitebooks.com/software/">Software</a></li>
</ul>			<script id="mNCC" language="javascript">
   medianet_width = "160";
   medianet_height = "600";
   medianet_crid = "678842125";
   medianet_versionId = "111299";
   (function() {
       var isSSL = 'https:' == document.location.protocol;
       var mnSrc = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/nmedianet.js?cid=8CUD60GLP' + (isSSL ? '&https=1' : '');
       document.write('<scr' + 'ipt type="text/javascript" id="mNSC" src="' + mnSrc + '"></scr' + 'ipt>');
   })();
</script>
		</div>
		<!-- END #side-content -->
		<main id="main-content">
			<div class="main-content-inner clearfix">
				<article class="post-117 post type-post status-publish format-standard has-post-thumbnail hentry category-html-html5-css single-post">
					<header class="entry-header">
						<h1 class="single-title">Foundation HTML5 with CSS3</h1>
						<h4>A Modern Guide and Reference</h4>						<!-- END .entry-title -->
						<div class="entry-meta clearfix">
							  <div class="entry-body-thumbnail hover-thumb">
	                         	<a href="http://www.allitebooks.com/foundation-html5-with-css3/" rel="bookmark">
			                      <img width="400" height="493" src="http://www.allitebooks.com/wp-content/uploads/2015/04/Foundation-HTML5-with-CSS3.jpeg" class="attachment-post-thumbnail wp-post-image" alt="Foundation HTML5 with CSS3" />		                        </a>
	                          </div>
	                          <!-- END .entry-thumbnail -->
	                          <div class="book-detail">
			                   <dl>
                                 <dt>Author:</dt><dd> <a href="http://www.allitebooks.com/author/craig-cook/" rel="tag">Craig Cook</a>, <a href="http://www.allitebooks.com/author/jason-garber/" rel="tag">Jason Garber</a></dd>
                                 <dt>ISBN-10:</dt><dd> 978-1430238768</dd>
                                 <dt>Year:</dt><dd> 2012</dd>
                                 <dt>Pages:</dt><dd> 430</dd>
                                 <dt>Language:</dt><dd> English</dd>
                                 <dt>File size:</dt><dd> 11.31 MB</dd>
                                 <dt>File format:</dt><dd> PDF</dd>
                                 <dt>Category:</dt><dd> <a href="http://www.allitebooks.com/web-development/html-html5-css/" rel="category" >HTML, HTML5 &amp; CSS</a></dd>
                               </dl>   
                              </div>
						</div>
						<!-- END .entry-meta -->
					</header>
					<!-- END .entry-header -->
					<div class="entry-content">
                    <h3>Book Description:</h3>
						<p>If you want to get into developing web sites, the most important thing you&#8217;ll need is a solid understanding of Hypertext Markup Language, or HTML—the most common language used to write web site content. The most recent version of the language is HTML5, and it contains a whole host of new features to give you more power when creating websites.</p>
<p>Foundation HTML5 with CSS3: A Modern Guide and Reference incorporates practical examples to show how to structure data correctly using HTML5, along with styling and layout basics using the latest release of Cascading Style Sheets, CSS3.</p>
<p>This book is forward-thinking because all the featured code and techniques are standards-compliant, and it demonstrate best practices—you won&#8217;t waste your time on outdated, bad techniques. Your web pages will work properly in most web browsers and be accessible to web users with disabilities, easily located using popular search engines, and compact in file size.</p>
<p>Even if you already know HTML5 and CSS3 basics, this book will still be useful to you. It features comprehensive reference tables, so you can look up troublesome attributes, codes, and properties quickly and easily.</p>
											</div>
					<div class="it-bottom">
					 <script id="mNCC" language="javascript">
   medianet_width = "600";
   medianet_height = "120";
   medianet_crid = "654332145";
   medianet_versionId = "111299";
   (function() {
       var isSSL = 'https:' == document.location.protocol;
       var mnSrc = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/nmedianet.js?cid=8CUD60GLP' + (isSSL ? '&https=1' : '');
       document.write('<scr' + 'ipt type="text/javascript" id="mNSC" src="' + mnSrc + '"></scr' + 'ipt>');
   })();
</script></a>
                   </div>
					<!-- END .entry-content -->
					<footer class="entry-footer clearfix">
                        <div class="entry-meta clearfix">
							<span class="download-links">
								<a href="http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf" target="_blank"><i class="fa fa-download" aria-hidden="true"></i> Download PDF <span class="download-size">(11.31 MB)</span></a>
							</span>
							<span class="download-links">
								<a href="/read/index.php?id=117" target="_blank"><i class="fa fa-book" aria-hidden="true"></i> Read Online</a>
							</span>
                            <span class="entry-actions">
								<div class="addthis_sharing_toolbox"></div><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-546867a1086d729e" async="async"></script>
							</span>
							<!-- END .entry-actions -->	                                                        			
						</div>
						<!-- END .entry-meta -->
					</footer>
					<!-- END .entry-footer -->
                    
<div class="wp_rp_wrap  wp_rp_vertical_m" id="wp_rp_first"><div class="wp_rp_content"><h3 class="related_post_title">Related eBooks</h3><ul class="related_post wp_rp"><li data-position="0" data-poid="in-3527" data-post-type="none" ><a href="http://www.allitebooks.com/beginning-html5-and-css3-for-dummies/" class="wp_rp_thumbnail"><img width="150" height="187" src="http://www.allitebooks.com/wp-content/uploads/1431/305559886de1dd7.jpg" class="attachment-150x200 wp-post-image" alt="Beginning HTML5 and CSS3 For Dummies" /></a><a href="http://www.allitebooks.com/beginning-html5-and-css3-for-dummies/" class="wp_rp_title">Beginning HTML5 and CSS3 For Dummies</a></li><li data-position="1" data-poid="in-3537" data-post-type="none" ><a href="http://www.allitebooks.com/html5-and-css3-all-in-one-for-dummies/" class="wp_rp_thumbnail"><img width="150" height="188" src="http://www.allitebooks.com/wp-content/uploads/1431/3155598886b57bf.jpg" class="attachment-150x200 wp-post-image" alt="HTML5 and CSS3 All-in-One For Dummies" /></a><a href="http://www.allitebooks.com/html5-and-css3-all-in-one-for-dummies/" class="wp_rp_title">HTML5 and CSS3 All-in-One For Dummies</a></li><li data-position="2" data-poid="in-3461" data-post-type="none" ><a href="http://www.allitebooks.com/responsive-web-design-with-html5-and-css3/" class="wp_rp_thumbnail"><img width="150" height="194" src="http://www.allitebooks.com/wp-content/uploads/1431/30555987c8529dc.jpg" class="attachment-150x200 wp-post-image" alt="Responsive Web Design with HTML5 and CSS3" /></a><a href="http://www.allitebooks.com/responsive-web-design-with-html5-and-css3/" class="wp_rp_title">Responsive Web Design with HTML5 and CSS3</a></li><li data-position="3" data-poid="in-120" data-post-type="none" ><a href="http://www.allitebooks.com/dreamweaver-cs6-mobile-and-web-development-with-html5-css3-and-jquery-mobile/" class="wp_rp_thumbnail"><img width="150" height="186" src="http://www.allitebooks.com/wp-content/uploads/2015/04/Dreamweaver-CS6-Mobile-and-Web-Development-with-HTML5-CSS3-and-jQuery-Mobile.jpeg" class="attachment-150x200 wp-post-image" alt="Dreamweaver CS6 Mobile and Web Development with HTML5, CSS3, and jQuery Mobile" /></a><a href="http://www.allitebooks.com/dreamweaver-cs6-mobile-and-web-development-with-html5-css3-and-jquery-mobile/" class="wp_rp_title">Dreamweaver CS6 Mobile and Web Development with HTML5, CSS3, and jQuery Mobile</a></li></ul></div></div>
                      
				</article>
				<!-- END .post-list -->
				
<div id="comments" class="comments-area">

	
	
	
									<div id="respond" class="comment-respond">
				<h3 id="reply-title" class="comment-reply-title">Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="/foundation-html5-with-css3/#respond" style="display:none;">Cancel reply</a></small></h3>
									<form action="http://www.allitebooks.com/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate>
																			<p class="comment-form-comment"><textarea id="comment" name="comment" placeholder="Content" rows="2" aria-required="true"></textarea></p>							<p class="comment-form-author"><input id="author" name="author" placeholder="Name *" type="text" value="" size="30" aria-required='true' /><i class="icon-user"></i></p>
<p class="comment-form-email"><input id="email" name="email" placeholder="Email *" type="text" value="" size="30" aria-required='true' /><i class="icon-envelope"></i></p>
																								<p class="form-submit">
							<input name="submit" type="submit" id="submit" class="submit" value="Submit" />
							<input type='hidden' name='comment_post_ID' value='117' id='comment_post_ID' />
<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
						</p>
											</form>
							</div><!-- #respond -->
			
</div><!-- #comments -->
                
			</div>
		</main>
		<!-- END #main-content -->
	</section>
	<!-- END #primary -->
</div>
<!-- END .site-content -->


<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="footer-area">
		<div class="site-info">
			<span class="copyright">Reproduction of site books is authorized only for informative purposes and strictly for personal, private use.     &copy; 2017 All IT eBooks <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62303785-1', 'auto');
  ga('send', 'pageview');

</script></span>
		</div><!-- .site-info -->
	</div>
</footer><!-- #colophon -->
</div>
<!-- END .site -->
<script type='text/javascript' src='http://www.allitebooks.com/wp-content/themes/allitebooks/js/site.js?ver=4.1.1'></script>
</body>
</html>`;
        const parser=new Parser();
        return parser.parseEBookInfo(html)
			.then(info=>{
				assert.equal(info.author,"Craig Cook, Jason Garber");
				assert.equal(info.year,2012);
				assert.equal(info.attachmentUrl,'http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf');
			});
    });
});