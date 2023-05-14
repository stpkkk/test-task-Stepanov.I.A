<?php

/**
 * @charset UTF-8
 *
 * Задание 1. Работа с массивами.
 *
 * Есть 2 списка: общий список районов и список районов, которые связаны между собой по географии (соседние районы).
 * Есть список сотрудников, которые работают в определённых районах.
 *
 * Необходимо написать функцию, что выдаст ближайшего сотрудника к искомому району.
 * Если в списке районов, нет прямого совпадения, то должно искать дальше по соседним районам.
 * Необязательное усложение: выдавать список из сотрудников по близости к искомой функции.
 *
 * Функция должна принимать 1 аргумент: название района (строка).
 * Возвращать: логин сотрудника или null.
 *
 */

# Использовать данные:
// Список районов
$areas = array (
	1 => '5-й поселок',
	2 => 'Голиковка',
	3 => 'Древлянка',
	4 => 'Заводская',
	5 => 'Зарека',
	6 => 'Ключевая',
	7 => 'Кукковка',
	8 => 'Новый сайнаволок',
	9 => 'Октябрьский',
	10 => 'Первомайский',
	11 => 'Перевалка',
	12 => 'Сулажгора',
	13 => 'Университетский городок',
	14 => 'Центр',
);

// Близкие районы, связь осуществляется по индентификатору района из массива $areas
$nearby = array (
	1 => array(2,11),	
	2 => array(12,3,6,8),
	3 => array(11,13),    
	4 => array(10,9,13), 
	5 => array(2,6,7,8),   
	6 => array(10,2,7,8),
	7 => array(2,6,8),	
	8 => array(6,2,7,12),	
	9 => array(10,14),     
	10 => array(9,14,12), 
	11 => array(13,1,9),
	12 => array(1,10),     
	13 => array(11,1,8),	
	14 => array(9,10),     
);

// список сотрудников
$workers = array (
	0 => array (
			'login' => 'login1',
			'area_name' => 'Октябрьский', //9
	),
	1 => array (
			'login' => 'login2',
			'area_name' => 'Зарека', //5
	),
	2 => array (
			'login' => 'login3',
			'area_name' => 'Сулажгора', //12
	),
	3 => array (
			'login' => 'login4',
			'area_name' => 'Древлянка', //3
	),
	4 => array (
			'login' => 'login5',
			'area_name' => 'Центр', //14
	),
);

function findNearestWorker($district) {
	global $areas, $nearby, $workers;
	$area_key = array_search($district, $areas);
	if ($area_key !== false) {
			foreach ($workers as $worker) {
					if ($worker['area_name'] == $district) {
							return $worker['login'];
					}
			}
	} else {
			foreach ($nearby as $nearby_key => $nearby_areas) {
					if (in_array($area_key, $nearby_areas)) {
							foreach ($workers as $worker) {
									if ($worker['area_name'] == $areas[$nearby_key]) {
											return $worker['login'];
									}
							}
					}
			}
			foreach ($nearby as $nearby_key => $nearby_areas) {
					foreach ($nearby_areas as $neighbor_key) {
							if (in_array($area_key, $nearby[$neighbor_key])) {
									foreach ($workers as $worker) {
											if ($worker['area_name'] == $areas[$neighbor_key]) {
													return $worker['login'];
											}
									}
							}
					}
			}
	}
	return null;
}
$district = 'Сулажгора';
$login = findNearestWorker($district);
if ($login) {
    echo "Ближайший сотрудник для района $district: $login";
} else {
    echo "Сотрудник не найден для района $district";
}
?>