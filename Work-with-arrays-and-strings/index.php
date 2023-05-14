<?php
/**
 * @charset UTF-8
 *
 * Задание 2. Работа с массивами и строками.
 *
 * Есть список временных интервалов (интервалы записаны в формате чч:мм-чч:мм).
 *
 * Необходимо написать две функции:
 *
 *
 * Первая функция должна проверять временной интервал на валидность
 * 	принимать она будет один параметр: временной интервал (строка в формате чч:мм-чч:мм)
 * 	возвращать boolean
 *
 *
 * Вторая функция должна проверять "наложение интервалов" при попытке добавить новый интервал в список существующих
 * 	принимать она будет один параметр: временной интервал (строка в формате чч:мм-чч:мм). Учесть переход времени на следующий день
 *  возвращать boolean
 *
 *  "наложение интервалов" - это когда в промежутке между началом и окончанием одного интервала,
 *   встречается начало, окончание или то и другое одновременно, другого интервала
 *
 *
 *
 *  пример:
 *
 *  есть интервалы
 *  	"10:00-14:00"
 *  	"16:00-20:00"
 *
 *  пытаемся добавить еще один интервал
 *  	"09:00-11:00" => произошло наложение
 *  	"11:00-13:00" => произошло наложение
 *  	"14:00-16:00" => наложения нет
 *  	"14:00-17:00" => произошло наложение
 */

# Можно использовать список:

$list = array (
	'09:00-11:00',
	'11:00-13:00',
	'15:00-16:00',
	'17:00-20:00',
	'20:30-21:30',
	'21:30-22:30',
);

/**
 * Проверяем валидность временного интервала
 * @param string $timeInterval временной интервал (строка в формате чч:мм-чч:мм)
 * @return bool
 */
function isTimeIntervalValid(string $timeInterval): bool
{
    if (!preg_match('/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/', $timeInterval)) {
        return false;
    }

    $times = explode('-', $timeInterval);
    $startTime = strtotime($times[0]);
    $endTime = strtotime($times[1]);

    return $startTime < $endTime;
}

/**
 * Проверяем наложение временного интервала на уже существующие интервалы
 * @param string $timeInterval временной интервал (строка в формате чч:мм-чч:мм)

 */
function isTimeIntervalOverlap(string $timeInterval, array $timeIntervalsList): bool
{
    // Проверяем валидность временного интервала
    if (!isTimeIntervalValid($timeInterval)) {
        throw new InvalidArgumentException('Invalid time interval format.');
    }

    // Преобразуем временной интервал в секунды
    $times = explode('-', $timeInterval);
    $startTime = strtotime($times[0]);
    $endTime = strtotime($times[1]);

    // Проходим по всему списку временных интервалов
    foreach ($timeIntervalsList as $existingTimeInterval) {
        // Преобразуем существующий временной интервал в секунды
        $existingTimes = explode('-', $existingTimeInterval);
        $existingStartTime = strtotime($existingTimes[0]);
        $existingEndTime = strtotime($existingTimes[1]);

        // Проверяем наложение интервалов
        if (
            ($startTime >= $existingStartTime && $startTime < $existingEndTime)
            || ($endTime > $existingStartTime && $endTime <= $existingEndTime)
            || ($startTime <= $existingStartTime && $endTime >= $existingEndTime)
        ) {
            return true;
        }
    }

    return false;
}

//Вызовы функций

$timeInterval = '20:10-20:40';
if (isTimeIntervalOverlap($timeInterval, $list)) {
	echo 'произошло наложение' . PHP_EOL;
} else {
	echo 'наложения нет' . PHP_EOL;
}

?>