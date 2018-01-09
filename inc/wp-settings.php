<?php
/**
 * Tweaks for WordPress settings
 *
 * @package aucor_starter
 */

/* =========================================================
  01. Editor
 ======================================================== */

/**
 * TinyMCE settings
 *
 * @param array $settings TinyMCE settings
 *
 * @return array TinyMCE settings
 */
function aucor_starter_show_second_editor_row($settings) {

  // show 2nd editor row
  $settings['wordpress_adv_hidden'] = false;

  return $settings;

}
add_filter('tiny_mce_before_init', 'aucor_starter_show_second_editor_row');

/**
 * Default gallery links to file, size to medium and columns to 2
 *
 * @param array $settings list of media view settings
 *
 * @return array of media view settings
 */
function aucor_starter_gallery_defaults($settings) {

  $settings['galleryDefaults']['link']    = 'file';
  $settings['galleryDefaults']['size']    = 'medium';
  $settings['galleryDefaults']['columns'] = '2';

  return $settings;

}
add_filter('media_view_settings', 'aucor_starter_gallery_defaults');


/* =========================================================
  02. Admin
 ======================================================== */

/**
 * Remove update nags from non-admins
 */
function aucor_starter_remove_update_nags_for_non_admins() {

  if (!current_user_can('update_core')) {
    remove_action('admin_notices', 'update_nag', 3);
  }

}
add_action('admin_head', 'aucor_starter_remove_update_nags_for_non_admins', 1);

/**
 * Remove admin color scheme picker
 */
remove_all_actions('admin_color_scheme_picker');

/**
 * Remove profile contact methods
 *
 * @param array $contact available contact methods
 *
 * @return array available contact methods
 */
function aucor_starter_remove_contact_methods($contact) {

  unset($contact['aim']);
  unset($contact['jabber']);
  unset($contact['yim']);
  unset($contact['googleplus']);
  unset($contact['twitter']);
  unset($contact['facebook']);

  return $contact;

}
add_filter( 'user_contactmethods', 'aucor_starter_remove_contact_methods', 10, 1 );

/**
 * Remove customizer from admin bar
 *
 * @param WP_Admin_Bar $wp_admin_bar the admin bar
 */
function aucor_starter_remove_customizer_admin_bar($wp_admin_bar) {

  $wp_admin_bar->remove_menu('customize');

}
add_action('admin_bar_menu', 'aucor_starter_remove_customizer_admin_bar', 999);

/**
 * Clean up admin menus for non-admins
 */
function aucor_starter_cleanup_admin_menu() {

  if (!current_user_can('administrator')) {
    remove_submenu_page('themes.php', 'themes.php');
    remove_submenu_page('themes.php', 'customize.php');
  }

}
add_action('admin_menu', 'aucor_starter_cleanup_admin_menu', 9999);

/**
 * Force default setting for image link to "none" (option is autoloaded so this makes no extra db queries)
 */
function aucor_starter_default_image_link_to_none() {

  if (get_option('image_default_link_type') !== 'none') {
    update_option('image_default_link_type', 'none');
  }

}
add_action('admin_init', 'aucor_starter_default_image_link_to_none', 10);

/**
 * Limit revision number
 *
 * @param int $number current revision limit
 * @param int $post_id the ID of current post
 *
 * @return int revision limit
 */
function aucor_starter_limit_revisions($number, $post_id) {

  return 10;

}
add_filter('wp_revisions_to_keep', 'aucor_starter_limit_revisions', 10, 2);

/**
 * Remove slow performing post_meta metabox
 */
function aucor_starter_remove_post_meta_metabox() {

  remove_meta_box('postcustom', null, 'normal');

}
add_action('add_meta_boxes', 'aucor_starter_remove_post_meta_metabox');

/**
 * Remove comment moderation emails from admin user, only send to post author
 *
 * @see https://wordpress.org/plugins/comment-moderation-e-mail-to-post-author/
 *
 * @param array $emails list of email addresses
 * @param int   $comment_id the ID of comment
 *
 * @return array list of email addresses
 */
function aucor_starter_comment_moderation_post_author_only($emails, $comment_id) {

  $comment = get_comment($comment_id);
  $post    = get_post($comment->comment_post_ID);
  $user    = get_userdata($post->post_author);

  // return only the post author if the author can modify comments
  if (user_can($user->ID, 'edit_comment', $comment_id) && !empty($user->user_email)) {
    return array($user->user_email);
  }

  return $emails;

}
add_filter('comment_moderation_recipients', 'aucor_starter_comment_moderation_post_author_only', 11, 2);


/* =========================================================
  03. Front-end
 ======================================================== */

/**
 * Replace default excerpt dots
 *
 * @param string $more default read more string
 *
 * @return string read more string
 */
function aucor_starter_excerpt_more($more) {

  return '...';

}
add_filter('excerpt_more', 'aucor_starter_excerpt_more');

