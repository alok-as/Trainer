const schedule = require("node-schedule");

const runEveryDayAtTime = (time, callback) => {
	const [timeStr, meridiem] = time.split(" ");
	const [hourStr, minutesStr] = timeStr.split(":");
	let hour = parseInt(hourStr, 10);
	const minutes = parseInt(minutesStr, 10);

	switch (meridiem) {
		case "am":
			if (hour === 12) hour = 0;
			break;
		case "pm":
			if (hour !== 12) hour = hour + 12;
			break;
		default:
			return;
	}

	schedule.scheduleJob(`${minutes} ${hour} * * *`, callback);
};

module.exports = {
	runEveryDayAtTime,
};
