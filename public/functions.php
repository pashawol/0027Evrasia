<?php

/**
 * stairs functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package stairs
 */
if (!defined('_S_VERSION')) {
    define('_S_VERSION', '1.2.2');
}
add_filter('wp_nav_menu_objects', 'css_for_nav_parrent');
function css_for_nav_parrent($items)
{
    end($items);
    foreach ($items as $key => $item) {
        if ($key === key($items)) {
            $item->classes[] = 'menu_skidka';
            $item->ID .= ' menu_skidka';
        }
    }
    return $items;
}

if (!function_exists('stairs_setup')) :

    function stairs_setup()
    {
        load_theme_textdomain('stairs', get_template_directory() . '/languages');
        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        register_nav_menus(array(
            'menu-1' => esc_html__('Header left', 'stairs'),
            'menu-3' => esc_html__('Header right', 'stairs'),
            'menu-2' => esc_html__('Footer', 'stairs'),
        ));
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));
        add_theme_support('custom-background', apply_filters('stairs_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        add_theme_support('customize-selective-refresh-widgets');


        add_theme_support('custom-logo', array(
            'height' => 59,
            'width' => 59,
            'flex-width' => true,
            'flex-height' => true,
        ));
    }
endif;
add_action('after_setup_theme', 'stairs_setup');

function stairs_widgets_init()
{
    register_sidebar(array(
        'name' => esc_html__('Sidebar', 'stairs'),
        'id' => 'sidebar-1',
        'description' => esc_html__('Add widgets here.', 'stairs'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}

add_action('widgets_init', 'stairs_widgets_init');


function stairs_scripts()
{
    global $get_template_directory_uri;

    wp_enqueue_style('stairs-style', get_stylesheet_uri(), array(), _S_VERSION);
    wp_enqueue_style('stairs-slick', $get_template_directory_uri . "/libs/slick/slick.css", array(), _S_VERSION);
    wp_enqueue_style('stairs-fancybox', $get_template_directory_uri . "/libs/fancybox/jquery.fancybox.min.css", array(), _S_VERSION);
    wp_enqueue_style('stairs-canopy', $get_template_directory_uri . "/css/canopy.min.css", array(), _S_VERSION);


    wp_enqueue_script('stairs-lazy', $get_template_directory_uri . '/js/lazy.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-picturefill', $get_template_directory_uri . '/libs/picturefill.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-hc-sticky', $get_template_directory_uri . '/libs/hc-sticky.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-images', $get_template_directory_uri . '/libs/object-fit-images/dist/ofi.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-fancybox', $get_template_directory_uri . '/libs/fancybox/jquery.fancybox.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-slick', $get_template_directory_uri . '/libs/slick/slick.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-svg4everybody', $get_template_directory_uri . '/libs/svg4everybody-master/svg4everybody.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-touchSwipe', $get_template_directory_uri . '/libs/jquery.touchSwipe.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-inputmask', $get_template_directory_uri . '/libs/jquery.inputmask.bundle.min.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-common', $get_template_directory_uri . '/js/common.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('stairs-customizer', $get_template_directory_uri . '/js/customizer.js', array('jquery'), _S_VERSION, true);

    $frontPage = '-1';
    if (is_front_page()) {
        $frontPage = '1';
    }
    wp_localize_script('stairs-customizer', 'phpValue', array(
        'frontPage' => $frontPage,
        'url' => admin_url('admin-ajax.php'),
    ));
    //if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    if (is_singular() && comments_open()) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'stairs_scripts');


add_image_size('main-slide', 600, 375, true);

$get_template_directory = get_template_directory();
$get_template_directory_uri = get_template_directory_uri();
require $get_template_directory . '/inc/template-tags.php';
require $get_template_directory . '/inc/template-functions.php';
require $get_template_directory . '/inc/shortcode.php';
require $get_template_directory . '/inc/product.php';
require $get_template_directory . '/inc/comment_my.php';
require $get_template_directory . '/inc/catalog.php';
// выполненные работы - аякс прочее
require $get_template_directory . '/inc/carriedout.php';

add_filter('wpcf7_before_send_mail', 'wpcf7_before_send_mail_start_function');
function wpcf7_before_send_mail_start_function($cf7)
{
    $message = '';
    if ($cf7->id == 25) {
        $phone = $_POST['tel-147'];
        $name = (isset($_POST['yuor-name']) && !empty($_POST['yuor-name'])) ? $_POST['yuor-name'] : 'не известно';
    }
    if ($cf7->id == 223) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
    }
    if ($cf7->id == 118) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
    }
    if ($cf7->id == 18) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
    }
    if ($cf7->id == 78) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
        $message = '<table>';
        $message .= '<tr><th></th><td>Форма - Получите ТОЧНЫЙ РАСЧЕТ навесов</td>
		</tr>';
        $message .= '<tr><th>Длина навеса: </th><td>' . $_POST['height'] . '</td>
		</tr>';
        $message .= '<tr><th>Ширина навеса: </th><td>' . $_POST['width'] . '</td>
		</tr>';
        $message .= '<tr><th>Высота навеса: </th><td>' . $_POST['lenght'] . '</td>
		</tr>';
        $message .= '<tr><th>Крыша: </th><td>' . $_POST['menu-936'] . '</td>
		</tr>';

        $message .= '</table>';
    }
    if ($cf7->id == 137) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
    }

    if ($cf7->id == 964) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';
    }

    if ($cf7->id == 1269) {
        $phone = $_POST['tel-147'];
        $name = 'не известно';

        $message = '<table>';
        $message .= '<tr><th></th><td>Форма - КАЛЬКУЛЯТОР</td>
		</tr>';
        $message .= '<tr><th>Длина: </th><td>' . $_POST['par1'] . '</td>
		</tr>';
        $message .= '<tr><th>Ширина: </th><td>' . $_POST['par2'] . '</td>
		</tr>';
        $message .= '<tr><th>Высота: </th><td>' . $_POST['par3'] . '</td>
		</tr>';
        $message .= '<tr><th>Крыша: </th><td>' . $_POST['par4'] . '</td>
		</tr>';
        $message .= '<tr><th></th><td>' . $_POST['par5'] . '</td>
		</tr>';
        $message .= '</table>';
    }

    if (isset($phone) && !empty($phone)) {
        require 'vendor/autoload.php';
        require 'amo.php';
    }
}

define('PAGE_CATALOG', 2582);
define('TAX_CATALOG', [
    'length' => 'Длина',
    'width' => 'Ширина',
    'height' => 'Высота по столбам',
    'type_naves' => 'Тип навеса',
    'material' => 'Материал кровли'
]);
define('CATALOGAUTO_TAX', 'dlya-1-avtomobilya');