/**
 * Set custom excerpt length
 *
 * @param int $length the length of excerpt
 *
 * @return int the length of excerpt
 */
function aucor_starter_excerpt_length($length) {

  return 25;

}
add_filter('excerpt_length', 'aucor_starter_excerpt_length', 999);

/**
 * Add Schema markup to posts navigations
 *
 * @param string $attr HTML attributes of the anchor tag
 *
 * @return string HTML attributes of the anchor tag
 */
function aucor_starter_next_posts_attributes($attr) {

  return $attr . ' itemprop="relatedLink/pagination" ';

}
add_filter('next_posts_link_attributes', 'aucor_starter_next_posts_attributes');

/**
 * Remove emoji polyfill
 */
function aucor_starter_disable_emojis() {

  remove_action('wp_head',             'print_emoji_detection_script', 7);
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('wp_print_styles',     'print_emoji_styles');
  remove_action('admin_print_styles',  'print_emoji_styles');
  remove_filter('the_content_feed',    'wp_staticize_emoji');
  remove_filter('comment_text_rss',    'wp_staticize_emoji');
  remove_filter('wp_mail',             'wp_staticize_emoji_for_email');

}
add_action( 'init', 'aucor_starter_disable_emojis' );

/**
 * Move jQuery to footer
 *
 * @param WP_Scripts $wp_scripts core class for registered scripts
 */
function aucor_starter_move_jquery_into_footer($wp_scripts) {

  if (!is_admin()) {
    $wp_scripts->add_data('jquery',         'group', 1);
    $wp_scripts->add_data('jquery-core',    'group', 1);
    $wp_scripts->add_data('jquery-migrate', 'group', 1);
  }

}
add_action('wp_default_scripts', 'aucor_starter_move_jquery_into_footer');


/* =========================================================
  04. Dashboard
 ======================================================== */

/**
 * Clean up dashboard
 */
function aucor_starter_admin_dashboard() {

  remove_meta_box( 'dashboard_right_now',       'dashboard', 'normal' );
  remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
  remove_meta_box( 'dashboard_incoming_links',  'dashboard', 'normal' );
  remove_meta_box( 'dashboard_activity',        'dashboard', 'normal' );
  remove_meta_box( 'dashboard_plugins',         'dashboard', 'normal' );
  remove_meta_box( 'wpseo-dashboard-overview',  'dashboard', 'normal' );
  remove_meta_box( 'dashboard_quick_press',     'dashboard', 'side' );
  remove_meta_box( 'dashboard_recent_drafts',   'dashboard', 'side' );
  remove_meta_box( 'dashboard_primary',         'dashboard', 'side' );
  remove_meta_box( 'dashboard_secondary',       'dashboard', 'side' );

}
add_action( 'wp_dashboard_setup', 'aucor_starter_admin_dashboard', 99 );

/**
 * Remove welcome panel
 */
remove_action( 'welcome_panel', 'wp_welcome_panel' );


/* =========================================================
  05. Plugins
 ======================================================== */

/**
 * Lower Yoast metabox priority
 *
 * @return string metabox priority
 */
function aucor_starter_wpseo_metabox_prio() {

  return 'low';

}
add_filter('wpseo_metabox_prio', 'aucor_starter_wpseo_metabox_prio');

/**
 * Remove Yoast notifications
 */
function aucor_starter_remove_wpseo_notifications() {

  if (!class_exists('Yoast_Notification_Center')) {
    return;
  }

  remove_action('admin_notices', array(Yoast_Notification_Center::get(), 'display_notifications'));
  remove_action('all_admin_notices', array(Yoast_Notification_Center::get(), 'display_notifications'));

}
add_action('admin_init', 'aucor_starter_remove_wpseo_notifications');

/**
 * Remove "SEO" from admin bar
 *
 * @global WP_Admin_Bar $wp_admin_bar the admin bar
 */
function aucor_starter_yoast_admin_bar_render() {

  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('wpseo-menu');

}
add_action('wp_before_admin_bar_render', 'aucor_starter_yoast_admin_bar_render');

/**
 * Grant everybody that can publish pages (admin and editors) access to Redirection plugin
 */
function aucor_starter_redirection_role() {

  return 'publish_pages';

}
add_filter('redirection_role', 'aucor_starter_redirection_role');

/**
 * Reset Gravity Forms tabindex (a11y)
 */
add_filter('gform_tabindex', '__return_false');

/**
 * Move Gravity Forms script to footer
 */
add_filter('gform_init_scripts_footer', '__return_true');

/**
 * Hide ACF from non-administrator admin menu
 *
 * @param bool $show is ACF shown
 *
 * @return bool is ACF shown
 */
function aucor_starter_hide_acf_from_nonadmins($show) {

  return current_user_can('administrator');

}
add_filter('acf/settings/show_admin', 'aucor_starter_hide_acf_from_nonadmins');
