<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'prizmadon_wp4' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'prizmadon_wp4' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '!Supra3051993' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}p$sJZTUyTRvAq%tCuRW5)>R)JQ|m~jfUhf5GGcb|p]Et9#/!5f*_/z=k?50Rzrz' );
define( 'SECURE_AUTH_KEY',  '}N;I1YnFT%=OLt@el[/VHYsM.@hA{7>]mRQ65p:bf_)JVo4XZ<|+s@ld[SOF;3$$' );
define( 'LOGGED_IN_KEY',    'TA/y8f65~N4^0kZ_,vZTF&1[$!lkebYZ26P/l|>{hM$w}A,uaI;v7`aM)A{3Q_.u' );
define( 'NONCE_KEY',        '4 #^fpRx2v{,4!Zr `u}oJ)F?-x&)*L)OK-4vq<UVAY/w4p4]wk]WQ!k}y42>K.S' );
define( 'AUTH_SALT',        '`2C6?/;Mjhv:z s5YGkld<2!z0cH6kZGKX*@b.Dd.LfpWSncWgBl;B8sm(qCE2_:' );
define( 'SECURE_AUTH_SALT', 'iTUo-cr7&OI+9$y<:xI]*83u+^}0{*$Jgei()/u,N$z[(a;uYOlm;dRm7>@1a/#q' );
define( 'LOGGED_IN_SALT',   '/i/Dx-MQiCl]?v%4`ieQ$MfzsrMIQGC?QpKWF0*E6Nh#20(yXgMIJ &meBt!0(F{' );
define( 'NONCE_SALT',       ';8~F-I`oa;rNI8i)o!z{~kJ|B46]Y<PGiJ2kKsT{),MZwnn)R::IVeQXrPu4_&H7' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
