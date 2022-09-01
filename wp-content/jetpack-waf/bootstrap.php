<?php
define( 'DISABLE_JETPACK_WAF', false );
if ( defined( 'DISABLE_JETPACK_WAF' ) && DISABLE_JETPACK_WAF ) return;
define( 'JETPACK_WAF_MODE', 'normal' );
define( 'JETPACK_WAF_SHARE_DATA', '1' );
define( 'JETPACK_WAF_DIR', '/www/wwwroot/4khd/wp-content/jetpack-waf' );
define( 'JETPACK_WAF_WPCONFIG', '/www/wwwroot/4khd/wp-content/../wp-config.php' );
require_once '/www/wwwroot/4khd/wp-content/plugins/jetpack/vendor/autoload.php';
include '/www/wwwroot/4khd/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-waf/run.php';
